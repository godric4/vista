'use client'

import { useState, useEffect, ReactNode } from 'react'
import PageLoader from './PageLoader'

type Props = { children: ReactNode }

export default function PageLoaderWrapper({ children }: Props) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return loading ? <PageLoader /> : <>{children}</>
}
