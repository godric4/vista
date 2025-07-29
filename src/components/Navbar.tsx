'use client'

import Image from 'next/image'
import Link from 'next/link'
import { navLinks } from '../lib/data'
import { ThemeToggle } from './ThemeToggler'
import { Button } from '@/ui/button'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

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
        className={cn(
          'w-full fixed px-6 md:px-10 py-4 flex items-center justify-between  top-0  z-50 transition-colors duration-300 ',
          scrolled
            ? 'bg-background/70 backdrop-blur-md shadow-md border-b border-border'
            : 'bg-transparent'
        )}
      >
        <Link href='#top' className='flex items-center pt-3'>
          <p className=' font-cursive font-bold text-3xl sm:text-2xl'>
            Godric Ikeji
          </p>
        </Link>

        {/* nav links */}
        <ul className='hidden md:flex items-center px-12 py-3 gap-6 lg:gap-8 font-ovo'>
          {navLinks.map((link) => {
            const { name, path } = link
            return (
              <li key={name}>
                <Button variant='link'>
                  <Link href={path}>{name}</Link>
                </Button>
              </li>
            )
          })}
        </ul>

        <div className='flex gap-2'>
          <div className='hidden lg:block'>
            <ThemeToggle />
          </div>
          <Button className='hidden md:flex' variant='secondary'>
            <Link href='/contact'>Contact Me</Link>
          </Button>
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
          className={`md:hidden flex items-center w-[50%] flex-col gap-4 py-20 px-6 fixed -right-0 top-0 bottom-0 h-screen bg-black text-white text-2xl dark:bg-white dark:text-black  transition-transform  duration-400 ease-in-out z-40 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* close button */}
          {isOpen && (
            <Button
              className='block text-white bg-inherit dark:text-black absolute right-3 top-6 '
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
                <Button variant='link'>
                  <Link className='text-white dark:text-black' href={path}>
                    {name}
                  </Link>
                </Button>
              </li>
            )
          })}

          <div className='flex flex-col gap-2 items-center'>
            <Button className=' md:flex' variant='secondary'>
              <Link href='/contact'>Contact Me</Link>
            </Button>
            <div className=' lg:block'>
              {isOpen && (
                <div onClick={() => setIsOpen(false)}>
                  <ThemeToggle />
                </div>
              )}
            </div>
          </div>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
