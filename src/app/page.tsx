import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Parallax from '@/components/Parallax'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'

const Page = () => {
  return (
    <main className=''>
      <Navbar />
      <div className=''>
        <Hero />
        <About />
        <Parallax />
        <div className='mt-4 mb-4 px-6 py-4 max-w-5xl mx-auto'>
          <Projects />
          <Contact />
        </div>
      </div>
      <Testimonials />
      <Footer />
    </main>
  )
}

export default Page
