import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'

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
    <html data-theme="winter" lang="en">
      <body className={inter.className}>
      <Navigation />
        {children}
        </body>
    </html>
  )
}
