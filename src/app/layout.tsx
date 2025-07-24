import type { Metadata } from 'next'
import { Outfit, JetBrains_Mono, Ovo, Satisfy } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
  weight: ['400', '500', '600', '700'],
})

const satisfy = Satisfy({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-satisfy',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrainsmono',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Godric Ikeji | Web Dev',
  description: 'Frontend developer portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} ${satisfy.variable} bg-white text-black dark:bg-black dark:text-white  antialiased `}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem={false}
        >
          {' '}
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
