import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Herosection() {
  return (
        <section> 
            <div className='h-screen bg-cyan-100'>
                <div className='flex flex-col justify-center items-center '>
                 <span className='text-[80px] font-bold  flex justify-center items-center'>
                    <h1>Aware </h1>
                    <span className='rotate-7'>
                    <Image height={300} width={300} src={"/Images/24.png"} alt='heroimage'></Image>
                    </span>
                    <h1>And Ready</h1>
                </span>
                 <p className='text-black'>Stay Informed, Stay Prepared! Your Guide to Awareness and Readiness</p>
                 <Link href={"/"} className='bg-black text-white h-[35px] w-[100px] rounded-md flex justify-center items-center hover:bg-cyan-100 hover:text-black hover:border-[1px] hover:border-black'>Read Now</Link>
                </div>
                <div>

                </div>
            </div>
        </section>
  )
}

export default Herosection;