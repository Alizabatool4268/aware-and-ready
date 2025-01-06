"use client";
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";


function Header() {
  
  const [Opensidebar,setOpensidebar] = useState(false);
  const [Closesidebar,setClosesidebar] = useState(true);

  const togglesidebar = ()=>{
    setOpensidebar(!Opensidebar)
    setClosesidebar(!Closesidebar)
  }

  return (
    <header className='overflow-x-hidden'>
      {/* dekstop side bar */}
        <div className='flex justify-around items-center bg-black text-white h-[50px] xsm:hidden ssm:hidden'>
          <div className='text-[30px] ssm:text-[24px] xsm:text-[20px] msm:text-[20px]'>
            Aware and Ready
          </div>
          <div className=' w-[320px] text-[18px] flex justify-between items-center ssm:w-[230px] xsm:text-sm xsm:w-[210px]'>
            <Link href={"/"}>Home</Link>
            <Link href={"/Aboutus"}>About us</Link>
            <Link href={"/latestpost"}> Latest Posts</Link>
          </div>
        </div>
        {/*for mobile screens*/}
        <div className='flex justify-around items-center bg-black text-white h-[50px] msm:hidden sm:hidden md:hidden lg:hidden'>
         <div className='text-[30px] ssm:text-[24px] xsm:text-[20px]'>
            Overview
          </div>
         <button
         onClick={togglesidebar}
          className="text-white hover:text-gray-400 focus:outline-none"
         ><IoMenu/></button>
        </div>
        {/* mobile side bar */}
        <div className={`fixed inset-y-0 right-0 transform ${
          Opensidebar ? 'translate-x-0' : 'translate-x-full'
        } md:hidden transition-transform duration-300 ease-in-out bg-white w-64 shadow-lg z-50`}>
          <button onClick={togglesidebar}><RxCross2/></button>
          <div className='text-[30px] ssm:text-[24px] xsm:text-[20px] ml-8'>
            Overview
          </div>
          <div className=' w-[300px] flex justify-between items-center flex-col gap-5 ssm:w-[230px] xsm:text-sm xsm:w-[210px]'>
            <Link href={"/"}>Home</Link>
            <Link href={"/Aboutus"}>About us</Link>
            <Link href={"/latestpost"}> Latest Posts</Link>
          </div>
        </div>
        {Opensidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
          onClick={togglesidebar}
        >
        </div>
         )}

    </header>
  )
}

export default Header