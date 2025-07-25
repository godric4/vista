import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'

const Page = () => {
  return (
    <main className='min-h-screen w-full bg-white dark:bg-black text-black dark:text-white'>
      <Navbar />
      <Hero />
    </main>
  )
}

export default Page
