import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import { ThemeProvider } from '@/components/ui/theme-provider'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ajmal Khan - AI Engineer & Full Stack Developer',
  description: 'Portfolio of Ajmal Khan - AI Engineer specializing in Agentic AI, LLMs, and modern web development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
        <Navbar/>
        {children}
        <Footer />
          </ThemeProvider>
        </body>
        
    </html>
  )
}
