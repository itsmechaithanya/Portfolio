import React from 'react'
import Hero from '../assets/Hero.mp4'
import Arrow from '../assets/Arrow.svg'
import Clip from '../assets/Clip.svg'
import Me from '../assets/Me.svg'

function Home() {
  return (
    <div>
      <div className="w-screen overflow-hidden">
        <div>
          <div className=' h-screen w-full relative'>
            <video className='h-screen w-full object-cover absolute' src={Hero} autoPlay muted loop></video>
            <div className='absolute text-white z-10 h-screen flex flex-col justify-center ml-[7vh]'>
              <h1 className="text-[8vh] font-semi-bold ml-[1vw]">Hello I'm</h1>
              <h2 className='text-[15vh] font-bold mt-[-5.5vh]'>Chaithanya.</h2>
              <h1 className="text-[3vh] font-semi-bold ml-[1vw] mt-[-3vh]">UX Engineer</h1>
            </div>
          <div className='absolute bottom-[15vh] right-[5vw] text-white flex items-center justify-center'>
            <img className='h-[6.3vh] mr-[-.5vw]' src={Arrow} alt="" />
            <h1 className='text-[3vh]'>Scroll Down</h1>
          </div>
          <div className='text-white'>
            <h1 className=' absolute top-[15vh] right-[5vw] text-[2.2vh] w-[13vw] text-right'>Bachelor’s in Computer Science</h1>
            <div className='absolute top-[21vh] right-[5vw] text-[5vh]'> + </div>
            <h1 className=' absolute top-[28vh] right-[5vw] text-[2.2vh] w-[16vw] text-right '>Currently pursuing Master’s <br /> in Human-Computer <br />
             Interaction</h1>
          </div>
        </div>
         <div>
            <div 
            // data-scroll data-scroll-speed="0.3"  bg-[#EFF0FF]
            className='flex bg-[#EFF0FF]
             rounded-[8vh] mt-[-5vh] absolute pt-[10vh] pb-[10vh]'>
              <div className='w-[50vw] flex items-center justify-center relative '>
                <div><img className=' absolute h-[15vh] left-[4.5vw]' src={Clip} alt="" /></div>
                <div className='w-[35vw] h-[80vh] my-[5vh] bg-green-200 rounded-[5vh] overflow-hidden'>
                  <img className='w-full h-full object-cover' src={Me} alt="" />
                </div>
              </div>
              <div className='w-[50vw] flex items-center justify-center pr-[11vw] pl-[6vw]'>
                <h1 className='font-normal text-[3.7vh] text-[#8B8B8B]' >I am a <span className='text-black font-medium'>UI/UX Designer</span>  and <span className='text-black '>Developer</span> passionate about creating seamless, user-centered experiences. I have worked with early-stage startups, building and executing design strategies from scratch. Along with intuitive design and interactive web development, I am also involved in <span className='text-black font-medium'>Machine Learning</span> and <span className='text-black font-medium'>Computer Vision</span>. My focus is on elevating digital platforms through innovation and creativity.</h1>
              </div>
          </div>
          <div className=' h-[50vh] w-full bg-black'></div>
          <div className=' h-[55vh] w-full'></div>

          <div className='w-full h-[23vh] px-[10vh] pt-[8vh]'>
            <h1 className='text-[4vh] font-extrabold'>Technical Skills</h1>
            <h1 className='text-[2.7vh] text-[#606060]'>Crafted with Precision.</h1>
          </div>
          <div className='flex items-center justify-center'>
            <div className='w-[90vw] border border-[#D7D7D7] h-[50vh] rounded-[5vh]'></div>
          </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Home 