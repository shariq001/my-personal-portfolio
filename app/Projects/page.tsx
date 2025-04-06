"use client"

import React from 'react'
import { Syne } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '700', '500', '600'], // Specify weights you need
  display: 'swap',
});

const Projects = () => {
  return (
    <div className='sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] max-w-[1600px] mx-auto'>
        
        {/* Section 1 */}
        <motion.div initial="hidden" whileInView="visible" variants={{hidden: { y: -100, opacity: 0 }, visible: { y: 0, opacity: 1 },}} transition={{ duration: 1}} className='py-[50px] border-b-[1px] border-[#3e3e3e]'>
            <h1 className={`${syne.className} xl:text-[60px] sm1:text-[20px] sm3:text-[22.5px] sm2:text-[25px] md1:text-[28px] md2:text-[32px] lg1:text-[35px] lg2:text-[45px] font-medium`}>My Works</h1>
            <p className='text-[#a8a8a8] sm1:text-[12px] sm2:text-[14px] md2:text-[16px]'>Showcase About Works</p>
        </motion.div>

        <div className='flex lg1:flex-row sm1:flex-col justify-center xl:gap-[100px] sm1:gap-[30px] items-center w-full  xl:py-[100px] sm1:py-[50px]'>

          {/* project1 */}
          <div className='flex flex-col gap-[10px] xl:w-[600px] xl:h-[420px] sm1:h-[270px] sm3:h-[300px] sm2:h-[350px] md1:h-[400px] lg1:h-[320px] lg2:h-[360px] bg-[#262626]  rounded-[10px] card'>
            <Image src='/project1.png' width={600} height={400} alt='Project 1' className='rounded-[10px] xl:w-[600px] xl:h-[300px]'/>
            <div className='xl:px-[32px] sm1:px-[10px] '>
              <h1 className={`${syne.className} xl:text-[30px] sm1:text-[20px] md1:text-[24px] font-medium mb-[10px]`}>Personal Blog Website <span className='text-[#FF9142] ml-[15px]'>───</span></h1>

              <Link href='https://my-personal-blog-eta-virid.vercel.app/' target='_blank' className='px-[15px] py-[5px] bg-[#343434] hover:bg-[#494949] duration-500 hover:duration-500 text-[14px] rounded-[5px] text-[#bbb]'>View Here &gt;</Link>
            </div>
          </div>


          {/* project2 */}
          <div  className='flex flex-col gap-[10px] xl:w-[600px] xl:h-[420px] sm1:h-[270px] sm3:h-[300px] sm2:h-[350px] md1:h-[400px] lg1:h-[320px] lg2:h-[360px] bg-[#262626]  rounded-[10px] card'>
            <Image src='/project2.png' width={600} height={400} alt='Project 2' className='rounded-[10px] xl:w-[600px] lg2:h-[245px] xl:h-[305px]'/>
            <div className='xl:px-[32px] sm1:px-[10px]'>
              <h1 className={`${syne.className} xl:text-[30px] sm1:text-[20px] md1:text-[24px] font-medium mb-[10px]`}>E-Commerce Website <span className='text-[#FF9142] ml-[15px]'>───</span></h1>

              <Link href='https://ui-ux-hackathon-shariq.vercel.app/' target='_blank' className='px-[15px] py-[5px] bg-[#343434] hover:bg-[#494949] duration-500 hover:duration-500 text-[14px] rounded-[5px] text-[#bbb]'>View Here &gt;</Link>
            </div>
          </div>
        </div>

        <div className='flex lg1:flex-row sm1:flex-col justify-center xl:gap-[100px] sm1:gap-[30px] items-center w-full  xl:py-[100px] sm1:py-[30px]'>

          {/* project1 */}
          <div className='flex flex-col gap-[10px] xl:w-[600px] xl:h-[420px] sm1:h-[270px] sm3:h-[300px] sm2:h-[350px] md1:h-[400px] lg1:h-[320px] lg2:h-[360px] bg-[#262626]  rounded-[10px] card'>
            <Image src='/project3.png' width={600} height={400} alt='Project 3' className='rounded-[10px] xl:w-[600px] xl:h-[300px]'/>
            <div className='xl:px-[32px] sm1:px-[10px] '>
              <h1 className={`${syne.className} xl:text-[30px] sm1:text-[20px] md1:text-[24px] font-medium mb-[10px]`}>PakWheels Home page  <span className='text-[#FF9142] ml-[15px]'>───</span></h1>

              <Link href='https://10-assignment-inky.vercel.app/' target='_blank' className='px-[15px] py-[5px] bg-[#343434] hover:bg-[#494949] duration-500 hover:duration-500 text-[14px] rounded-[5px] text-[#bbb]'>View Here &gt;</Link>
            </div>
          </div>


          {/* project2 */}
          <div  className='flex flex-col gap-[10px] xl:w-[600px] xl:h-[420px] sm1:h-[270px] sm3:h-[300px] sm2:h-[350px] md1:h-[400px] lg1:h-[320px] lg2:h-[360px] bg-[#262626]  rounded-[10px] card'>
            <Image src='/project4.png' width={600} height={400} alt='Project 4' className='rounded-[10px] xl:w-[600px] lg2:h-[245px] xl:h-[305px]'/>
            <div className='xl:px-[32px] sm1:px-[10px]'>
              <h1 className={`${syne.className} xl:text-[30px] sm1:text-[20px] md1:text-[24px] font-medium mb-[10px]`}>Portfolio Website  <span className='text-[#FF9142] ml-[15px]'>───</span></h1>

              <Link href='https://4-assignment-six.vercel.app/' target='_blank' className='px-[15px] py-[5px] bg-[#343434] hover:bg-[#494949] duration-500 hover:duration-500 text-[14px] rounded-[5px] text-[#bbb]'>View Here &gt;</Link>
            </div>
          </div>
        </div>

        <div className='flex lg1:flex-row sm1:flex-col justify-center xl:gap-[100px] sm1:gap-[30px] items-center w-full  xl:py-[100px] sm1:py-[30px]'>

          {/* project1 */}
          <div className='flex flex-col gap-[10px] xl:w-[600px] xl:h-[420px] sm1:h-[270px] sm3:h-[300px] sm2:h-[350px] md1:h-[400px] lg1:h-[320px] lg2:h-[360px] bg-[#262626]  rounded-[10px] card'>
            <Image src='/project5.png' width={600} height={400} alt='Project 5' className='rounded-[10px] xl:w-[600px] xl:h-[300px]'/>
            <div className='xl:px-[32px] sm1:px-[10px] '>
              <h1 className={`${syne.className} xl:text-[30px] sm1:text-[20px] md1:text-[24px] font-medium mb-[10px]`}>SaaSto Website  <span className='text-[#FF9142] ml-[15px]'>───</span></h1>

              <Link href='https://milestone2-assignment1-xi.vercel.app/' target='_blank' className='px-[15px] py-[5px] bg-[#343434] hover:bg-[#494949] duration-500 hover:duration-500 text-[14px] rounded-[5px] text-[#bbb]'>View Here &gt;</Link>
            </div>
          </div>


          {/* project2 */}
          <div  className='flex flex-col gap-[10px] xl:w-[600px] xl:h-[420px] sm1:h-[270px] sm3:h-[300px] sm2:h-[350px] md1:h-[400px] lg1:h-[320px] lg2:h-[360px] bg-[#262626]  rounded-[10px] card'>
            <Image src='/project6.png' width={600} height={600} alt='Project 6' className='rounded-[10px] xl:w-[600px] lg2:h-[245px] xl:h-[305px]'/>
            <div className='xl:px-[32px] sm1:px-[10px]'>
              <h1 className={`${syne.className} xl:text-[30px] sm1:text-[20px] md1:text-[24px] font-medium mb-[10px]`}>Whitepace Landing Page   <span className='text-[#FF9142] ml-[15px]'>───</span></h1>

              <Link href='https://6-assignment-eight.vercel.app/' target='_blank' className='px-[15px] py-[5px] bg-[#343434] hover:bg-[#494949] duration-500 hover:duration-500 text-[14px] rounded-[5px] text-[#bbb]'>View Here &gt;</Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects