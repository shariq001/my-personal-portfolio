
import { faAngleRight, faCircleDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className=''>
      
      {/* Section 1 */}
      <div className='xl:px-[100px] xl:pt-[50px] flex justify-center items-center sm1:px-[16px] sm3:px-[25px] sm1:pt-[50px] md2:px-[30px] lg2:px-[50px]'>
        
      <table className='border-[1px] border-white'>
          <thead>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td></td>
              <td colSpan={4} rowSpan={4} className='text-center '>
                <h1 className='lg2:text-[25px] font-semibold mb-[20px] sm3:text-[18px] md2:text-[20px] lg1:text-[22px]'>I Design and Build Clean Websites!</h1>
                <p className='mb-[25px] sm1:text-[12px] sm3:text-[14px] lg1:text-[16px] xl:text-[18px]'>Passionate about crafting interactive web experiences <br className='sm1:hidden md2:block'/> with modern technologies and AI.</p>
                <Link href="https://www.fiverr.com/s/gDXNyeb" target="_blank" className='bg-gradient-to-r from-[#3B1C32] to-[#6A1E55] xl:px-[25px] xl:py-[10px] rounded-full mt-[10px] hover:px-[40px] duration-500 hover:duration-500 font-medium sm1:px-[10px] sm1:py-[7px] sm1:text-[13px] sm3:text-[15px] sm3:px-[17px]  lg1:px-[20px] lg1:text-[17px]'>Hire Me</Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section 2 */}
      <div className='mb-[50px] border-y-[1px] border-[#3b3b3b] xl:h-[85px] xl:px-[100px] md1:flex flex-col justify-center items-center sm1:px-[16px] sm1:py-[10px] sm1:hidden sm3:px-[25px] md2:px-[30px] lg2:px-[50px]'>
        <div className='flex flex-wrap justify-between items-center xl:text-[20px] lg1:text-[17px] md2:text-[14px] w-full'>
          <p>Typescript</p>
          <FontAwesomeIcon icon={faCircleDot} className='size-[15px] text-[#6A1E55]' />

          <p>NextJs</p>
          <FontAwesomeIcon icon={faCircleDot} className='size-[15px] text-[#6A1E55]' />

          <p>Tailwind CSS</p>
          <FontAwesomeIcon icon={faCircleDot} className='size-[15px] text-[#6A1E55]' />

          <p>Python</p>
          <FontAwesomeIcon icon={faCircleDot} className='size-[15px] text-[#6A1E55]' />

          <p>Figma</p>
          <FontAwesomeIcon icon={faCircleDot} className='size-[15px] text-[#6A1E55]' />

          <p>Responsive Design</p>
          <FontAwesomeIcon icon={faCircleDot} className='size-[15px] text-[#6A1E55]' />

          <p>GitHub</p>
        </div>
      </div>

      {/* Section 3 */}
      <div className='xl:px-[100px] py-[50px] sm1:px-[16px] sm3:px-[25px] md2:px-[30px] lg2:px-[50px] md2:w-[550px] xl:w-full'>
        <h1 className='xl:text-[40px] sm1:text-[22px] md1:text-[24px] lg1:text-[26px] lg2:text-[28px] flex items-center'>My Process to Build Websites <Image src='/star.png' width={30} height={30} alt='Star' className='ml-[10px] inline-flex sm1:hidden'/></h1>

        <div className='flex justify-start gap-[50px]  mt-[30px]'>

          <div className='md2:flex flex-col gap-[20px] items-center sm1:hidden'>
            <p className='text-[22px] border-[2px] rounded-full py-[10px] px-[25px]'>1</p>
            <p className='rotate-90'>-------</p>

            <p className='text-[22px] border-[2px] rounded-full py-[10px] px-[25px]'>2</p>
            <p className='rotate-90'>-------</p>

            <p className='text-[22px] border-[2px] rounded-full py-[10px] px-[25px]'>3</p>
          </div>

          <ol className='xl:pl-[50px]  flex flex-col gap-[30px]'>
            <li className='xl:text-[22px] sm3:text-[18px]'>
              <p>Step 1: Collect & Recommend Figma Design</p>
              <p className='xl:text-[18px] sm1:text-[13px] sm3:text-[15px] mt-[5px] xl:w-[500px] ml-[15px] text-[#bbb]'>I take designs from clients but recommend providing a Figma file for better structuring.</p>
            </li>

            <li className='xl:text-[22px] sm3:text-[18px]'>
              <p>Step 2: Understand Structure & Content</p>
              <p className='xl:text-[18px] sm1:text-[13px] sm3:text-[15px] mt-[5px] xl:w-[500px] ml-[15px] text-[#bbb]'>I analyze the website&apos;s structure, purpose, and gather content details.</p>
            </li>

            <li className='xl:text-[22px] sm3:text-[18px]'>
              <p>Step 3: Code with Next.js & Tailwind</p>
              <p className='xl:text-[18px] sm1:text-[13px] sm3:text-[15px] mt-[5px] xl:w-[500px] ml-[15px] text-[#bbb]'>I develop the website using Next.js and Tailwind CSS for a responsive build.</p>
            </li>
          </ol>
        </div>
      </div>

      {/* Section 4 */}
      <div className='xl:px-[100px] sm1:px-[16px] sm3:px-[25px] md2:px-[30px] lg2:px-[50px] py-[50px] flex flex-col gap-[50px]'>
        <h1 className='xl:text-[40px] sm1:text-[22px] md1:text-[24px] lg1:text-[26px] lg2:text-[28px] flex items-center'>Some Featured Projects <Image src='/star.png' width={30} height={30} alt='Star' className='ml-[10px] sm1:hidden'/></h1>

        {/* 1 */}
        <div className='xl:w-[1200px] xl:h-[500px] bg-[#151515] p-[30px] flex lg1:flex-row sm1:flex-col justify-start items-center gap-[50px] rounded-[9px]'>

        <Image src='/project1.png' alt='Project 1' width={700} height={500} className='border-t-[3px] border-l-[3px] border-[#84286a] rounded-[24px] lg1:w-[500px] lg2:w-[600px] xl:w-[700px]'/>

          <div className='flex flex-col gap-[10px] '>
            <p className='xl:text-[30px] font-semibold sm1:text-[18px] sm3:text-[20px] md2:text-[22px]'>1. Personal Blog</p>
            <p className='text-[#bbb] xl:text-[16px] sm1:text-[13px] sm3:text-[15px]'>Designed for readers who love to know about the tech world, Artificial Intelligence, and IT industry innovations.</p>
            <Link href="https://my-personal-blog-eta-virid.vercel.app/" target='_blank' className="bg-gradient-to-r from-[#3B1C32] to-[#6A1E55] xl1:px-[25px] xl1:hover:px-[40px] duration-500 hover:duration-500 xl1:py-[15px] sm1:py-[7px] rounded-full font-medium sm1:px-[15px] sm1:text-[12px] sm3:text-[14px] md1:text-[16px] md1:px-[20px] md1:py-[10px] lg2:text-[18px] lg2:px-[23px] lg2:py-[13px]">
              View Here
            </Link>
          </div>
        </div>

        {/* 2 */}
        <div className='xl:w-[1200px] xl:h-[500px] bg-[#151515] p-[30px] flex lg1:flex-row sm1:flex-col justify-start items-center gap-[50px] rounded-[9px] '>

        <Image src='/project2.png' alt='Project 1' width={700} height={500} className='border-t-[3px] border-l-[3px] border-[#84286a] rounded-[24px] lg1:w-[500px] lg2:w-[600px] xl:w-[700px]'/>

          <div className='flex flex-col gap-[10px]'>
              <p className='xl:text-[30px] font-semibold sm1:text-[18px] sm3:text-[20px] md2:text-[22px]'>2. E-commerce Website</p>
              <p className='text-[#bbb] xl:text-[16px] sm1:text-[13px] sm3:text-[15px]'>An e-commerce website UI design showcasing a modern and user-friendly interface. Created for a seamless shopping experience with intuitive navigation and a clean layout.</p>
              <Link href="https://ui-ux-hackathon-shariq.vercel.app/" target='_blank' className="bg-gradient-to-r from-[#3B1C32] to-[#6A1E55] xl1:px-[25px] xl1:hover:px-[40px] duration-500 hover:duration-500 xl1:py-[15px] sm1:py-[7px] rounded-full font-medium sm1:px-[15px] sm1:text-[12px] sm3:text-[14px] md1:text-[16px] md1:px-[20px] md1:py-[10px] lg2:text-[18px] lg2:px-[23px] lg2:py-[13px]">
              View Here
            </Link>
          </div>
        </div>

        <Link href='' className='bg-gradient-to-r from-[#3B1C32] to-[#6A1E55] duration-700 hover:duration-700 xl:px-[25px] py-[15px] rounded-full font-medium xl:w-[250px] xl:hover:w-[280px] text-center xl:text-[20px] flex items-center justify-center xl:gap-[5px] sm1:w-[170px] sm1:text-[14px]'>View All Projects <FontAwesomeIcon icon={faAngleRight} className='size-[20px]' /></Link>


      </div>

      {/* Section 5 */}
      <div className='xl:px-[100px] sm1:px-[16px] sm3:px-[25px] md2:px-[30px] lg2:px-[50px] py-[50px] flex lg2:flex-row sm1:flex-col justify-between lg2:items-center md1:items-start gap-[50px] md2:w-[550px] lg2:w-full'>
        
        {/* 1 */}
        <div className='flex flex-col gap-[50px] lg2:w-[600px]'>

          <h1 className='xl:text-[40px] flex items-center sm1:text-[22px] md1:text-[24px] lg1:text-[26px] lg2:text-[28px]'>Testimonial <Image src='/star.png' width={30} height={30} alt='Star' className='ml-[10px] sm1:hidden'/></h1>

          <div className='xl:w-[500px] p-[20px] border-t-[3px] border-l-[3px] border-[#84286a] rounded-[24px] '>

          
            <h2 className='lg2:text-[24px] sm1:text-[18px] sm3:text-[20px] lg1:text-[22px] font-semibold text-left leading-[90%] mb-[10px]'>Usman Ghori <br /><span className='xl:text-[14px] sm1:text-[12px] sm3:text-[13px] lg1:text-[15px] font-normal'>CEO (InnovaTech)</span></h2>

            <p className='text-[#bbb] lg1:text-[15px] lg2:text-[16px] sm1:text-[12px] sm3:text-[14px] '>Muhammad Shariq Fazal has demonstrated exceptional dedication and efficiency during his internship at InnovaTech. His ability to complete tasks under tight deadlines while maintaining high-quality standards is truly commendable. He showcases strong problem-solving skills, a proactive approach, and a keen attention to detail, making him a valuable asset to any team. His professionalism and commitment to excellence reflect his potential for a successful career in the tech industry.</p>
          </div>

        </div>

        {/* 2 */}
        <div className='flex flex-col gap-[20px]'>
          <h1 className='xl:text-[40px] sm1:text-[22px] md1:text-[24px] lg1:text-[26px] lg2:text-[28px] flex items-center'>Have Idea About Project? <Image src='/star.png' width={30} height={30} alt='Star' className='ml-[10px] sm1:hidden'/></h1>

          <p className='xl:w-[500px] sm1:text-[14px] lg1:text-[16px]'>Got an idea or a project in mind? Let&apos;s bring it to life—send me a message!</p>

          <Link href='' className='bg-gradient-to-r from-[#3B1C32] to-[#6A1E55] xl:px-[25px] py-[15px] rounded-full font-semibold xl:w-[210px] xl:hover:w-[230px] duration-700 hover:duration-700 text-center sm1:text-[14px] sm1:w-[170px]'>Send me a Message</Link>

        </div>
      </div>





    </div>
  )
}

export default Home