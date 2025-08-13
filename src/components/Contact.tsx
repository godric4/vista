'use client'

import React, { useState, FormEvent, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  GlobeIcon,
  Lightbulb,
  MessageCircleHeart,
} from 'lucide-react'
import Link from 'next/link'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState<{
    type: 'success' | 'error'
    message: string
  } | null>(null)
  const [fadeOut, setFadeOut] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setAlert(null)

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      if (result.status === 200) {
        setAlert({ type: 'success', message: ' Message sent successfully!' })
        setFormData({ name: '', email: '', subject: '', message: '' })
      }
    } catch (err) {
      console.error('Email send error:', err)
      setAlert({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!alert) return
    setFadeOut(false)
    const timer1 = setTimeout(() => setFadeOut(true), 3000)
    const timer2 = setTimeout(() => setAlert(null), 4000)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [alert])

  return (
    <section id='contact' className='px-4 py-16 relative'>
      {/* Top fixed alert */}
      {alert && (
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-md shadow-lg text-white font-medium transition-all duration-700 ease-in-out ${
            alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          } ${
            fadeOut ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
          }`}
        >
          {alert.message}
        </div>
      )}

      <hr className='my-3 py-3 text-secondary' />
      <div>
        <h2 className='text-3xl text-shade font-bold mb-2 flex items-center justify-center'>
          <span className='mr-1'>
            <MessageCircleHeart className='w-7 h-7' />
          </span>
          Message Me
        </h2>
        <p className='mb-10 text-secondary text-center'>
          I will get back to you within 24 hours
        </p>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mb-16 relative mx-auto'
      >
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Your full name'
          required
          className='bg-white/5 border border-white p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-shade'
        />
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='your.email@example.com'
          required
          className='bg-white/5 border border-white p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-shade'
        />
        <input
          type='text'
          name='subject'
          value={formData.subject}
          onChange={handleChange}
          placeholder="What's this about?"
          className='bg-white/5 border border-white p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-shade md:col-span-2'
        />
        <textarea
          name='message'
          value={formData.message}
          onChange={handleChange}
          placeholder='Tell me about your project, ideas, or just say hello!'
          required
          className='bg-white/5 border border-white p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-shade md:col-span-2 h-40'
        />
        <button
          type='submit'
          disabled={loading}
          className='bg-shade font-semibold px-6 py-3 rounded-md hover:bg-shade/50 w-full md:w-fit md:col-span-2 transition'
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {/* Social links */}
      <div className='flex flex-col md:flex-row gap-6 max-w-4xl mx-auto'>
        <div className='flex-1  border border-white rounded-xl p-6'>
          <h3 className='text-xl font-semibold mb-4 flex'>
            <span className='mr-1'>
              <GlobeIcon />
            </span>{' '}
            Connect With Me
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {[
              {
                name: 'GitHub',
                icon: <Github size={20} />,
                url: 'https://github.com/godric4',
              },
              {
                name: 'LinkedIn',
                icon: <Linkedin size={20} />,
                url: 'https://www.linkedin.com/in/godricikeji/',
              },
              {
                name: 'Twitter',
                icon: <Twitter size={20} />,
                url: 'https://x.com/fenatiq',
              },
              { name: 'Instagram', icon: <Instagram size={20} />, url: '#' },
            ].map(({ name, icon, url }) => (
              <a
                key={name}
                href={url}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center gap-2  border border-shade rounded-lg py-3 px-4 text-sm font-medium hover:bg-shade/50  transition'
              >
                {icon}
                {name}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Info */}
        <div className='flex-1 bg-slate border border-shade rounded-xl p-6'>
          <h3 className='text-xl text-shade font-semibold mb-4 flex'>
            <span className='mr-1'>
              <Lightbulb />
            </span>{' '}
            Quick Info
          </h3>
          <ul className='space-y-3 text-sm'>
            <li className='flex justify-between'>
              <span>Response Time</span>
              <span className='bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs'>
                Within 24 hours
              </span>
            </li>
            <li className='flex justify-between'>
              <span>Project Start</span>
              <span className='bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs'>
                Within 1 week
              </span>
            </li>
            <li className='flex justify-between'>
              <span>Consultation</span>
              <span className='bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs'>
                Free 30 min call
              </span>
            </li>
            <li className='flex justify-between'>
              <span>Coffee Chat</span>
              <span className='bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs'>
                Always welcome
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact
