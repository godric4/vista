'use client'

import Image from 'next/image'
import Link from 'next/link'
import { navLinks } from '../lib/data'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/ui/Button'

type navLinks = {
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

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`w-full fixed px-6 md:px-10 py-4 flex items-center justify-between top-0 z-50 transition-colors duration-300 ${
          scrolled ? 'bg-primary' : 'bg-transparent'
        }`}
      >
        <Link href='#top' className='flex items-center pt-3'>
          <p className='text-accent font-satisfy font-bold text-3xl sm:text-2xl'>
            Godric Ikeji
          </p>
        </Link>

        {/* nav links */}
        <ul className='hidden md:flex items-center px-12 py-3 gap-6 lg:gap-8 font-ovo'>
          {navLinks.map((link) => {
            const { name, path } = link
            return (
              <li key={name}>
                <Link href={path}>{name}</Link>
              </li>
            )
          })}
        </ul>

        <div className='flex gap-2'>
          <div className='hidden lg:block'></div>

          {/* Hamburger button */}
          {!isOpen && (
            <Button
              className='block md:hidden'
              variant='outline'
              onClick={() => setIsOpen(true)}
            >
              <Menu />
            </Button>
          )}
        </div>
        {/* mobile menu */}
        <ul
          className={`md:hidden flex items-center w-[50%] flex-col gap-4 py-20 px-6 fixed -right-0 top-0 bottom-0 h-screen bg-primary text-white text-1xl   transition-transform  duration-400 ease-in-out z-40 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* close button */}
          {isOpen && (
            <Button
              className='block  bg-inherit absolute right-3 top-6 '
              variant='default'
              onClick={() => setIsOpen(false)}
            >
              <X />
            </Button>
          )}
          {/*  */}

          {navLinks.map((link) => {
            const { name, path } = link
            return (
              <li key={name}>
                <Link className='' href={path}>
                  {name}
                </Link>
              </li>
            )
          })}

          <div className='flex flex-col gap-2 items-center'>
            <div className=' lg:block'>
              {isOpen && <div onClick={() => setIsOpen(false)}></div>}
            </div>
          </div>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
