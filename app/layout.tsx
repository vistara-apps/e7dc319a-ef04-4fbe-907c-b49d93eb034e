import type { Metadata } from 'next'
import { Providers } from './providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'AgentForge - Your NFT Agent Creator',
  description: 'Mint, customize, and socially interact with your unique NFT agents on Base.',
  openGraph: {
    title: 'AgentForge - Your NFT Agent Creator',
    description: 'Mint, customize, and socially interact with your unique NFT agents on Base.',
    images: ['/agentforge-og.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
