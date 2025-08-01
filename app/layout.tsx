import type { Metadata } from 'next'
import './globals.css'
import logo from "@/assets/Logo-1.png";
import wats from "@/assets/wats.png";

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
      <body>
        <a
          href="https://wa.me/919870168430"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-50 bg-white p-2 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          <img src={wats.src} alt="Whatsapp" width={60} height={60} />
        </a>

        {children}</body>
    </html>
  )
}
