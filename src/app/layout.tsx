import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bill Anthony Niño Riera — Ing. Informática',
  description: 'Portafolio de Bill Anthony Niño Riera, Ingeniero en Informática. Python, SQL, Docker, Git, Linux.',
  keywords: ['ingeniería informática', 'desarrollador', 'python', 'sql', 'docker', 'venezuela'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  )
}
