import React from 'react'
import { Link } from 'react-router-dom'
import pen from '../assets/web.svg'
import ArrowUp from '../assets/ArrowUp.svg'
import codex from '../assets/Codex.svg'
import codexm from '../assets/codexm.svg'
import agro from '../assets/Agro.svg'
import agrom from '../assets/agrom.svg'
import jui from '../assets/jui.svg'
import juim from '../assets/juim.svg'
import wox from '../assets/wox.svg'
import woxm from '../assets/woxm.svg'
import ui from '../assets/ui.svg'
import uim from '../assets/uim.svg'
import togood from '../assets/togood.png'
import togoodm from '../assets/togoodm.png'
import tv from '../assets/tv.png'
import tvm from '../assets/tvm.png'


function Web() {
  return (
    <div>
      <div className='px-[7vw] pt-[15vh] flex items-center md:items-start'>
        <h1 className='text-[4.5vh] md:text-[8vh] font-black leading-none'>Web Dev</h1>
        <img loading='lazy' className='w-[6vw] md:w-[3.5vw] h-[4vh] md:h-[6vh] mt-[0.5vh] md:mt-[1vh] ml-[2vw] md:ml-[1vw]' src={pen} alt="Pen Icon" />
      </div>
      <div className='flex flex-col items-center justify-center mt-[5vh] pb-[8vh]'>

        {/* CodeX Website */}
        <div className='h-fit flex justify-center mb-[5vh]'>
          <div className='w-[90vw] h-fit bg-[#FFF1F1] border border-[#D7D7D7] rounded-[4vh] md:rounded-[8vh] px-[6vw] md:px-[10vh] py-[5vh] md:py-[10vh]'>
            <div className='flex flex-col-reverse md:flex-row justify-between'>
              <div className='w-full md:w-[55vw] mt-[3vh] md:mt-0'>
                <h1 className='text-[3.8vh] md:text-[4.5vh] font-bold leading-[4.2vh] md:leading-[5vh] tracking-tight'>CodeX Website</h1>
                <h2 className='text-[#606060] text-[2.4vh] md:text-[2.8vh] font-medium leading-[3.4vh] md:leading-[4vh] mt-[1.5vh]'>
                  University club dedicated to fostering innovation through collaborative projects, skill development, and events in technology and design.
                </h2>
              </div>
              <div className='w-full md:w-[35vw] flex flex-row flex-wrap md:flex-col items-start md:items-end text-[1.8vh] md:text-[2vh] gap-[2.5vw] md:gap-[1vh] font-medium'>
                <h1 className='px-[4vw] md:px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>Prototyping</h1>
                <h1 className='px-[4vw] md:px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>Branding</h1>
                <h1 className='px-[4vw] md:px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>Front- end development</h1>
              </div>
            </div>
            <div className='flex flex-wrap gap-x-[4vw] gap-y-[2.5vh] md:gap-[3vw] mt-[4.5vh] md:mt-[6vh] items-center'>
              <Link to="https://codex-chi-tan.vercel.app" target="_blank" className='cursor-pointer text-[2vh] md:text-[2vh] hover:opacity-80 transition-opacity'><h1 className='text-[#F3F3F3] bg-[#0A0A0A] px-[6vw] md:px-[2.5vw] py-[1.8vh] md:py-[2.2vh] rounded-[2vh] md:rounded-[1.5vh] flex items-center justify-center gap-[2.5vw] md:gap-[0.8vw] font-medium tracking-wide'>Visit the website <img loading='lazy' className='h-[1.8vh] md:h-[2vh] shrink-0' src={ArrowUp} alt="" /></h1></Link>
              <div className='flex items-center justify-center gap-[2vw] md:gap-[1vw] text-[2vh] md:text-[2.2vh] font-medium tracking-wide ml-[2vw] md:ml-[0vw]'><div className='h-[1vh] w-[1vh] bg-[#64C200] rounded-full shrink-0'></div><h1 className='text-black'>Completed</h1></div>
            </div>
            <div className='flex items-center justify-center mt-[4vh] md:mt-[5vh]'>
              <div className='w-[80vw] rounded-[3vh] md:rounded-[5vh] overflow-hidden'>
                <img loading='lazy' className='w-full h-full' src={codex} alt="UX Project Image" />
              </div>
            </div>
            <div>
              <div className='flex flex-col md:flex-row mt-[5vh] md:mt-[8vh]'>
                <div className='w-full md:w-1/2 flex justify-center md:justify-start mb-[4vh] md:mb-0'>
                  <img loading='lazy' className='w-[60vw] md:w-[20vw] h-full ml-0 md:ml-[5vw] object-contain' src={codexm} alt="CodeX Club" />
                </div>
                <div className='w-full md:w-1/2 flex items-center '>
                  <h1 className='text-[2.2vh] md:text-[3vh] text-[#606060]'><span className='font-bold text-black'>CodeX Club</span> at Woxsen University is a student-led organization aimed at building tech skills and fostering innovation. It offers a collaborative environment where students interested in coding, web development, and design come together to work on projects and develop new skills. Members participate in workshops, coding sessions, and hackathons, allowing them to gain hands-on experience in various tech fields.</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Agromate Website */}
        <div className='h-fit flex justify-center mb-[5vh]'>
          <div className='w-[90vw] h-fit bg-[#F1F5FF] border border-[#D7D7D7] rounded-[4vh] md:rounded-[8vh] px-[6vw] md:px-[10vh] py-[5vh] md:py-[10vh]'>
            <div className='flex flex-col-reverse md:flex-row justify-between'>
              <div className='w-full md:w-[55vw] mt-[3vh] md:mt-0'>
                <h1 className='text-[3.8vh] md:text-[4.5vh] font-bold leading-[4.2vh] md:leading-[5vh] tracking-tight'>Agromate Website</h1>
                <h2 className='text-[#606060] text-[2.4vh] md:text-[2.8vh] font-medium leading-[3.4vh] md:leading-[4vh] mt-[1.5vh]'>
                  Transforming agriculture through smart technology, sustainable solutions, and innovative practices for modern farming.
                </h2>
              </div>
              <div className='w-full md:w-[35vw] flex flex-row flex-wrap md:flex-col items-start md:items-end text-[1.8vh] md:text-[2vh] gap-[2.5vw] md:gap-[1vh] font-medium'>
                <h1 className='px-[4vw] md:px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh] bg-black text-white'>Internship</h1>
                <h1 className='px-[4vw] md:px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>Branding</h1>
                <h1 className='px-[4vw] md:px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>Front- end development</h1>
              </div>
            </div>
            <div className='flex flex-wrap gap-x-[4vw] gap-y-[2.5vh] md:gap-[3vw] mt-[4.5vh] md:mt-[6vh] items-center'>
              <Link to="https://agromate.vercel.app" target="_blank" className='cursor-pointer text-[2vh] md:text-[2vh] hover:opacity-80 transition-opacity'><h1 className='text-[#F3F3F3] bg-[#0A0A0A] px-[6vw] md:px-[2.5vw] py-[1.8vh] md:py-[2.2vh] rounded-[2vh] md:rounded-[1.5vh] flex items-center justify-center gap-[2.5vw] md:gap-[0.8vw] font-medium tracking-wide'>Visit the website <img loading='lazy' className='h-[1.8vh] md:h-[2vh] shrink-0' src={ArrowUp} alt="" /></h1></Link>
              <div className='flex items-center justify-center gap-[2vw] md:gap-[1vw] text-[2vh] md:text-[2.2vh] font-medium tracking-wide ml-[2vw] md:ml-[0vw]'><div className='h-[1vh] w-[1vh] bg-[#64C200] rounded-full shrink-0'></div><h1 className='text-black'>Completed</h1></div>
            </div>
            <div className='flex items-center justify-center mt-[4vh] md:mt-[5vh]'>
              <div className='w-[80vw] rounded-[3vh] md:rounded-[5vh] overflow-hidden'>
                <img loading='lazy' className='w-full h-full' src={agro} alt="Agromate Website" />
              </div>
            </div>
            <div>
              <div className='flex flex-col md:flex-row mt-[5vh] md:mt-[8vh]'>
                <div className='w-full md:w-1/2 flex justify-center md:justify-start mb-[4vh] md:mb-0'>
                  <img loading='lazy' className='w-[60vw] md:w-[20vw] h-full ml-0 md:ml-[5vw] object-contain' src={agrom} alt="Agromate" />
                </div>
                <div className='w-full md:w-1/2 flex items-center '>
                  <h1 className='text-[2.2vh] md:text-[3vh] text-[#606060]'><span className='font-bold text-black'>Agromate</span> revolutionizes water pump management with remote control via a missed call from your smartphone. This smart technology saves electricity, time, and water, eliminating physical visits while offering unmatched convenience for farmers. Recognized for its innovation, Agromate received the IESA Technovation Award for excellence in electronics and the ICRISAT Certificate of Appreciation in 2023, celebrating its impactful contributions to sustainable agriculture.</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Juiceman Website */}
        <div className='h-fit flex justify-center mb-[5vh]'>
          <div className='w-[90vw] h-fit bg-[#F5FAEF] border border-[#D7D7D7] rounded-[4vh] md:rounded-[8vh] px-[6vw] md:px-[10vh] py-[5vh] md:py-[10vh]'>
            <div className='flex flex-col-reverse md:flex-row justify-between'>
              <div className='w-full md:w-[55vw] mt-[3vh] md:mt-0'>
                <h1 className='text-[3.8vh] md:text-[4.5vh] font-bold leading-[4.2vh] md:leading-[5vh] tracking-tight'>Juiceman Website</h1>
                <h2 className='text-[#606060] text-[2.4vh] md:text-[2.8vh] font-medium leading-[3.4vh] md:leading-[4vh] mt-[1.5vh]'>
                  Innovative sugarcane vending machine designed to deliver freshly crushed juice with advanced squeezing technology, ensuring hygiene, convenience, and natural goodness.
                </h2>
              </div>
              <div className='w-full md:w-[35vw] flex flex-row flex-wrap md:flex-col items-start md:items-end text-[1.8vh] md:text-[2vh] gap-[2.5vw] md:gap-[1vh] font-medium'>
                <h1 className='px-[4vw] md:px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh] bg-black text-white'>Internship</h1>
                <h1 className='px-[4vw] md:px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>Front- end development</h1>
              </div>
            </div>
            <div className='flex flex-wrap gap-x-[4vw] gap-y-[2.5vh] md:gap-[3vw] mt-[4.5vh] md:mt-[6vh] items-center'>
              <Link to="https://juicerobo-beta.vercel.app" target="_blank" className='cursor-pointer text-[2vh] md:text-[2vh] hover:opacity-80 transition-opacity'><h1 className='text-[#F3F3F3] bg-[#0A0A0A] px-[6vw] md:px-[2.5vw] py-[1.8vh] md:py-[2.2vh] rounded-[2vh] md:rounded-[1.5vh] flex items-center justify-center gap-[2.5vw] md:gap-[0.8vw] font-medium tracking-wide'>Visit the website <img loading='lazy' className='h-[1.8vh] md:h-[2vh] shrink-0' src={ArrowUp} alt="" /></h1></Link>
              <div className='flex items-center justify-center gap-[2vw] md:gap-[1vw] text-[2vh] md:text-[2.2vh] font-medium tracking-wide ml-[2vw] md:ml-[0vw]'><div className='h-[1vh] w-[1vh] bg-[#64C200] rounded-full shrink-0'></div><h1 className='text-black'>Completed</h1></div>
            </div>
            <div className='flex items-center justify-center mt-[4vh] md:mt-[5vh]'>
              <div className='w-[80vw] rounded-[3vh] md:rounded-[5vh] overflow-hidden'>
                <img loading='lazy' className='w-full h-full' src={jui} alt="Agromate Website" />
              </div>
            </div>
            <div>
              <div className='flex flex-col md:flex-row mt-[5vh] md:mt-[8vh]'>
                <div className='w-full md:w-1/2 flex justify-center md:justify-start mb-[4vh] md:mb-0'>
                  <img loading='lazy' className='w-[60vw] md:w-[20vw] h-full ml-0 md:ml-[5vw] object-contain' src={juim} alt="Agromate" />
                </div>
                <div className='w-full md:w-1/2 flex items-center '>
                  <h1 className='text-[2.2vh] md:text-[3vh] text-[#606060]'><span className='font-bold text-black'>Juice Robo</span> website showcases an innovative sugarcane vending machine equipped with state-of-the-art squeezing technology. Designed to deliver freshly crushed sugarcane juice, the website highlights its focus on freshness, natural goodness, and hygiene. It provides detailed insights into the machine's cutting-edge features and its commitment to revolutionizing the way people enjoy sugarcane juice. Explore how Juice Robo combines technology and convenience for a refreshing experience.</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Woxsen Website */}
        <div className='h-fit flex justify-center mb-[5vh]'>
          <div className='w-[90vw] h-fit bg-[#FFF9F1] border border-[#D7D7D7] rounded-[4vh] md:rounded-[8vh] px-[6vw] md:px-[10vh] py-[5vh] md:py-[10vh]'>
            <div className='flex flex-col-reverse md:flex-row justify-between'>
              <div className='w-full md:w-[55vw] mt-[3vh] md:mt-0'>
                <h1 className='text-[3.8vh] md:text-[4.5vh] font-bold leading-[4.2vh] md:leading-[5vh] tracking-tight'>Woxsen Website</h1>
                <h2 className='text-[#606060] text-[2.4vh] md:text-[2.8vh] font-medium leading-[3.4vh] md:leading-[4vh] mt-[1.5vh]'>
                  A complete redesign that reflects the university's identity and infrastructure while delivering a rich digital experience for users.
                </h2>
              </div>
              <div className='w-full md:w-[35vw] flex flex-row flex-wrap md:flex-col items-start md:items-end text-[1.8vh] md:text-[2vh] gap-[2.5vw] md:gap-[1vh] font-medium'>
                <h1 className='px-[4vw] md:px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>Front- end development</h1>
              </div>
            </div>
            <div className='flex flex-wrap gap-x-[4vw] gap-y-[2.5vh] md:gap-[3vw] mt-[4.5vh] md:mt-[6vh] items-center'>
              <Link to="https://woxsen-reimagine-round2.vercel.app" target="_blank" className='cursor-pointer text-[2vh] md:text-[2vh] hover:opacity-80 transition-opacity'><h1 className='text-[#F3F3F3] bg-[#0A0A0A] px-[6vw] md:px-[2.5vw] py-[1.8vh] md:py-[2.2vh] rounded-[2vh] md:rounded-[1.5vh] flex items-center justify-center gap-[2.5vw] md:gap-[0.8vw] font-medium tracking-wide'>Visit the website <img loading='lazy' className='h-[1.8vh] md:h-[2vh] shrink-0' src={ArrowUp} alt="" /></h1></Link>
              <div className='flex items-center justify-center gap-[2vw] md:gap-[1vw] text-[2vh] md:text-[2.2vh] font-medium tracking-wide ml-[2vw] md:ml-[0vw]'><div className='h-[1vh] w-[1vh] bg-[#64C200] rounded-full shrink-0'></div><h1 className='text-black'>Completed</h1></div>
            </div>
            <div className='flex items-center justify-center mt-[4vh] md:mt-[5vh]'>
              <div className='w-[80vw] rounded-[3vh] md:rounded-[3vh] overflow-hidden'>
                <img loading='lazy' className='w-full h-full' src={wox} alt="Woxsen Website" />
              </div>
            </div>
            <div>
              <div className='flex flex-col md:flex-row mt-[5vh] md:mt-[8vh]'>
                <div className='w-full md:w-1/2 flex justify-center md:justify-start mb-[4vh] md:mb-0'>
                  <img loading='lazy' className='w-[60vw] md:w-[20vw] h-full ml-0 md:ml-[5vw] object-contain' src={woxm} alt="Agromate" />
                </div>
                <div className='w-full md:w-1/2 flex items-center '>
                  <h1 className='text-[2.2vh] md:text-[3vh] text-[#606060]'><span className='font-bold text-black'>Woxsen website</span> highlights my ability to blend design and development by transforming an outdated interface into a modern, responsive platform. I directly built the website from scratch, focusing on creating visually appealing layouts, smooth interactions, and ensuring seamless responsiveness across all devices. This project showcases my attention to detail, user-centered thinking, and capability to deliver impactful web experiences under real-world conditions.</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Uifry Website */}
        <div className='h-fit flex justify-center mb-[5vh]'>
          <div className='w-[90vw] h-fit bg-[#F1F5FF] border border-[#D7D7D7] rounded-[4vh] md:rounded-[8vh] px-[6vw] md:px-[10vh] py-[5vh] md:py-[10vh]'>
            <div className='flex flex-col-reverse md:flex-row justify-between'>
              <div className='w-full md:w-[55vw] mt-[3vh] md:mt-0'>
                <h1 className='text-[3.8vh] md:text-[4.5vh] font-bold leading-[4.2vh] md:leading-[5vh] tracking-tight'>Uifry Website</h1>
                <h2 className='text-[#606060] text-[2.4vh] md:text-[2.8vh] font-medium leading-[3.4vh] md:leading-[4vh] mt-[1.5vh]'>
                  I replicated a Figma design into a fully functional website.
                </h2>
              </div>
              <div className='w-full md:w-[35vw] flex flex-row flex-wrap md:flex-col items-start md:items-end text-[1.8vh] md:text-[2vh] gap-[2.5vw] md:gap-[1vh] font-medium'>
                <h1 className='px-[4vw] md:px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>Front- end development</h1>
              </div>
            </div>
            <div className='flex flex-wrap gap-x-[4vw] gap-y-[2.5vh] md:gap-[3vw] mt-[4.5vh] md:mt-[6vh] items-center'>
              <Link to="https://ui-fry-rho.vercel.app" target="_blank" className='cursor-pointer text-[2vh] md:text-[2vh] hover:opacity-80 transition-opacity'><h1 className='text-[#F3F3F3] bg-[#0A0A0A] px-[6vw] md:px-[2.5vw] py-[1.8vh] md:py-[2.2vh] rounded-[2vh] md:rounded-[1.5vh] flex items-center justify-center gap-[2.5vw] md:gap-[0.8vw] font-medium tracking-wide'>Visit the website <img loading='lazy' className='h-[1.8vh] md:h-[2vh] shrink-0' src={ArrowUp} alt="" /></h1></Link>
              <div className='flex items-center justify-center gap-[2vw] md:gap-[1vw] text-[2vh] md:text-[2.2vh] font-medium tracking-wide ml-[2vw] md:ml-[0vw]'><div className='h-[1vh] w-[1vh] bg-[#64C200] rounded-full shrink-0'></div><h1 className='text-black'>Completed</h1></div>
            </div>
            <div className='flex items-center justify-center mt-[4vh] md:mt-[5vh]'>
              <div className='w-[80vw] rounded-[3vh] md:rounded-[3vh] overflow-hidden'>
                <img loading='lazy' className='w-full h-full' src={ui} alt="Agromate Website" />
              </div>
            </div>
            <div>
              <div className='flex flex-col md:flex-row mt-[5vh] md:mt-[8vh]'>
                <div className='w-full md:w-1/2 flex justify-center md:justify-start mb-[4vh] md:mb-0'>
                  <img loading='lazy' className='w-[60vw] md:w-[20vw] h-full ml-0 md:ml-[5vw] object-contain' src={uim} alt="Agromate" />
                </div>
                <div className='w-full md:w-1/2 flex items-center '>
                  <h1 className='text-[2.2vh] md:text-[3vh] text-[#606060]'><span className='font-bold text-black'>UI Fry website</span> highlights my hands-on experience with Figma, where I meticulously replicated a given design into a fully functional website. Assigned as a task by my supervisor, I developed the website in just 1.5 days. This included understanding the design, planning the development, making it fully responsive, and adding a dark mode. The project showcases my efficiency, attention to detail, and ability to deliver high-quality work under tight deadlines.</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Two Good Co Replica */}
        <div className='h-fit flex justify-center mb-[5vh]'>
          <div className='w-[90vw] h-fit bg-[#FAF6F2] border border-[#D7D7D7] rounded-[4vh] md:rounded-[8vh] px-[6vw] md:px-[10vh] py-[5vh] md:py-[10vh]'>
            <div className='flex flex-col-reverse md:flex-row justify-between'>
              <div className='w-full md:w-[55vw] mt-[3vh] md:mt-0'>
                <h1 className='text-[3.8vh] md:text-[4.5vh] font-bold leading-[4.2vh] md:leading-[5vh] tracking-tight'>Two Good Co Replica</h1>
                <h2 className='text-[#606060] text-[2.4vh] md:text-[2.8vh] font-medium leading-[3.4vh] md:leading-[4vh] mt-[1.5vh]'>
                  Replicating an award-winning website to understand advanced structural patterns, smooth scrolling, and dynamic GSAP animations.
                </h2>
              </div>
              <div className='w-full md:w-[35vw] flex flex-row flex-wrap md:flex-col items-start md:items-end text-[1.8vh] md:text-[2vh] gap-[2.5vw] md:gap-[1vh] font-medium'>
                <h1 className='px-[4vw] md:px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>Front-end development</h1>
                <h1 className='px-[4vw] md:px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>GSAP Animations</h1>
              </div>
            </div>
            <div className='flex flex-wrap gap-x-[4vw] gap-y-[2.5vh] md:gap-[3vw] mt-[4.5vh] md:mt-[6vh] items-center'>
              <Link to="https://itsmechaithanya.github.io/replica-of-Two-Good/" target="_blank" className='cursor-pointer text-[2vh] md:text-[2vh] hover:opacity-80 transition-opacity'><h1 className='text-[#F3F3F3] bg-[#0A0A0A] px-[6vw] md:px-[2.5vw] py-[1.8vh] md:py-[2.2vh] rounded-[2vh] md:rounded-[1.5vh] flex items-center justify-center gap-[2.5vw] md:gap-[0.8vw] font-medium tracking-wide'>Visit the website <img loading='lazy' className='h-[1.8vh] md:h-[2vh] shrink-0' src={ArrowUp} alt="" /></h1></Link>
              <div className='flex items-center justify-center gap-[2vw] md:gap-[1vw] text-[2vh] md:text-[2.2vh] font-medium tracking-wide ml-[2vw] md:ml-[0vw]'><div className='h-[1vh] w-[1vh] bg-[#64C200] rounded-full shrink-0'></div><h1 className='text-black'>Completed</h1></div>
            </div>
            <div className='flex items-center justify-center mt-[4vh] md:mt-[5vh]'>
              <div className='w-[80vw] rounded-[3vh] md:rounded-[3vh] overflow-hidden'>
                <img loading='lazy' className='w-full h-full' src={togood} alt="Two Good Co Replica" />
              </div>
            </div>
            <div>
              <div className='flex flex-col md:flex-row mt-[5vh] md:mt-[8vh]'>
                <div className='w-full md:w-1/2 flex justify-center md:justify-start mb-[4vh] md:mb-0'>
                  <img loading='lazy' className='w-[60vw] md:w-[20vw] h-full ml-0 md:ml-[5vw] object-contain' src={togoodm} alt="Two Good Mobile" />
                </div>
                <div className='w-full md:w-1/2 flex items-center '>
                  <h1 className='text-[2.2vh] md:text-[3vh] text-[#606060]'><span className='font-bold text-black'>Two Good Co Replica</span> was the first award-winning website I set out to reconstruct. Building this taught me incredibly valuable lessons regarding how high-end websites are structurally assembled. Throughout the process, I integrated complex tools like GSAP to master timeline-based sequencing and utilized smooth scrolling libraries to elevate the user experience. It ignited my deep interest in motion design and highly interactive web platforms.</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TV Animation Prototype */}
        <div className='h-fit flex justify-center mb-[5vh]'>
          <div className='w-[90vw] h-fit bg-[#ECF4FF] border border-[#D7D7D7] rounded-[4vh] md:rounded-[8vh] px-[6vw] md:px-[10vh] py-[5vh] md:py-[10vh]'>
            <div className='flex flex-col-reverse md:flex-row justify-between'>
              <div className='w-full md:w-[55vw] mt-[3vh] md:mt-0'>
                <h1 className='text-[3.8vh] md:text-[4.5vh] font-bold leading-[4.2vh] md:leading-[5vh] tracking-tight'>Thomas Vance Animation Concept</h1>
                <h2 className='text-[#606060] text-[2.4vh] md:text-[2.8vh] font-medium leading-[3.4vh] md:leading-[4vh] mt-[1.5vh]'>
                  Exploring rendering complexities, smooth scrolling optimizations, and unique interactions through the Lenis scrolling library.
                </h2>
              </div>
              <div className='w-full md:w-[35vw] flex flex-row flex-wrap md:flex-col items-start md:items-end text-[1.8vh] md:text-[2vh] gap-[2.5vw] md:gap-[1vh] font-medium'>
                <h1 className='px-[4vw] md:px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>Front-end development</h1>
                <h1 className='px-[4vw] md:px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>Animation</h1>
              </div>
            </div>
            <div className='flex flex-wrap gap-x-[4vw] gap-y-[2.5vh] md:gap-[3vw] mt-[4.5vh] md:mt-[6vh] items-center'>
              <Link to="https://lenis-js.vercel.app" target="_blank" className='cursor-pointer text-[2vh] md:text-[2vh] hover:opacity-80 transition-opacity'><h1 className='text-[#F3F3F3] bg-[#0A0A0A] px-[6vw] md:px-[2.5vw] py-[1.8vh] md:py-[2.2vh] rounded-[2vh] md:rounded-[1.5vh] flex items-center justify-center gap-[2.5vw] md:gap-[0.8vw] font-medium tracking-wide'>Visit the website <img loading='lazy' className='h-[1.8vh] md:h-[2vh] shrink-0' src={ArrowUp} alt="" /></h1></Link>
              <div className='flex items-center justify-center gap-[2vw] md:gap-[1vw] text-[2vh] md:text-[2.2vh] font-medium tracking-wide ml-[2vw] md:ml-[0vw]'><div className='h-[1vh] w-[1vh] bg-[#64C200] rounded-full shrink-0'></div><h1 className='text-black'>Completed</h1></div>
            </div>
            <div className='flex items-center justify-center mt-[4vh] md:mt-[5vh]'>
              <div className='w-[80vw] rounded-[3vh] md:rounded-[3vh] overflow-hidden'>
                <img loading='lazy' className='w-full h-full' src={tv} alt="TV Prototype Background" />
              </div>
            </div>
            <div>
              <div className='flex flex-col md:flex-row mt-[5vh] md:mt-[8vh]'>
                <div className='w-full md:w-1/2 flex justify-center md:justify-start mb-[4vh] md:mb-0'>
                  <img loading='lazy' className='w-[60vw] md:w-[20vw] h-full ml-0 md:ml-[5vw] object-contain' src={tvm} alt="TV Mobile View" />
                </div>
                <div className='w-full md:w-1/2 flex items-center '>
                  <h1 className='text-[2.2vh] md:text-[3vh] text-[#606060]'><span className='font-bold text-black'>Thomas Vance Animation Project</span> served as my creative sandbox for highly fluid motion experiments. While initially researching the Lenis library, I decided to test its limits by combining its native scroll smoothing with unique dimensional animations. This experimental project pushed me outside conventional UI patterns to understand the fundamental math behind interpolating user scroll speeds with on-screen asset transformations.</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Web