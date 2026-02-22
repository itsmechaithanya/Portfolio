import React, { useEffect, useRef } from 'react'
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

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Text Reveal
      const tl = gsap.timeline()
      tl.from(".hero-text-1", { y: 100, opacity: 0, duration: 1, ease: "power4.out", delay: 0.5 })
        .from(".hero-text-2", { y: 100, opacity: 0, duration: 1, ease: "power4.out" }, "-=0.8")
        .from(".hero-text-3", { y: 50, opacity: 0, duration: 1, ease: "power4.out" }, "-=0.8")

      // Video Parallax
      gsap.to(videoRef.current, {
        yPercent: 80, // Move video down slightly as we scroll
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
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
      <div className="w-screen overflow-hidden font-GilroyMedium">
        <div>
          <div ref={heroRef} className=' lg:h-screen h-[95vh] w-full relative'>
            <video ref={videoRef} className='h-[112vh] lg:h-screen w-full object-cover absolute' src={Hero} autoPlay muted loop></video>
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
            <div className='absolute lg:bottom-[5vh] bottom-[1vh] right-[5vw] text-white flex items-center justify-center'>
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
              // data-scroll data-scroll-speed="0.3"  bg-[#EFF0FF] border border-[#D7D7D7]
              className='flex flex-col md:flex-row bg-[#EFF0FF]
             rounded-[4vh] md:rounded-[8vh] absolute pt-[5vh] md:pt-[10vh] pb-[5vh] md:pb-[10vh] w-[90vw] md:w-full ml-[5vw] md:ml-0 top-[100vh] md:top-auto'>
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
            <div className=' h-[50vh] w-full bg-black'></div>
            <div className=' h-[55vh] w-full'></div>

            <div className='section-title w-full mt-[8vh] md:mt-[5vh] h-fit md:h-[23vh] px-[6vw] md:px-[10vh] pt-[5vh] md:pt-[8vh] pb-[3vh] md:pb-0'>
              <h1 className='text-[3.5vh] md:text-[4vh] font-extrabold'>Technical Skills</h1>
              <h1 className='text-[2.2vh] md:text-[2.7vh] text-[#606060]'>Crafted with Precision.</h1>
            </div>
            <div className='flex items-center justify-center'>
              <div className='w-[92vw] md:w-[96vw] bg-[#D4E6FB] h-[55vh] md:h-[65vh] flex items-center justify-start md:justify-center pl-[5vw] md:pl-[3vw] rounded-[3vh] md:rounded-[5vh] overflow-hidden whitespace-nowrap overflow-x-auto'>


                <div className='flex overflow-x-auto no-scrollbar items-center w-full'>
                  <img loading='lazy' className='h-[45vh] md:h-[50vh] mx-2 md:mx-4 object-contain inline-block shrink-0' src={figma} alt="" />
                  <img loading='lazy' className='h-[45vh] md:h-[50vh] mx-2 md:mx-4 object-contain inline-block shrink-0' src={rea} alt="" />
                  <img loading='lazy' className='h-[45vh] md:h-[50vh] mx-2 md:mx-4 object-contain inline-block shrink-0' src={cs} alt="" />
                  <img loading='lazy' className='h-[45vh] md:h-[50vh] mx-2 md:mx-4 object-contain inline-block shrink-0' src={mot} alt="" />
                  <img loading='lazy' className='h-[45vh] md:h-[50vh] mx-2 md:mx-4 object-contain inline-block shrink-0' src={gsa} alt="" />
                  <img loading='lazy' className='h-[45vh] md:h-[50vh] mx-2 md:mx-4 object-contain inline-block shrink-0' src={loco} alt="" />
                  <img loading='lazy' className='h-[45vh] md:h-[50vh] mx-2 md:mx-4 object-contain inline-block shrink-0' src={le} alt="" />
                  <img loading='lazy' className='h-[45vh] md:h-[50vh] mx-2 md:mx-4 object-contain inline-block shrink-0' src={three} alt="" />
                </div>


              </div>
            </div>
            <div className='section-title w-full h-fit md:h-[23vh] px-[6vw] md:px-[10vh] pt-[8vh] pb-[3vh] md:pb-0'>
              <h1 className='text-[3.5vh] md:text-[4vh] font-extrabold'>Recent Project</h1>
              <h1 className='text-[2.2vh] md:text-[2.7vh] text-[#606060]'>I've been working on!</h1>
            </div>
            <div className='h-fit flex justify-center '>
              <div className='w-[92vw] md:w-[90vw] h-fit bg-[#FBFFFE] border border-[#D7D7D7] rounded-[4vh] md:rounded-[8vh] px-[6vw] md:px-[10vh] py-[5vh] md:py-[10vh]'>
                <div className='flex flex-col-reverse md:flex-row'>
                  <div className='w-full md:w-[50vw] font-bold leading-[3.5vh] md:leading-[4vh] mt-[3vh] md:mt-0'><h1 className='text-[3vh] md:text-[3.5vh]'>Project Aria Gen 1 <span className='text-[#606060] text-[2.5vh] md:text-[3vh] font-normal'> - Technical Lead working with Meta ARIA Gen-1 glasses, researching inclusive AI systems through neurodivergent interaction practices.</span></h1></div>
                  <div className='w-full md:w-[41vw] flex flex-row flex-wrap md:flex-col items-start md:items-end text-[1.8vh] md:text-[2.2vh] gap-[1vh]'>
                    <h1 className='px-[3vw] md:px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>Research</h1>
                    <h1 className='px-[3vw] md:px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>Computer Vision</h1>
                    <h1 className='px-[3vw] md:px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>Neurodiversity</h1>
                  </div>
                </div>
                <div className='flex gap-[3vw] mt-[3vh] md:mt-[5vh]'>
                  <div className='cursor-pointer text-[1.8vh] md:text-auto' onClick={() => window.open('https://drive.google.com/drive/folders/1YHZoa_kdm5kZkjQB5roo3I6SlSSUtyCs?usp=sharing', '_blank')}><h1 className='text-white bg-black px-[4vw] md:px-[2vw] py-[1.5vh] rounded-[1vh] flex items-center'>Research till date <img loading='lazy' className='' src={ArrowUp} alt="" /></h1></div>
                  <div className='flex items-center justify-center gap-[1vw] text-[1.8vh] md:text-auto'><div className='h-[1vh] w-[1vh] bg-[#FF8A03] rounded-[10vh]'></div><h1>In progress</h1></div>
                </div>
                <div className='flex items-center justify-center mt-[4vh] md:mt-[5vh]'>
                  <div className='w-[80vw] md:w-[65vw] rounded-[3vh] md:rounded-[5vh] overflow-hidden'>
                    <img loading='lazy' className='w-full h-full' src={glasses} alt="" />
                  </div>
                </div>
                <div className='flex flex-col md:flex-row mt-[4vh] md:mt-[5vh] text-[2.2vh] md:text-[3vh]'>
                  <div className='w-full md:w-1/2 ml-0 md:ml-[5vw] mb-[3vh] md:mb-0'> <h1>Winter Quarter <br className='hidden md:block' /> <span className='text-[#606060]'>(January-March  <br className='hidden md:block' />2026): Preparation</span></h1></div>
                  <div className='w-full md:w-1/2 text-[#606060]'><h1>AI systems are frequently designed with neurotypical users in mind, which can lead to neurodivergent behaviors being misinterpreted, overlooked, or even treated as errors. This narrow perspective limits the inclusivity and effectiveness of AI interactions for a diverse range of users. Within the RAISE Lab, our approach is to recognize and validate these neurodivergent behaviors as legitimate interaction styles, ensuring that our systems are more inclusive and responsive to varied cognitive patterns.
                    <br />
                    <br />
                    Currently, our focus is on a technical ramp-up using Meta Aria hardware and software. This includes developing and refining analysis pipelines that can handle diverse behavioral inputs, establishing comprehensive ethical protocols to guide responsible research and development, reviewing existing literature to inform our methodologies, and training the lab team to maintain high standards of research rigor. Importantly, at this stage, no human-subject data collection is being conducted; our efforts are entirely preparatory, aimed at building a strong foundation for future inclusive and ethically sound AI research.</h1></div>
                </div>
              </div>
            </div>
            <div className='h-fit flex justify-center mt-[5vh]'>
              <div className='w-[92vw] md:w-[90vw] h-fit bg-[#F6F9F1] border border-[#D7D7D7] rounded-[4vh] md:rounded-[8vh] px-[6vw] md:px-[10vh] py-[5vh] md:py-[10vh]'>
                <div className='flex flex-col-reverse md:flex-row'>
                  <div className='w-full md:w-[50vw] font-bold leading-[3.5vh] md:leading-[4vh] mt-[3vh] md:mt-0'><h1 className='text-[3vh] md:text-[3.5vh]'>CookIQ<span className='text-[#606060] text-[2.5vh] md:text-[3vh] font-normal'> - An adaptive cooking app reduces mental load by guiding users with context-aware, step-by-step, personalized assistance at home.</span></h1></div>
                  <div className='w-full md:w-[41vw] flex flex-row flex-wrap md:flex-col items-start md:items-end text-[1.8vh] md:text-[2.2vh] gap-[1vh]'>
                    <h1 className='px-[3vw] md:px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>User Research</h1>
                    <h1 className='px-[3vw] md:px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>UI Design</h1>
                    <h1 className='px-[3vw] md:px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>Prototype</h1>
                  </div>
                </div>
                <div className='flex gap-[3vw] mt-[3vh] md:mt-[5vh]'>
                  <div className='cursor-pointer text-[1.8vh] md:text-auto' onClick={() => window.open('https://www.figma.com/proto/Mpmg3jwIcROXx1ekLYqhdk/Cooking-App?page-id=0%3A1&node-id=166-381&viewport=310%2C-710%2C0.22&t=deGrIngxsDbVIPmw-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=166%3A462', '_blank')}><h1 className='text-white bg-black px-[4vw] md:px-[2vw] py-[1.5vh] rounded-[1vh] flex items-center'>Prototype <img loading='lazy' className='' src={ArrowUp} alt="" /></h1></div>
                  <div className='flex items-center justify-center gap-[1vw] text-[1.8vh] md:text-auto'><div className='h-[1vh] w-[1vh] bg-[#FF8A03] rounded-[10vh]'></div><h1>In progress</h1></div>
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
              <div className='w-[92vw] md:w-[96vw] bg-[#F6F1E5] px-[6vw] md:px-[10vh] py-[6vh] md:py-[10vh] rounded-[4vh] md:rounded-[10vh] text-[2.2vh] md:text-[3vh] mb-[5vh] relative overflow-hidden'>
                <h1 className='text-[3.5vh] md:text-[5vh] font-bold leading-[4vh] md:leading-[6vh] mb-[3vh] md:mb-[5vh]'>Curious by Nature. Designer by <br className='hidden md:block' /> Practice. Developer by Passion.</h1>
                <h1 className='w-full md:w-1/2'>I'm always open to new and exciting opportunities, collaborations, and conversations. Feel free to reach out through any of the channels below I'd love to connect and explore how we can work together.</h1>
                <h1 className='mt-[3vh] text-[2vh] md:text-[2.5vh] text-[#606060]'>Find me elsewhere on web,</h1>
                <div className='h-[5vh] md:h-[10vh]'></div>
                <div className=''>
                  <div className='flex flex-wrap md:flex-nowrap gap-[4vw] md:gap-[3vw] text-[2vh] md:text-[3vh] font-semibold z-10 relative'>
                    <Link to="https://www.linkedin.com/in/ohnochaithanya//">LinkedIn</Link>
                    <Link to="https://www.instagram.com/ohnochaithanya">Instagram</Link>
                    <Link to="https://github.com/itsmechaithanya">Github</Link>
                  </div>
                  <h1 className='text-[2vh] md:text-[2.5vh] text-[#606060] mt-[2vh] z-10 relative'>cmangali@depaul.edu</h1>
                  <img loading='lazy' className='absolute top-[2vh] right-[-5vw] md:top-0 md:right-[7vw] h-[15vh] md:h-[30vh] opacity-20 md:opacity-100 z-0' src={f} alt="footer logo" />
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