"use client"

import React from 'react'
import { Syne } from 'next/font/google';
import { motion } from "framer-motion";
import { useForm, ValidationError } from '@formspree/react';
import Link from 'next/link';
const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '700', '500', '600'], // Specify weights you need
  display: 'swap',
});



const Contact = () => {
    const [state, handleSubmit] = useForm("mwplrybg");
        if (state.succeeded) {
            return <div className='flex flex-col px-[200px] gap-[20px] py-[50px] max-w-[1600px] mx-auto'>
                <p>Thanks for Contacting Us!</p>
                <Link href='/Home' className='font-medium text-[14px] bg-[#FF9142] hover:bg-[#ff7842ec] duration-500 hover:duration-500 px-[32px] py-[10px] rounded-full w-52 '>Back to Home Page</Link>
            </div>
        }

  return (
    <div className='sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] max-w-[1600px] mx-auto'>
        
            {/* Section 1 */}
        <motion.div initial="hidden" whileInView="visible" variants={{hidden: { y: -100, opacity: 0 }, visible: { y: 0, opacity: 1 },}} transition={{ duration: 1}}  className='py-[50px] border-b-[1px] border-[#3e3e3e] flex flex-col gap-[20px]'>
                <h1 className={`${syne.className} xl:text-[60px] sm1:text-[20px] sm3:text-[22.5px] sm2:text-[25px] md1:text-[28px] md2:text-[32px] lg1:text-[35px] lg2:text-[45px] font-medium`}>Contact Us</h1>
                <p className='text-[#a8a8a8] sm1:text-[12px] sm2:text-[14px] md2:text-[16px]'>For any Project Knock Us</p>
        </motion.div>

        {/* Section 2 */}
        <div className='flex md1:flex-row sm1:flex-col gap-[30px] justify-between items-center w-full py-[50px]'>
            <h1 className={`${syne.className} xl:text-[60px] sm1:text-[20px] sm3:text-[22.5px] sm2:text-[25px] md1:text-[28px] md2:text-[32px] lg1:text-[35px] lg2:text-[45px] font-medium xl:w-[435px] leading-[90%]`}>Get in Touch With Us</h1>

            <form onSubmit={handleSubmit} action='https://formspree.io/f/mwplrybg' method='POST' className='flex flex-col gap-[10px] xl:w-[500px] md1:w-[400px] p-[30px] backdrop-glass'>
                <label htmlFor="name" className='sm1:text-[14px] sm3:text-[16px] lg2:text-[18px] xl:text-[22px] font-medium mt-[20px]'>
                    Name
                </label>
                <input
                    id="name"
                    type="text" 
                    name="name"
                    placeholder='Enter Your Full Name'
                />
                <label htmlFor="email" className='sm1:text-[14px] sm3:text-[16px] lg2:text-[18px] xl:text-[22px] font-medium mt-[20px]'>
                    Email Address
                </label>
                <input
                    id="email"
                    type="email" 
                    name="email"
                    placeholder='Enter Your Email Address'
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <label htmlFor="message" className='sm1:text-[14px] sm3:text-[16px] lg2:text-[18px] xl:text-[22px] font-medium mt-[20px]'>
                    Message
                </label>
                <textarea id="message"
                    name="message" placeholder='Enter Your Message'>
                    
                </textarea>
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting} className='font-medium text-[14px] bg-[#FF9142] hover:bg-[#ff7842ec] duration-500 hover:duration-500 px-[32px] py-[10px] rounded-full cursor-pointer'>
                    Submit
                </button>
            </form>
        </div>
    </div>
  )
}

export default Contact