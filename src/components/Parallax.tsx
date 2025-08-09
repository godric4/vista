'use client'

const ParallaxSection = () => {
  return (
    <section
      className='relative h-[400px] md:h-[500px] w-full flex items-center justify-center text-white'
      style={{
        backgroundImage: "url('/desk.jpg')",
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-primary/90 z-0' />

      {/* Content */}
      <div className='relative z-10 max-w-4xl px-6 text-center flex flex-col gap-4'>
        <h2 className='text-3xl md:text-5xl font-extrabold tracking-tight'>
          Transform Your Vision Into Stunning Digital Experiences
        </h2>
        <p className='text-lg md:text-xl max-w-2xl mx-auto opacity-90'>
          I build fast, responsive, and user-friendly websites tailored to grow
          your business and captivate your audience. Let’s create seamless,
          modern solutions that elevate your brand and deliver real results.
        </p>

        <div className='mt-6 flex justify-center gap-6'>
          <a
            href='#contact'
            className='px-6 py-3 border-2 border-shade rounded-md font-semibold hover:bg-shade/60 hover:text-white transition'
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default ParallaxSection
