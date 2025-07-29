'use client'
import { projects } from '@/lib/data'
import { Button } from '@/ui/button'
import { EyeIcon, Github, Star } from 'lucide-react'

type projects = {
  id: number
  title: string
  description: string
}

const Projects = () => {
  return (
    <div className='mt-3 pt-4'>
      <div className='mb-4 pb-4'>
        <h1 className='font-bold text-[1.6rem] flex items-center gap-2'>
          <Star className='w-4 h-4' /> Featured Projects
        </h1>
        <p className='font-semibold text-[1.1rem]'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, ex.
        </p>
      </div>
      {projects.map((project, index) => {
        const { title, description, imageURL, tools, githubURL, demoURL } =
          project

        return (
          <div className='overflow-x-hidden ' key={title}>
            <div
              className={`
    flex flex-col md:flex-row justify-between 
    my-4 py-4 px-4
    h-[420px] md:h-[300px] 
    gap-4 hover:scale-95 active:scale-90 transition transform
     duration-300 ease-in-out 
    ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}
  `}
            >
              {/* Image Background */}
              <div
                className='relative w-full md:w-1/2 h-full rounded bg-cover bg-center'
                style={{ backgroundImage: `url(${imageURL})` }}
              ></div>
              {/* Text Content/Links */}
              <div className='flex flex-col justify-between gap-4 flex-1'>
                <h1>{title}</h1>
                <p>{description}</p>
                <p>
                  <span className='font-semibold'>Tools: {tools}</span>
                </p>
                {/* action Buttons */}
                <div className=' flex gap-3'>
                  <Button
                    variant='outline'
                    className='w-1/2 md:w-[200px]  !bg-chart-3 text-black'
                    onClick={() => window.open(githubURL, '_blank')}
                  >
                    <Github />
                    <p>Code</p>
                  </Button>
                  <Button
                    variant='outline'
                    className='w-1/2 md:w-[200px] !bg-white !text-black'
                    onClick={() => window.open(demoURL, '_blank')}
                  >
                    <EyeIcon />
                    <p>Demo</p>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Projects
