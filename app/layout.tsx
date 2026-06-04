import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'design.jedy.cc — Network & Smart Home Infrastructure Design',
  description: 'Modern network blueprint design, internet security hardening, and local-first surveillance and automation. Zero hardware markup. Zero monthly subscription fees.',
  icons: {
    icon: [
      {
        url: 'https://jedy.cc/favicon.ico',
        sizes: 'any',
      },
      {
        url: 'https://jedy.cc/favicon.png',
        type: 'image/png',
      },
      {
        url: 'https://jedy.cc/favicon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: 'https://jedy.cc/favicon.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: 'https://jedy.cc/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}