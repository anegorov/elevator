import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './../../globals.css'
import Breadcrumbs from '@/app/components/Breadcrumbs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GEDAMAJOR',
  description: 'GEDA-MAJOR',
}

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div>
      <Breadcrumbs/>
      {children}
      </div>
  )
}
