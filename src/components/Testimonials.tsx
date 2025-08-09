'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '@/lib/data'
import { Megaphone } from 'lucide-react'
import Image from 'next/image'

const Testimonials = () => {
  const [current, setCurrent] = useState(0)
  const length = testimonials.length

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1))
  }

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1))
    }

    const interval = setInterval(() => {
      nextSlide()
    }, 4000)

    return () => clearInterval(interval)
  }, [length])

  return (
    <section className='max-w-4xl mx-auto px-6 py-12 text-center'>
      <div className=''>
        <h1 className='font-bold text-[1.6rem] justify-center flex items-center gap-2 text-shade mb-4'>
          <Megaphone className='w-7 h-7' /> What Clients Say
        </h1>
        <p className='text-secondary mb-4'>
          Client feedback reflecting quality, trust, and results.
        </p>
      </div>

      <div className='relative overflow-hidden'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={testimonials[current].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className='bg-slate/80 rounded-xl p-8 shadow-lg flex flex-col items-center space-y-6'
          >
            <Image
              width={100}
              height={100}
              src={testimonials[current].photo}
              alt={testimonials[current].name}
              className='w-24 h-24 rounded-full object-cover border-4 border-primary shadow-md'
              loading='lazy'
            />
            <blockquote className='text-lg md:text-xl italic text-white max-w-xl'>
              {`"${testimonials[current].feedback}"`}
            </blockquote>
            <h3 className='text-2xl font-semibold text-white'>
              {testimonials[current].name}
            </h3>
            <p className='text-sm uppercase tracking-wider text-secondary'>
              {testimonials[current].role}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Prev/Next Buttons */}
        <button
          onClick={prevSlide}
          aria-label='Previous testimonial'
          className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary/80 hover:bg-primary rounded-full mx-2  p-2 text-white shadow-md'
        >
          ‹
        </button>
        <button
          onClick={() =>
            setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1))
          }
          aria-label='Next testimonial'
          className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary/80 hover:bg-primary rounded-full mx-2  p-2 text-white shadow-md'
        >
          ›
        </button>
      </div>

      {/* Dots Navigation */}
      <div className='flex justify-center mt-6 space-x-3'>
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === current ? 'bg-primary' : 'bg-primary/40'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default Testimonials
