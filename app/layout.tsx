import type { Metadata } from 'next'
import './globals.css'
import logo from "@/assets/LOGO-PNG.png";

export const metadata: Metadata = {
  title: 'Shrutti Bose Permanent Makeup',
  description: 'Professional Permanent Makeup Services',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href={logo.src} type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  )
}
