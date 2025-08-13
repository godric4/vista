'use client'

import { useState } from 'react'
import {
  LaptopMinimalIcon,
  Locate,
  MailIcon,
  MapIcon,
  MapPinIcon,
  PhoneCallIcon,
  Pin,
  User,
} from 'lucide-react'
import { content, tabs } from '@/lib/data'
import Image from 'next/image'

type TabId = 'about' | 'skills' | 'experience' | 'education' | 'interests'

const About = () => {
  const [activeTab, setActiveTab] = useState<TabId>('about')

  const filteredContent = content.filter(({ type }) => {
    if (activeTab === 'skills') return type === 'skill'
    if (activeTab === 'experience') return type === 'experience'
    if (activeTab === 'education') return type === 'education'
    if (activeTab === 'interests') return type === 'interest'
    if (activeTab === 'about') return type === 'about'
    return false
  })

  return (
    <section id='about' className='mt-4 px-6 mb-4 py-4 max-w-5xl mx-auto'>
      <h1 className='font-bold text-[1.6rem] justify-center flex items-center gap-2 text-shade mb-4'>
        <User className='w-7 h-7' /> Get To Know Me
      </h1>

      <p className='text-[1.1rem] ml-6 mb-6 text-secondary'>
        Passionate about crafting clean, efficient, and user-friendly web
        experiences that drive results and delight users.
      </p>

      <div className='flex flex-col md:flex-row gap-4 w-full'>
        {/* Tabs */}
        <div className='flex flex-row flex-wrap md:flex-col gap-2 md:w-[25%]'>
          {tabs.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as TabId)}
              className={`flex items-center gap-2 px-3 py-2 text-sm rounded border border-shade hover:bg-shade/50 hover:text-white transition ${
                activeTab === id
                  ? 'bg-gold text-white border-gold'
                  : 'bg-gray-100 text-gray-700 border-gray-300'
              }`}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className='md:w-[75%] h-80 overflow-y-auto bg-slate p-4 space-y-4'>
          {/* About Tab */}
          {activeTab === 'about' &&
            filteredContent.map(
              ({
                type,
                imageURL,
                desc,
                location,
                email,
                phone,
                availability,
              }) => (
                <div
                  key={type}
                  className='p-2 flex  flex-col items-center justify-between gap-4'
                >
                  <Image
                    src={imageURL ?? '/default-profile.png'}
                    alt='me'
                    width={100}
                    height={100}
                    className='rounded-full border-2 border-secondary'
                  />
                  <div className='mx-3 mt-2 max-w-xl'>
                    <p>{desc}</p>
                    <div className='mt-3  gap-4'>
                      <div className=' flex flex-col md:flex-row  justify-start gap-4'>
                        <p className='flex'>
                          <span className='mr-1 text-shade'>
                            <MapPinIcon />
                          </span>
                          {location}
                        </p>
                        <p className='flex'>
                          <span className='mr-1 text-shade'>
                            <LaptopMinimalIcon />
                          </span>
                          {availability}
                        </p>
                      </div>
                      {/*  */}
                      <div className=' flex flex-col md:flex-row  justify-start gap-4 mt-4 '>
                        <p className='flex'>
                          <span className='mr-1 text-shade'>
                            <MailIcon />
                          </span>
                          {email}
                        </p>

                        <p className='flex'>
                          <span className='mr-1 text-shade'>
                            <PhoneCallIcon />
                          </span>
                          {phone}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}

          {/* Skills Tab */}
          {activeTab === 'skills' &&
            filteredContent.map(({ name, level, color }) => (
              <div key={name} className='mb-2'>
                <div className='flex justify-between mb-1'>
                  <span>{name}</span>
                  <span>{level}%</span>
                </div>
                <div className='w-full bg-gray-300 rounded h-3'>
                  <div
                    className={`h-3 rounded bg-gradient-to-r ${color}`}
                    style={{ width: `${level}%` }}
                  ></div>
                </div>
              </div>
            ))}

          {/* Experience Tab */}
          {activeTab === 'experience' &&
            filteredContent.map(
              ({ id, title, company, period, description, achievements }) => (
                <div key={id} className='mb-4'>
                  <h3 className='font-semibold text-lg'>{title}</h3>
                  <p className='italic text-sm'>
                    {company} | {period}
                  </p>
                  <p className='mt-1'>{description}</p>
                  <ul className='list-disc ml-5 mt-2 space-y-1'>
                    {achievements?.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>
              )
            )}

          {/* Education Tab */}
          {activeTab === 'education' &&
            filteredContent.map(
              ({
                id,
                degree,
                institution,
                period,
                description,
                achievements,
              }) => (
                <div key={id} className='mb-4'>
                  <h3 className='font-semibold text-lg'>{degree}</h3>
                  <p className='italic text-sm'>
                    {institution} | {period}
                  </p>
                  {description && <p className='mt-1'>{description}</p>}
                  {achievements && (
                    <ul className='list-disc ml-5 mt-2 space-y-1'>
                      {achievements.map((ach, i) => (
                        <li key={i}>{ach}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            )}

          {/* Interests Tab */}
          {activeTab === 'interests' &&
            filteredContent.map(({ name, description }) => (
              <div key={name} className='mb-4'>
                <h3 className='font-semibold text-lg'>{name}</h3>
                <p>{description}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default About
