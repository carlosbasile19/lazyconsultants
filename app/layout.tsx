import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { ModalProvider } from '@/components/modal-provider'
import { ToasterProvider } from '@/components/toaster-provider'
import { CrispProvider } from '@/components/crips-provider'
const cors = require('cors')({ origin: true });

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lazy Consultants',
  description: 'Automation AI SaaS for Consultants',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <ClerkProvider>
      <html lang="en">
         <CrispProvider/>
        <body className={inter.className}>
          <ModalProvider/>
          <ToasterProvider/>
          {children}
          </body>
      </html>
    </ClerkProvider>
  )
}
