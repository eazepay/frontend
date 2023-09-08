import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar'
import Hero from '@/components/hero'
import Footer from '@/components/footer'
import Banner from '@/components/banner'
import hero from "../assets/woman.jpg"
import metamask from "../assets/metamask.svg"
import argent from "../assets/argent.webp"
import Link from 'next/link'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { MetaMask } from '@/components/metamask'

const inter = Inter({ subsets: ['latin'] })

export default function CreateAcount() {

  return (
    <main>
      <div className='w-screen h-screen flex md:flex-row flex-col-reverse'>
        <div className='w-[90%] md:w-1/2 mx-auto'>
          <Image className=" w-full h-full object-cover object-center" alt="hero" src={hero} />
        </div>
        <div className='w-[90%] md:w-1/2 mx-auto md:px-5 '>
          <div className='flex justify-center flex-col items-center'>
            <h3 className='my-4 md:mt-[100px] mt-[180px] md:py-8 text-5xl font-bold leading-tight md:text-left text-center'>Create Your Account</h3>
            <div className='my-4'>
              <div>
                <MetaMask />
              </div>
              {/* <br></br> */}
              <button className='flex flex-row justify-center items-center my-3 w-full border rounded-2xl bg-white py-[25px] px-[70px]'>
                <Image width={40} height={40} src={argent} alt="Argent logo" className='mr-2' />
                Create account with Argent
              </button>
            </div>
          </div>
          <div>
            <Link href="/" className='text-center flex justify-center underline'>
              Go back to Home page
            </Link>
          </div>
        </div>

      </div>
    </main>
  )
}
