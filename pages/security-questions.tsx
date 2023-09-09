import { Inter } from 'next/font/google'
import Link from 'next/link'
import Navbar from '@/components/navbar-dashboard'
import Footer from '@/components/footer'

import { useContractRead, useContractWrite, useWaitForTransaction} from 'wagmi'
import abi from '../abi/abi.json'
import { useState, useEffect, useContext } from "react";
import { Context } from '@/context';

import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ['latin'] })

export default function SeurityQuestions() {
  
  const [username, setUsername] = useState('')
  
  const { user, setUser, contractAddress  } = useContext(Context)

  
  const router = useRouter();

  console.log(user.username);
  const data = useContractWrite({
    address: contractAddress,
    abi: abi,
    functionName: 'join',
    args: [user.username]
  })

  const {isLoading, isSuccess} = useWaitForTransaction({
    hash: data?.data?.hash,
  })
  

  const UpdateUser =  (e:any) => {

    e.preventDefault();

    
     data.write()
        router.push('/dashboard'); 

    // console.log("joining", data)


  }
  console.log(isSuccess)

  // useEffect(() => {
  //   if(isSuccess) {

  //     router.push('/dashboard'); 

  //   } 
  // }, [isSuccess])
  


  return (
    <main>
      <Navbar/>
      <div className="flex w-screen h-full  flex-1 flex-col justify-center px-6 py-1 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-lg">

          <h3 className='my-4 md:py-2 text-5xl font-bold leading-tight text-center'>Security Questions</h3>
          <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={UpdateUser} >

            <div>
                <label htmlFor="question1" className="block text-sm font-medium leading-6 text-gray-900">
                  Choose your username?
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    placeholder="Choose your username"
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#532775] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="question1" className="block text-sm font-medium leading-6 text-gray-900">
                  What was your favourite high school teacher?
                </label>
                <div className="mt-2">
                  <input
                    id="question1"
                    name="question1"
                    type="text"
                    autoComplete="question1"
                    required
                    placeholder="What was your favourite high school teacher?"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#532775] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="question2" className="block text-sm font-medium leading-6 text-gray-900">
                  What is the name of your childhood best friend?
                </label>
                <div className="mt-2">
                  <input
                    id="question2"
                    name="question2"
                    type="text"
                    autoComplete="question1"
                    required
                    placeholder="What is the name of your childhood best friend?"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#532775] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="question3" className="block text-sm font-medium leading-6 text-gray-900">
                  What is your mother&apos;s maiden name?
                </label>
                <div className="mt-2">
                  <input
                    id="question3"
                    name="question3"
                    type="text"
                    autoComplete="question3"
                    required
                    placeholder="What is your mother&apos;s maiden name?"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#532775] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  // onClick={() => updateUser()}
                  disabled={isLoading}
                  className="flex w-full justify-center rounded-md bg-[#532775] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#532775] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#532775]"
                >
                  Submit
                </button>
              </div>

            </form>
            <div>
              <Link href="/" className='text-center mt-2 flex justify-center underline'>
                Go back to Home page
              </Link>
            </div>
            
          </div>
        </div>

      </div>
      <Footer/>
    </main>
  )
}
