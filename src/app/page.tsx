import About from '@/components/About'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'

const Page = () => {
  return (
    <main className=''>
      <Navbar />
      <div className='container'>
        <Hero />
        <About />
        <div className='mt-4 mb-4 px-4 py-4 max-w-5xl mx-auto'>
          <Projects />
        </div>
      </div>
    </main>
  )
}

export default Page
