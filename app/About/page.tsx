"use client"

import React from 'react'
import { Syne } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '700', '500', '600'], // Specify weights you need
  display: 'swap',
});

const About = () => {
  return (
    <div className='sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] '>
      
      {/* Section 1 */}
      <motion.div initial="hidden" whileInView="visible" variants={{hidden: { y: -100, opacity: 0 }, visible: { y: 0, opacity: 1 },}} transition={{ duration: 1}}  className='py-[50px] border-b-[1px] border-[#3e3e3e] flex flex-col gap-[20px]'>
            <h1 className={`${syne.className} text-[60px] font-medium`}>About Me</h1>
            <p className='text-[#a8a8a8]'>Little Brief About Myself</p>
            <Link href='/' className='font-medium text-[14px] bg-[#FF9142] hover:bg-[#ff7842ec] duration-500 hover:duration-500 px-[32px] py-[10px] rounded-full hover:animate-pulse w-[230px]'>DOWNLOAD RESUME <FontAwesomeIcon icon={faDownload} className='size-[15px] inline-flex items-center ml-[5px] ' /></Link>
      </motion.div>

      {/* Section 2 */}
      <div className='flex justify-between items-center w-full py-[50px]'>
        <h1 className={`${syne.className} text-[60px] font-medium w-[535px] leading-[90%]`}>I turn creative ideas into smooth, responsive web experiences.</h1>

        <p className={`text-[#949494] text-[20px] w-[500px]`}>I’m a passionate front-end developer focused on creating clean, responsive, and user-friendly websites. I love turning ideas into interactive designs that not only look good but also work smoothly across all devices. My goal is to make the web simple, beautiful, and accessible for everyone.</p>
      </div>

      {/* Section 3 */}
      <div className='flex justify-between items-center w-full py-[50px]'>
        <motion.div initial="hidden" whileInView="visible" variants={{hidden: { x: -100, opacity: 0 }, visible: { x: 0, opacity: 1 },}} transition={{ duration: 1}} viewport={{ amount: 0.7 }}>
          <Image src='/my-photo.jpg' alt='My Photo' width={500} height={500} className='rounded-[10px] shadow-xl shadow-[#464646] xl:w-[500px] md1:w-[300px] md2:w-[350px] lg2:w-[400px]'/>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" variants={{hidden: { x: 100, opacity: 0 }, visible: { x: 0, opacity: 1 },}} transition={{ duration: 1}} viewport={{ amount: 0.7 }}>
          <Image src='/my-photo2.jpg' alt='My Photo' width={500} height={500} className='rounded-[10px] shadow-xl shadow-[#464646] xl:w-[500px] md1:w-[300px] md2:w-[350px] lg2:w-[400px]'/>
        </motion.div>
      </div>

      {/* Section 4 */}
      <div className='w-full py-[50px]'>
        <h1 className={`${syne.className} text-[60px] font-medium w-[535px] leading-[90%]`}>Follow me on:</h1>

        <div className='flex justify-between items-center w-full py-[20px]'>
          <Link href='https://www.linkedin.com/in/muhammad---shariq' target='_blank' className='text-[#949494] hover:underline text-[24px] font-semibold'>LINKEDIN</Link>

          <Link href='https://www.quora.com/profile/Muhammad-Shariq-163' target='_blank' className='text-[#949494] hover:underline text-[24px] font-semibold'>QUORA</Link>

          <Link href='https://github.com/shariq001' target='_blank' className='text-[#949494] hover:underline text-[24px] font-semibold'>GITHUB</Link>

          <Link href='https://www.instagram.com/mu_shariq1/' target='_blank' className='text-[#949494] hover:underline text-[24px] font-semibold'>INSTAGRAM</Link>
        </div>
      </div>
    </div>
  )
}

export default About