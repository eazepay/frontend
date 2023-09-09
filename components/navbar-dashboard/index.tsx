import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useState, useEffect, useContext } from "react";
import { Context } from '@/context';

const Navbar: React.FC = () => {
  
  const { user } = useContext(Context)
  console.log("checking user", user);
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className=" mx-auto w-full px-5 bg-[#532775]">
      <div className="md:w-[90%] lg:w-[80%] xl:w-[89%] w-[80%] flex mx-auto h-[70px]  ">
        <div className=" flex items-center justify-center mr-auto text-white">
          <Link href="/" className="font-semibold text-xl tracking-tight">
            Eaze
          </Link>
        </div>

        <div className="hidden md:block md:flex-grow ml-auto">
          <div className="flex justify-end">
            <Link href="" className="font-semibold text-lg tracking-tight text-white justify-center items-center mt-5 mr-2">
              {user.displayName}
            </Link>
            <Link href="/create-account" className="text-center w-[175px] h-[50px] mt-[10px] items-center justify-center p-[10px] border-[#ffffff] bg-white text-[#532775] border rounded-[16px] font-semibold hover:bg-[#532775] hover:text-white text-[16px] mr-2">
              Fund Wallet
            </Link>
            <Link href="#" className="text-center w-[175px] h-[50px] mt-[10px] items-center justify-center p-[10px] border-[#ffffff] border rounded-[16px] font-semibold text-white text-[16px]">
              Log Out
            </Link>
          </div>
        </div>
        <div className="block md:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded mt-5 text-white border-[#ADB9C7]hover:text-white hover:border-white"
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
        <div className="block md:hidden  w-[90%] ">
          <div className="py-3 ml-9">
            <div className=" flex flex-col  pb-8">
              <Link href="" className="font-semibold text-lg tracking-tight text-white justify-center items-center  mr-2">
                {user.displayName}
              </Link>
              <Link href="/create-account" className="text-center w-full h-[50px] mt-[10px] items-center justify-center p-[10px] border-[#ffffff] bg-white text-[#532775] border rounded-[16px] font-semibold hover:bg-[#532775] hover:text-white text-[16px] mr-2">
                Fund Wallet
              </Link>
              <Link href="#" className="text-center w-full h-[50px] mt-[10px] items-center justify-center p-[10px] border-[#ffffff] border rounded-[16px] font-semibold text-white text-[16px]">
                Log Out
              </Link>
            </div>
          </div>
        </div>

      )}
    </nav>
  );
};


export default Navbar;
