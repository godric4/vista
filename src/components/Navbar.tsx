'use client'

import Link from 'next/link'
import { navLinks } from '../lib/data'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/ui/Button'

type NavLink = {
  name: string
  path: string
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    handleScroll() //reset initial value in case of user reloading mid page
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`w-full fixed px-6 md:px-10 py-4 flex items-center justify-between top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-primary shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <Link href='#top' className='flex items-center pt-3'>
        <p className='text-accent font-satisfy font-bold text-3xl sm:text-2xl'>
          Godric Ikeji
        </p>
      </Link>

      {/* Desktop nav links */}
      <ul className='hidden md:flex items-center px-12 py-3 gap-6 lg:gap-8 font-ovo'>
        {navLinks.map(({ name, path }: NavLink) => (
          <li key={name}>
            <Link
              href={path}
              className='relative text-white hover:text-accent transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-accent hover:after:w-full after:transition-all after:duration-300'
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger button */}
      <div className='flex gap-2'>
        {!isOpen && (
          <Button
            className='md:hidden p-2 rounded-full bg-white/10 
                 hover:bg-shade/20 text-white transition-colors duration-300
                 shadow-md backdrop-blur-sm border border-secondary
                 active:scale-90'
            variant='ghost'
            onClick={() => setIsOpen(true)}
          >
            <Menu size={22} />
          </Button>
        )}
      </div>

      {/* Mobile menu */}
      <ul
        className={`md:hidden flex items-center w-[70%] sm:w-[50%] flex-col gap-6 py-20 px-6 fixed right-0 top-0 bottom-0 h-screen bg-primary text-white text-lg transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button */}
        {isOpen && (
          <Button
            className='absolute right-4 top-6 p-2 rounded-full bg-white/10 
             hover:bg-white/20 text-white transition-colors duration-300
             shadow-md backdrop-blur-sm border border-white/20'
            variant='ghost'
            onClick={() => setIsOpen(false)}
          >
            <X size={22} />
          </Button>
        )}

        {navLinks.map(({ name, path }: NavLink) => (
          <li key={name}>
            <Link
              href={path}
              className='relative top-12 text-white hover:text-accent transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-accent hover:after:w-full after:transition-all after:duration-300'
              onClick={() => setIsOpen(false)}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
