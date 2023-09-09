import Link from 'next/link'

export default function DashboardHero() {
  return (
    <div className="md:w-screen md:h-screen h-full text-[#532775] bg-white"
    >
      <div className="container mx-auto flex px-5 py-10 items-center justify-center md:flex-row-reverse flex-col-reverse w-[90%]">
        <div className="text-left w-full">
          {/* <h1 className="my-4 mt-[10px] md:py-8 text-5xl font-bold leading-tight">
            Welcome <span>0x0763738...</span>
          </h1> */}
          <div>
            {/* <p className='text-2xl font-bold leading-tight mb-4'>Current Holding</p> */}
            <div className='flex md:flex-row flex-col mb-6'>
              <div className='flex bg-[#532775] text-white md:w-1/4 w-full mr-2 mb-2 h-[150px] justify-center items-center border rounded-2xl'>
                <span className='text-[50px] mr-2'>0</span>
                <span>USD</span>
              </div>
              <div className='flex bg-[#532775] text-white md:w-1/4 w-full mr-2 mb-2 h-[150px] justify-center items-center border rounded-2xl'>
                <span className='text-[50px] mr-2'>0</span>
                <span>NGN</span>
              </div>
              <div className='flex bg-[#532775] text-white md:w-1/4 w-full mr-2 mb-2 h-[150px] justify-center items-center border rounded-2xl'>
                <span className='text-[50px] mr-2'>0</span>
                <span>Cedis</span>
              </div>
              <div className='flex bg-[#532775] text-white md:w-1/4 w-full mr-2 mb-2 h-[150px] justify-center items-center border rounded-2xl'>
                <span className='text-[50px] mr-2'>0</span>
                <span>CFA</span>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-10">
            <p className='text-2xl font-bold leading-tight mb-8'>Recent Transactions</p>
            <div className='container flex flex-row justify-between bg-[#d0c5c56e] p-3 my-2 rounded-xl border text-[#333333]'>
              <div className='px-4'>
                <p className='text-leading text-xl font-semi-bold leading-tight '>Sent <span>20</span><span className='ml-1'>CFA</span> to <span >0x2736384938</span></p>
                <p>2nd Sept, 2023</p>
              </div>
              <div>
              <div className='px-4'> 
                <Link href="/" className='text-center mt-2 flex justify-center underline'>
                  View Tx
                </Link>
              </div>
              </div>
            </div>
            <div className='container flex flex-row justify-between bg-[#d0c5c56e] p-3 my-2 rounded-xl border text-[#333333]'>
              <div className='px-4'>
                <p className='text-leading text-xl font-semi-bold leading-tight'>Sent <span>20</span><span className='ml-1'>NGN</span> to <span >79283738383 UBA Bank</span></p>
                <p>2nd Sept, 2023</p>
              </div>
              <div className='px-4'> 
                <Link href="/" className='text-center mt-2 flex justify-center underline'>
                  View Tx
                </Link>
              </div>
            </div>
            <div className='container flex flex-row justify-between bg-[#d0c5c56e] p-3 my-2 rounded-xl border text-[#333333]'>
              <div className='px-4'>
                <p className='text-leading text-xl font-semi-bold leading-tight'>Received <span>20</span><span className='ml-1'>Cedis</span> from <span >0x79283738383</span></p>
                <p>6nd Sept, 2023</p>
              </div>
              <div className='px-4'> 
                <Link href="/" className='text-center mt-2 flex justify-center underline'>
                  View Tx
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
