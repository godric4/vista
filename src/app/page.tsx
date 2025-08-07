import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
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
        <div className='mt-4 mb-4 px-6 py-4 max-w-5xl mx-auto'>
          <Projects />
          <Contact />
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Page
