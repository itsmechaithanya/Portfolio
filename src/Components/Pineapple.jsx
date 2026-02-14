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
import UXP from '../assets/UXP.png' // Using as icon/logo placeholder if needed, or just text

function Pineapple() {
    return (
        <div className='w-screen min-h-screen bg-white font-GilroyMedium'>
            <div className='max-w-[80vw] mx-auto pt-[15vh]'>
                {/* Header */}
                <div className='flex items-center gap-[1vw] mb-[10vh]'>
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
                <div className='flex justify-center mb-[20vh]'>
                    <h2 className='text-[3.3vh] font-GilroyBold leading-[5vh] text-center max-w-[55vw]'>
                        "How Might We Design A Healthcare Platform That <br />
                        Simplifies Scheduling, Clarifies Insurance Coverage, <br />
                        And Ensures Financial Transparency For Diverse <br />
                        Users In Chicago?"
                    </h2>
                </div>

                {/* Project Background Section */}
                <div className='mb-[20vh]'>
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
                <div className='mb-[5vh]'>
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
                <div className='mb-[20vh]'>
                    <div className='relative inline-block mb-[10vh]'>
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
                <div className='mb-[20vh]'>
                    <div className='relative inline-block mb-[10vh]'>
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
            </div>
        </div>
    )
}

export default Pineapple
