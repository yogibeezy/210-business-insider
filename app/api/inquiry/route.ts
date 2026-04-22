export async function GET() {
  return new Response(
    JSON.stringify({ status: 'API is working' }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  )
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, business } = body

    // Validate required fields
    if (!name || !email || !business) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Send to Global Control
    const firstName = name.split(' ')[0] || ''
    const lastName = name.split(' ').slice(1).join(' ') || ''
    
    const gcPayload = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      name: name,
      customFields: [
        { key: 'businessName', value: business },
        { key: 'source', value: '210 Business Network Website' },
        { key: 'inquiryDate', value: new Date().toISOString() }
      ]
    }

    console.log('Sending to Global Control:', JSON.stringify(gcPayload))

    const response = await fetch('https://api.globalcontrol.io/api/ai/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': 'a5934d6c63f5d021e4d85164945d144fbefeaf6298938c02ba2655acb093379c'
      },
      body: JSON.stringify(gcPayload)
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Global Control API error:', response.status, errorText)
      return new Response(
        JSON.stringify({ error: `Global Control error: ${response.status} - ${errorText}` }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }

    let result
    try {
      result = await response.json()
    } catch (e) {
      result = { raw: await response.text() }
    }
    console.log('Global Control success:', result)

    // Global Control returns {type: "response", data: {...}}
    const contactData = result.data || result
    const contactId = contactData._id || contactData.id || 'created'

    // Apply tags using the contact update endpoint
    // Tag IDs: 210bn = 69e8b46f80a5749c2a3f6f0a, website-inquiry = 69e8b47580a5749c2a3f7071
    const tagPromise = fetch(`https://api.globalcontrol.io/api/ai/contacts/${contactId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': 'a5934d6c63f5d021e4d85164945d144fbefeaf6298938c02ba2655acb093379c'
      },
      body: JSON.stringify({
        tags: ['69e8b46f80a5749c2a3f6f0a', '69e8b47580a5749c2a3f7071']
      })
    }).then(async (res) => {
      const data = await res.json()
      console.log('Tags applied:', data)
      return data
    }).catch(err => {
      console.error('Tag error:', err)
    })

    // Wait for tag application to complete before returning
    await tagPromise

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Thank you. We will be in touch.',
        contactId: contactId
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('API error:', error)
    return new Response(
      JSON.stringify({ error: `Internal server error: ${error instanceof Error ? error.message : 'Unknown'}` }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}