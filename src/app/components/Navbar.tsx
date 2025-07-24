'use client'

import Image from 'next/image'
import Link from 'next/link'
import { navLinks } from '../lib/data'
import { ThemeToggle } from './ThemeToggler'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

type NavLink = {
  name: string
  path: string
  id: number
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

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
          'w-full fixed px-5 lg:px-8 py-4 flex items-center justify-between  top-0  z-50 transition-colors duration-300',
          scrolled
            ? 'bg-background/70 backdrop-blur-md shadow-md border-b border-border'
            : 'bg-transparent'
        )}
      >
        <Link href='#top' className='flex items-center'>
          <Image
            src='/profile1.png'
            alt=''
            priority
            width={40}
            height={40}
            className='h-auto w-auto rounded-full'
          />
          <p className='font-cursive font-bold pl-1 text-[1.3rem]'>
            Godric Marto
          </p>
        </Link>

        {/* nav links */}
        <ul className='hidden md:flex items-center px-12 py-3 gap-6 lg:gap-8 font-ovo'>
          {navLinks.map((link) => {
            const { name, path, id } = link
            return (
              <li key={id}>
                <Link href={path}>{name}</Link>
              </li>
            )
          })}
        </ul>

        <div className='flex'>
          <div className=''>
            <ThemeToggle />
          </div>
          <Button className='hidden md:flex' variant='secondary'>
            <Link href='/contact'>Contact Me</Link>
          </Button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
