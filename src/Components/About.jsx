
import React, { useEffect, useRef } from 'react'
import Me from '../assets/Me.jpg' // Using jpg as seen in file list
import ArrowUp from '../assets/ArrowUp.svg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function About() {
  const containerRef = useRef(null)
  const headerRef = useRef(null)
  const imageRef = useRef(null)
  const introRef = useRef(null)
  const workRef = useRef(null)
  const certRef = useRef(null)
  const outsideRef = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Header Animation
      gsap.from(headerRef.current, {
        y: -50,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
        delay: 0.2
      })

      // Image Animation
      gsap.from(imageRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5
      })

      // Intro Text Animation
      gsap.from(introRef.current.querySelectorAll("p"), {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 1
      })

      // Work Experience Animation
      gsap.from(workRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: workRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      })

      // Certificates Animation
      gsap.from(certRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: certRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      })

      // Outside Work Animation
      gsap.from(outsideRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: outsideRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className='w-full bg-white pb-[10vh] font-GilroyMedium'>
      <div className='w-full px-[7vw]'>

        {/* Header */}
        <div ref={headerRef}><h1 className='text-[8vh] pt-[15vh] tracking-tighter font-GilroyBold'>About Me :)</h1></div>

        {/* Images Section */}
        <div ref={imageRef} className='flex justify-center gap-[5vw] mt-[5vh] mb-[15vh] relative'>
          {/* Profile Image */}
          <div className='w-[35vw] h-[60vh] rounded-[3vh] overflow-hidden'>
            <img className='w-full h-full object-cover' src={Me} alt="Chaithanya" />
          </div>
          {/* Bike/Action Image Placeholder */}
          <div className='w-[40vw] h-[50vh] mt-[10vh] rounded-[3vh] overflow-hidden bg-gray-200 flex items-center justify-center relative rotate-3'>
            <span className='text-gray-500'>Bike Image Placeholder</span>
          </div>
        </div>

        {/* Intro Text */}
        <div ref={introRef} className='px-[7vw] text-[3vh] font-medium leading-relaxed text-[#606060] space-y-[5vh] mb-[15vh]'>
          <p>
            I’m Chaithanya, a UX Designer and Web Developer with a passion for crafting engaging and impactful digital experiences. My journey began with web development, but I quickly became fascinated by the ‘Why’ behind user interactions. This curiosity led me to explore UX design, where I discovered my passion for solving complex problems through intuitive and <span className='text-black font-GilroyBold'>User Centered</span> solutions.
          </p>
          <p>
            While my official title has been <span className='text-black font-GilroyBold'>UX Engineer</span>, I see myself as a <span className='text-black font-GilroyBold'>Design-Engineer Hybrid</span>. I’m passionate about bridging the gap between design and development, capable of taking projects from initial research through to final deployment. My expertise includes tools like React.js, Tailwind CSS, Three.js, and Figma for design, and I’m particularly drawn to creating immersive and interactive experiences using GSAP, Locomotive Scroll, and Swiper JS.
          </p>
          <p>
            My educational journey at <span className='text-black font-GilroyBold'>Woxsen University</span> and hands-on experience with diverse projects have shaped my approach to innovation, collaboration, and problem-solving. I am excited to take on new challenges that push boundaries and allow me to create meaningful and impactful user experiences.
          </p>
        </div>

        {/* Work Experience */}
        <div ref={workRef}>
          <div className='section-title w-full h-[23vh] px-[10vh] pt-[8vh]'>
            <h1 className='text-[4vh] font-GilroyBold'>Work Experience</h1>
            <h1 className='text-[2.7vh] text-[#606060]'>My journey in the digital realm.</h1>
          </div>

          <div className='px-[7vw] mb-[15vh]'>
            <p className='text-[3vh] text-[#606060] leading-relaxed mb-[5vh]'>
              During my 10 months at <span className='text-black font-GilroyBold'>NGE Industries</span> as a Web Developer Intern, I played a pivotal role in modernizing the company’s digital presence by designing user-centered platforms and improving overall functionality.
            </p>
            <ul className='space-y-[4vh] text-[3vh] text-[#606060] leading-relaxed'>
              <li>
                Conducting in-depth <span className='text-black font-GilroyBold'>user research</span> to inform design decisions and align solutions with business objectives.
              </li>
              <li>
                Creating intuitive user interfaces and <span className='text-black font-GilroyBold'>prototypes</span> using Figma, ensuring a seamless and visually engaging experience.
              </li>
              <li>
                <span className='text-black font-GilroyBold'>Collaborating</span> closely with cross-functional teams, including developers and business stakeholders, to ensure alignment between user needs and technical requirements.
              </li>
              <li>
                Continuously <span className='text-black font-GilroyBold'>iterating designs</span> based on user feedback to deliver improved, user-friendly digital solutions.
              </li>
              <li>
                <span className='text-black font-GilroyBold'>Developing</span> responsive and interactive front-end components using React JS and Tailwind CSS, prioritizing cross-device compatibility and performance.
              </li>
            </ul>
            <p className='text-[3vh] text-[#606060] leading-relaxed mt-[5vh]'>
              This hands-on experience not only strengthened my expertise in UI design and front-end development but also taught me how to manage complex projects and deliver meaningful results in a collaborative environment.
            </p>
          </div>
        </div>

        {/* Certificates */}
        <div ref={certRef}>
          <div className='section-title w-full h-[23vh] px-[10vh] pt-[8vh]'>
            <h1 className='text-[4vh] font-GilroyBold'>Certificates And More</h1>
            <h1 className='text-[2.7vh] text-[#606060]'>Expanding my horizons.</h1>
          </div>
          <div className='flex overflow-x-auto gap-[5vw] scrollbar-hide pb-[5vh] mb-[10vh] px-[7vw]'>
            {/* Google Certificate Placeholder */}
            <div className='min-w-[40vw] h-[30vh] bg-gray-100 border border-gray-300 rounded-[2vh] flex items-center justify-center'>
              <span className='text-gray-400 text-[3vh] font-GilroyBold'>Google UX Design Header</span>
            </div>
            {/* Front-End Domination Placeholder */}
            <div className='min-w-[40vw] h-[30vh] bg-gray-100 border border-gray-300 rounded-[2vh] flex items-center justify-center'>
              <span className='text-gray-400 text-[3vh] font-GilroyBold'>Front-End Domination</span>
            </div>
            {/* Infosys Certificate Placeholder */}
            <div className='min-w-[40vw] h-[30vh] bg-gray-100 border border-gray-300 rounded-[2vh] flex items-center justify-center'>
              <span className='text-gray-400 text-[3vh] font-GilroyBold'>Infosys Certificate</span>
            </div>
          </div>
        </div>

        {/* Outside Work */}
        <div ref={outsideRef} className='mb-[10vh]'>
          <div className='section-title w-full h-[23vh] px-[10vh] pt-[8vh]'>
            <h1 className='text-[4vh] font-GilroyBold'>What am I like outside of work?</h1>
            <h1 className='text-[2.7vh] text-[#606060]'>I'm glad you asked.</h1>
          </div>

          <div className='space-y-[10vh] px-[7vw]'>
            {/* ISKCON */}
            <div className='flex flex-col lg:flex-row gap-[5vw] items-center'>
              <div className='w-full lg:w-[40%] h-[40vh] bg-orange-100 rounded-[3vh] overflow-hidden flex items-center justify-center'>
                <span className='text-orange-400 font-GilroyBold'>ISKCON Image</span>
              </div>
              <div className='w-full lg:w-[55%] text-[3vh] text-[#606060] leading-relaxed'>
                I follow <span className='text-black font-GilroyBold'>ISKCON</span> (International Society for Krishna Consciousness), and its teachings inspire me to live with a deeper sense of purpose, mindfulness, and compassion. The spiritual practices and values have a significant influence on how I approach life, helping me maintain balance and focus amidst the demands of work and daily life.
              </div>
            </div>

            {/* Tech */}
            <div className='flex flex-col lg:flex-row-reverse gap-[5vw] items-center'>
              <div className='w-full lg:w-[40%] h-[40vh] bg-blue-100 rounded-[3vh] overflow-hidden flex items-center justify-center'>
                <span className='text-blue-400 font-GilroyBold'>Tech Image</span>
              </div>
              <div className='w-full lg:w-[55%] text-[3vh] text-[#606060] leading-relaxed'>
                In addition to my spiritual journey, I have a strong passion for technology. I enjoy watching tech events, from product launches to conferences, to see how innovation and the future are shaped. I’m constantly following tech trends, exploring new tools and frameworks, and learning how emerging technologies can shape the future. This curiosity fuels my professional work and allows me to stay ahead in the fast-evolving tech space.
              </div>
            </div>

            {/* Bike */}
            <div className='flex flex-col lg:flex-row gap-[5vw] items-center'>
              <div className='w-full lg:w-[40%] h-[40vh] bg-green-100 rounded-[3vh] overflow-hidden flex items-center justify-center'>
                <span className='text-green-400 font-GilroyBold'>Bike Image</span>
              </div>
              <div className='w-full lg:w-[55%] text-[3vh] text-[#606060] leading-relaxed'>
                I’m also an avid <span className='text-black font-GilroyBold'>Bike enthusiast</span>. Riding my Continental GT 650 Royal Enfield is one of my favorite ways to unwind and embrace adventure. The bike's classic style and performance reflect my love for blending aesthetics and pushing boundaries. Whether it's a short ride around the city or an open road, the support and refinement are always in tune.
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About