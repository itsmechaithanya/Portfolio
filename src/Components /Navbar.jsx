import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-center '>
    <nav className='flex justify-between px-[2vw] mt-[1.5vh] py-[1vh] fixed z-30 backdrop-blur-lg w-[80vw] rounded-[5vh] bg-[#42424262] text-[white]'>
      <div>
        <Link to="/"> <h1 className='text-[4vh] font-bold '>Chay :)</h1></Link>
      </div>
      <div className='flex items-center justify-between gap-[5vw]'>
        <Link to="/About">About</Link>
        <Link to="/Uxwork">UX Work</Link>
        <Link to="/Web">Web</Link>
      </div>
		</nav>
    </div>
  )
}

export default Navbar