import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'شركة السلامة الذهبية - Golden Safety Company',
  description: 'شركة السلامة الذهبية للمقاولات - تأسست عام 1430 هجري الموافق 2009 ميلادي',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}