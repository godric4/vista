'use client'

import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending...')

    // For demo: just reset after delay, replace with actual API call or service like EmailJS
    setTimeout(() => {
      setStatus('Message sent! Thank you.')
      setForm({ name: '', email: '', message: '' })
    }, 1500)
  }

  return (
    <section className='max-w-3xl mx-auto p-6 bg-gray-900 rounded-lg shadow-md text-white'>
      <h2 className='text-3xl font-semibold mb-6 text-center'>Contact Me</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='text'
          name='name'
          placeholder='Your Name'
          required
          value={form.name}
          onChange={handleChange}
          className='p-3 rounded bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:outline-none'
        />
        <input
          type='email'
          name='email'
          placeholder='Your Email'
          required
          value={form.email}
          onChange={handleChange}
          className='p-3 rounded bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:outline-none'
        />
        <textarea
          name='message'
          placeholder='Your Message'
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className='p-3 rounded bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:outline-none resize-none'
        />
        <button
          type='submit'
          className='bg-indigo-600 hover:bg-indigo-700 transition rounded py-3 font-semibold'
        >
          Send Message
        </button>
        {status && <p className='text-center mt-2 text-green-400'>{status}</p>}
      </form>
    </section>
  )
}
