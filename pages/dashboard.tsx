import { Inter } from 'next/font/google'
import Navbar from '../components/navbar-dashboard'
import Footer from '@/components/footer'
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
