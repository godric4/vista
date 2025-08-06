'use client'
import { projects } from '@/lib/data'

import { EyeIcon, Github, Laptop, Star } from 'lucide-react'

type projects = {
  id: number
  title: string
  description: string
}

const Projects = () => {
  return (
    <div className='mt-3 pt-4'>
      <div className='mb-4 pb-4 text-center'>
        <h1 className='font-bold text-[1.6rem] justify-center flex items-center gap-2 text-goldlight'>
          <Laptop className='w-7 h-7' /> Featured Projects
        </h1>
        <p className=' text-[1.1rem] ml-6'>
          Handpicked projects that showcase my approach to design, performance,
          and user-focused development.
        </p>
      </div>
    </div>
  )
}

export default Projects
