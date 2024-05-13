import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The children system',
  description: 'Facilitate the docter to work',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" >
      <body className={`${inter.className} antialiased bg-[#ecf0f3] text-[#a0a5a8]`}>{children}</body>
    </html>
  )
}
