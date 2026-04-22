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

    // For now, just return success without Global Control
    // TODO: Add Global Control integration once API is verified
    console.log('New inquiry:', { name, email, business, timestamp: new Date().toISOString() })

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Thank you. We will be in touch.',
        received: { name, email, business }
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