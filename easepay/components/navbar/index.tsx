import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import MenuItems from './MenuItems';

const Navbar: React.FC = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className=" mx-auto w-full px-5 bg-[#532775]">
      <div className="md:w-[90%] lg:w-[80%] xl:w-[82%] w-[80%] flex mx-auto h-[70px]  ">
        <div className=" flex items-center justify-center mr-auto text-white">
          <Link href="/" className="font-semibold text-xl tracking-tight">
          EasePay
            </Link>
        </div>
        <div className="hidden md:block mt-2 :ml-6">
          <div className="mx-14">
            {MenuItems.map((item, index) => {
              return (
                <>
                  {/* <Link href={item.url} key={index}>
                    <div
                      className={`flex mt-4 md:inline-block active:text-white md:mt-0 text-[16px] hover:text-white mr-4 cursor-pointer  ${router.asPath === item.url
                          ? "text-white border-b-4 border-[#1E50FF]"
                          : "text-[#ADB9C7]"
                        }`}
                    >

                      <p>{item.label}</p>
                    </div>
                  </Link> */}
                </>
              );
            })}
          </div>
        </div>
        <div className="hidden md:block md:flex-grow ml-auto">
          <div className="flex justify-end">
            <Link href="/dashboard" className="text-center w-[175px] h-[50px] mt-[10px] items-center justify-center p-[10px] border-[#ffffff] border rounded-[16px] font-semibold text-white text-[16px]">
              Connect Wallet
            </Link>
          </div>
        </div>
        <div className="block md:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-white border-[#ADB9C7]hover:text-white hover:border-white"
            type="button"
            onClick={toggleMenu}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="block md:hidden  w-[80%]">
          <div className="my-3 ml-9">
            {MenuItems.map((item, index) => {
              return (
                <>
                  {/* <Link href={item.url} key={index}>
                    <div
                      className={`flex mt-4 md:inline-block active:text-white md:mt-0 text-[16px] hover:text-white mr-4 cursor-pointer  ${router.asPath === item.url
                          ? "text-white"
                          : "text-[#ADB9C7]"
                        }`}
                    >
                      <p>{item.label}</p>
                    </div>
                  </Link> */}
                </>
              );
            })}
            <div className=" flex justify-start my-5">
            <Link href="/dashboard" className=" flex justify-center content-center w-[175px] h-[20px] py-[16px] top-8  px-[16px] border-[#ffffff] border rounded-[16px] font-semibold text-white text-[16px]">
              Connect Wallet
            </Link>
          </div>
          </div>
        </div>

      )}
    </nav>
  );
};


export default Navbar;
