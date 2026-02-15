import React from 'react'
import USP from '../assets/UXHeroImage.svg'
import Find from '../assets/Find.svg'
import UXLogo from '../assets/UXLogo.svg'
import UXPineapple from '../assets/UXPineapple.svg'
import Problem from '../assets/Problem.svg'
import Doctor from '../assets/Doctor.svg'
import B1 from '../assets/b1.svg'
import B2 from '../assets/b2.svg'
import B3 from '../assets/b3.svg'
import i1 from '../assets/i1.svg'
import i2 from '../assets/i2.svg'
import mychat from '../assets/mychat.svg'
import zocdoc from '../assets/zocdoc.svg'
import p1 from '../assets/p1.svg'
import p2 from '../assets/p2.svg'
import p3 from '../assets/p3.svg'
import paper from '../assets/paper.svg'
import v2 from '../assets/v2.svg'
import v22 from '../assets/v2.2.svg'
import v3 from '../assets/v3.svg'
import v32 from '../assets/v3.2.svg'
import UXP from '../assets/UXP.png' // Using as icon/logo placeholder if needed, or just text

function Pineapple() {
    return (
        <div className='w-screen min-h-screen bg-white font-GilroyMedium'>
            <div className='max-w-[80vw] mx-auto pt-[15vh]'>
                {/* Header */}
                <div className='flex items-center gap-[1vw] mb-[8vh]'>
                    <h1 className='text-[9vh] font-extrabold font-GilroyBold'>Pineapple</h1>
                    <img src={UXLogo} alt="Medical Icon" className='h-[9.5vh] mt-[-1vh]' />
                </div>

                {/* Description */}
                <p className='text-[2.6vh] text-[#606060] leading-[4vh] w-[80vw] mb-[7vh] font-medium'>
                    The Pineapple Project Was Born From A Need To Create A Unified Navigation System That Addresses The Fragmented Nature Of Healthcare Access, Specifically Within The Complex Landscape Of Chicago.
                </p>

                {/* Image Section */}
                <div className='w-full bg-[#EFF0FF] rounded-[6vh] flex justify-center mb-[12vh]'>
                    <img src={USP} alt="Pineapple App Screens" className='w-full object-contain' />
                </div>

                {/* Quote Section */}
                <div className='flex justify-center mb-[12vh]'>
                    <h2 className='text-[3.3vh] font-GilroyBold leading-[5vh] text-center max-w-[55vw]'>
                        "How Might We Design A Healthcare Platform That <br />
                        Simplifies Scheduling, Clarifies Insurance Coverage, <br />
                        And Ensures Financial Transparency For Diverse <br />
                        Users In Chicago?"
                    </h2>
                </div>

                {/* Project Background Section */}
                <div className='mb-[12vh]'>
                    <div className='relative inline-block mb-[5vh]'>
                        <h2 className='text-[4vh] font-GilroyBold'>Project Background And Personal Journey</h2>
                        <div className='absolute bottom-[-1vh] left-0 w-[12vh] h-[0.8vh] bg-[#3B82F6] rounded-full'></div>
                    </div>

                    <div className='text-[2.6vh] text-[#606060] leading-[4.5vh] max-w-[80vw] space-y-[4vh] font-medium'>
                        <p>
                            Our Research Into The Healthcare Domain Revealed A Startling Reality: <span className='text-black font-GilroyBold'>One In Five U.S. Adults</span> Under The Age Of 65 Face Non-Cost Barriers To Care, Such As Appointment Delays And Transportation Limitations.
                        </p>
                        <p>
                            This Mission Became Personal As We Looked At The Local Chicago Landscape, Discovering Significant Geographic Inequities Like "Maternity Care Deserts" And Massive Gaps In Access To In-Network Providers.
                        </p>
                        <p>
                            My Journey Through This Project Involved Moving Beyond National Datasets To Understand These Barriers On A Visceral, Human Level By Documenting The Lived Experiences Of Patients Navigating A System That Often Shifts The Burden Of Coordination Onto Them.
                        </p>
                    </div>
                </div>

                {/* Core Features Section */}
                <div className='mb-[5vh]'>
                    <div className='relative inline-block mb-[5vh]'>
                        <h2 className='text-[4vh] font-GilroyBold'>Core Features</h2>
                        <div className='absolute bottom-[-1vh] left-0 w-[8vh] h-[0.8vh] bg-[#3B82F6] rounded-full'></div>
                    </div>

                    <div className='w-full border border-[#D7D7D7] rounded-[8vh] px-[10vh] py-[5vh] flex items-center justify-between'>
                        {/* Left Side - Phone Image */}
                        <div className='w-[50%] flex justify-center'>
                            {/* Placeholder for the specific "Find Hospitals" screen. */}
                            <img src={Find} alt="Find Hospitals Feature" className='h-[70vh] object-contain' />
                        </div>

                        {/* Right Side - Text */}
                        <div className='w-[40%] flex flex-col justify-between h-[55vh]'>
                            <h3 className='text-[5vh] font-GilroyBold leading-[6vh]'>
                                Find Hospitals <br /> With Ease.
                            </h3>
                            <p className='text-[2.6vh] text-[#606060] font-medium'>
                                Network Filtering: Clear visual distinctio between providers covered by your insurance and those that aren't.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Filter Feature Section */}
                <div className='mb-[5vh]'>
                    {/* The design shows this section without a "Core Features" title again, just another card. 
                        Wait, the previous "Core Features" title was outside the card.
                        Does this card belong to "Core Features"? Yes.
                        I should probably wrap these cards or just add another card below. 
                        The user sent "add this section" with an image of a card.
                        It looks like a separate card. I will add it as another card below the previous one. */}
                    <div className='w-full border border-[#D7D7D7] rounded-[8vh] px-[10vh] py-[5vh] flex items-center justify-between'>
                        {/* Left Side - Phone Image (2 phones) */}
                        <div className='w-[50%] flex gap-[2vw] justify-center'>
                            {/* Placeholder: The design shows 2 phones. I don't have a 2-phone asset named 'Filter'. 
                                 I'll use UXPineapple (3 phones) or Find (1 phone) as placeholder.
                                 I'll use UXPineapple for now as it depicts multiple screens. */}
                            <img src={Doctor} alt="Filter Doctors Feature" className='h-[70vh] object-contain' />
                            <img src={Problem} alt="Filter Doctors Feature" className='h-[70vh] object-contain' />
                        </div>

                        {/* Right Side - Text */}
                        <div className='w-[40%]'>
                            <h3 className='text-[5vh] font-GilroyBold mb-[8vh] leading-[6vh]'>
                                Filter Out Based <br /> On Dates Or <br /> Problems.
                            </h3>
                            <p className='text-[2.6vh] text-[#606060] font-medium leading-[4vh]'>
                                Our advanced filtering system allows patients to find specialists based on their specific health <span className='text-black font-GilroyBold'>Problems</span> or desired <span className='text-black font-GilroyBold'>Appointment Dates</span>, reducing the barrier to timely care.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Personalized Bill Estimations Section */}
                <div className='mb-[5vh]'>
                    <div className='w-full border border-[#D7D7D7] rounded-[8vh] px-[10vh] py-[8vh]'>
                        <div className='mb-[5vh]'>
                            <h2 className='text-[5vh] font-GilroyBold leading-[6vh]'>
                                Personalized Bill <br /> Estimations.
                            </h2>
                        </div>

                        <div className='flex justify-center mb-[5vh] gap-[2vw]'>
                            {/* Placeholder for the 3 phones image showing bill estimation flow. 
                                Using UXPineapple as it depicts 3 phones, which matches the layout. */}
                            <img src={B1} alt="Bill Estimation Screens" className='w-full object-contain' />
                            <img src={B2} alt="Bill Estimation Screens" className='w-full object-contain' />
                            <img src={B3} alt="Bill Estimation Screens" className='w-full object-contain' />
                        </div>

                        <div className=''>
                            <p className='text-[2.6vh] text-[#606060] font-medium leading-[4vh]'>
                                Say goodbye to surprise medical bills. Our estimation tool allows users to select their hospital, doctor, and specific procedure to generate a detailed cost projection before the appointment.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Seamless Insurance Management Section */}
                <div className='mb-[12vh]'>
                    <div className='w-full border border-[#D7D7D7] rounded-[8vh] px-[10vh] py-[5vh] flex items-center justify-between'>
                        {/* Left Side - Phone Image (2 phones) */}
                        <div className='w-[50%] flex gap-[2vw] justify-center'>
                            {/* Placeholder: Using Doctor and Problem again as placeholders for the 2 insurance screens. */}
                            <img src={i1} alt="Insurance Management Feature" className='h-[70vh] object-contain' />
                            <img src={i2} alt="Insurance Management Feature" className='h-[70vh] object-contain' />
                        </div>

                        {/* Right Side - Text */}
                        <div className='w-[40%] flex flex-col justify-center gap-[5vh]'>
                            <h3 className='text-[5vh] font-GilroyBold leading-[6vh]'>
                                Seamless <br /> Insurance <br /> Management.
                            </h3>
                            <p className='text-[2.6vh] text-[#606060] font-medium leading-[4vh]'>
                                Effortlessly digitize and track your benefits. With OCR scanning technology, adding a new insurance card takes seconds, instantly syncing your coverage details with our search and estimation tools.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Research: Competitive & Contextual Analysis Section */}
                <div className='mb-[12vh]'>
                    <div className='relative inline-block mb-[7vh]'>
                        <h2 className='text-[4vh] font-GilroyBold'>Research: Competitive & Contextual Analysis</h2>
                        <div className='absolute bottom-[-1vh] left-0 w-[12vh] h-[0.8vh] bg-[#3B82F6] rounded-full'></div>
                    </div>

                    <div className='flex gap-[2vw]'>
                        {/* Zocdoc Card */}
                        <div className='w-1/2 border border-[#D7D7D7] rounded-[4vh] p-[5vh] shadow-[0_4px_20px_0_rgba(0,0,0,0.05)]'>
                            <div className='flex items-center gap-[2vh] mb-[5vh]'>
                                <img src={zocdoc} alt="Zocdoc Logo" className='w-[8vh] h-[8vh] object-contain' />
                                <h3 className='text-[4vh] font-GilroyBold'>Zocdoc</h3>
                            </div>

                            <div className='space-y-[4vh]'>
                                {/* Strengths */}
                                <div>
                                    <h4 className='text-[2.2vh] font-GilroyBold text-[#00C96F] mb-[2vh] flex items-center gap-[1vh]'>
                                        <span className='text-[3vh]'>↗</span> STRENGTHS
                                    </h4>
                                    <ul className='list-disc pl-[2.5vh] space-y-[1vh] text-[2.2vh] text-[#606060] font-medium'>
                                        <li>Easy provider search and booking</li>
                                        <li>Wide network of doctors</li>
                                        <li>Good for quick appointment discovery</li>
                                    </ul>
                                </div>

                                {/* Weaknesses */}
                                <div>
                                    <h4 className='text-[2.2vh] font-GilroyBold text-[#FF4D4D] mb-[2vh] flex items-center gap-[1vh]'>
                                        <span className='text-[3vh]'>↘</span> WEAKNESSES
                                    </h4>
                                    <ul className='list-disc pl-[2.5vh] space-y-[1vh] text-[2.2vh] text-[#606060] font-medium'>
                                        <li>Search-first flow → Out-of-network surprises</li>
                                        <li>Inconsistent pricing information</li>
                                        <li>Hard to find fast or urgent appointments</li>
                                    </ul>
                                </div>

                                {/* Opportunities */}
                                <div>
                                    <h4 className='text-[2.2vh] font-GilroyBold text-[#3B82F6] mb-[2vh] flex items-center gap-[1vh]'>
                                        <span className='text-[3vh]'>⚲</span> OPPORTUNITIES
                                    </h4>
                                    <ul className='list-disc pl-[2.5vh] space-y-[1vh] text-[2.2vh] text-[#606060] font-medium'>
                                        <li>Add insurance-first onboarding</li>
                                        <li>Show real-time cost estimates</li>
                                        <li>Improve "fastest available" logic</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* MyChart Card */}
                        <div className='w-1/2 border border-[#D7D7D7] rounded-[4vh] p-[5vh] shadow-[0_4px_20px_0_rgba(0,0,0,0.05)]'>
                            <div className='flex items-center gap-[2vh] mb-[5vh]'>
                                <img src={mychat} alt="MyChart Logo" className='w-[8vh] h-[8vh] object-contain' />
                                <h3 className='text-[4vh] font-GilroyBold'>MyChart</h3>
                            </div>

                            <div className='space-y-[4vh]'>
                                {/* Strengths */}
                                <div>
                                    <h4 className='text-[2.2vh] font-GilroyBold text-[#00C96F] mb-[2vh] flex items-center gap-[1vh]'>
                                        <span className='text-[3vh]'>↗</span> STRENGTHS
                                    </h4>
                                    <ul className='list-disc pl-[2.5vh] space-y-[1vh] text-[2.2vh] text-[#606060] font-medium'>
                                        <li>Access to medical records and test results</li>
                                        <li>Direct connection to healthcare providers</li>
                                        <li>Useful for post-visit documentation</li>
                                    </ul>
                                </div>

                                {/* Weaknesses */}
                                <div>
                                    <h4 className='text-[2.2vh] font-GilroyBold text-[#FF4D4D] mb-[2vh] flex items-center gap-[1vh]'>
                                        <span className='text-[3vh]'>↘</span> WEAKNESSES
                                    </h4>
                                    <ul className='list-disc pl-[2.5vh] space-y-[1vh] text-[2.2vh] text-[#606060] font-medium'>
                                        <li>Manual insurance verification</li>
                                        <li>No upfront pricing clarity</li>
                                        <li>Fragmented and glitchy booking flows</li>
                                    </ul>
                                </div>

                                {/* Opportunities */}
                                <div>
                                    <h4 className='text-[2.2vh] font-GilroyBold text-[#3B82F6] mb-[2vh] flex items-center gap-[1vh]'>
                                        <span className='text-[3vh]'>⚲</span> OPPORTUNITIES
                                    </h4>
                                    <ul className='list-disc pl-[2.5vh] space-y-[1vh] text-[2.2vh] text-[#606060] font-medium'>
                                        <li>Simplify scheduling experience</li>
                                        <li>Improve insurance and claims tracking</li>
                                        <li>Add accessibility and caregiver features</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* User Research & Synthesis Section */}
                <div className='mb-[12vh]'>
                    <div className='relative inline-block mb-[7vh] '>
                        <h2 className='text-[4vh] font-GilroyBold'>User Research & Synthesis</h2>
                        <div className='absolute bottom-[-1vh] left-0 w-[12vh] h-[0.8vh] bg-[#3B82F6] rounded-full'></div>
                    </div>

                    <div className='space-y-[8vh]'>
                        {/* User Surveys and Interviews */}
                        <div>
                            <div className='flex items-center gap-[2vh] mb-[3vh]'>
                                <div className='w-[6vh] h-[6vh] bg-[#E0E7FF] rounded-[1.5vh] flex items-center justify-center text-[#3B82F6] text-[3vh]'>
                                    👥
                                </div>
                                <h3 className='text-[3.5vh] font-GilroyBold'>User Surveys and Interviews</h3>
                            </div>
                            <p className='text-[2.6vh] text-[#606060] leading-[4.5vh] font-medium'>
                                We embarked on a qualitative research mission, conducting twelve semi-structured contextual interviews with a diverse demographic ranging from 20 to 72 years of age. These participants included international students, working professionals, and retirees, allowing us to capture a wide range of perspectives on healthcare navigation. Each interview lasted between 15 and 30 minutes and was conducted via Zoom or in person, providing users with a safe space to share their frustrations regarding providers, billing, and digital portals in their own words.
                            </p>
                        </div>

                        {/* User Surveys Takeaways */}
                        <div>
                            <div className='flex items-center gap-[2vh] mb-[3vh]'>
                                <div className='w-[6vh] h-[6vh] bg-[#E0E7FF] rounded-[1.5vh] flex items-center justify-center text-[#3B82F6] text-[3vh]'>
                                    📈
                                </div>
                                <h3 className='text-[3.5vh] font-GilroyBold'>User Surveys Takeaways</h3>
                            </div>
                            <p className='text-[2.6vh] text-[#606060] leading-[4.5vh] font-medium'>
                                The feedback from these sessions highlighted a universal demand for a more integrated, transparent solution that prioritizes the patient's time and financial peace of mind. We discovered that even highly health-literate professionals were frustrated by the constant back-and-forth between insurers and providers, which often led to repeated medical tests and delayed treatments. International students specifically noted the added layer of "administrative complexity" and cultural adjustment required to understand the U.S. insurance system, which often led to emotional strain and delayed care.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Card Sorts And Affinity Mapping Section */}
                <div className='mb-[12vh]'>
                    <div className='relative inline-block mb-[7vh]'>
                        <h2 className='text-[4vh] font-GilroyBold'>Card Sorts And Affinity Mapping</h2>
                        <div className='absolute bottom-[-1vh] left-0 w-[12vh] h-[0.8vh] bg-[#3B82F6] rounded-full'></div>
                    </div>

                    {/* Goals and Frustrations Cards */}
                    <div className='flex gap-[2vw] mb-[5vh]'>
                        {/* Goals Card */}
                        <div className='w-1/2 border border-[#F2F2F2] bg-white rounded-[4vh] p-[5vh] shadow-[0_4px_40px_0_rgba(0,0,0,0.03)]'>
                            <div className='flex items-center gap-[2vh] mb-[4vh]'>
                                <div className='w-[6vh] h-[6vh] bg-[#D1FAE5] rounded-[1.5vh] flex items-center justify-center text-[#10B981] text-[3vh] font-bold'>
                                    ◎
                                </div>
                                <h3 className='text-[3.5vh] font-GilroyBold'>Goals</h3>
                            </div>
                            <ul className='space-y-[2.5vh]'>
                                {[
                                    "Find the right healthcare provider quickly without confusion",
                                    "Clearly understand insurance coverage before booking appointments",
                                    "Avoid unexpected medical costs and surprise bills",
                                    "Schedule appointments easily with minimal steps",
                                    "Feel confident and informed while making healthcare decisions"
                                ].map((item, index) => (
                                    <li key={index} className='flex items-start gap-[2vh] text-[2.2vh] text-[#606060] font-medium leading-[3.5vh]'>
                                        <span className='text-[#10B981] font-bold mt-[0.5vh]'>✓</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Frustrations Card */}
                        <div className='w-1/2 border border-[#F2F2F2] bg-white rounded-[4vh] p-[5vh] shadow-[0_4px_40px_0_rgba(0,0,0,0.03)]'>
                            <div className='flex items-center gap-[2vh] mb-[4vh]'>
                                <div className='w-[6vh] h-[6vh] bg-[#FFE4E6] rounded-[1.5vh] flex items-center justify-center text-[#F43F5E] text-[3vh] font-bold'>
                                    ⚠
                                </div>
                                <h3 className='text-[3.5vh] font-GilroyBold'>Frustrations</h3>
                            </div>
                            <ul className='space-y-[2.5vh]'>
                                {[
                                    "Healthcare information is scattered across multiple platforms",
                                    "Insurance details are unclear, confusing, or hard to verify",
                                    "Appointment booking feels time-consuming and overwhelming",
                                    "Medical terminology is difficult to understand",
                                    "Lack of transparency creates anxiety and delays in seeking care"
                                ].map((item, index) => (
                                    <li key={index} className='flex items-start gap-[2vh] text-[2.2vh] text-[#606060] font-medium leading-[3.5vh]'>
                                        <span className='text-[#F43F5E] font-bold mt-[0.5vh]'>✕</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* User Quotes Section */}
                    <div className='bg-[#EFF0FF] rounded-[6vh] p-[5vh]'>
                        <div className='flex items-center gap-[2vh] mb-[3vh]'>
                            <span className='text-[6vh] text-[#3B82F6] font-GilroyBold font-serif'>”</span>
                            <h3 className='text-[4vh] font-GilroyBold'>User Quotes</h3>
                        </div>

                        <div className='grid grid-cols-2 gap-x-[5vh] gap-y-[6vh]'>
                            {[
                                "\"I don't know if my insurance actually covers this.\"",
                                "\"I'm afraid of getting a bill I wasn't expecting.\"",
                                "\"Booking a doctor's appointment feels more complicated than it should be.\"",
                                "\"There's too much information, but no clear answers.\""
                            ].map((quote, index) => (
                                <div key={index} className='flex gap-[2vh]'>
                                    <div className='w-[0.5vh] bg-[#3B82F6] rounded-full h-full min-h-[6vh]'></div>
                                    <p className='text-[2.8vh] text-[#606060] font-medium italic leading-[4vh]'>
                                        {quote}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Meet The Users: Personas, Task Flows, And Journeys Section */}
                <div className='mb-[12vh]'>
                    <div className='relative inline-block mb-[5vh]'>
                        <h2 className='text-[4vh] font-GilroyBold'>Meet The Users: Personas, Task Flows, And Journeys</h2>
                        <div className='absolute bottom-[-1vh] left-0 w-[12vh] h-[0.8vh] bg-[#3B82F6] rounded-full'></div>
                    </div>

                    <div className='text-[2.6vh] text-[#606060] leading-[4.5vh] max-w-[80vw] font-medium mb-[8vh]'>
                        <p>
                            To Humanize Our Data, We Developed Three Detailed Personas That Truly Reflected The Aspirations And Needs Of Our Target Audience. Strawberry, An International Graduate Student, Represents Users Who Value Time And Predictable Costs But Are Often Overwhelmed By Public Transit And Medical Jargon. Blueberry, A Working Professional And Physiotherapist, Illustrates The Frustrations Of Those Who Are Health-Literate Yet Exhausted By Poor Coordination And Unexpected Billing. Finally, Watermelon, A 72-Year-Old Retired Professor, Embodies The Accessibility Barriers And Digital Fatigue Faced By Older Adults Who Require Simplified Interfaces And Caregiver Support.
                        </p>
                    </div>

                    {/* Personas Images */}
                    <div className='space-y-[5vh]'>
                        {/* Row 1: Strawberry & Watermelon */}
                        <div className='flex gap-[2vw] justify-center'>
                            <img src={p1} alt="Persona Strawberry" className='w-[48%] object-contain shadow-[0_4px_40px_0_rgba(0,0,0,0.05)]' />
                            <img src={p2} alt="Persona Watermelon" className='w-[48%] object-contain shadow-[0_4px_40px_0_rgba(0,0,0,0.05)]' />
                        </div>

                        {/* Row 2: Blueberry */}
                        <div className='flex justify-center'>
                            <img src={p3} alt="Persona Blueberry" className='w-[48%] object-contain rounded-[4vh] shadow-[0_4px_40px_0_rgba(0,0,0,0.05)]' />
                        </div>
                    </div>
                </div>

                {/* Exploration And Ideation: IA And Wireframes Section */}
                <div className='mb-[12vh]'>
                    <div className='relative inline-block mb-[5vh]'>
                        <h2 className='text-[4vh] font-GilroyBold'>Exploration And Ideation: IA And Wireframes</h2>
                        <div className='absolute bottom-[-1vh] left-0 w-[12vh] h-[0.8vh] bg-[#3B82F6] rounded-full'></div>
                    </div>

                    <div className='text-[2.6vh] text-[#606060] leading-[4.5vh] max-w-[80vw] font-medium'>
                        <p>
                            The Development Of Pineapple Was Non-Linear Journey That Culminated In This Final 3th Version. We Progressed Through Three Major Milestones Moving From Initial Research And Low-Fidelity Sketches To Mid-Fidelity Wireframes And, Ultimately, This High-Fidelity, User-Validated Design. Each Iteration Allowed Us To Pivot From A Broad Conceptual Prototype To A Focused Solution, Continuously "Subtracting To Add Value" By Prioritizing The Core Booking And Billing Features Our Users Needed Most.
                        </p>
                    </div>
                </div>

                {/* Version 1: Conceptual Paper Prototyping Section */}
                <div className='mb-[5vh]'>
                    <div className='w-full border border-[#D7D7D7] rounded-[8vh] px-[10vh] py-[5vh] flex items-center justify-between'>
                        {/* Left Side - Image */}
                        <div className='w-[50%] flex gap-[2vw] justify-center'>
                            <img src={paper} alt="Paper Prototype" className='w-full object-contain rounded-[4vh] h-[70vh]' />
                        </div>

                        {/* Right Side - Text */}
                        <div className='w-[40%] flex flex-col justify-center gap-[5vh]'>
                            <h3 className='text-[5vh] font-GilroyBold leading-[6vh]'>
                                Version 1: <br />
                                Conceptual Paper <br />
                                Prototyping
                            </h3>
                            <p className='text-[2.6vh] text-[#606060] font-medium leading-[4vh]'>
                                Information Architecture Exploration. Rapid Ideation Of Core Features. Initial User Journey Mapping.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Version 2: High-Fidelity Exploration Section */}
                <div className='mb-[5vh]'>
                    <div className='w-full border border-[#D7D7D7] rounded-[8vh] px-[10vh] py-[5vh] flex items-center justify-between'>
                        {/* Left Side - Image */}
                        <div className='w-[55%] flex gap-[2vw] justify-center'>
                            <img src={v2} alt="High-Fidelity Exploration" className='w-full object-contain h-[70vh]' />
                            <img src={v22} alt="High-Fidelity Exploration" className='w-full object-contain h-[70vh]' />
                        </div>

                        {/* Right Side - Text */}
                        <div className='w-[35%] flex flex-col justify-center gap-[5vh]'>
                            <h3 className='text-[5vh] font-GilroyBold leading-[6vh]'>
                                Version 2: <br />
                                High-Fidelity <br />
                                Exploration
                            </h3>
                            <p className='text-[2.6vh] text-[#606060] font-medium leading-[4vh]'>
                                Transitioned To Digital Grid Layout. Introduction Of Color-Coded Categories. Added Schedule Now Promotional Banner.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Version 3: The Final Refined Section */}
                <div className='mb-[12vh]'>
                    <div className='w-full border border-[#D7D7D7] rounded-[8vh] px-[10vh] py-[5vh] flex items-center justify-between'>
                        {/* Left Side - Image */}
                        <div className='w-[50%] flex gap-[2vw] justify-center'>
                            <img src={v3} alt="The Final Refined" className='w-full object-contain rounded-[4vh] h-[70vh]' />
                            <img src={v32} alt="The Final Refined" className='w-full object-contain rounded-[4vh] h-[70vh]' />
                        </div>

                        {/* Right Side - Text */}
                        <div className='w-[40%] flex flex-col justify-center gap-[5vh]'>
                            <h3 className='text-[5vh] font-GilroyBold leading-[6vh]'>
                                Version 3: <br />
                                The Final <br />
                                Refined
                            </h3>
                            <p className='text-[2.6vh] text-[#606060] font-medium leading-[4vh]'>
                                Minimalist White Aesthetic. Consistent Blue Line-Art Icons. Advanced Search & Personalization
                            </p>
                        </div>
                    </div>
                </div>

                {/* Usability Testing Section */}
                <div className='mb-[12vh]'>
                    <div className='relative inline-block mb-[5vh]'>
                        <h2 className='text-[4vh] font-GilroyBold'>Usability Testing</h2>
                        <div className='absolute bottom-[-1vh] left-0 w-[12vh] h-[0.8vh] bg-[#3B82F6] rounded-full'></div>
                    </div>

                    <div className='text-[2.6vh] text-[#606060] leading-[4.5vh] max-w-[80vw] font-medium'>
                        <p>
                            We Developed An Interactive Prototype And Conducted Four Remote Usability Tests To Evaluate The App's Intuitiveness And Functional Clarity. Participants Were Given A Specific Scenario Acting As A Student Who Had Sprained Their Wrist And Needed An In-Network Appointment And Were Asked To Complete Tasks Such As Finding The Earliest Slot And Viewing The Cost Estimate. This Approach Allowed Us To Observe Hesitations And Confusions In Real-Time As Users Navigated The Onboarding, Booking, And Claims Review Features.
                        </p>
                    </div>
                </div>

                {/* Key Usability Problems Identified Section */}
                <div className='mb-[12vh]'>
                    <div className='relative inline-block mb-[5vh]'>
                        <h2 className='text-[4vh] font-GilroyBold'>Key Usability Problems Identified</h2>
                        <div className='absolute bottom-[-1vh] left-0 w-[12vh] h-[0.8vh] bg-[#3B82F6] rounded-full'></div>
                    </div>

                    <div className='text-[2.6vh] text-[#606060] leading-[4.5vh] max-w-[80vw] font-medium'>
                        <p className='mb-[4vh]'>
                            Missing Integrations: Users Expected Industry-Standard Features That Were Absent, Such As Clickable Hospital Addresses Linked To Google Maps, Ride-Sharing (Uber/Lyft) Integration, And The Ability To Sync Appointments To Personal Calendars.
                        </p>
                        <p>
                            Onboarding Friction: The Initial "Insurance-First" Flow Inadvertently Blocked Users Without Insurance, Highlighting The Need For A "Self-Pay" Or Guest Pathway.
                        </p>
                    </div>
                </div>

                {/* Lessons Learned From Pineapple Section */}
                <div className='mb-[12vh]'>
                    <div className='relative inline-block mb-[5vh]'>
                        <h2 className='text-[4vh] font-GilroyBold'>Lessons Learned From Pineapple</h2>
                        <div className='absolute bottom-[-1vh] left-0 w-[12vh] h-[0.8vh] bg-[#3B82F6] rounded-full'></div>
                    </div>

                    <div className='text-[2.6vh] text-[#606060] leading-[4.5vh] max-w-[80vw] font-medium'>
                        <p>
                            The Journey Of Creating Pineapple Taught Us That User-Centered Design Relies Heavily On <span className='text-black font-GilroyBold'>Removing Unnecessary Features To Improve Clarity Rather Than Adding New Ones.</span> We Learned That Small Changes In Touch Targets And Labels Significantly Affect The Confidence Of Older Users When Navigating A Digital Space. Ultimately, The Project Highlighted The Critical Role Of Accessible Expertise And The Importance Of Testing Low-Fidelity Wireframes Early To Address Structural Issues Before They Are Solidified In The Final Design.
                        </p>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Pineapple
