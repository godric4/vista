import About from '@/components/About'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'

const Page = () => {
  return (
    <main className='min-h-screen w-full bg-white dark:bg-black text-black dark:text-white'>
      <Navbar />
      <Hero />
      <div className='px-7 max-w-5xl mx-auto'>
        <Projects />
        <About />
      </div>
    </main>
  )
}

export default Page
