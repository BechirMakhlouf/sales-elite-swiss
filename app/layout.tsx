import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Sales Elite Swiss',
  description: 'Your Success, Our Expertise.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
