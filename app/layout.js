

import { Inter } from 'next/font/google'
import './globals.css'
import ReduxProviders from '@/providers/ReduxProviders'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Redux With Persist',
  description: 'create next app with redux persists',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <ReduxProviders >
          {children}
        </ReduxProviders>

      </body>
    </html >
  )
}