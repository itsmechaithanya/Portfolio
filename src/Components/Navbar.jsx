import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

function Navbar() {
  const navRef = useRef(null)
  const menuRef = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

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

  useEffect(() => {
    if (!menuRef.current) return;

    // Kill existing tweens to prevent overlap jitter if toggled spam
    gsap.killTweensOf(menuRef.current);
    gsap.killTweensOf(".mobile-nav-item");

    if (isMenuOpen) {
      gsap.set(menuRef.current, { display: "block" });
      gsap.to(menuRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      })
      gsap.fromTo(
        ".mobile-nav-item",
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out", delay: 0.05 }
      )
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power3.out",
        onComplete: () => {
          gsap.set(menuRef.current, { display: "none" });
        }
      })
    }
  }, [isMenuOpen])

  return (
    <div className='flex justify-center w-full z-50 fixed top-0'>
      <nav
        ref={navRef}
        style={{ transition: 'background-color 0.3s ease' }}
        className={`flex flex-col px-[4vw] md:px-[2vw] mt-[2vh] py-[1.5vh] md:py-[1.5vh] backdrop-blur-md w-[90vw] md:w-[80vw] rounded-[4vh] md:rounded-full bg-black/50 text-white shadow-lg border border-white/10 hover:bg-black/70`}
      >
        <div className='flex justify-between items-center w-full'>
          {/* Logo */}
          <div className='nav-item'>
            <Link to="/" onClick={() => setIsMenuOpen(false)} className='text-[3.5vh] font-bold tracking-tight transition-colors duration-300 block transform origin-left'>
              Chay :)
            </Link>
          </div>

          {/* Desktop Links */}
          <div className='hidden md:flex items-center gap-[3vw] text-[2.2vh]'>
            <Link to="/Uxwork" className='nav-item relative group overflow-hidden'>
              <span className='block transition-transform duration-300 group-hover:-translate-y-full text-gray-200'>UX Case Studies</span>
              <span className='absolute top-0 left-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0'>UX Case Studies</span>
            </Link>
            <Link to="/Web" className='nav-item relative group overflow-hidden'>
              <span className='block transition-transform duration-300 group-hover:-translate-y-full text-gray-200'>Web Dev</span>
              <span className='absolute top-0 left-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0'>Web Dev</span>
            </Link>
            <Link to="/About" className='nav-item relative group overflow-hidden'>
              <span className='block transition-transform duration-300 group-hover:-translate-y-full text-gray-200'>About</span>
              <span className='absolute top-0 left-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0'>About</span>
            </Link>
            <a href="https://drive.google.com/file/d/1yc8WGb9wLjccbH25oYW8Q9y3olfbl4OM/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='nav-item relative group overflow-hidden'>
              <span className='block transition-transform duration-300 group-hover:-translate-y-full text-gray-200'>Resume</span>
              <span className='absolute top-0 left-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0'>Resume</span>
            </a>

            {/* Desktop Contact Button */}
            <Link to="/Contact" className='nav-item group'>
              <div className='bg-white text-black px-[3vh] py-[1.2vh] rounded-full font-semibold text-[2.2vh] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 mr-[-1vw]'>
                <span>Contact</span>
                <div className='w-2 h-2 bg-black rounded-full transition-all duration-300 group-hover:bg-green-500'></div>
              </div>
            </Link>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className='md:hidden flex items-center nav-item'>
            <button onClick={toggleMenu} className="focus:outline-none p-2">
              <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        <div ref={menuRef} className='hidden overflow-hidden md:hidden w-full'>
          <div className='flex flex-col gap-[3vh] text-[2.5vh] mt-[4vh] mb-[2vh] text-center font-semibold'>
            <Link to="/Uxwork" onClick={() => setIsMenuOpen(false)} className='mobile-nav-item py-2 active:bg-white/10 rounded-lg'>
              UX Case Studies
            </Link>
            <Link to="/Web" onClick={() => setIsMenuOpen(false)} className='mobile-nav-item py-2 active:bg-white/10 rounded-lg'>
              Web Dev
            </Link>
            <Link to="/About" onClick={() => setIsMenuOpen(false)} className='mobile-nav-item py-2 active:bg-white/10 rounded-lg'>
              About
            </Link>
            <a href="https://drive.google.com/file/d/1yc8WGb9wLjccbH25oYW8Q9y3olfbl4OM/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='mobile-nav-item py-2 active:bg-white/10 rounded-lg'>
              Resume
            </a>
            <Link to="/Contact" onClick={() => setIsMenuOpen(false)} className='mobile-nav-item group mx-auto'>
              <div className='bg-white text-black px-[5vw] py-[1.5vh] rounded-full font-bold text-[2.5vh] transition-all duration-300 active:scale-95 flex items-center gap-2 justify-center'>
                <span>Contact</span>
                <div className='w-2 h-2 bg-black rounded-full'></div>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar