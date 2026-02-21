import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'


function Navbar() {
  const navRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      // Navbar container entry
      tl.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
      })

      // Staggered entry for children
      tl.from(".nav-item", {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1
      }, "-=0.6")

    }, navRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className='flex justify-center w-full z-50 fixed top-0'>
      <nav
        ref={navRef}
        className='flex justify-between px-[2vw] mt-[2vh] py-[1.5vh] items-center backdrop-blur-md w-[90vw] md:w-[80vw] rounded-full bg-black/50 text-white shadow-lg border border-white/10 transition-colors duration-300 hover:bg-black/70'
      >

        {/* Logo */}
        <div className='nav-item'>
          <Link to="/" className='text-[3.5vh] tracking-tight transition-colors duration-300 block transform  origin-left'>
            Chay :)
          </Link>
        </div>

        {/* Links */}
        <div className='flex items-center gap-[2vw]'>
          <div className='hidden md:flex gap-[3vw] text-[2.2vh] '>
            <Link to="/Uxwork" className='nav-item relative group overflow-hidden'>
              <span className='block transition-transform duration-300 group-hover:-translate-y-full text-gray-200'>UX Case Studies</span>
              <span className='absolute top-0 left-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0 '>UX Case Studies</span>
            </Link>
            <Link to="/Web" className='nav-item relative group overflow-hidden'>
              <span className='block transition-transform duration-300 group-hover:-translate-y-full text-gray-200'>Web Dev</span>
              <span className='absolute top-0 left-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0 '>Web Dev</span>
            </Link>
            <Link to="/About" className='nav-item relative group overflow-hidden'>
              <span className='block transition-transform duration-300 group-hover:-translate-y-full text-gray-200'>About</span>
              <span className='absolute top-0 left-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0'>About</span>
            </Link>
            <a href="https://drive.google.com/file/d/1yc8WGb9wLjccbH25oYW8Q9y3olfbl4OM/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='nav-item relative group overflow-hidden'>
              <span className='block transition-transform duration-300 group-hover:-translate-y-full text-gray-200'>Resume</span>
              <span className='absolute top-0 left-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0'>Resume</span>
            </a>
          </div>

          {/* Contact Button */}
          <Link to="/Contact" className='nav-item group'>
            <div className='bg-white text-black px-[3vh] py-[1.2vh] rounded-full font-semibold text-[2.2vh] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 mr-[-1vw]'>
              <span>Contact</span>
              <div className='w-2 h-2 bg-black rounded-full transition-all duration-300 group-hover:bg-green-500'></div>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar