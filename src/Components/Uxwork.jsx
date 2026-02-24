import React from 'react'
import { Link } from 'react-router-dom'
import pen from '../assets/pen.svg'
import ArrowUp from '../assets/ArrowUp.svg'
import UXP from '../assets/UXP.png'
import UXPineapple from '../assets/UXPineapple.svg'
import UXPm from '../assets/UXPm.svg'
import CookIQ from '../assets/CookIQ.png'


function Uxwork() {
  return (
    <div>
      <div className='px-[7vw] pt-[15vh]'>
        <h1 className='text-[6vh] md:text-[8vh] font-black leading-[5.5vh] md:leading-none tracking-tight'>
          UX Case <br className='block md:hidden' /> Studies
          <img loading='lazy' className='inline-block w-[8vw] md:w-[3.5vw] h-auto ml-[2vw] md:ml-[1vw] align-baseline' src={pen} alt="Pen Icon" />
        </h1>
      </div>
      <div className='flex flex-col items-center justify-center mt-[5vh]'>
        <div className='h-fit flex justify-center mb-[5vh] md:mb-0'>
          <div className='w-[90vw] h-fit bg-[#ECF4FF] border border-[#D7D7D7] rounded-[4vh] md:rounded-[8vh] px-[6vw] md:px-[10vh] py-[5vh] md:py-[10vh]'>
            <div className='flex flex-col-reverse md:flex-row justify-between'>
              <div className='w-full md:w-[55vw] mt-[3vh] md:mt-0'>
                <h1 className='text-[3.8vh] md:text-[4.5vh] font-bold leading-[4.2vh] md:leading-[5vh] tracking-tight'>Pineapple</h1>
                <h2 className='text-[#606060] text-[2.4vh] md:text-[2.8vh] font-medium leading-[3.4vh] md:leading-[4vh] mt-[1.5vh]'>
                  Experience a unified healthcare solution that simplifies appointment scheduling, insurance verification, and communication, helping users access care with clarity and confidence.
                </h2>
              </div>
              <div className='w-full md:w-[35vw] flex flex-row flex-wrap md:flex-col items-start md:items-end text-[1.8vh] md:text-[2vh] gap-[2.5vw] md:gap-[1vh] font-medium'>
                <h1 className='px-[4vw] md:px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>UX Research</h1>
                <h1 className='px-[4vw] md:px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>Prototype</h1>
                <h1 className='px-[4vw] md:px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>Usability Testing</h1>
              </div>
            </div>
            <div className='flex flex-wrap gap-x-[4vw] gap-y-[2.5vh] md:gap-[3vw] mt-[4.5vh] md:mt-[6vh] items-center'>
              <Link to="/Pineapple" className='cursor-pointer hover:opacity-80 transition-opacity'><h1 className='text-[#F3F3F3] text-[1.8vh] md:text-[2.2vh] bg-[#0A0A0A] px-[8vw] md:px-[3vw] py-[1.8vh] md:py-[2.2vh] flex items-center justify-center gap-[3vw] md:gap-[1vw] font-semibold rounded-[2vh] md:rounded-[1.5vh] tracking-wide'>UX Case Study <img loading='lazy' className='h-[1.5vh] shrink-0' src={ArrowUp} alt="" /></h1></Link>
              <div className='flex items-center justify-center gap-[2.5vw] md:gap-[1vw] text-[2.2vh] md:text-[2.4vh] font-medium tracking-wide ml-[2vw] md:ml-[0vw]'><div className='h-[1vh] w-[1vh]  bg-[#64C200] rounded-full shrink-0'></div><h1 className='text-black'>Completed</h1></div>
            </div>
            <div className='hidden md:flex items-center justify-center mt-[4vh] md:mt-[5vh]'>
              <div className='w-[80vw] rounded-[3vh] md:rounded-[5vh] overflow-hidden'>
                <img loading='lazy' className='w-full h-full' src={UXP} alt="UX Project Image" />
              </div>
            </div>
            <div>
              <div className='flex flex-col md:flex-row mt-[5vh] md:mt-[8vh]'>
                <div className='w-full md:w-1/2 flex justify-center md:justify-start mb-[4vh] md:mb-0'>
                  <img loading='lazy' className='hidden md:block w-[60vw] md:w-[20vw] h-full ml-0 md:ml-[5vw] object-contain' src={UXPineapple} alt="Pineapple App" />
                  <img loading='lazy' className='block md:hidden w-[60vw] h-full object-contain' src={UXPm} alt="Pineapple App Mobile" />
                </div>
                <div className='w-full md:w-1/2 flex items-center'>
                  <h1 className='text-[2.2vh] md:text-[3vh] text-[#606060]'>This app reduces friction in healthcare access by simplifying appointment scheduling and clarifying insurance coverage and costs. It improves communication between patients, providers, and insurers, ensuring timely updates and coordination. The platform makes healthcare more transparent, predictable, and less stressful for users of all backgrounds.</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='h-fit flex justify-center mt-[0vh] md:mt-[5vh] mb-[8vh]'>
          <div className='w-[90vw] h-fit bg-[#F6F9F1] border border-[#D7D7D7] rounded-[4vh] md:rounded-[8vh] px-[6vw] md:px-[10vh] py-[5vh] md:py-[10vh]'>
            <div className='flex flex-col-reverse md:flex-row justify-between'>
              <div className='w-full md:w-[55vw] mt-[3vh] md:mt-0'>
                <h1 className='text-[3.8vh] md:text-[4.5vh] font-bold leading-[4.2vh] md:leading-[5vh] tracking-tight'>CookIQ</h1>
                <h2 className='text-[#606060] text-[2.4vh] md:text-[2.8vh] font-medium leading-[3.4vh] md:leading-[4vh] mt-[1.5vh]'>
                  An adaptive cooking app reduces mental load by guiding users with context-aware, step-by-step, personalized assistance at home.
                </h2>
              </div>
              <div className='w-full md:w-[35vw] flex flex-row flex-wrap md:flex-col items-start md:items-end text-[1.8vh] md:text-[2vh] gap-[2.5vw] md:gap-[1vh] font-medium'>
                <h1 className='px-[4vw] md:px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>User Research</h1>
                <h1 className='px-[4vw] md:px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>UI Design</h1>
                <h1 className='px-[4vw] md:px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>Prototype</h1>
              </div>
            </div>
            <div className='flex gap-[3vw] mt-[3vh] md:mt-[5vh]'>
              <div className='cursor-pointer text-[1.8vh] md:text-[2.2vh]' onClick={() => window.open('https://www.figma.com/proto/Mpmg3jwIcROXx1ekLYqhdk/Cooking-App?page-id=0%3A1&node-id=166-381&viewport=310%2C-710%2C0.22&t=deGrIngxsDbVIPmw-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=166%3A462', '_blank')}><h1 className='text-white bg-black px-[4vw] md:px-[2vw] py-[1.5vh] rounded-[1vh] flex items-center'>Prototype <img loading='lazy' className='ml-[1vw] h-[1.5vh]' src={ArrowUp} alt="" /></h1></div>
              <div className='flex items-center justify-center gap-[1vw] text-[1.8vh] md:text-[2.2vh]'><div className='h-[1vh] w-[1vh] bg-[#FF8A03] rounded-[10vh]'></div><h1>In progress</h1></div>
            </div>
            <div className='flex flex-col md:flex-row mt-[5vh] md:mt-[8vh]'>
              <div className='w-full md:w-1/2 flex justify-center md:justify-start mb-[4vh] md:mb-0'>
                <img loading='lazy' className='w-[60vw] md:w-[20vw] h-full ml-0 md:ml-[5vw] object-contain' src={CookIQ} alt="" />
              </div>
              <div className='w-full md:w-1/2 flex items-center'>
                <h1 className='text-[2.2vh] md:text-[3vh] text-[#606060]'><span className='text-black font-bold'>CookIQ</span> is a context-aware cooking application designed to reduce cognitive load for beginners and casual cooks. It provides step-by-step, visually guided assistance that adapts recipes based on available ingredients, kitchen tools, cooking pace, and dietary needs. CookIQ integrates with a smart cooking device, like an Instant Pot, to guide users accurately and efficiently through every step.</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Uxwork