import Image from 'next/image'

const Hero = () => {
  return (
    <section className='pt-20'>
      <div className='px-6 h-[calc(100vh-5rem)] flex'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-cursive font-bold text-3xl text-left w-full '>
            Godric Marto
          </h1>
          <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-bold mb-3 font-ovo'>
            Frontend Web Developer
          </h1>
          <p className='dark:text-muted-foreground text-gray-600 '>
            Building frontends with a user-first mindset, blending aesthetics
            with functionality. I turn wireframes and mockups into seamless,
            engaging web experiences that prioritize performance, accessibility,
            and easy maintenance.
          </p>
        </div>
        {/*  */}
        <div className=' relative w-full'>
          <div className=''>
            <Image src='/chessboard.png' alt='chessboard' fill />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
