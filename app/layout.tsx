import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
interface IProps {
  children: React.ReactNode
}
export default function RootLayout({
  children,
}: IProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='min-w-6xl mx-auto min-h-screen'>
          {children}
        </div>
      </body>
    </html>
  )
}