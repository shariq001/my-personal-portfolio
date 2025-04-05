"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const page = () => {
  return (
    <div className='flex md1:flex-row sm1:flex-col sm1:gap-[20px] justify-between items-center sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[30px] max-w-[1600px]'>
      
      {/* Left */}
      <div className='flex flex-col gap-[15px] xl:w-[510px]'>
        <p className='font-semibold xl:text-[24px] sm1:text-[12px] sm2:text-[14px] md2:text-[16px] lg2:text-[19px]'>HI, I&apos;M MUHAMMAD SHARIQ</p>
        <TypeAnimation
          sequence={[
            "I'M A FRONT-END DEVELOPER", // Full sentence
            2000, // Wait before erasing
            '',   // Erase
            500, // Wait before retyping
          ]}
          wrapper="span"
          speed={50}
          style={{ display: 'inline-block', color: '#fff' }}
          repeat={Infinity}
          className={` xl:text-[85px] sm1:text-[40px] sm2:text-[45px] md2:text-[50px] lg2:text-[70px] font-bold leading-[90%]`}
        />
        <p className='text-[#f8f7f9]/50 xl:text-[24px] sm1:text-[14px] md2:text-[16px] lg2:text-[19px] lg1:w-[500px]'>I am a front-end developer passionate about transforming ideas into visually stunning and functional websites.</p>
        <Link href='/Home' target='_blank' className='xl:text-[24px] sm1:text-[14px] font-semibold border-[2px] rounded-[7px] border-white xl:px-[32px] py-[5px] text-center xl:w-[150px] sm1:w-[80px] hover:bg-white hover:text-black duration-700 hover:duration-700'>HOME</Link>
      </div>

      {/* Right */}
      <Image src='/my-photo.jpg' alt='My Photo' width={500} height={500} className='rounded-[10px] shadow-xl shadow-[#464646] xl:w-[500px] md1:w-[300px] md2:w-[350px] lg2:w-[400px]'/>



    </div>
  )
}

export default page