import type { Metadata } from 'next'
import './globals.css'
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: 'Bill Anthony Niño Riera — Ing. Informática',
  description: 'Portafolio de Bill Anthony Niño Riera, Ingeniero en Informática. Python, SQL, Docker, Git, Linux.',
  keywords: ['ingeniería informática', 'desarrollador', 'python', 'sql', 'docker', 'venezuela'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={cn("dark", geist.variable)}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  )
}
