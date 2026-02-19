import React, { useEffect, useRef } from 'react'
import f from '../assets/f.svg'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

function Contact() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal animations
      const tl = gsap.timeline()
      tl.from(".contact-header h1", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.2
      })
        .from(".contact-item", {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1
        }, "-=0.8")
        .from(".footer-content", {
          opacity: 0,
          y: 20,
          duration: 1,
          ease: "power2.out"
        }, "-=0.4")
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className='w-full min-h-screen bg-[#F9FAFB] font-GilroyMedium pt-[22vh] px-[10vw] flex flex-col justify-between pb-[8vh] overflow-hidden'>

      <div className='w-full'>
        <div className='overflow-hidden mb-[12vh] contact-header'>
          <h1 className='text-[10vh] font-GilroyBold leading-[11vh] tracking-tighter text-[#1a1a1a]'>
            Let's start a <br /> project together
          </h1>
        </div>

        <div className='flex flex-col md:flex-row gap-[10vw]'>
          <div className='contact-item'>
            <h2 className='text-[2vh] text-[#9CA3AF] mb-[2vh] uppercase tracking-wider font-semibold'>Contact Details</h2>
            <div className='space-y-[1vh]'>
              <a href="mailto:cmangali@depaul.edu" className='block text-[3.5vh] text-[#1a1a1a] hover:text-[#606060] transition-colors duration-300'>cmangali@depaul.edu</a>
              <p className='text-[3.5vh] text-[#1a1a1a]'>Chicago, USA</p>
            </div>
          </div>

          <div className='contact-item'>
            <h2 className='text-[2vh] text-[#9CA3AF] mb-[2vh] uppercase tracking-wider font-semibold'>Socials</h2>
            <div className='flex flex-col text-[3.5vh] space-y-[1vh] text-[#1a1a1a]'>
              <Link to="https://www.linkedin.com/in/ohnochaithanya//" target="_blank" className='hover:text-[#606060] transition-colors duration-300 group flex items-center gap-2'>
                LinkedIn
                <span className='opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[2vh]'>↗</span>
              </Link>
              <Link to="https://www.instagram.com/ohnochaithanya" target="_blank" className='hover:text-[#606060] transition-colors duration-300 group flex items-center gap-2'>
                Instagram
                <span className='opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[2vh]'>↗</span>
              </Link>
              <Link to="https://github.com/itsmechaithanya" target="_blank" className='hover:text-[#606060] transition-colors duration-300 group flex items-center gap-2'>
                Github
                <span className='opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[2vh]'>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact