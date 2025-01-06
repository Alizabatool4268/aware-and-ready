import React from 'react'

function Page() {
  return (
    <section className='overflow-x-hidden'>
    <div className='h-[200px] bg-cyan-200 flex justify-center items-center'>
        <h1 className='text-[35px] font-bold'>About us</h1>
    </div>
    <div className='flex justify-center items-center flex-col' >
       <h2  className='text-[35px] font-bold text-center'> Our journey</h2>
        <p className='w-[400px] ssm:w-[300px] xsm:w-[280px] text-center'>
        Welcome to Aware and ready, your go-to source for reliable and comprehensive information on various diseases. Our mission is to provide accurate, up-to-date, and easy-to-understand health information to help you better understand different medical conditions. Whether youre seeking knowledge for personal reasons or looking to stay informed about the latest in medical advancements, our platform is here to support you. Trust in our expert-curated content to guide you through your health journey.


        </p>
    </div>
  </section>
  )
}

export default Page;