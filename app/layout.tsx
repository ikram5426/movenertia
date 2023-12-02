import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Movenertia',
  description: "Discover stress-free moving with our expert movers! From packing to unpacking, we handle it all with care and precision. Move confidently with our reliable team, ensuring a smooth transition to your new home. Your journey begins with us – your trusted partners in making moving a breeze!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
