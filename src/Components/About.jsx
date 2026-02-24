import React from 'react'
import ab1 from '../assets/ab1.jpg'
import ab2 from '../assets/ab2.svg'
import abk from '../assets/abk.svg'
import abb from '../assets/abb.svg'
import gsap from 'gsap'

function About() {
  return (
    <div className='w-full bg-white font-GilroyMedium overflow-hidden'>
      <div className='w-[95vw] mx-auto'>
        <div className='px-[7vw] pt-[15vh] flex'>
          <h1 className='text-[5.5vh] md:text-[8vh] font-black font-GilroyBold mb-[3vh] md:mb-[5vh] leading-none'>About Me :)</h1>
        </div>
        <div className='px-[7vw] flex flex-col-reverse md:flex-row gap-[4vh] md:gap-[5vw] mb-[10vh] md:mb-[15vh] items-center md:items-start'>
          <div className='w-full md:w-[60%] text-[2.2vh] md:text-[3vh] font-medium leading-[3.5vh] md:leading-[5vh] text-[#606060] space-y-[3vh] md:space-y-[4vh]'>
            <p>
              I’m Chaithanya, A UX Designer and Web Developer with a passion for crafting engaging and impactful digital experiences. My journey began with web development, but I quickly became fascinated by the ‘Why’ behind user interactions. This curiosity led me to explore UX design, where I discovered my passion for solving complex problems through intuitive and User Centered solutions.
            </p>
            <p>
              While my official title has been UX Engineer, I see myself as a <span className='text-black font-GilroyBold'>Design-Engineer Hybrid</span>. I’m passionate about bridging the gap between design and development, capable of taking projects from initial research through to final deployment. My expertise includes tools like React.js, Tailwind CSS, Three.js, and Figma for design, and I’m particularly drawn to creating immersive and interactive experiences using GSAP, Locomotive Scroll, and Swiper JS.
            </p>
            <p>
              My educational journey began at <span className='text-black font-GilroyBold'>Woxsen University, Hyderabad, India</span>, where I completed my <span className='text-black font-GilroyBold'>Computer Science</span> degree. The hands-on experience with diverse projects there has shaped my approach to innovation, collaboration, and problem-solving.
            </p>
            <p>
              Currently, I am pursuing <span className='text-black font-GilroyBold'>Human Computer Interaction</span> at <span className='text-black font-GilroyBold'>DePaul University, Chicago, USA</span> to get hands-on education with User Centered Design. I am excited to take on new challenges that push boundaries and allow me to create meaningful and impactful user experiences.
            </p>
          </div>
          <div className='w-full md:w-[40%] shrink-0'>
            <img src={ab1} alt="Chaithanya" className='w-full rounded-[3vh] object-cover' />
          </div>
        </div>

        {/* Work Experience */}
        <div className='px-[7vw] mb-[10vh] md:mb-[15vh]'>
          <h1 className='text-[4.5vh] md:text-[6vh] tracking-tighter font-GilroyBold mb-[3vh] md:mb-[5vh] leading-[5vh]'>Work Experience</h1>
          <div className='text-[2.2vh] md:text-[3vh] font-medium leading-[3.5vh] md:leading-[5vh] text-[#606060] space-y-[3vh] md:space-y-[4vh]'>
            <p>
              During my 10 months at <span className='text-black font-GilroyBold'>NGE Industries</span> as a Web Developer <span className='text-black font-GilroyBold'>Intern</span>, I played a pivotal role in modernizing the company’s digital presence by designing user-centered platforms and improving overall functionality.
            </p>
            <div className='space-y-[3vh] md:space-y-[4vh]'>
              <p>
                Conducting in-depth <span className='text-black font-GilroyBold'>user research</span> to inform design decisions and align solutions with business objectives.
              </p>
              <p>
                Creating intuitive user interfaces and <span className='text-black font-GilroyBold'>prototypes</span> using Figma, ensuring a seamless and visually engaging experience.
              </p>
              <p>
                <span className='text-black font-GilroyBold'>Collaborating</span> closely with cross-functional teams, including developers and business stakeholders, to ensure alignment between user needs and technical requirements.
              </p>
              <p>
                Continuously <span className='text-black font-GilroyBold'>iterating designs</span> based on user feedback to deliver impactful, user-friendly digital solutions.
              </p>
              <p>
                <span className='text-black font-GilroyBold'>Developing</span> responsive and interactive front-end components with React JS and Tailwind CSS, emphasizing cross-device compatibility and performance.
              </p>
            </div>
            <p>
              This hands-on experience not only strengthened my expertise in UX design and front-end development but also taught me how to manage complex projects and deliver meaningful results in a collaborative environment.
            </p>
          </div>
        </div>

        {/* Outside Work */}
        <div className='px-[7vw] mb-[10vh] md:mb-[15vh]'>
          <h1 className='text-[4.5vh] md:text-[6vh] tracking-tighter leading-[5vh] md:leading-[6.5vh] font-GilroyBold'>What am I like outside of work?</h1>
          <h1 className='text-[2.2vh] md:text-[3vh] text-[#606060] font-medium mb-[4vh] md:mb-[5vh] mt-[1vh] md:mt-0'>I'm glad you asked.</h1>

          <div className='flex flex-col md:flex-row gap-[3vh] md:gap-[5vw] items-center'>
            <div className='w-full md:w-[35vw] shrink-0'>
              <img src={abk} alt="ISKCON" className='w-full rounded-[3vh]' />
            </div>
            <div className='text-[2.2vh] md:text-[3vh] font-medium leading-[3.5vh] md:leading-[5vh] text-[#606060]'>
              <p>
                I follow <span className='text-black font-GilroyBold'>ISKCON</span> (International Society for Krishna Consciousness), and its teachings inspire me to live with a deeper sense of purpose, mindfulness, and compassion. The spiritual practices and values have a significant influence on how I approach life, helping me maintain balance and focus amidst the demands of work and daily life.
              </p>
            </div>
          </div>

          <div className='flex flex-col-reverse md:flex-row gap-[3vh] md:gap-[5vw] items-center mt-[5vh]'>
            <div className='text-[2.2vh] md:text-[3vh] font-medium leading-[3.5vh] md:leading-[5vh] text-[#606060]'>
              <p>
                I’m also an avid <span className='text-black font-GilroyBold'>bike enthusiast</span>. Riding my Continental GT from Royal Enfield is one of my favorite ways to unwind and embrace adventure. The bike’s classic style and performance reflect my love for exploring new places and pushing boundaries. It’s not just about the ride it’s about the sense of freedom, the thrill of the open road, and the opportunity to disconnect and recharge in nature.
              </p>
            </div>
            <div className='w-full md:w-[35vw] shrink-0'>
              <img src={abb} alt="Bike" className='w-full rounded-[3vh]' />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About