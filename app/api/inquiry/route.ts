export const runtime = 'nodejs'
export const maxDuration = 30

export async function GET() {
  return new Response(
    JSON.stringify({ status: 'API is working' }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  )
}

export async function POST(request: Request) {
  const logs: string[] = []
  
  try {
    const body = await request.json()
    const { name, email, business } = body

    logs.push(`Received: ${name}, ${email}, ${business}`)

    if (!name || !email || !business) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields', logs }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const GC_API_KEY = 'a5934d6c63f5d021e4d85164945d144fbefeaf6298938c02ba2655acb093379c'
    const firstName = name.split(' ')[0] || ''
    const lastName = name.split(' ').slice(1).join(' ') || ''
    
    // Step 1: Create contact
    logs.push('Step 1: Creating contact...')
    
    const createRes = await fetch('https://api.globalcontrol.io/api/ai/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': GC_API_KEY
      },
      body: JSON.stringify({
        email: email,
        firstName: firstName,
        lastName: lastName,
        name: name
      })
    })

    logs.push(`Create response status: ${createRes.status}`)

    if (!createRes.ok) {
      const errorText = await createRes.text()
      logs.push(`Create error: ${errorText}`)
      return new Response(
        JSON.stringify({ error: `Global Control error: ${createRes.status}`, logs }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const createData = await createRes.json()
    const contactId = createData.data?._id || createData.data?.id
    logs.push(`Contact created: ${contactId}`)

    if (!contactId) {
      return new Response(
        JSON.stringify({ success: true, message: 'Thank you. We will be in touch.', logs }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Step 2: Update contact with tags
    logs.push('Step 2: Updating contact with tags...')
    
    const updateRes = await fetch(`https://api.globalcontrol.io/api/ai/contacts/${contactId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': GC_API_KEY
      },
      body: JSON.stringify({
        tags: ['69e8b46f80a5749c2a3f6f0a', '69e8b47580a5749c2a3f7071'],
        customFields: [
          { key: 'businessName', value: business },
          { key: 'source', value: '210 Business Network Website' },
          { key: 'inquiryDate', value: new Date().toISOString() }
        ]
      })
    })

    logs.push(`Update response status: ${updateRes.status}`)
    
    let updateData
    try {
      updateData = await updateRes.json()
      logs.push(`Update response: ${JSON.stringify(updateData).slice(0, 200)}`)
    } catch (e) {
      const text = await updateRes.text()
      logs.push(`Update response (text): ${text.slice(0, 200)}`)
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Thank you. We will be in touch.',
        contactId: contactId,
        tagsApplied: updateRes.ok,
        updateStatus: updateRes.status,
        logs
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    logs.push(`Error: ${error instanceof Error ? error.message : 'Unknown'}`)
    return new Response(
      JSON.stringify({ error: `Internal server error`, logs }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}