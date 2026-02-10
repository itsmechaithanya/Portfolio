import React from 'react'
import USP from '../assets/USP.svg'
import UXPineapple from '../assets/UXPineapple.svg'
import UXP from '../assets/UXP.png' // Using as icon/logo placeholder if needed, or just text

function Pineapple() {
    return (
        <div className='w-full bg-white font-GilroyMedium pb-[10vh]'>
            <div className='w-full px-[15vw] pt-[15vh]'>

                {/* Title Section */}
                <div className='flex items-center gap-[1vw] mb-[5vh]'>
                    <h1 className='text-[8vh] font-GilroyBold font-extrabold'>Pineapple</h1>
                    {/* Placeholder for the blue bag icon - using a simple div or maybe UXPineapple if it fits, otherwise omitting or using emoji temporarily? 
                The user image shows a blue medical kit/bag. I don't see a clear asset for it. 
                I'll use a placeholder or just the text for now. font-black is widely used. */}
                    <div className='bg-[#4A90E2] p-2 rounded-lg'>
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 10H5C3.89543 10 3 10.8954 3 12V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V12C21 10.8954 20.1046 10 19 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 10V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 14V18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 16H14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                {/* Intro Text */}
                <div className='text-[2.5vh] leading-[4vh] text-[#606060] mb-[5vh]'>
                    <h1>The pineapple project was born from a need to create a unified navigation system that addresses the fragmented nature of healthcare access, specifically within the complex landscape of Chicago. As a UI/UX and product designer on the team, I focused on bridging the gaps between appointment scheduling, insurance verification, and billing transparency. Our primary objective was driven by a single, human-centered question.</h1>
                </div>

                {/* Main Image */}
                <div className='w-full flex justify-center mb-[5vh] bg-[#ECF4FF] rounded-[5vh] py-[5vh]'>
                    <img className='w-[60vw]' src={USP} alt="Pineapple App Screens" />
                </div>

                {/* Quote / Problem Statement */}
                <div className='text-[3vh] font-GilroyBold leading-[4.5vh] mb-[5vh] text-[#1a1a1a]'>
                    <h1>"How might we design a healthcare platform that simplifies scheduling, clarifies insurance coverage, and ensures financial transparency for diverse users in Chicago?"</h1>
                </div>

                {/* Background Section */}
                <div className='mb-[5vh]'>
                    <h1 className='text-[3.5vh] font-GilroyBold mb-[3vh]'>Project background and personal journey</h1>
                    <h1 className='text-[2.5vh] leading-[4vh] text-[#606060]'>
                        Our research into the healthcare domain revealed a startling reality: one in five U.S. adults under the age of 65 face non-cost barriers to care, such as appointment delays and transportation limitations. This mission became personal as we looked at the local Chicago landscape, discovering significant geographic inequities like "maternity care deserts" and massive gaps in access to in-network providers. My journey through this project involved moving beyond national datasets to understand these barriers on a visceral, human level by documenting the lived experiences of patients navigating a system that often shifts the burden of coordination onto them.
                    </h1>
                </div>

                {/* Feature 1: Filter Option (One Phone) */}
                <div className='flex items-center gap-[5vw] mb-[5vh] bg-[#ECF4FF] rounded-[5vh] p-[5vh]'>
                    <div className='w-1/2 flex justify-center'>
                        {/* Single Phone Mockup Placeholder */}
                        {/* This container size (w-[20vw]) mimics a standard phone width relative to the section */}
                        <div className='w-[20vw] rounded-[3vh] overflow-hidden flex items-center justify-center '>
                            <img src={UXP} className='w-full h-full object-cover' alt="Filter Feature - In Network" />
                        </div>
                    </div>
                    <div className='w-1/2 text-[3vh] font-GilroyMedium leading-[4vh]'>
                        Filter option for in-network and out-network hospitals.
                    </div>
                </div>

                {/* Feature 2: Filter Out (Two Phones) */}
                <div className='flex items-center gap-[5vw] mb-[5vh] bg-[#ECF4FF] rounded-[5vh] p-[5vh]'>
                    <div className='w-1/2 flex justify-center gap-[2vw]'>
                        {/* Two Phone Mockups Placeholder */}
                        {/* These container sizes (w-[15vw]) allow two phones to fit side-by-side */}
                        <div className='w-[15vw] rounded-[3vh] overflow-hidden flex items-center justify-center '>
                            <img src={UXPineapple} className='w-full h-full object-contain p-2' alt="Filter Feature - Dates" />
                        </div>
                        <div className='w-[15vw] rounded-[3vh] overflow-hidden flex items-center justify-center '>
                            <img src={UXPineapple} className='w-full h-full object-contain p-2' alt="Filter Feature - Problems" />
                        </div>
                    </div>
                    <div className='w-1/2 text-[3vh] font-GilroyMedium leading-[4vh]'>
                        Filter out based on dates or problems.
                    </div>
                </div>

                {/* Problem Statement */}
                <div className='mb-[5vh]'>
                    <h1 className='text-[3.5vh] font-GilroyBold mb-[3vh]'>Problem Statement</h1>
                    <div className='text-[2.5vh] leading-[4vh] text-[#606060] space-y-[3vh]'>
                        <p>
                            Healthcare today feels harder than it should be. People struggle to find the right doctor, understand their insurance, and trust the cost of care. A lack of clarity and accessibility leaves many delaying treatment and feeling anxious before they even step into a clinic.
                        </p>
                        <p>
                            Right now, finding healthcare online often feels exhausting and confusing rather than helpful. People searching for a doctor are pushed through scattered websites, unclear profiles, and dense medical language, leaving them drained before they even book an appointment. Many patients don’t just struggle to find the right provider—they struggle to understand whether their insurance will actually cover the visit and what it might cost them in the end.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Pineapple
