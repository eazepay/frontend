import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar-dashboard'
import Hero from '@/components/hero'
import Footer from '@/components/footer'
import Banner from '@/components/banner'
import DashboardHero from '@/components/dashboardHero'
const inter = Inter({ subsets: ['latin'] })

export default function Dashboard() {
  return (
    <main>
      <Navbar />
      <DashboardHero />
      <Footer />
    </main>
  )
}
