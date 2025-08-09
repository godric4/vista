import { Github, Linkedin, Mail, TerminalSquare } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-sl text-gray-300 py-10'>
      <div className='max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-8'>
        <div className='flex flex-col space-y-2 max-w-sm text-center md:text-left'>
          <h2 className='text-2xl font-bold text-shade flex items-center justify-center md:justify-start'>
            <span className='mr-1'>
              <TerminalSquare />
            </span>
            Godric Ikeji{' '}
          </h2>
          <p className='text-gray-400'>
            Frontend developer passionate about building modern, accessible, and
            performant web apps.
          </p>
        </div>

        <nav className='flex flex-col md:flex-row gap-6 text-gray-400 text-sm font-medium'>
          <Link href='#about' className='hover:text-indigo-500 transition'>
            About
          </Link>
          <Link href='#projects' className='hover:text-indigo-500 transition'>
            Projects
          </Link>
          <Link href='#skills' className='hover:text-indigo-500 transition'>
            Skills
          </Link>
          <Link href='#contact' className='hover:text-indigo-500 transition'>
            Contact
          </Link>
        </nav>

        <div className='flex space-x-6'>
          <Link
            href='https://github.com/yourusername'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
            className='hover:text-indigo-500 transition'
          >
            <Github size={24} />
          </Link>
          <Link
            href='https://linkedin.com/in/yourprofile'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
            className='hover:text-indigo-500 transition'
          >
            <Linkedin size={24} />
          </Link>
          <Link
            href='mailto:youremail@example.com'
            aria-label='Email'
            className='hover:text-indigo-500 transition'
          >
            <Mail size={24} />
          </Link>
        </div>
      </div>

      <div className='mt-10 border-t border-gray-800 pt-6 text-center text-gray-500 text-xs select-none'>
        &copy; {new Date().getFullYear()} Godric Ikeji. All rights reserved.
      </div>
    </footer>
  )
}
