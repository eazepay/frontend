import Image from 'next/image'
import hero from "../../assets/top.png"

export default function Hero() {
  return (
    <div className="w-screen h-screen text-[#532775] bg-white" 
    // style={{
    //   background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"
    // }}
    >
      <div className="container mx-auto flex px-5 py-10 items-center justify-center md:flex-row-reverse flex-col-reverse">
        <Image className="lg:w-2/6 md:w-3/6 w-full object-cover object-center mb-[80px]  md:mt-[68px]" alt="hero" src={hero} />
        <div className="text-left lg:w-6/12 w-full">
          <h1 className="my-4 mt-[80px] md:py-8 text-5xl font-bold leading-tight">
            Your No.1 Cross-Border Payment Solution In Africa
          </h1>
          <p className="text-2xl mb-8">
            Pay for goods and services in any local currency using USSD, powered by blockchain technology.
          </p>
          <div className="flex justify-left mx-auto">
            <button
              className="hover:underline bg-[#532775] text-white font-bold rounded-full  py-4 px-8">
              Create Account
            </button>
            {/* <button
              className="ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8">
              Connect Wallet
            </button> */}
          </div>
        </div>
      </div>
    </div >
  )
}
