import React, { useEffect, useRef, useState } from 'react'
import Hero from '../assets/Hero.mp4'
import Arrow from '../assets/Arrow.svg'
import ArrowUp from '../assets/ArrowUp.svg'
import Clip from '../assets/Clip.svg'
import Me from '../assets/Me.svg'
import figma from '../assets/figma.svg'
import rea from '../assets/react.svg'
import mot from '../assets/motion.svg'
import cs from '../assets/css.svg'
import gsa from '../assets/gsap.svg'
import loco from '../assets/loco.svg'
import le from '../assets/le.svg'
import three from '../assets/three.svg'
import glasses from '../assets/glasses.png'
import CookIQ from '../assets/CookIQ.png'
import f from '../assets/f.svg'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Home() {
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const heroRef = useRef(null)
  const skillsScrollRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)

  const handleScroll = () => {
    if (skillsScrollRef.current) {
      setShowLeftArrow(skillsScrollRef.current.scrollLeft > 0)
    }
  }

  const scrollSkillsRight = () => {
    if (skillsScrollRef.current) {
      skillsScrollRef.current.scrollBy({ left: window.innerWidth > 768 ? 600 : 300, behavior: 'smooth' })
    }
  }

  const scrollSkillsLeft = () => {
    if (skillsScrollRef.current) {
      skillsScrollRef.current.scrollBy({ left: window.innerWidth > 768 ? -600 : -300, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Text Reveal
      const tl = gsap.timeline()
      tl.from(".hero-text-1", { y: 100, opacity: 0, duration: 1, ease: "power4.out", delay: 0.5 })
        .from(".hero-text-2", { y: 100, opacity: 0, duration: 1, ease: "power4.out" }, "-=0.8")
        .from(".hero-text-3", { y: 50, opacity: 0, duration: 1, ease: "power4.out" }, "-=0.8")

      // Video Parallax
      const isMobile = window.innerWidth < 768;
      gsap.to(videoRef.current, {
        yPercent: isMobile ? 25 : 80, // Move video down slightly as we scroll, less on mobile to prevent "resisting scroll"
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: isMobile ? 1 : true // Smooth scrub for mobile to prevent choppiness
        }
      })



      // Section Title Animations
      gsap.utils.toArray(".section-title").forEach(section => {
        gsap.from(section.querySelectorAll("h1"), {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef}>
      <div className="w-full overflow-hidden font-GilroyMedium">
        <div>
          <div ref={heroRef} className=' lg:h-[100vh] h-[100vh] w-full relative overflow-hidden lg:overflow-visible'>
            <video ref={videoRef} className='h-[110vh] lg:h-screen w-full object-cover absolute' src={Hero} autoPlay muted loop playsInline></video>
            <div className='absolute text-white z-10 h-screen flex flex-col justify-center ml-[3vh] sm:ml-[4vh] md:ml-[7vh] pointer-events-none w-[90vw] md:w-auto mt-[8vh] md:mt-0'>
              <div className='overflow-hidden'><h1 className="hero-text-1 text-[4vh] md:text-[8vh] font-semi-bold ml-[1vw]">Hello I'm</h1></div>
              <div className='overflow-hidden mt-[-2vh] md:mt-[-5.5vh] pb-[2vh]'><h2 className='hero-text-2 text-[14vw] sm:text-[10vh] md:text-[15vh] font-bold leading-none mt-[1.5vh] md:mt-[3vh]'>Chaithanya.</h2></div>
              <div className='overflow-hidden mt-[-1.5vh] md:mt-[-4vh] pb-[1vh]'><h1 className="hero-text-3 text-[2.2vh] md:text-[3vh] font-semi-bold ml-[1vw] mt-[1.5vh] md:mt-[3vh]">UX Engineer</h1></div>

              <div className='mt-[12vh] md:hidden block ml-[1vw] text-[#E0E0E0] opacity-90 hero-text-3'>
                <h1 className='text-[1.8vh]'>Bachelor's in <br /> Computer Science</h1>
                <div className='text-[2.5vh] my-[0.2vh]'> + </div>
                <h1 className='text-[1.8vh]'>Currently pursuing Master's <br /> in Human-Computer <br /> Interaction</h1>
              </div>
            </div>
            <div className='absolute lg:bottom-[5vh] bottom-[4vh] right-[5vw] text-white flex items-center justify-center'>
              <img loading='lazy' className='h-[5vh] md:h-[6.3vh] mr-[-.5vw]' src={Arrow} alt="" />
              <h1 className='text-[2.5vh] md:text-[3vh]'>Scroll Down</h1>
            </div>
            <div className='text-white hidden md:block pointer-events-none'>
              <h1 className=' absolute top-[15vh] right-[5vw] text-[2.2vh] w-[13vw] text-right'>Bachelor's in <br /> Computer Science</h1>
              <div className='absolute top-[21vh] right-[5vw] text-[5vh]'> + </div>
              <h1 className=' absolute top-[29vh] right-[5vw] text-[2.2vh] w-[16vw] text-right '>Currently pursuing Master's <br /> in Human-Computer <br />
                Interaction</h1>
            </div>
          </div>
          <div>
            <div
              className='flex flex-col md:flex-row bg-[#EFF0FF]
             rounded-[4vh] md:rounded-[8vh] absolute mt-[5vh] md:mt-0 pt-[5vh] md:pt-[10vh] pb-[5vh] md:pb-[10vh] w-[90vw] md:w-full ml-[5vw] md:ml-0 top-[100vh] md:top-auto'>
              <div className='w-full md:w-[50vw] flex items-center justify-center relative '>
                <div><img loading='lazy' className='absolute h-[8vh] md:h-[15vh] left-[5vw]' src={Clip} alt="" /></div>
                <div className='w-[70vw] md:w-[35vw] h-[40vh] md:h-[80vh] my-[2vh] md:my-[5vh] ml-[2vw] bg-green-200 rounded-[3vh] md:rounded-[5vh] overflow-hidden'>
                  <img loading='lazy' className='w-full h-full object-cover' src={Me} alt="" />
                </div>
              </div>
              <div className='w-full md:w-[50vw] flex items-center justify-center pr-[6vw] md:pr-[11vw] pl-[6vw] mt-[4vh] md:mt-0'>
                <h1 className='font-normal text-[2.2vh] md:text-[3.7vh] text-[#606060] text-center md:text-left' >I am a <span className='text-black font-GilroyBold'>UI/UX Designer</span>  and <span className='text-black font-GilroyBold'>Developer</span> passionate about creating seamless, user-centered experiences. I have worked with early-stage startups, building and executing design strategies from scratch. Along with intuitive design and interactive web development, I am also involved in <span className='text-black font-GilroyBold'>Machine Learning</span> and <span className='text-black font-GilroyBold'>Computer Vision</span>. My focus is on elevating digital platforms through innovation and creativity.</h1>
              </div>
            </div>
            <div className=' h-[50vh] w-full'></div>
            <div className=' h-[55vh] w-full'></div>

            <div className='section-title w-full mt-[8vh] md:mt-[5vh] h-fit md:h-[23vh] px-[6vw] md:px-[10vh] pt-[5vh] md:pt-[8vh] pb-[3vh] md:pb-0'>
              <h1 className='text-[3.5vh] md:text-[4vh] font-extrabold'>Technical Skills</h1>
              <h1 className='text-[2.2vh] md:text-[2.7vh] text-[#606060]'>Crafted with Precision.</h1>
            </div>
            <div className='flex items-center justify-center relative w-[92vw] md:w-[96vw] mx-auto group'>
              <div className='w-full bg-[#D4E6FB] h-[55vh] md:h-[65vh] flex items-center justify-start md:justify-center pl-[5vw] md:pl-[3vw] rounded-[3vh] md:rounded-[5vh] overflow-hidden whitespace-nowrap relative'>

                <div ref={skillsScrollRef} onScroll={handleScroll} className='flex overflow-x-auto no-scrollbar items-center w-full scroll-smooth'>
                  <img loading='lazy' className='h-[45vh] md:h-[50vh] mx-2 md:mx-2 object-contain inline-block shrink-0' src={figma} alt="" />
                  <img loading='lazy' className='h-[45vh] md:h-[50vh] mx-2 md:mx-2 object-contain inline-block shrink-0' src={rea} alt="" />
                  <img loading='lazy' className='h-[45vh] md:h-[50vh] mx-2 md:mx-2 object-contain inline-block shrink-0' src={cs} alt="" />
                  <img loading='lazy' className='h-[45vh] md:h-[50vh] mx-2 md:mx-2 object-contain inline-block shrink-0' src={mot} alt="" />
                  <img loading='lazy' className='h-[45vh] md:h-[50vh] mx-2 md:mx-2 object-contain inline-block shrink-0' src={gsa} alt="" />
                  <img loading='lazy' className='h-[45vh] md:h-[50vh] mx-2 md:mx-2 object-contain inline-block shrink-0' src={loco} alt="" />
                  <img loading='lazy' className='h-[45vh] md:h-[50vh] mx-2 md:mx-2 object-contain inline-block shrink-0' src={le} alt="" />
                  <img loading='lazy' className='h-[45vh] md:h-[50vh] mx-2 md:mx-2 object-contain inline-block shrink-0' src={three} alt="" />
                </div>

              </div>

              {/* Scroll Left Button */}
              {showLeftArrow && (
                <button
                  onClick={scrollSkillsLeft}
                  className='hidden md:flex absolute left-[2vw] top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-md border border-white/30 text-[#fff] hover:text-black hover:bg-white/60 w-[4vw] h-[4vw] rounded-full items-center justify-center shadow-lg transition-all z-10 cursor-pointer'
                  aria-label="Scroll left"
                >
                  <svg width="2vw" height="2vw" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
              )}

              {/* Scroll Right Button */}
              <button
                onClick={scrollSkillsRight}
                className='hidden md:flex absolute right-[2vw] top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-md border border-white/30 text-[#fff] hover:text-black hover:bg-white/60 w-[4vw] h-[4vw] rounded-full items-center justify-center shadow-lg transition-all z-10 cursor-pointer'
                aria-label="Scroll right"
              >
                <svg width="2vw" height="2vw" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
            <div className='section-title w-full h-fit md:h-[23vh] px-[6vw] md:px-[10vh] pt-[8vh] pb-[3vh] md:pb-0'>
              <h1 className='text-[3.5vh] md:text-[4vh] font-extrabold'>Recent Project</h1>
              <h1 className='text-[2.2vh] md:text-[2.7vh] text-[#606060]'>I've been working on!</h1>
            </div>
            <div className='h-fit flex justify-center '>
              <div className='w-[92vw] md:w-[90vw] h-fit bg-[#FBFFFE] border border-[#D7D7D7] rounded-[4vh] md:rounded-[8vh] px-[6vw] md:px-[10vh] py-[5vh] md:py-[10vh]'>
                <div className='flex flex-col-reverse md:flex-row justify-between'>
                  <div className='w-full md:w-[55vw] mt-[3vh] md:mt-0'>
                    <h1 className='text-[3.8vh] md:text-[4.5vh] font-bold leading-[4.2vh] md:leading-[5vh] tracking-tight'>Project Aria Gen 1</h1>
                    <h2 className='text-[#606060] text-[2.4vh] md:text-[2.8vh] font-medium leading-[3.4vh] md:leading-[4vh] mt-[1.5vh]'>
                      Technical Lead working with Meta ARIA Gen-1 glasses, researching inclusive AI systems through neurodivergent interaction practices.
                    </h2>
                  </div>
                  <div className='w-full md:w-[35vw] flex flex-row flex-wrap md:flex-col items-start md:items-end text-[1.8vh] md:text-[2vh] gap-[2.5vw] md:gap-[1vh] font-medium'>
                    <h1 className='px-[4vw] md:px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>Research</h1>
                    <h1 className='px-[4vw] md:px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>Computer Vision</h1>
                    <h1 className='px-[4vw] md:px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>Neurodiversity</h1>
                  </div>
                </div>
                <div className='flex flex-wrap gap-x-[4vw] gap-y-[2.5vh] md:gap-[3vw] mt-[4.5vh] md:mt-[6vh] items-center'>
                  <div className='cursor-pointer text-[2vh] md:text-[2vh] hover:opacity-80 transition-opacity' onClick={() => window.open('https://drive.google.com/drive/folders/1YHZoa_kdm5kZkjQB5roo3I6SlSSUtyCs?usp=sharing', '_blank')}><h1 className='text-[#F3F3F3] bg-[#0A0A0A] px-[6vw] md:px-[2.5vw] py-[1.8vh] md:py-[2.2vh] rounded-[2vh] md:rounded-[1.5vh] flex items-center justify-center gap-[2.5vw] md:gap-[0.8vw] font-medium tracking-wide'>Research till date <img loading='lazy' className='h-[1.8vh] md:h-[2vh] shrink-0' src={ArrowUp} alt="" /></h1></div>
                  <div className='flex items-center justify-center gap-[2vw] md:gap-[1vw] text-[2vh] md:text-[2.2vh] font-medium tracking-wide ml-[2vw] md:ml-[0vw]'><div className='h-[1vh] w-[1vh] bg-[#FF8A03] rounded-full shrink-0'></div><h1 className='text-black'>In Progress</h1></div>
                </div>
                <div className='flex items-center justify-center mt-[4vh] md:mt-[5vh] w-full'>
                  <div className='w-full md:w-[65vw] rounded-[3vh] md:rounded-[5vh] overflow-hidden'>
                    <img loading='lazy' className='w-full h-auto object-cover md:object-contain scale-[1.15] md:scale-100' src={glasses} alt="Meta Aria Gen 1 Glasses" />
                  </div>
                </div>
                <div className='flex flex-col md:flex-row mt-[4vh] md:mt-[5vh] text-[2.2vh] md:text-[3vh]'>
                  <div className='w-full md:w-1/2 ml-0 md:ml-[5vw] mb-[3vh] md:mb-0'> <h1>Winter Quarter <br className='hidden md:block' /> <span className='text-[#606060]'>(January-March  <br className='hidden md:block' />2026): Preparation</span></h1></div>
                  <div className='w-full md:w-1/2 text-[#606060]'><h1>AI systems are often designed with neurotypical users in mind, which can result in neurodivergent behaviors being misunderstood or treated as errors. At RAISE Lab, we recognize these behaviors as valid interaction styles and aim to build more inclusive and responsive AI systems. Currently, we are in a preparatory phase using Meta Aria hardware and software, where we are developing analysis pipelines, establishing ethical guidelines, reviewing literature, and training the team. No human-subject data is being collected at this stage, as our focus is on building a strong and responsible foundation for future research.</h1></div>
                </div>
              </div>
            </div>
            <div className='h-fit flex justify-center mt-[5vh]'>
              <div className='w-[92vw] md:w-[90vw] h-fit bg-[#F6F9F1] border border-[#D7D7D7] rounded-[4vh] md:rounded-[8vh] px-[6vw] md:px-[10vh] py-[5vh] md:py-[10vh]'>
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
                <div className='flex flex-wrap gap-x-[4vw] gap-y-[2.5vh] md:gap-[3vw] mt-[4.5vh] md:mt-[6vh] items-center'>
                  <div className='cursor-pointer text-[2vh] md:text-[2vh] hover:opacity-80 transition-opacity' onClick={() => window.open('https://www.figma.com/proto/Mpmg3jwIcROXx1ekLYqhdk/Cooking-App?page-id=0%3A1&node-id=166-381&viewport=310%2C-710%2C0.22&t=deGrIngxsDbVIPmw-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=166%3A462', '_blank')}><h1 className='text-[#F3F3F3] bg-[#0A0A0A] px-[6vw] md:px-[2.5vw] py-[1.8vh] md:py-[2.2vh] rounded-[2vh] md:rounded-[1.5vh] flex items-center justify-center gap-[2.5vw] md:gap-[0.8vw] font-medium tracking-wide'>Prototype <img loading='lazy' className='h-[1.8vh] md:h-[2vh] shrink-0' src={ArrowUp} alt="" /></h1></div>
                  <div className='flex items-center justify-center gap-[2vw] md:gap-[1vw] text-[2vh] md:text-[2vh] font-medium tracking-wide'><div className='h-[1vh] w-[1vh] bg-[#FF8A03] rounded-full shrink-0'></div><h1 className='text-black'>In progress</h1></div>
                </div>
                <div className='flex flex-col md:flex-row mt-[5vh] md:mt-[8vh]'>
                  <div className='w-full md:w-1/2 flex justify-center md:justify-start mb-[4vh] md:mb-0'><img loading='lazy' className='w-[60vw] md:w-[22vw] h-full ml-0 md:ml-[5vw] object-contain' src={CookIQ} alt="" /></div>
                  <div className='w-full md:w-1/2 flex items-center '>
                    <h1 className='text-[2.2vh] md:text-[3vh] text-[#606060]'><span className='text-black font-bold'>CookIQ</span> is a context-aware cooking application designed to reduce cognitive load for beginners and casual cooks. It provides step-by-step, visually guided assistance that adapts recipes based on available ingredients, kitchen tools, cooking pace, and dietary needs. CookIQ integrates with a smart cooking device, like an Instant Pot, to guide users accurately and efficiently through every step.</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className='section-title w-full h-fit md:h-[23vh] px-[6vw] md:px-[10vh] pt-[8vh] pb-[3vh] md:pb-0'>
              <h1 className='text-[3.5vh] md:text-[4vh] font-extrabold'>Nice to meet you,</h1>
              <h1 className='text-[2.2vh] md:text-[2.7vh] text-[#606060]'>Let's connect.</h1>
            </div>
            <div className='flex items-center justify-center'>
              <div className='w-[92vw] md:w-[96vw] bg-[#F6F1E5] px-[6vw] md:px-[10vh] py-[6vh] md:py-[10vh] rounded-[4vh] md:rounded-[6vh] text-[2.2vh] md:text-[3vh] mb-[5vh] relative overflow-hidden'>
                <h1 className='text-[3.5vh] md:text-[5vh] font-bold leading-[4vh] md:leading-[5.5vh] mb-[3vh] md:mb-[5vh] z-10 relative pt-[4vh] md:pt-0'>Curious by Nature. Designer by <br className='hidden md:block' /> Practice. Developer by Passion.</h1>
                <h1 className='w-full md:w-1/2 z-10 relative'>I'm always open to new and exciting opportunities, collaborations, and conversations. Feel free to reach out through any of the channels below I'd love to connect and explore how we can work together.</h1>
                <h1 className='mt-[4vh] md:mt-[3vh] text-[2vh] md:text-[2.2vh] text-[#606060] font-medium z-10 relative'>Find me elsewhere on web,</h1>
                <div className='h-[4vh] md:h-[10vh]'></div>
                <div className=''>
                  <div className='flex flex-wrap md:flex-nowrap gap-[4vw] md:gap-[3vw] text-[2vh] md:text-[2.6vh] font-semibold z-10 relative'>
                    <Link className='hover:opacity-80 transition-opacity' to="https://www.linkedin.com/in/ohnochaithanya//">LinkedIn</Link>
                    <Link className='hover:opacity-80 transition-opacity' to="https://www.instagram.com/ohnochaithanya">Instagram</Link>
                    <Link className='hover:opacity-80 transition-opacity' to="https://github.com/itsmechaithanya">Github</Link>
                  </div>
                  <h1 className='text-[2vh] md:text-[2.2vh] text-[#606060] mt-[2.5vh] font-medium z-10 relative'>cmangali@depaul.edu</h1>
                  <img loading='lazy' className='hidden md:block absolute top-[1vh] md:top-0 right-[-6vw] md:right-[4vw] w-[45vw] md:w-[22vw] h-auto object-contain opacity-100 z-0 select-none pointer-events-none' src={f} alt="footer logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home