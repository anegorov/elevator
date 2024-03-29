import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GEDAMAJOR',
  description: 'GEDA-MAJOR',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme="nord" lang="en">
      <body className={inter.className}>
      <Navigation />
      {children}
      <Footer />
        </body>
    </html>
  )
}
