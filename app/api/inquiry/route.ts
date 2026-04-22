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
    const response = await fetch('https://app.globalcontrolcenter.com/api/v1/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer a5934d6c63f5d021e4d85164945d144fbefeaf6298938c02ba2655acb093379c'
      },
      body: JSON.stringify({
        email: email,
        firstName: name.split(' ')[0],
        lastName: name.split(' ').slice(1).join(' ') || '',
        customFields: {
          businessName: business,
          source: '210 Business Network Website',
          inquiryDate: new Date().toISOString()
        },
        tags: ['210-business-network', 'website-inquiry', 'south-texas']
      })
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('Global Control API error:', error)
      return new Response(
        JSON.stringify({ error: 'Failed to create contact' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const data = await response.json()

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Inquiry submitted successfully',
        contactId: data.id 
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('API error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}