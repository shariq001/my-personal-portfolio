"use client"
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { Syne } from 'next/font/google';
import { TypeAnimation } from 'react-type-animation';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '700', '500', '600'], // Specify weights you need
  display: 'swap',
});

const Home = () => {
  return (
    <div className='sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] scroll-smooth'>
      
      {/* Section 1 */}
      <div className='py-[100px] my-[20px] flex  flex-col gap-[50px] justify-center items-center bg-gradient-to-tr from-[#1f1f1f] via-[#1f1f1f] to-[#ffffff]/18 rounded-[20px] '>

        <TypeAnimation
          sequence={[
            'Crafting Seamless & Interactive Front-end Experiences.', // Full sentence
            2000, // Wait before erasing
            '',   // Erase
            500, // Wait before retyping
          ]}
          wrapper="span"
          speed={50}
          style={{ display: 'inline-block', color: '#fff' }}
          repeat={Infinity}
          className={`${syne.className} text-[60px] font-medium text-center leading-[95%] w-[900px]`}
        />

        <Link href='/Projects' className='font-medium text-[14px] bg-[#FF9142] hover:bg-[#ff7842ec] duration-500 hover:duration-500 px-[32px] py-[10px] rounded-full hover:animate-pulse'>EXPLORE WORKS <FontAwesomeIcon icon={faArrowRight} className='size-[15px] inline-flex items-center ml-[5px] ' /></Link>
      </div>

      {/* Section 2 */}
      <div className='flex justify-between px-[20px] items-center gap-[50px] bg-gradient-to-tl from-[#1f1f1f] via-[#1f1f1f] to-[#ffffff]/18 rounded-[20px] '>

        {/* Left */}
        <motion.div initial="hidden" whileInView="visible" variants={{hidden: { x: -100, opacity: 0 }, visible: { x: 0, opacity: 1 },}} transition={{ duration: 0.8 }} className='flex flex-col gap-[20px] py-[100px] w-[625px] '>
          <h1 className={`${syne.className} text-[40px] font-medium`}>Let&apos;s get know about me closer</h1>

          <p className={`text-[#a8a8a8]`}>Muhammad Shariq is a frontend developer passionate about crafting responsive and interactive UIs. His work spans web design, Next.js projects, and TypeScript applications, while also learning Python to expand his skills.</p>

          <Link href='/About' className='font-medium text-[14px] bg-[#FF9142] hover:bg-[#ff7842ec] duration-500 hover:duration-500 px-[32px] py-[10px] rounded-full w-[240px] mt-[10px] hover:animate-pulse'>Discover More About Me</Link>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" variants={{hidden: { x: 100, opacity: 0 }, visible: { x: 0, opacity: 1 },}} transition={{ duration: 0.8 }}>
          <Image src='/my-photo2.jpg' alt='My Photo' width={500} height={500} className='rounded-[10px] shadow-xl shadow-[#464646] xl:w-[500px] md1:w-[300px] md2:w-[350px] lg2:w-[400px]'/>
        </motion.div>

      </div>

      {/* Section 3 */}
      <div className='flex flex-col justify-center items-center py-[50px]'>

        {/* 1 */}
        <motion.div initial="hidden" whileInView="visible" variants={{hidden: { x: -100, opacity: 0 }, visible: { x: 0, opacity: 1 },}} transition={{ duration: 1}} className='rounded-[20px] flex flex-col justify-center items-center gap-[50px] w-full h-[400px]'>
          <h1 className={`${syne.className} text-[60px] font-medium backdrop-brightness-115 px-[50px] rounded-full`}>My Projects Highlight</h1>

          <Link href='/Projects' className='font-medium text-[14px] border-[#FF9142] border-[2px] hover:bg-[#FF9142] duration-700 hover:duration-700 px-[32px] py-[15px] rounded-full hover:animate-pulse'>EXPLORE MORE <FontAwesomeIcon icon={faArrowRight} className='size-[15px] inline-flex items-center ml-[5px] ' /></Link>
        </motion.div>

        {/* 2 */}
        <div className='flex justify-center gap-[100px] items-center w-full'>

          {/* project1 */}
          <motion.div initial="hidden" whileInView="visible" variants={{hidden: { x: -100, opacity: 0 }, visible: { x: 0, opacity: 1 },}} transition={{ duration: 1.5 }} className='flex flex-col gap-[10px] w-[600px] h-[420px] bg-[#262626]  rounded-[10px] card'>
            <Image src='/project1.png' width={600} height={400} alt='Project 1' className='rounded-[10px] xl:w-[600px] xl:h-[300px]'/>
            <div className='px-[32px]'>
              <h1 className={`${syne.className} text-[30px] font-medium mb-[10px]`}>Personal Blog Website <span className='text-[#FF9142] ml-[15px]'>───</span></h1>

              <Link href='https://my-personal-blog-eta-virid.vercel.app/' target='_blank' className='px-[15px] py-[5px] bg-[#343434] hover:bg-[#494949] duration-500 hover:duration-500 text-[14px] rounded-[5px] text-[#bbb]'>View Here &gt;</Link>
            </div>
          </motion.div>


          {/* project2 */}
          <motion.div initial="hidden" whileInView="visible" variants={{hidden: { x: 200, opacity: 0 }, visible: { x: 0, opacity: 1 },}} transition={{ duration: 1 }}  className='flex flex-col gap-[10px] w-[600px] h-[420px] bg-[#262626]  rounded-[10px] card'>
            <Image src='/project2.png' width={600} height={400} alt='Project 2' className='rounded-[10px] xl:w-[600px] '/>
            <div className='px-[32px]'>
              <h1 className={`${syne.className} text-[30px] font-medium mb-[10px]`}>E-Commerce Website <span className='text-[#FF9142] ml-[15px]'>───</span></h1>

              <Link href='https://ui-ux-hackathon-shariq.vercel.app/' target='_blank' className='px-[15px] py-[5px] bg-[#343434] hover:bg-[#494949] duration-500 hover:duration-500 text-[14px] rounded-[5px] text-[#bbb]'>View Here &gt;</Link>
            </div>
          </motion.div>
        </div>
        
        {/* Section 4 */}
        <div className='py-[50px] bg-gradient-to-tl from-[#1f1f1f] via-[#1f1f1f] to-[#ffffff]/18 rounded-[20px] w-full my-[50px] px-[20px]'>

          <div className='w-full flex justify-between items-center '>
            <h1 className={`${syne.className} text-[60px] font-medium`}>Testimonial</h1>
            <Image src='/quotes.png' width={200} height={180} alt='Quotes' />
          </div>

          <p className='text-[#a8a8a8] text-[18px] xl:w-[800px]'>Muhammad Shariq Fazal has demonstrated exceptional dedication and efficiency during his internship at InnovaTech. His ability to complete tasks under tight deadlines while maintaining high-quality standards is truly commendable. He showcases strong problem-solving skills, a proactive approach, and a keen attention to detail, making him a valuable asset to any team. His professionalism and commitment to excellence reflect his potential for a successful career in the tech industry.</p>
          <h2 className={`${syne.className} text-[24px] font-semibold mt-[20px] leading-[95%]`}>- Usman Ghori <br /> <span className='text-[#a8a8a8] text-[16px]'>InnovaTech (CEO)</span></h2>
        </div>
      </div>





    </div>
  )
}

export default Home