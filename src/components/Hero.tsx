'use client'

import { Button } from '@/ui/button'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='h-screen  w-full flex items-center justify-center px-4 sm:px-1 md:px- lg:px-  overflow-hidden'>
      <div className='flex flex-col-reverse md:flex-row items-center justify-center  gap-12  w- '>
        {/* Text Content */}
        <div className='text-center md:text-left max-w-xl'>
          <h1 className='text-4xl sm:text-6xl lg:text-[66px] font-bold mb-4'>
            Front-End Web Developer
          </h1>

          <p className='text-gray-600 dark:text-muted-foreground mb-6 text-base sm:text-lg lg:text-xl'>
            I’m{' '}
            <span className='text-black dark:text-white  '>Godric Ikeji</span>,
            a frontend web developer focused on building high-quality,
            responsive, and efficient web interfaces. I specialize in modern
            technologies to deliver clean, scalable code that enhances user
            experience and drives results.
          </p>

          {/* CTA Buttons */}
          <div className='flex justify-center md:justify-start gap-4'>
            <Button variant='default' className='   transition'>
              View Projects
            </Button>
            <Button
              variant='outline'
              className='border  bg-gray-300 transition'
            >
              Download Resume
            </Button>
          </div>
        </div>

        <div className=''>
          <Image
            src='/profile-pic.png'
            alt='Godric Ikeji'
            width={100}
            height={100}
            className='w-40 sm:w-60 md:w-72 lg:w-80 h-auto object-cover rounded-full'
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
