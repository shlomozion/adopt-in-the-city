import type { Metadata } from 'next'
import '../globals.css'
import TopBar from '@/components/topbar/TopBar'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
// import PawLayout from '@/components/Background/PawLayout'


export const metadata: Metadata = {
  title: 'Adopt in the city',
  description: 'pet adoption app',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=' bg-gradient-to-b from-[#564E3D] from-0%  via-[#DACCBD]   to-[#564E3D] to-[65%]  '>
        <TopBar />
        <main className=''>
          {/* <PawLayout /> */}

          {children}
        </main>
        <Footer />
        <Navbar />
      </body>
    </html>
  )
}
