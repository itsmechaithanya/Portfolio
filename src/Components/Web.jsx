import React from 'react'
import { Link } from 'react-router-dom'
import pen from '../assets/web.svg'
import ArrowUp from '../assets/ArrowUp.svg'
import codex from '../assets/codex.svg'
import codexm from '../assets/codexm.svg'
import agro from '../assets/agro.svg'
import agrom from '../assets/agrom.svg'
import jui from '../assets/jui.svg'
import juim from '../assets/juim.svg'
import wox from '../assets/wox.svg'
import woxm from '../assets/woxm.svg'
import ui from '../assets/ui.svg'
import uim from '../assets/uim.svg'
import tv from '../assets/tv.svg'
import tvm from '../assets/tvm.svg'


function Web() {
  return (
    <div>
        <div className='px-[7vw] pt-[15vh] flex'>
          <h1 className='text-[8vh] font-black'>Web Dev</h1>
          <img className='w-[3.5vw] h-[6vh] mt-[3vh] ml-[1vw]' src={pen} alt="Pen Icon" />
        </div>
        <div className='flex flex-col items-center justify-center mt-[5vh]'>
          <div className='h-fit flex justify-center '>
          <div className='w-[90vw] h-fit bg-[#FFF1F1] border border-[#D7D7D7] rounded-[8vh] px-[10vh] py-[10vh]'>
            <div className='flex'>
              <div className='w-[50vw] font-bold leading-[4vh] '><h1 className='text-[3.5vh]'>CodeX Website <span className='text-[#606060] text-[3vh] font-normal'> - University club dedicated to fostering innovation through collaborative projects, skill development, and events in technology and design.</span></h1></div>
              <div className='w-[41vw] h-[10vh] flex flex-col items-end text-[2.2vh] gap-[1vh]'>
                <h1 className='px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>Prototyping</h1>
                <h1 className='px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>Branding</h1>
                <h1 className='px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>Front- end development</h1>
              </div>
            </div>
            <div className='flex gap-[3vw] mt-[5vh]'>
              <Link to="/Pineapple"><div className=''><h1 className='text-white bg-black px-[2vw] py-[1.5vh] rounded-[1vh] flex items-center cursor-pointer'>Visit the website <img className='' src={ArrowUp} alt="" /></h1></div></Link>
              <div className='flex items-center justify-center gap-[1vw]'><div className='h-[1vh] w-[1vh] bg-[#64C200] rounded-[10vh]'></div><h1>Completed</h1></div>
            </div>
            <div className='flex items-center justify-center mt-[5vh]'>
              <div className='w-[80vw] rounded-[5vh] overflow-hidden'>
                <img className='w-full h-full' src={codex} alt="UX Project Image" />
              </div>
            </div>
            <div>
              <div className='flex mt-[8vh]'>
                <div className='w-1/2'><img className='w-[20vw] h-full ml-[5vw]' src={codexm} alt="CodeX Club" /></div>
                <div className='w-1/2 flex items-center '>
                  <h1 className='text-[3vh] text-[#606060]'><span className='font-bold text-black'>CodeX Club</span> at Woxsen University is a student-led organization aimed at building tech skills and fostering innovation. It offers a collaborative environment where students interested in coding, web development, and design come together to work on projects and develop new skills. Members participate in workshops, coding sessions, and hackathons, allowing them to gain hands-on experience in various tech fields.</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className='h-fit flex justify-center mt-[5vh]'>
          <div className='w-[90vw] h-fit bg-[#F1F5FF] border border-[#D7D7D7] rounded-[8vh] px-[10vh] py-[10vh]'>
            <div className='flex'>
              <div className='w-[50vw] font-bold leading-[4vh] '><h1 className='text-[3.5vh]'>Agromate Website <span className='text-[#606060] text-[3vh] font-normal'> - Transforming agriculture through smart technology, sustainable solutions, and innovative practices for modern farming.</span></h1></div>
              <div className='w-[41vw] h-[10vh] flex flex-col items-end text-[2.2vh] gap-[1vh]'>
                <h1 className='px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh] bg-black text-white'>Internship</h1>
                <h1 className='px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>Branding</h1>
                <h1 className='px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>Front- end development</h1>
              </div>
            </div>
            <div className='flex gap-[3vw] mt-[5vh]'>
              <Link to="/Pineapple"><div className=''><h1 className='text-white bg-black px-[2vw] py-[1.5vh] rounded-[1vh] flex items-center cursor-pointer'>Visit the website <img className='' src={ArrowUp} alt="" /></h1></div></Link>
              <div className='flex items-center justify-center gap-[1vw]'><div className='h-[1vh] w-[1vh] bg-[#64C200] rounded-[10vh]'></div><h1>Completed</h1></div>
            </div>
            <div className='flex items-center justify-center mt-[5vh]'>
              <div className='w-[80vw] rounded-[5vh] overflow-hidden'>
                <img className='w-full h-full' src={agro} alt="Agromate Website" />
              </div>
            </div>
            <div>
              <div className='flex mt-[8vh]'>
                <div className='w-1/2'><img className='w-[20vw] h-full ml-[5vw]' src={agrom} alt="Agromate" /></div>
                <div className='w-1/2 flex items-center '>
                  <h1 className='text-[3vh] text-[#606060]'><span className='font-bold text-black'>Agromate</span> revolutionizes water pump management with remote control via a missed call from your smartphone. This smart technology saves electricity, time, and water, eliminating physical visits while offering unmatched convenience for farmers. Recognized for its innovation, Agromate received the IESA Technovation Award for excellence in electronics and the ICRISAT Certificate of Appreciation in 2023, celebrating its impactful contributions to sustainable agriculture.</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className='h-fit flex justify-center mt-[5vh]'>
          <div className='w-[90vw] h-fit bg-[#F5FAEF] border border-[#D7D7D7] rounded-[8vh] px-[10vh] py-[10vh]'>
            <div className='flex'>
              <div className='w-[50vw] font-bold leading-[4vh] '><h1 className='text-[3.5vh]'>Juiceman Website <span className='text-[#606060] text-[3vh] font-normal'> -   Innovative sugarcane vending machine designed to deliver freshly crushed juice with advanced squeezing technology, ensuring hygiene, convenience, and natural goodness.</span></h1></div>
              <div className='w-[41vw] h-[10vh] flex flex-col items-end text-[2.2vh] gap-[1vh]'>
                <h1 className='px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh] bg-black text-white'>Internship</h1>
                <h1 className='px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>Front- end development</h1>
              </div>
            </div>
            <div className='flex gap-[3vw] mt-[5vh]'>
              <Link to="/Pineapple"><div className=''><h1 className='text-white bg-black px-[2vw] py-[1.5vh] rounded-[1vh] flex items-center cursor-pointer'>Visit the website <img className='' src={ArrowUp} alt="" /></h1></div></Link>
              <div className='flex items-center justify-center gap-[1vw]'><div className='h-[1vh] w-[1vh] bg-[#64C200] rounded-[10vh]'></div><h1>Completed</h1></div>
            </div>
            <div className='flex items-center justify-center mt-[5vh]'>
              <div className='w-[80vw] rounded-[5vh] overflow-hidden'>
                <img className='w-full h-full' src={jui} alt="Agromate Website" />
              </div>
            </div>
            <div>
              <div className='flex mt-[8vh]'>
                <div className='w-1/2'><img className='w-[20vw] h-full ml-[5vw]' src={juim} alt="Agromate" /></div>
                <div className='w-1/2 flex items-center '>
                  <h1 className='text-[3vh] text-[#606060]'><span className='font-bold text-black'>Juice Robo</span> rwebsite showcases an innovative sugarcane vending machine equipped with state-of-the-art squeezing technology. Designed to deliver freshly crushed sugarcane juice, the website highlights its focus on freshness, natural goodness, and hygiene. It provides detailed insights into the machine's cutting-edge features and its commitment to revolutionizing the way people enjoy sugarcane juice. Explore how Juice Robo combines technology and convenience for a refreshing experience.</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className='h-fit flex justify-center mt-[5vh]'>
          <div className='w-[90vw] h-fit bg-[#FFF9F1] border border-[#D7D7D7] rounded-[8vh] px-[10vh] py-[10vh]'>
            <div className='flex'>
              <div className='w-[50vw] font-bold leading-[4vh] '><h1 className='text-[3.5vh]'>Woxsen Website <span className='text-[#606060] text-[3vh] font-normal'> - A complete redesign that reflects the university's identity and infrastructure while delivering a rich digital experience for users.</span></h1></div>
              <div className='w-[41vw] h-[10vh] flex flex-col items-end text-[2.2vh] gap-[1vh]'>
                <h1 className='px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>Front- end development</h1>
              </div>
            </div>
            <div className='flex gap-[3vw] mt-[5vh]'>
              <Link to="/Pineapple"><div className=''><h1 className='text-white bg-black px-[2vw] py-[1.5vh] rounded-[1vh] flex items-center cursor-pointer'>Visit the website <img className='' src={ArrowUp} alt="" /></h1></div></Link>
              <div className='flex items-center justify-center gap-[1vw]'><div className='h-[1vh] w-[1vh] bg-[#64C200] rounded-[10vh]'></div><h1>Completed</h1></div>
            </div>
            <div className='flex items-center justify-center mt-[5vh]'>
              <div className='w-[80vw] rounded-[3vh] overflow-hidden'>
                <img className='w-full h-full' src={wox} alt="Woxsen Website" />
              </div>
            </div>
            <div>
              <div className='flex mt-[8vh]'>
                <div className='w-1/2'><img className='w-[20vw] h-full ml-[5vw]' src={woxm} alt="Agromate" /></div>
                <div className='w-1/2 flex items-center '>
                  <h1 className='text-[3vh] text-[#606060]'><span className='font-bold text-black'>Woxsen website</span> highlights my ability to blend design and development by transforming an outdated interface into a modern, responsive platform. I directly built the website from scratch, focusing on creating visually appealing layouts, smooth interactions, and ensuring seamless responsiveness across all devices. This project showcases my attention to detail, user-centered thinking, and capability to deliver impactful web experiences under real-world conditions.</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className='h-fit flex justify-center mt-[5vh]'>
          <div className='w-[90vw] h-fit bg-[#F1F5FF] border border-[#D7D7D7] rounded-[8vh] px-[10vh] py-[10vh]'>
            <div className='flex'>
              <div className='w-[50vw] font-bold leading-[4vh] '><h1 className='text-[3.5vh]'>Uifry Website <span className='text-[#606060] text-[3vh] font-normal'> - Transforming agriculture through smart technology, sustainable solutions, and innovative practices for modern farming.</span></h1></div>
              <div className='w-[41vw] h-[10vh] flex flex-col items-end text-[2.2vh] gap-[1vh]'>
                <h1 className='px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh] bg-black text-white'>Internship</h1>
                <h1 className='px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>Branding</h1>
                <h1 className='px-[2vw] py-[1vh] border border-[#606060] rounded-[10vh]'>Front- end development</h1>
              </div>
            </div>
            <div className='flex gap-[3vw] mt-[5vh]'>
              <Link to="/Pineapple"><div className=''><h1 className='text-white bg-black px-[2vw] py-[1.5vh] rounded-[1vh] flex items-center cursor-pointer'>Visit the website <img className='' src={ArrowUp} alt="" /></h1></div></Link>
              <div className='flex items-center justify-center gap-[1vw]'><div className='h-[1vh] w-[1vh] bg-[#64C200] rounded-[10vh]'></div><h1>Completed</h1></div>
            </div>
            <div className='flex items-center justify-center mt-[5vh]'>
              <div className='w-[80vw] rounded-[3vh] overflow-hidden'>
                <img className='w-full h-full' src={ui} alt="Agromate Website" />
              </div>
            </div>
            <div>
              <div className='flex mt-[8vh]'>
                <div className='w-1/2'><img className='w-[20vw] h-full ml-[5vw]' src={uim} alt="Agromate" /></div>
                <div className='w-1/2 flex items-center '>
                  <h1 className='text-[3vh] text-[#606060]'><span className='font-bold text-black'>UI Fry website</span> rhighlights my hands-on experience with Figma, where I meticulously replicated a given design into a fully functional website. Assigned as a task by my supervisor, I developed the website in just 1.5 days. This included understanding the design, planning the development, making it fully responsive, and adding a dark mode. The project showcases my efficiency, attention to detail, and ability to deliver high-quality work under tight deadlines.</h1>
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