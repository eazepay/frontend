import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar'
import Hero from '@/components/hero'
import Footer from '@/components/footer'
import Banner from '@/components/banner'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Banner />
      <Footer />
    </main>
  )
}
