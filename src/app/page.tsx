import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Parallax from '@/components/Parallax'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import PageLoaderWrapper from '@/components/PageLoaderWrapper'

export default function Page() {
  return (
    <PageLoaderWrapper>
      <main>
        <Navbar />
        <div>
          <Hero />
          <About />
          <Parallax />
          <div className='mt-4 mb-4 px-4 py-4 max-w-5xl mx-auto'>
            <Projects />
            <Contact />
          </div>
        </div>
         {/* <Testimonials />*/}
        
        <Footer />
      </main>
    </PageLoaderWrapper>
  )
}
