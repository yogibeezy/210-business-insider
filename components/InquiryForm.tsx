'use client'

import { useState } from 'react'

export default function InquiryForm() {
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setMessage('')
    setError(false)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      business: formData.get('business') as string,
    }

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (res.ok) {
        setMessage('Thank you. We will be in touch.')
        setError(false)
        e.currentTarget.reset()
      } else {
        setMessage(result.error || 'Something went wrong. Please try again.')
        setError(true)
      }
    } catch (err) {
      setMessage('Something went wrong. Please try again.')
      setError(true)
    }

    setSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input 
          type="text" 
          name="name"
          placeholder="Name"
          required
          className="w-full px-6 py-4 bg-neutral-900 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-amber-500/50 transition-colors font-light"
        />
        <input 
          type="email" 
          name="email"
          placeholder="Email"
          required
          className="w-full px-6 py-4 bg-neutral-900 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-amber-500/50 transition-colors font-light"
        />
      </div>
      <input 
        type="text" 
        name="business"
        placeholder="Business name"
        required
        className="w-full px-6 py-4 bg-neutral-900 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-amber-500/50 transition-colors font-light"
      />
      <button 
        type="submit"
        disabled={submitting}
        className="w-full md:w-auto px-12 py-4 bg-white text-neutral-950 font-medium hover:bg-amber-500 transition-colors disabled:opacity-50"
      >
        {submitting ? 'Submitting...' : 'Submit inquiry'}
      </button>
      {message && (
        <p className={`text-sm mt-4 ${error ? 'text-red-500' : 'text-amber-500'}`}>
          {message}
        </p>
      )}
    </form>
  )
}