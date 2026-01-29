import React from 'react'
import Hero from '../assets/Hero.mp4'
import Arrow from '../assets/Arrow.svg'
import Clip from '../assets/Clip.svg'
import Me from '../assets/Me.jpg'

function Home() {
  return (
    <div>
      <div className="w-full">
        <div>
          <div className=' h-screen w-full relative'>
            <video className='h-screen w-full object-cover absolute' src={Hero} autoPlay muted loop></video>
            <div className='absolute text-white z-10 h-screen flex flex-col justify-center ml-[7vh]'>
              <h1 className="text-[8vh] font-semi-bold ml-[1vw]">Hello I'm</h1>
              <h2 className='text-[15vh] font-bold mt-[-5.5vh]'>Chaithanya.</h2>
              <h1 className="text-[3vh] font-semi-bold ml-[2vw] mt-[-3vh]">UX Engineer</h1>
            </div>
          <div className='absolute bottom-[15vh] right-[5vw] text-white flex items-center justify-center'>
            <img className='h-[5vh] mr-[-.5vw]' src={Arrow} alt="" />
            <h1 className='text-[3vh]'>Scroll Down</h1>
          </div>
        </div>
        <div className='h-screen w-full absolute flex bg-[#EFF0FF] rounded-t-[10vh]'>
          <div className='w-[50vw] h-full flex items-center justify-center relative'>
            <div><img className=' absolute h-[15vh] left-[4vw]' src={Clip} alt="" /></div>
            <div className='w-[35vw] h-[80vh] mt-[17vh] bg-green-200 rounded-[5vh] overflow-hidden'>
              {/* <img src={Me} alt="" /> */}
            </div>
          </div>
          <div className='w-[50vw] h-full flex items-center justify-center pr-[10vw] pl-[5vw]'>
            <h1 className='font-normal text-[3.5vh] text-[#8B8B8B]' >I am a <span>UI/UX designer</span>  and <span>developer</span> passionate about creating seamless, user-centered experiences. I have worked with early-stage startups, building and executing design strategies from scratch. Along with intuitive design and interactive web development, I am also involved in machine learning and computer vision. My focus is on elevating digital platforms through innovation and creativity.</h1>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home 