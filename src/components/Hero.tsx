'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const Hero = () => {
  return (
    <section
      className='relative h-screen w-full text-center  px-4 flex items-center justify-center'
      style={{
        backgroundImage: "url('/bg2.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-primary/80 z-0' />

      {/* Content */}
      <div className='relative z-10 flex flex-col items-center gap-6 md:gap-8 max-w-4xl text-center'>
        <motion.h1
          className='text-4xl md:text-7xl font-bold'
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Front-End Web Developer
        </motion.h1>

        <motion.p
          className='text-xl md:text-2xl text-secondary'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I am{' '}
          <span className='italic text-shade font-bold font-satisfy'>
            Godric Ikeji
          </span>
          . I design and build front-end experiences that are fast, clean, and
          easy to use.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link href='#projects'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className='bg-shade/40 text- font-bold px-6 py-4 border-1 rounded-lg shadow-md hover:bg-shade/80 transition duration-300'
            >
              View My Portfolio
            </motion.button>
          </Link>

          <Link href='#contact' passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className='bg-slate text-white font-bold px-6 py-4 border-shade border-1 rounded-lg shadow-md hover:bg-black/60 transition duration-300'
            >
              Let's Collaborate
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
