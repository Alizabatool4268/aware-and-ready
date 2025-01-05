import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer className='bg-black text-white mt-11'>
      <div className='flex justify-around items-center bg-black ssm:flex-col xsm:flex-col'>
        <h1 className={`text-[35px] font-bold`}>Inclusify</h1>
        <span className='flex msm:h-[100px] msm:flex-col msm:gap-2 ssm:flex-col ssm:gap-2 xsm:flex-col xsm:gap-2'>
         <input type="email" name='email' placeholder='Enter your email' className='text-black px-4 border-none h-[35px] w-[230px] msm:mt-1'/>
         <button className='w-[230px] bg-cyan-300 h-[35px] text-black'>Subscribe</button>
        </span>
      </div>


     <div className='grid grid-cols-3 grid-rows-1 gap-4 xsm:grid-cols-1 xsm:grid-rows-3 py-3'>
      <span className='xsm:flex xsm:justify-center xsm:flex-col xsm:items-center text-center'>
            <h6 className='font-bold text-[18px]'>Catagories</h6>
              <ul className='text-white sm:text-sm'>
                 <li>Mental health</li>
                 <li>Eye</li>
                 <li>cardiovascular diseases</li>
                 <li>Pandemic</li>
                 <li>Health hazardous</li>
             </ul>
       </span>
        <span className='xsm:flex xsm:justify-center xsm:flex-col xsm:items-center text-center'>
           <h6 className='font-bold text-[18px]'>Premium</h6>
             <ul className='text-white sm:text-sm'>
               <li>My Account</li>
                <li>Read premium</li>
                <li>Premium free trial</li>
                <li>latest cases</li>
            </ul>
        </span>
        <span className='xsm:flex xsm:justify-center xsm:flex-col xsm:items-center text-center'>
           <h6 className='font-bold text-[18px]'>Pages</h6>
            <ul className='text-white sm:text-sm'>
                <li>24-hour news</li>
                <li>sign up</li>
                <li>Category</li>
                <li>Visual Composer Elements</li>
             </ul>
         </span>
      </div>
      <div className='flex justify-around items-center bg-black'>
            <p className='text-white'>© Inclusify - All Rights Reserved</p>
             <span className=' flex justify-center items-center gap-1 text-white'>
                <FaFacebook />
                <FaTwitterSquare />
                <FaInstagramSquare />
             </span>
        </div>
    </footer>
  )
}

export default Footer;