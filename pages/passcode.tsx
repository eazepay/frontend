import { Inter } from 'next/font/google'
import Link from 'next/link'
import Navbar from '../components/navbar-dashboard'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Passcode() {

  return (
    <main >
      <Navbar />
      <div className="flex w-screen h-screen min-h-full flex-1 flex-col justify-center px-6 py-1 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-lg">

          <h3 className='my-4 md:py-2 text-5xl font-bold mb-5 leading-tight text-center'>Security Questions 2</h3>
          <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="question1" className="block text-sm font-medium leading-6 text-gray-900">
                  Enter your secret Passcode?
                </label>
                <div className="mt-2">
                  <input
                    id="question1"
                    name="question1"
                    type="text"
                    autoComplete="question1"
                    required
                    placeholder="Enter your secret Passcode?"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#532775] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>


              <div>
                <button
                  type="submit"
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
      <Footer />
    </main>
  )
}
