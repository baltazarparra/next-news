import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js 13',
  description: 'a study of news feats'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/">home</Link>
              </li>
              <li>
                <Link href="/paginas">paginas</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
        <footer>
          <small>baltazarparra 2024</small>
        </footer>
      </body>
    </html>
  )
}
