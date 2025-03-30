
import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedinIn, faQuora } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div className='xl:px-[100px] sm1:px-[16px] sm3:px-[25px] md2:px-[30px] lg2:px-[50px] py-[30px] flex flex-col gap-[20px] border-t-[1px] border-[#272727]'>
        <div className='flex justify-between items-center w-full'>
            

            <p className='text-[#8b8b8b] xl:text-[14px] sm1:text-[12px]'>&copy; Copyright  Muhammad Shariq 2025.</p>
            
            <nav className='md1:flex justify-center items-center xl:gap-[30px] md1:gap-[20px] border-[#434343] border-[2px] rounded-full py-[5px] px-[15px] xl:text-[18px] sm1:hidden'>
                <Link href="https://www.linkedin.com/in/muhammad---shariq" target='_blank' className='bg-[#292929] hover:bg-[#474747] duration-300 hover:duration-300 text-white lg2:py-[8px] lg2:px-[15px] rounded-full'><FontAwesomeIcon icon={faLinkedinIn} className='lg2:size-[20px] md1:size-[16px] lg1:size-[18px] text-white'/></Link>

                <Link href="https://www.instagram.com/mu_shariq1/" target='_blank' className='bg-[#292929] hover:bg-[#474747] duration-300 hover:duration-300 text-white lg2:py-[8px] lg2:px-[15px] rounded-full'><FontAwesomeIcon icon={faInstagram} className='lg2:size-[20px] md1:size-[16px] lg1:size-[18px] text-white'/></Link>
                
                <Link href="https://www.quora.com/profile/Muhammad-Shariq-163" target='_blank' className='bg-[#292929] hover:bg-[#474747] duration-300 hover:duration-300 text-white lg2:py-[8px] lg2:px-[15px] rounded-full'><FontAwesomeIcon icon={faQuora} className='lg2:size-[20px] md1:size-[16px] lg1:size-[18px] text-white'/></Link>

                <Link href="https://github.com/shariq001" target='_blank' className='bg-[#292929] hover:bg-[#474747] duration-300 hover:duration-300 text-white lg2:py-[8px] lg2:px-[15px] rounded-full'><FontAwesomeIcon icon={faGithub} className='lg2:size-[20px] md1:size-[16px] lg1:size-[18px] text-white'/></Link>
            </nav>

            
        </div>

        
    </div>
  )
}

export default Footer