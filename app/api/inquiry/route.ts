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
    const gcPayload = {
      email: email,
      firstName: name.split(' ')[0] || '',
      lastName: name.split(' ').slice(1).join(' ') || '',
      customFields: {
        businessName: business,
        source: '210 Business Network Website',
        inquiryDate: new Date().toISOString()
      },
      tags: ['210bn', 'website-inquiry']
    }

    console.log('Sending to Global Control:', JSON.stringify(gcPayload))

    const response = await fetch('https://api.globalcontrolcenter.com/v1/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer a5934d6c63f5d021e4d85164945d144fbefeaf6298938c02ba2655acb093379c'
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

    let data
    try {
      data = await response.json()
    } catch (e) {
      data = { raw: await response.text() }
    }
    console.log('Global Control success:', data)

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Thank you. We will be in touch.',
        contactId: data?.id || data?.contactId || 'created'
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