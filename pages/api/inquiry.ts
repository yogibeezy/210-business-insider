import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, business } = req.body

    if (!name || !email || !business) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const GC_API_KEY = 'a5934d6c63f5d021e4d85164945d144fbefeaf6298938c02ba2655acb093379c'
    const firstName = name.split(' ')[0] || ''
    const lastName = name.split(' ').slice(1).join(' ') || ''
    
    // Step 1: Create contact
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

    if (!createRes.ok) {
      const errorText = await createRes.text()
      return res.status(500).json({ error: `Global Control error: ${createRes.status} - ${errorText}` })
    }

    const createData = await createRes.json()
    const contactId = createData.data?._id || createData.data?.id

    if (!contactId) {
      return res.status(200).json({ success: true, message: 'Thank you. We will be in touch.' })
    }

    // Step 2: Update contact with tags - MUST complete before response
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

    const updateData = await updateRes.json()

    return res.status(200).json({
      success: true,
      message: 'Thank you. We will be in touch.',
      contactId: contactId,
      tagsApplied: updateRes.ok
    })

  } catch (error) {
    console.error('API error:', error)
    return res.status(500).json({
      error: `Internal server error: ${error instanceof Error ? error.message : 'Unknown'}`
    })
  }
}