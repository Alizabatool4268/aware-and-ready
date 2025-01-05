import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Herosection() {
  return (
        <section className='overflow-x-hidden'> 
            <div className=' bg-cyan-100'>
                <div className='flex justify-center items-center flex-col'>
                  <span className='flex justify-center flex-col items-center mt-11'>
                   <h1 className='text-[80px] font-bold  '>Aware And Ready </h1>
                   <p className='text-black'>Stay Informed, Stay Prepared! Your Guide to Awareness and Readiness.</p>
                   <Link href={"/"} className='bg-black mt-5 mb-4 text-white h-[35px] w-[100px] rounded-md flex justify-center items-center hover:bg-cyan-100 hover:text-black hover:border-[1px] hover:border-black'>Read Now</Link>
                 </span>
                 <span className='animate-pulse flex justify-center items-center'>
                    <Image height={300} width={300} src={"/Images/12.png"} alt='heroimage'></Image>
                 </span>
                </div>
            </div>
        </section>
        
  )
}

export default Herosection;