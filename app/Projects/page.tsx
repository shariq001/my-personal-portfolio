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
    <div className='sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] '>
        
        {/* Section 1 */}
        <motion.div initial="hidden" whileInView="visible" variants={{hidden: { y: -100, opacity: 0 }, visible: { y: 0, opacity: 1 },}} transition={{ duration: 1}} className='py-[50px] border-b-[1px] border-[#3e3e3e]'>
            <h1 className={`${syne.className} text-[60px] font-medium`}>My Works</h1>
            <p className='text-[#a8a8a8]'>Showcase About Works</p>
        </motion.div>

        <div className='flex justify-center gap-[100px] items-center w-full  py-[100px]'>

          {/* project1 */}
          <motion.div initial="hidden" whileInView="visible" variants={{hidden: { x: -100, opacity: 0 }, visible: { x: 0, opacity: 1 },}} transition={{ duration: 1}} viewport={{ amount: 0.6 }} className='flex flex-col gap-[10px] w-[600px] h-[420px] bg-[#262626]  rounded-[10px] card'>
            <Image src='/project1.png' width={600} height={400} alt='Project 1' className='rounded-[10px] xl:w-[600px] xl:h-[300px]'/>
            <div className='px-[32px]'>
              <h1 className={`${syne.className} text-[30px] font-medium mb-[10px]`}>Personal Blog Website <span className='text-[#FF9142] ml-[15px]'>───</span></h1>

              <Link href='https://my-personal-blog-eta-virid.vercel.app/' target='_blank' className='px-[15px] py-[5px] bg-[#343434] hover:bg-[#494949] duration-500 hover:duration-500 text-[14px] rounded-[5px] text-[#bbb]'>View Here &gt;</Link>
            </div>
          </motion.div>


          {/* project2 */}
          <motion.div initial="hidden" whileInView="visible" variants={{hidden: { x: 100, opacity: 0 }, visible: { x: 0, opacity: 1 },}} transition={{ duration: 1}} viewport={{ amount: 0.6 }}  className='flex flex-col gap-[10px] w-[600px] h-[420px] bg-[#262626]  rounded-[10px] card'>
            <Image src='/project2.png' width={600} height={400} alt='Project 2' className='rounded-[10px] xl:w-[600px] '/>
            <div className='px-[32px]'>
              <h1 className={`${syne.className} text-[30px] font-medium mb-[10px]`}>E-Commerce Website <span className='text-[#FF9142] ml-[15px]'>───</span></h1>

              <Link href='https://ui-ux-hackathon-shariq.vercel.app/' target='_blank' className='px-[15px] py-[5px] bg-[#343434] hover:bg-[#494949] duration-500 hover:duration-500 text-[14px] rounded-[5px] text-[#bbb]'>View Here &gt;</Link>
            </div>
          </motion.div>
        </div>

        <div className='flex justify-center gap-[100px] items-center w-full  py-[50px]'>

          {/* project1 */}
          <motion.div initial="hidden" whileInView="visible" variants={{hidden: { x: -100, opacity: 0 }, visible: { x: 0, opacity: 1 },}} transition={{ duration: 1}} viewport={{ amount: 0.6 }} className='flex flex-col gap-[10px] w-[600px] h-[400px] bg-[#262626]  rounded-[10px] card'>
            <Image src='/project3.png' width={600} height={400} alt='Project 3' className='rounded-[10px] xl:w-[600px] xl:h-[275px]'/>
            <div className='px-[32px]'>
              <h1 className={`${syne.className} text-[30px] font-medium mb-[10px]`}>PakWheels Home page <span className='text-[#FF9142] ml-[15px]'>───</span></h1>

              <Link href='https://10-assignment-inky.vercel.app/' target='_blank' className='px-[15px] py-[5px] bg-[#343434] hover:bg-[#494949] duration-500 hover:duration-500 text-[14px] rounded-[5px] text-[#bbb]'>View Here &gt;</Link>
            </div>
          </motion.div>


          {/* project2 */}
          <motion.div initial="hidden" whileInView="visible" variants={{hidden: { x: 100, opacity: 0 }, visible: { x: 0, opacity: 1 },}} transition={{ duration: 1}} viewport={{ amount: 0.6 }} className='flex flex-col gap-[10px] w-[600px] h-[400px] bg-[#262626]  rounded-[10px] card'>
            <Image src='/project4.png' width={600} height={400} alt='Project 4' className='rounded-[10px] xl:w-[600px]'/>
            <div className='px-[32px]'>
              <h1 className={`${syne.className} text-[30px] font-medium mb-[10px]`}>Portfolio Website <span className='text-[#FF9142] ml-[15px]'>───</span></h1>

              <Link href='https://4-assignment-six.vercel.app/About' target='_blank' className='px-[15px] py-[5px] bg-[#343434] hover:bg-[#494949] duration-500 hover:duration-500 text-[14px] rounded-[5px] text-[#bbb]'>View Here &gt;</Link>
            </div>
          </motion.div>
        </div>

        <div className='flex justify-center gap-[100px] items-center w-full  py-[50px]'>

          {/* project1 */}
          <motion.div initial="hidden" whileInView="visible" variants={{hidden: { x: -100, opacity: 0 }, visible: { x: 0, opacity: 1 },}} transition={{ duration: 1}} viewport={{ amount: 0.6 }} className='flex flex-col gap-[10px] w-[600px] h-[400px] bg-[#262626]  rounded-[10px] card'>
            <Image src='/project5.png' width={600} height={400} alt='Project 5' className='rounded-[10px] xl:w-[600px] xl:h-[275px]'/>
            <div className='px-[32px]'>
              <h1 className={`${syne.className} text-[30px] font-medium mb-[10px]`}>SaaSto Website <span className='text-[#FF9142] ml-[15px]'>───</span></h1>

              <Link href='https://milestone2-assignment1-xi.vercel.app/' target='_blank' className='px-[15px] py-[5px] bg-[#343434] hover:bg-[#494949] duration-500 hover:duration-500 text-[14px] rounded-[5px] text-[#bbb]'>View Here &gt;</Link>
            </div>
          </motion.div>


          {/* project2 */}
          <motion.div initial="hidden" whileInView="visible" variants={{hidden: { x: 100, opacity: 0 }, visible: { x: 0, opacity: 1 },}} transition={{ duration: 1}} viewport={{ amount: 0.6 }} className='flex flex-col gap-[10px] w-[600px] h-[400px] bg-[#262626]  rounded-[10px] card'>
            <Image src='/project6.png' width={600} height={400} alt='Project 6' className='rounded-[10px] xl:w-[600px]'/>
            <div className='px-[32px]'>
              <h1 className={`${syne.className} text-[30px] font-medium mb-[10px]`}>Whitepace Landing Page <span className='text-[#FF9142] ml-[15px]'>───</span></h1>

              <Link href='https://6-assignment-eight.vercel.app/' target='_blank' className='px-[15px] py-[5px] bg-[#343434] hover:bg-[#494949] duration-500 hover:duration-500 text-[14px] rounded-[5px] text-[#bbb]'>View Here &gt;</Link>
            </div>
          </motion.div>
        </div>
    </div>
  )
}

export default Projects