import Image from 'next/image'
import hero from "../../assets/wallet.png"
import Link from 'next/link'

export default function Banner() {
  return (
    <div className="container mx-auto flex px-5 py-20 mt-20  items-center justify-center md:flex-row-reverse flex-col-reverse">
      <Image className="lg:w-2/6 md:w-3/6 w-full object-cover object-center mb-[80px]  md:mt-[48px]" alt="hero" src={hero} />
      <div className="text-left lg:w-6/12 w-full">
        <h1 className="my-4 mt-[10px] md:py-8 text-5xl font-bold leading-tight">
          Easily make payment with USSD
        </h1>
        <p className="text-2xl mb-8">

          No internet required to pay! No hidden charges!
        </p>
        <div className="flex justify-left mx-auto">
          <button
            className="bg-[#532775] text-white font-bold rounded-full  py-4 px-8">
            <Link href="/create-account">
              Create Account
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}
