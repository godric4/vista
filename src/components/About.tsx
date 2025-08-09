'use client'
import { useState } from 'react'
import { Calendar, MailIcon, Map, Smartphone, User } from 'lucide-react'
import { content, tabs } from '@/lib/data' // Or wherever your icons are from
import Image from 'next/image'

type TabId = keyof typeof content

const About = () => {
  const [activeTab, setActiveTab] = useState<TabId>('about')

  return (
    <section id='about' className='mt-4 px-4 mb-4  py-4 max-w-5xl mx-auto'>
      {' '}
      <h1 className='font-bold text-[1.6rem] justify-center flex items-center gap-2 text-shade mb-4'>
        <User className='w-7 h-7' /> Get To Know Me
      </h1>
      <p className=' text-[1.1rem] ml-6 mb-6 text-secondary'>
        Passionate about crafting clean, efficient, and user-friendly web
        experiences that drive results and delight users.
      </p>
      <div className='flex flex-col md:flex-row gap-4 w-full'>
        {/* Tabs */}
        <div className='flex flex-row flex-wrap md:flex-col gap-2 md:w-[25%]'>
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabId)}
                className={`flex items-center gap-2 px-3 py-2 text-sm rounded border border-shade hover:bg-shade/50 hover:text-white transition ${
                  activeTab === tab.id
                    ? 'bg-gold text-white border-gold'
                    : 'bg-gray-100 text-gray-700 border-gray-300'
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* contents */}
        <div className='md:w-[75%] h-80 overflow-y-auto bg-slate p-4 space-y-4'>
          {/* About */}
          {activeTab === 'about' && (
            <div className=' p-2  flex flex-col md:flex-row items-center justify-between gap-3 '>
              <Image
                src={content.imageURL}
                alt='me'
                width={100}
                height={100}
                className='rounded-full border-2 border-secondary'
              />
              <div className='mx-3 pt-2'>
                <p>{content.about}</p>
                <div className='flex flex-col md:flex-row justify-start  gap-4 md:gap-8 mt-3 pt-2 md:w-[75%]'>
                  <p className='flex gap-2'>
                    <span className='text-shade'>
                      <Map />
                    </span>
                    Lagos, Nigeria
                  </p>
                  <p className='flex gap-2'>
                    <span className='text-shade'>
                      {' '}
                      <Calendar />
                    </span>
                    Available for hire
                  </p>
                </div>
                {/*  */}
                <div className='flex flex-col md:flex-row justify-start  gap-4 md:gap-8 mt-3 pt-2 md:w-[75%]'>
                  <p className='flex gap-2'>
                    <span className='text-shade'>
                      <Smartphone />
                    </span>
                    (+234)-916-0932-246
                  </p>
                  <p className='flex gap-2'>
                    <span className='text-shade'>
                      {' '}
                      <MailIcon />
                    </span>
                    godricikeji@gmail.com
                  </p>
                </div>
                <hr className='mt-6 text-secondary' />
              </div>
            </div>
          )}

          {/* Experience */}
          {activeTab === 'experience' &&
            content.experience.map((exp, idx) => (
              <div key={idx}>
                <h4 className='font-bold'>
                  {exp.title} – {exp.company}
                </h4>
                <p className=' italic'>{exp.period}</p>
                <p>{exp.description}</p>
                <ul className='list-disc list-inside  text-secondary'>
                  {exp.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          {activeTab === 'education' &&
            content.education.map((edu) => (
              <div key={edu.id} className='mb-6'>
                <h3 className=' font-semibold'>{edu.institution}</h3>
                <p className='italic'>
                  {edu.degree} | {edu.period}
                </p>
                <p className='my-2 text-secondary'>{edu.description}</p>
                <ul className='list-disc list-inside text-secondary'>
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}

          {activeTab === 'skills' &&
            content.skills.map((skill, idx) => (
              <div key={idx}>
                <p className='mb-1'>{skill.name}</p>
                <div className='w-full h-2 rounded bg-gray-200 overflow-hidden'>
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color}`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}

          {activeTab === 'interests' &&
            content.interests.map((interest, idx) => (
              <div key={idx}>
                <p className='font-medium'>{interest.name}</p>
                <p className=' text-secondary'>{interest.description}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default About
