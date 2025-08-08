'use client'

import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  GlobeIcon,
  Lightbulb,
} from 'lucide-react'

const Contact = () => {
  return (
    <section className='bg-[--color-primary] text-[--foreground] px-6 py-16'>
      <h2 className='text-3xl font-bold mb-2'>Send Me a Message</h2>
      <p className='mb-10 text-[--foreground]/80'>
        I will get back to you within 24 hours
      </p>

      {/* Contact Form */}
      <form className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mb-16'>
        <input
          type='text'
          placeholder='Your full name'
          className='bg-white/5 border border-[--color-slate] p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[--color-accent]'
        />
        <input
          type='email'
          placeholder='your.email@example.com'
          className='bg-white/5 border border-[--color-slate] p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[--color-accent]'
        />
        <input
          type='text'
          placeholder="What's this about?"
          className='bg-white/5 border border-[--color-slate] p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[--color-accent] md:col-span-2'
        />
        <textarea
          placeholder='Tell me about your project, ideas, or just say hello!'
          className='bg-white/5 border border-[--color-slate] p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[--color-accent] md:col-span-2 h-40'
        />
        <button
          type='submit'
          className='bg-[--color-accent] text-[--color-slate] font-semibold px-6 py-3 rounded-md hover:bg-[--color-highlight] w-fit md:col-span-2 transition'
        >
          Send Message
        </button>
      </form>

      {/*  */}
      <div className='flex flex-col md:flex-row gap-6 max-w-4xl mx-auto'>
        <div className='flex-1  border border-white rounded-xl p-6'>
          <h3 className='text-xl font-semibold mb-4 flex'>
            <span className='mr-1'>
              <GlobeIcon />
            </span>{' '}
            Connect With Me
          </h3>
          <div className='grid grid-cols-2 gap-4'>
            {[
              { name: 'GitHub', icon: <Github size={20} />, url: '#' },
              { name: 'LinkedIn', icon: <Linkedin size={20} />, url: '#' },
              { name: 'Twitter', icon: <Twitter size={20} />, url: '#' },
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
