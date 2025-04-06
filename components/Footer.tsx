import React from 'react'

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Syne } from 'next/font/google';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '700', '500', '600'], // Specify weights you need
  display: 'swap',
});

const Footer = () => {
  return (
    <div className='sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] pt-[50px] bg-black flex flex-col justify-center items-center gap-[20px] max-w-[1600px] mx-auto'>
      <p className={`${syne.className} xl:text-[24px] md2:text-[20px] font-semibold text-[#FF9142]`}>Get in Touch With Us</p>

      <Link href='mailto:shariqfazal123@gmail.com' className={`${syne.className} xl:text-[30px] md2:text-[24px] font-semibold `}>shariqfazal123@gmail.com</Link>

      <div className='w-full flex md1:flex-row sm1:flex-col gap-[20px] sm1:items-center md1:items-start justify-between md1:mt-[50px]'>
        <h1 className="xl:text-[24px] md1:text-[18px] font-semibold">
          MUHAMMAD SHARIQ
        </h1>

        <p className={` font-medium`}>Latifabad, Hyderabad <br /> Sindh, Pakistan</p>

        <div className='flex flex-col gap-[5px] sm1:items-center'>
          <p className={`font-semibold border-b-[1px] border-[#bbb]`}>+92 318 2965 978</p>
          
          <div className='flex justify-start items-center gap-[10px]'>
            <Link href="https://www.linkedin.com/in/muhammad---shariq" target="_blank" className="">
              <FontAwesomeIcon icon={faLinkedinIn} className="text-white size-[20px] hover:bg-white hover:text-black duration-700 hover:duration-700 p-[7px] rounded-full" />
            </Link>
            <Link href="https://github.com/shariq001" target="_blank" className="">
              <FontAwesomeIcon icon={faGithub} className="text-white size-[20px] hover:bg-white hover:text-black duration-700 hover:duration-700 p-[7px] rounded-full" />
            </Link>
          </div>
        </div>
      </div>

      <p className='py-[16px] text-[#999] border-t-[1px] border-[#5e5e5e] w-full text-center mt-[20px] sm1:text-[12px] sm2:text-[14px]'>@2025. Muhammad Shariq. All Rights Reserved.</p>
    </div>
  )
}

export default Footer