'use client'
import { projects } from '@/lib/data'

import { motion } from 'framer-motion'

import {
  GitBranchPlus,
  GithubIcon,
  LucideFolderOpen,
  ViewIcon,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type projects = {
  id: number
  title: string
  description: string
}

const Projects = () => {
  return (
    <section className='' id='projects'>
      <div className='mt-8 py-8 max-w-5xl'>
        <div className='mb-4 pb-4 text-center'>
          <h1 className='font-bold text-[1.6rem] justify-center flex items-center gap-2 text-shade'>
            <GitBranchPlus className='w-7 h-7' /> Featured Projects
          </h1>
          <p className=' text-[1.1rem] ml-6 text-secondary'>
            Handpicked projects that showcase my approach to design,
            performance, and user-focused development.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-6 gap-4'>
          {projects.map((project, index) => {
            const { id, title, desc, imageURL, span, githubURL, demoURL } =
              project
            return (
              <motion.div
                key={id}
                className={`${span} bg-slate rounded-2xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform duration-300`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: 'easeOut',
                }}
              >
                <Image
                  src={imageURL}
                  alt={title}
                  width={100}
                  height={100}
                  className='w-full h-48 object-cover'
                  unoptimized
                />

                <div className='p-4 text-white flex flex-col grow justify-between '>
                  <h3 className='text-lg font-semibold'>{title}</h3>
                  <p className='text-sm mt-1 text-secondary flex-grow'>
                    {desc}
                  </p>

                  <div className='mt-4 flex gap-3'>
                    <Link
                      href={githubURL}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='px-3 py-2 rounded bg-primary border-shade border-1 hover:bg-shade/60 transition flex font-semibold text-sm'
                    >
                      <span className='mr-1 '>
                        <GithubIcon />
                      </span>{' '}
                      Code
                    </Link>

                    <Link
                      href={demoURL}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='px-3 py-2 rounded border-secondary border-1 bg-secondary/30 hover:bg-secondary/80 transition text-white flex font-semibold text-sm'
                    >
                      <span className='mr-1'>
                        <ViewIcon />
                      </span>{' '}
                      Demo
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
        <div className='mt-6 text-center'>
          <Link
            href='/projects'
            className=' px-6 py-2 border-shade border-1 rounded-lg text-white font-semibold hover:bg-shade/60 transition flex items-center justify-center md:inline-block '
          >
            <p className='flex '>
              {' '}
              <span className='mr-1'>
                <LucideFolderOpen />
              </span>{' '}
              View More Projects
            </p>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects
