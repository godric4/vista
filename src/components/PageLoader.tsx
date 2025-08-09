'use client'

import { motion } from 'framer-motion'

const PageLoader = () => {
  return (
    <motion.div
      className='fixed inset-0 flex flex-col items-center justify-center bg-slate-900/90 z-50 space-y-4'
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.img
        src='/pic.png'
        alt='Loading...'
        className='w-24 h-24 drop-shadow-lg rounded-full'
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      />
      <motion.p
        className='text-white text-lg font-semibold'
        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        Loading...
      </motion.p>
    </motion.div>
  )
}

export default PageLoader
