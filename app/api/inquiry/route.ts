export async function GET() {
  return new Response(
    JSON.stringify({ status: 'API is working' }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  )
}

// Helper function to apply tags with timeout
async function applyTags(contactId: string): Promise<boolean> {
  const GC_API_KEY = 'a5934d6c63f5d021e4d85164945d144fbefeaf6298938c02ba2655acb093379c'
  const tagIds = ['69e8b46f80a5749c2a3f6f0a', '69e8b47580a5749c2a3f7071']
  
  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 5000)
    
    const response = await fetch(`https://api.globalcontrol.io/api/ai/contacts/${contactId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': GC_API_KEY
      },
      body: JSON.stringify({ tags: tagIds }),
      signal: controller.signal
    })
    
    clearTimeout(timeout)
    
    if (!response.ok) {
      console.error('Tag application failed:', response.status)
      return false
    }
    
    const result = await response.json()
    console.log('Tags applied successfully:', result)
    return true
  } catch (error) {
    console.error('Tag application error:', error)
    return false
  }
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

    const GC_API_KEY = 'a5934d6c63f5d021e4d85164945d144fbefeaf6298938c02ba2655acb093379c'
    const firstName = name.split(' ')[0] || ''
    const lastName = name.split(' ').slice(1).join(' ') || ''
    
    // Create contact in Global Control
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

    console.log('Creating contact:', JSON.stringify(gcPayload))

    const response = await fetch('https://api.globalcontrol.io/api/ai/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': GC_API_KEY
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

    const result = await response.json()
    console.log('Contact created:', result)

    const contactData = result.data || result
    const contactId = contactData._id || contactData.id

    if (!contactId) {
      console.error('No contact ID returned')
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Thank you. We will be in touch.',
          warning: 'Contact created but tags not applied'
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Apply tags synchronously
    console.log('Applying tags to contact:', contactId)
    const tagsApplied = await applyTags(contactId)
    console.log('Tag application result:', tagsApplied)

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Thank you. We will be in touch.',
        contactId: contactId,
        tagsApplied: tagsApplied
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