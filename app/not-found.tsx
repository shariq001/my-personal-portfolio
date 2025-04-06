import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] max-w-[1600px] mx-auto flex flex-col gap-[30px] justify-center items-center py-[50px]'>
        <h1 className="xl:text-[24px] md1:text-[18px] font-semibold">
            MUHAMMAD SHARIQ
        </h1>

        <p className='text-[#a8a8a8] sm1:text-[12px] sm2:text-[14px] md2:text-[16px]'>The Page You are Looking for Might not be Availabe!</p>

        <Link href='/Home' className='font-medium text-[14px] bg-[#FF9142] hover:bg-[#ff7842ec] duration-500 hover:duration-500 px-[32px] py-[10px] rounded-full w-52 '>Back to Home Page</Link>
    </div>
  )
}

export default NotFound