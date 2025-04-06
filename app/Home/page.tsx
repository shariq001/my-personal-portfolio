"use client"
import React from 'react'
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
    <div className='sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] scroll-smooth max-w-[1600px] mx-auto'>
      
      {/* Section 1 */}
      <div className='xl:py-[100px] sm1:py-[50px] my-[20px] flex  flex-col gap-[50px] justify-center items-center bg-gradient-to-tr from-[#1f1f1f] via-[#1f1f1f] to-[#ffffff]/18 rounded-[20px] '>

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
          className={`${syne.className} xl:text-[60px] sm1:text-[25px] md1:text-[28px] md1:w-[500px] md2:text-[32px] md2:w-[550px] lg1:text-[35px] lg2:text-[45px] lg2:w-[600px] font-medium text-center leading-[95%] xl:w-[900px]`}
        />

        <Link href='/Projects' className='font-medium text-[14px] bg-[#FF9142] hover:bg-[#ff7842ec] duration-500 hover:duration-500 px-[32px] py-[10px] rounded-full hover:animate-pulse'>EXPLORE WORKS <FontAwesomeIcon icon={faArrowRight} className='size-[15px] inline-flex items-center ml-[5px] ' /></Link>
      </div>

      {/* Section 2 */}
      <div className='flex md1:flex-row sm1:flex-col justify-between px-[20px] items-center gap-[50px] bg-gradient-to-tl from-[#1f1f1f] via-[#1f1f1f] to-[#ffffff]/18 rounded-[20px] '>

        {/* Left */}
        <div className='flex flex-col gap-[20px] py-[100px] xl:w-[625px] md1:w-[300px] lg1:w-[400px] lg2:w-[600px]'>
          <h1 className={`${syne.className} xl:text-[40px] sm1:text-[25px] md1:text-[28px] md2:text-[32px] lg1:text-[33.5px] lg2:text-[35px] font-medium leading-[90%]`}>Let&apos;s get know about me closer</h1>

          <p className={`text-[#a8a8a8]`}>Muhammad Shariq is a frontend developer passionate about crafting responsive and interactive UIs. His work spans web design, Next.js projects, and TypeScript applications, while also learning Python to expand his skills.</p>

          <Link href='/About' className='font-medium text-[14px] bg-[#FF9142] hover:bg-[#ff7842ec] duration-500 hover:duration-500 px-[32px] py-[10px] rounded-full w-[240px] mt-[10px] hover:animate-pulse'>Discover More About Me</Link>
        </div>

        <Image src='/my-photo2.jpg' alt='My Photo' width={500} height={500} className='rounded-[10px] shadow-xl shadow-[#464646] xl:w-[500px] md1:w-[300px] md2:w-[350px] lg2:w-[400px]'/>

      </div>

      {/* Section 3 */}
      <div className='flex flex-col justify-center items-center py-[50px]'>

        {/* 1 */}
        <div  className='rounded-[20px] flex flex-col justify-center items-center gap-[50px] w-full xl:h-[400px] sm1:h-[250px] md1:h-[200px] md2:h-[250px] lg2:h-[300px]'>
          <h1 className={`${syne.className} xl:text-[60px] sm1:text-[20px] sm2:text-[25px] md1:text-[28px] md2:text-[32px] lg1:text-[35px] lg2:text-[45px] font-medium backdrop-brightness-115 xl:px-[50px] px-[25px] rounded-full`}>My Projects Highlight</h1>

          <Link href='/Projects' className='font-medium text-[14px] border-[#FF9142] border-[2px] hover:bg-[#FF9142] duration-700 hover:duration-700 px-[32px] py-[15px] rounded-full hover:animate-pulse'>EXPLORE MORE <FontAwesomeIcon icon={faArrowRight} className='size-[15px] inline-flex items-center ml-[5px] ' /></Link>
        </div>

        {/* 2 */}
        <div className='flex lg1:flex-row sm1:flex-col justify-center xl:gap-[100px] sm1:gap-[30px] items-center w-full'>

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
        
        {/* Section 4 */}
        <div className='py-[50px] bg-gradient-to-tl from-[#1f1f1f] via-[#1f1f1f] to-[#ffffff]/18 rounded-[20px] w-full my-[50px] px-[20px] md1:w-[600px] lg1:w-[800px] lg2:w-[1000px]'>

          <div className='w-full flex justify-between items-center '>
            <h1 className={`${syne.className} xl:text-[60px] sm1:text-[25px] md2:text-[32px] lg2:text-[40px] font-medium`}>Testimonial</h1>
            <Image src='/quotes.png' width={200} height={180} alt='Quotes' className='sm1:hidden md2:block xl:w-[200px] md2:w-[80px] lg1:w-[150px] lg2:w-[165px]'/>
          </div>

          <p className='text-[#a8a8a8] lg2:text-[18px] sm1:text-[12px] md2:text-[15px] lg2:w-[800px] md1:w-[450px]'>Muhammad Shariq Fazal has demonstrated exceptional dedication and efficiency during his internship at InnovaTech. His ability to complete tasks under tight deadlines while maintaining high-quality standards is truly commendable. He showcases strong problem-solving skills, a proactive approach, and a keen attention to detail, making him a valuable asset to any team. His professionalism and commitment to excellence reflect his potential for a successful career in the tech industry.</p>
          <h2 className={`${syne.className} lg2:text-[24px] md2:text-[18px] font-semibold mt-[20px] leading-[95%]`}>- Usman Ghori <br /> <span className='text-[#a8a8a8] lg2:text-[16px] sm1:text-[10px] md2:text-[13px]'>InnovaTech (CEO)</span></h2>
        </div>
      </div>





    </div>
  )
}

export default Home