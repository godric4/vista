'use client'

import { Button } from '@/ui/Button'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section
      className=' px-4 gap-4 text-center'
      style={{
        backgroundImage: "url('/bg2.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <div className='absolute inset-0 bg-primary/90' />
      {/* content */}
      <div className='h-screen  w-full flex flex-col justify-center items-center relative gap-6 md:gap-8'>
        <h1 className='md:text-7xl text-4xl text-se font-bold'>
          Front-End Web Developer
        </h1>
        <p className='text-2xl'>
          I am{' '}
          <span className='italic text-goldlight font-semibold'>Godric</span>. I
          design and build front-end experiences that are fast, clean, and easy
          to use.
        </p>

        <Button variant='default' className=' px-4 py-6 m-4'>
          <Link href='#projects' className='font-bold '>
            View My Portfolio
          </Link>
        </Button>
      </div>
    </section>
  )
}

export default Hero
