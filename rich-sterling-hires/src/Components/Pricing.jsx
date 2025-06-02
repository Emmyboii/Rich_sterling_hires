import React, { useEffect, useState } from 'react'
import group from '../Images/Logo.png';
import send from '../Images/Send.png';
import coin from '../Images/Coins.png';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook, FaYoutube } from 'react-icons/fa';

const Pricing = () => {

    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)

        handleScroll();

        return () => window.removeEventListener('resize', handleScroll);
    }, [])

    return (
        <div className='my-6'>
            <div className={`flex overflow-hidden sticky top-0 py-3 transition-all duration-200 justify-between md:px-[75px] px-5 z-50 bg-white text-[#0066FF] ${scroll ? 'shadow-lg' : 'shadow-none'}`}>
                <a href="/">
                    <img onClick={() => window.scrollTo(0, 0)} src={group} className='w-[130px] h-[40px]' alt="" />
                </a>
                <a href='#register'>
                    <button className='flex items-center justify-center gap-2 bg-white border-[1.2px] z-50 cursor-pointer border-[#0066FF] p-1 pl-5 rounded-[50px]'>
                        <p className='text-[16px] font-bold font-manrope'>Get Started</p>
                        <img src={send} className='size-[40px]' alt="" />
                    </button>
                </a>
            </div>
            <div className='my-16'>
                <div className='font-semibold text-[34px] leading-10 items-center justify-center text-[#002B6B] flex flex-wrap gap-1'>
                    <p className='flex items-center gap-1'>Start Saving <img className='size-[40px]' src={coin} alt="" /> and</p><p> Scaling Today</p>
                </div>
                <div className="overflow-x-auto w-full">
                    <table className='table-auto bg-[#0066FF] mq:text-[15px] sa:text-[11px] text-[9.5px] mt-5 text-center border-collapse border-4 border-white rounded-[30px] text-white mx-auto'>
                        <thead>
                            <tr>
                                <th className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'>Role</th>
                                <th className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'>Rich Sterling Hires</th>
                                <th className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'>U.S Equivalent</th>
                                <th className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'>U.S Agency</th>
                                <th className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'>Savings</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3 text-start sk:text-center'>Virtual Assistant</td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>$700/month ($4.38/hour)</p><p className='italic font-light text-white/70'>Streamline daily tasks with a dedicated VA</p></td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>$15–$50/hour</p><p className='italic font-light text-white/70'>($2,400–$8,000/month)</p></td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>$1,599–$2,000+/month</p></td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>80%</p></td>
                            </tr>
                            <tr>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3 text-start sk:text-center'>Customer Support Specialist</td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>$700–$800/month ($4.38–$5/hour)</p><p className='italic font-light text-white/70'>Ensure customer satisfaction with consistent support.</p></td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>$10–$50/hour</p><p className='italic font-light text-white/70'>($1,600–$8,000/month)</p></td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>$500–$5,000/month</p></td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>80%</p></td>
                            </tr>
                            <tr>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3 text-start sk:text-center'>Social Media Manager</td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>$700/month ($4.38–$12.50/hour)</p><p className='italic font-light text-white/70'>Grow your brand with ongoing social strategies.</p></td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>$35–$85/hour</p><p className='italic font-light text-white/70'>($5,600–$13,600/month)</p></td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>$2,000–$10,000/month</p></td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>85%</p></td>
                            </tr>
                            <tr>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3 text-start sk:text-center'>Bookkeeper</td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>$800/month ($5/hour)</p><p className='italic font-light text-white/70'>Maintain financial health with daily oversight</p></td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>$20–$70/hour</p><p className='italic font-light text-white/70'>($3,200–$11,200/month)</p></td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>$1,000–$5,000+/month</p></td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>80%</p></td>
                            </tr>
                            <tr>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3 text-start sk:text-center'>Content Writer</td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>$800/month ($5/hour)</p><p className='italic font-light text-white/70'>Attract customers with consistent content.</p></td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>$25–$100/hour</p><p className='italic font-light text-white/70'>($4,000–$16,000/month)</p></td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>$1,000–$7,500+/month</p></td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>85%</p></td>
                            </tr>
                            <tr>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3 text-start sk:text-center'>Video Editor</td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>$1200/month ($7.50/hour)</p><p className='italic font-light text-white/70'>Create engaging videos for ongoing campaigns.</p></td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>$25–$100/hour</p><p className='italic font-light text-white/70'>($4,000–$16,000/month)</p></td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>$2,000–$10,000+/month</p></td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>85%</p></td>
                            </tr>
                            <tr>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3 text-start sk:text-center'>Graphics Designer</td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>$1200/month ($7.50/hour)</p><p className='italic font-light text-white/70'>Build a cohesive brand with daily designs.</p></td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>$25–$90/hour</p><p className='italic font-light text-white/70'>($4,000–$14,400/month)</p></td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>$2,000–$8,000+/month</p></td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>83%</p></td>
                            </tr>
                            <tr>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3 text-start sk:text-center'>Software Engineer</td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>$2000/month ($12.50/hour)</p><p className='italic font-light text-white/70'>Develop and maintain custom software solutions.</p></td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>$50–$150/hour</p><p className='italic font-light text-white/70'>($8,000–$24,000/month)</p></td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>$5,000–$20,000+/month</p></td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>83%</p></td>
                            </tr>
                            <tr>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3 text-start sk:text-center'>Project Manager</td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>$800/month ($5/hour)</p><p className='italic font-light text-white/70'>Keep projects on track with daily oversight</p></td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>$30–$100/hour</p><p className='italic font-light text-white/70'>($4,800–$16,000/month)</p></td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>$3,000–$10,000+/month</p></td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>83%</p></td>
                            </tr>
                            <tr>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3 text-start sk:text-center'>Marketing Assistant</td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>$700/month ($4.38/hour)</p><p className='italic font-light text-white/70'>Support daily marketing efforts.</p></td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>$20–$60/hour</p><p className='italic font-light text-white/70'>($3,200–$9,600/month)</p></td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>$1,500–$6,000+/month</p></td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>79%</p></td>
                            </tr>
                            <tr>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3 text-start sk:text-center'>UI/UX Designer</td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>$800/month ($5/hour)</p><p className='italic font-light text-white/70'>Enhance user experiences with ongoing designs</p></td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>$35–$120/hour</p><p className='italic font-light text-white/70'>($5,600–$19,200/month)</p></td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>$3,000–$12,000+/month</p></td>
                                <td className='border-2 border-gray-300 sk:px-3 sk:py-5 px-[1.7px] py-3'><p className='font-semibold'>83%</p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className='text-center text-[20px] font-normal italic mt-7 px-2'>“Rates are indicative and may vary based on requirements.”</p>
            </div>
            <div className='mx-5 mt-10 block'>
                <div className='flex flex-col gap-3 justify-between'>
                    <a href="/" className='flex flex-col'>
                        <img onClick={() => window.scrollTo(0, 0)} src={group} className='w-[130px] h-[40px]' alt="" />
                        <p className='text-[#0066FF] font text-[20px] font-medium'>Vetted, Professional African Talent</p>
                    </a>
                    <div className='flex sp:hidden items-center gap-5 text-[24px] text-[#002B6B]'>
                        <a href="https://www.instagram.com/richsterlinghires?igsh=YzljYTk1ODg3Zg=="><AiFillInstagram /></a>
                        <a href="https://youtube.com/@richsterlinghires?si=BHT3aw1otLMmfVRr"><FaYoutube /></a>
                        <a href="https://www.facebook.com/RichSterlingHires"><FaFacebook /></a>
                    </div>
                </div>
                <div className='flex sm:flex-row flex-col justify-between items-start sm:gap-10 gap-5 mt-5 sp:mt-0'>
                    <div className='w-full'>
                        <p className='text-[14px] mt-3 font-normal font-jakarta'><span className='font-bold font-manrope'>Corporate Head Office</span>: <br className='sa:hidden block' /> 509 Means St NW, Atlanta, Ga 30313, United States.</p>
                        <div className='mt-4 flex flex-col gap-2'>
                            <p className='text-[14px]  font-normal font-jakarta'><span className='font-bold font-manrope'>Email</span>: info@richsterling.com</p>
                            <p className='text-[14px]  font-normal font-jakarta'><span className='font-bold font-manrope'>Phone number</span>: +19432324429</p>
                        </div>
                        <div className='sp:flex hidden mt-4 items-center gap-5 text-[24px] text-[#002B6B]'>
                            <a href="https://www.instagram.com/richsterlinghires?igsh=YzljYTk1ODg3Zg=="><AiFillInstagram /></a>
                            <a href="https://youtube.com/@richsterlinghires?si=BHT3aw1otLMmfVRr"><FaYoutube /></a>
                            <a href="https://www.facebook.com/RichSterlingHires"><FaFacebook /></a>
                        </div>
                    </div>
                    <div className='sm:flex hidden flex-col mt-2 gap-[13px] text-[15px] text-[#414D60] font-normal w-1/2'>
                        <h1 className='text-[18px] text-[#1E242C] font-bold'>Quick Links</h1>
                        <a href='#why'>Why Hire From Us</a>
                        <a href='/pricing'>Price Guide</a>
                        <a href='#careers'>Talents we offer</a>
                        <a href='#testimonials'>Client Testimonial</a>
                    </div>
                    <div className='sm:flex hidden flex-col mt-2 gap-[13px] text-[15px] text-[#414D60] font-normal w-1/2'>
                        <h1 className='text-[18px] text-[#1E242C] font-bold'>Qthers</h1>
                        <a href='#faqs'>FAQs</a>
                        <a href='mailto:info@richsterling.com'>Contact Us</a>
                        <a href='#register'>Book A Call</a>
                    </div>
                    <div className='flex w-full items-start justify-center sm:hidden'>
                        <div className='flex flex-col mt-2 gap-[13px] text-[15px] text-[#414D60] font-normal w-full'>
                            <h1 className='text-[18px] text-[#1E242C] font-bold'>Quick Links</h1>
                            <a href='#why'>Why Hire From Us</a>
                            <a href='/pricing'>Price Guide</a>
                            <a href='#careers'>Talents we offer</a>
                            <a href='#testimonials'>Client Testimonial</a>
                        </div>
                        <div className='flex flex-col mt-2 gap-[13px] text-[15px] text-[#414D60] font-normal w-full'>
                            <h1 className='text-[18px] text-[#1E242C] font-bold'>Qthers</h1>
                            <a href='#faqs'>FAQs</a>
                            <a href='mailto:info@richsterling.com'>Contact Us</a>
                            <a href='#register'>Book A Call</a>
                        </div>
                    </div>
                </div>
                <p className='text-[15px] mt-10 text-center text-[#002B6B] font-normal'>©2025 All rights reserved</p>
            </div>
        </div>
    )
}

export default Pricing