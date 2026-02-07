import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-center '>
    <nav className='flex justify-between px-[2vw] mt-[1.5vh] py-[1vh] fixed z-30 backdrop-blur-lg w-[80vw] rounded-[5vh] bg-[#0000006e] text-[white]'>
      <div>
        <Link to="/"> <h1 className='text-[4vh] font-bold '>Chay :)</h1></Link>
      </div>
      <div className='flex items-center justify-between gap-[3vw]'>
        <div className='flex gap-[3vw] mr-[-1vw]'>
        <Link to="/Uxwork">UX Work</Link>
        <Link to="/Web">Web Dev</Link>
        <Link to="/About">About</Link>
        <Link to="https://drive.google.com/file/d/1nVWuErFc4zpfjrlTnmqQtMF9LeVRG0vv/view?usp=sharing">Resume</Link>
        </div>
        <Link className='text-black bg-white px-[2.5vh] py-[1.3vh] rounded-[3vh] mr-[-1vw]' to="/Contact">Contact</Link>
      </div>
		</nav>
    </div>
  )
}

export default Navbar