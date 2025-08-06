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
        <Projects />
      </div>
    </main>
  )
}

export default Page
