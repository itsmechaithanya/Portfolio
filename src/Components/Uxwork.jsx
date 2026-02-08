import React from 'react'
import pen from '../assets/pen.svg'
import ArrowUp from '../assets/ArrowUp.svg'
import UXP from '../assets/USP.svg'

function Uxwork() {
  return (
    <div>
      <div className='px-[7vw] pt-[15vh] flex'>
        <h1 className='text-[8vh] font-black'>UX Case Studies</h1>
        <img className='w-[3.5vw] h-[6vh] mt-[3vh] ml-[1vw]' src={pen} alt="Pen Icon" />
      </div>
      <div className='flex items-center justify-center mt-[5vh]'>
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
              <div className=''><h1 className='text-white bg-black px-[2vw] py-[1.5vh] rounded-[1vh] flex items-center'>UX Case Study <img className='' src={ArrowUp} alt="" /></h1></div>
              <div className='flex items-center justify-center gap-[1vw]'><div className='h-[1vh] w-[1vh] bg-[#64C200] rounded-[10vh]'></div><h1>Completed</h1></div>
            </div>
            <div className='flex items-center justify-center mt-[5vh]'>
              <div className='w-[80vw] rounded-[5vh] overflow-hidden'> 
                <img className='w-full h-full' src={UXP} alt="UX Project Image" />
            </div>
            </div>
            <div className='flex mt-[5vh] text-[3vh]'>
              <div className='w-1/2 ml-[5vw]'> <h1>Winter Quarter <br /> <span className='text-[#606060]'>(January-March  <br />2026): Preparation</span></h1></div>
              <div className='w-1/2 text-[#606060]'><h1>AI systems are frequently designed with neurotypical users in mind, which can lead to neurodivergent behaviors being misinterpreted, overlooked, or even treated as errors. This narrow perspective limits the inclusivity and effectiveness of AI interactions for a diverse range of users. Within the RAISE Lab, our approach is to recognize and validate these neurodivergent behaviors as legitimate interaction styles, ensuring that our systems are more inclusive and responsive to varied cognitive patterns.
              <br />  
              <br />
              Currently, our focus is on a technical ramp-up using Meta Aria hardware and software. This includes developing and refining analysis pipelines that can handle diverse behavioral inputs, establishing comprehensive ethical protocols to guide responsible research and development, reviewing existing literature to inform our methodologies, and training the lab team to maintain high standards of research rigor. Importantly, at this stage, no human-subject data collection is being conducted; our efforts are entirely preparatory, aimed at building a strong foundation for future inclusive and ethically sound AI research.</h1></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Uxwork