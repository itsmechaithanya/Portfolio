import React from 'react'
import { Link } from 'react-router-dom'
import pen from '../assets/pen.svg'
import ArrowUp from '../assets/ArrowUp.svg'
import UXP from '../assets/USP.svg'
import UXPineapple from '../assets/UXPineapple.svg'
import CookIQ from '../assets/CookIQ.png'

function Uxwork() {
  return (
    <div>
      <div className='px-[7vw] pt-[15vh] flex'>
        <h1 className='text-[8vh] font-black'>UX Case Studies</h1>
        <img className='w-[3.5vw] h-[6vh] mt-[3vh] ml-[1vw]' src={pen} alt="Pen Icon" />
      </div>
      <div className='flex flex-col items-center justify-center mt-[5vh]'>
        <div className='h-fit flex justify-center '>
          <div className='w-[90vw] h-fit bg-[#ECF4FF] border border-[#D7D7D7] rounded-[8vh] px-[10vh] py-[10vh]'>
            <div className='flex'>
              <div className='w-[50vw] font-bold leading-[4vh] '><h1 className='text-[3.5vh]'>Pineapple <span className='text-[#606060] text-[3vh] font-normal'> - Experience a unified healthcare solution that simplifies appointment scheduling, insurance verification, and communication, helping users access care with clarity and confidence.</span></h1></div>
              <div className='w-[41vw] h-[10vh] flex flex-col items-end text-[2.2vh] gap-[1vh]'>
                <h1 className='px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>UX Research</h1>
                <h1 className='px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>Prototype</h1>
                <h1 className='px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>Usability Testing</h1>
              </div>
            </div>
            <div className='flex gap-[3vw] mt-[5vh]'>
              <Link to="/Pineapple"><div className=''><h1 className='text-white bg-black px-[2vw] py-[1.5vh] rounded-[1vh] flex items-center cursor-pointer'>UX Case Study <img className='' src={ArrowUp} alt="" /></h1></div></Link>
              <div className='flex items-center justify-center gap-[1vw]'><div className='h-[1vh] w-[1vh] bg-[#64C200] rounded-[10vh]'></div><h1>Completed</h1></div>
            </div>
            <div className='flex items-center justify-center mt-[5vh]'>
              <div className='w-[80vw] rounded-[5vh] overflow-hidden'>
                <img className='w-full h-full' src={UXP} alt="UX Project Image" />
              </div>
            </div>
            <div>
              <div className='flex mt-[8vh]'>
                <div className='w-1/2'><img className='w-[20vw] h-full ml-[5vw]' src={UXPineapple} alt="Pineapple App"  /></div>
                <div className='w-1/2 flex items-center '>
                  <h1 className='text-[3vh] text-[#606060]'>This app reduces friction in healthcare access by simplifying appointment scheduling and clarifying insurance coverage and costs. It improves communication between patients, providers, and insurers, ensuring timely updates and coordination. The platform makes healthcare more transparent, predictable, and less stressful for users of all backgrounds.</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='h-fit flex justify-center mt-[5vh]'>
          <div className='w-[90vw] h-fit bg-[#F6F9F1] border border-[#D7D7D7] rounded-[8vh] px-[10vh] py-[10vh]'>
            <div className='flex'>
              <div className='w-[50vw] font-bold leading-[4vh] '><h1 className='text-[3.5vh]'>CookIQ<span className='text-[#606060] text-[3vh] font-normal'> - An adaptive cooking app reduces mental load by guiding users with context-aware, step-by-step, personalized assistance at home.</span></h1></div>
              <div className='w-[41vw] h-[10vh] flex flex-col items-end text-[2.2vh] gap-[1vh]'>
                <h1 className='px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>User Research</h1>
                <h1 className='px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>UI Design</h1>
                <h1 className='px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>Prototype</h1>
              </div>
            </div>
            <div className='flex gap-[3vw] mt-[5vh]'>
              <div className=''><h1 className='text-white bg-black px-[2vw] py-[1.5vh] rounded-[1vh] flex items-center'>Prototype <img className='' src={ArrowUp} alt="" /></h1></div>
              <div className='flex items-center justify-center gap-[1vw]'><div className='h-[1vh] w-[1vh] bg-[#FF8A03] rounded-[10vh]'></div><h1>In progress</h1></div>
            </div>
            <div className='flex mt-[8vh]'>
              <div className='w-1/2'><img className='w-[20vw] h-full ml-[5vw]' src={CookIQ} alt="" /></div>
              <div className='w-1/2 flex items-center '>
                <h1 className='text-[3vh] text-[#606060]'><span className='text-black font-bold'>CookIQ</span> is a context-aware cooking application designed to reduce cognitive load for beginners and casual cooks. It provides step-by-step, visually guided assistance that adapts recipes based on available ingredients, kitchen tools, cooking pace, and dietary needs. CookIQ integrates with a smart cooking device, like an Instant Pot, to guide users accurately and efficiently through every step.</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Uxwork