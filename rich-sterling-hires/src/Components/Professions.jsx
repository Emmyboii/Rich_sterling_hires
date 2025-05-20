import { useEffect } from 'react'
import { IoCodeSlashOutline } from "react-icons/io5";
import { GoCodeSquare } from "react-icons/go";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import send from '../Images/Send.png';
import { FaMobileAlt, FaWordpressSimple, FaPenNib, FaPaintBrush, FaUserTie, FaHeadset, FaUsers, FaShareAlt, FaBullhorn } from 'react-icons/fa';
import { MdVideoLibrary, MdDesignServices, MdOutlineArticle, MdSupportAgent, MdEmail, MdCampaign, } from 'react-icons/md'
import { Gi3dGlasses, GiScales } from 'react-icons/gi'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { BiNotepad, BiTrendingUp } from 'react-icons/bi'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Professions = ({ profession }) => {

    useEffect(() => {
        AOS.init({
            duration: 1700,
            easing: "ease-out-sine",
            offset: 200,
        });
        AOS.refresh();
    }, []);

    return (
        <div>
            {profession === 'dev' ? (
                <div className='flex justify-center flex-wrap gap-5 mt-14'>
                    <div data-aos='slide-up' data-aos-delay='' className='rounded-[20px] w-full mq:w-[48%] lg:w-[23.5%] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                        <IoCodeSlashOutline className='text-[25px]' />
                        <p className='font-semibold text-[20px]'>Frontend Developers</p>
                        <p className='font-normal text-[16px]'>
                            Create responsive, high-performance user interfaces that engage customers and boost conversions.
                        </p>
                    </div>
                    <div data-aos='slide-up' data-aos-delay='250' className='rounded-[20px] w-full mq:w-[48%] lg:w-[23.5%] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                        <GoCodeSquare className='text-[25px]' />
                        <p className='font-semibold text-[20px]'>Backend Developers</p>
                        <p className='font-normal text-[16px]'>
                            Build robust server architectures and APIs that power scalable, secure applications.
                        </p>
                    </div>
                    <div data-aos='slide-up' data-aos-delay='400' className='rounded-[20px] w-full mq:w-[48%] lg:w-[23.5%] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                        <HiOutlineComputerDesktop className='text-[25px]' />
                        <p className='font-semibold text-[20px]'>Full-Stack Engineers</p>
                        <p className='font-normal text-[16px]'>
                            End-to-end development expertise that seamlessly integrates all aspects of your application.
                        </p>
                    </div>
                    <div data-aos='slide-up' data-aos-delay='550' className='rounded-[20px] w-full mq:w-[48%] lg:w-[23.5%] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                        <FaMobileAlt className='text-[25px]' />
                        <p className='font-semibold text-[20px]'>Mobile App Developers</p>
                        <p className='font-normal text-[16px]'>
                            Craft native and cross-platform mobile experiences that users love and keep returning to
                        </p>
                    </div>
                    <div data-aos='fade-right' data-aos-delay='700' className='rounded-[20px] w-full mq:w-[48%] lg:w-[23.5%] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                        <FaWordpressSimple className='text-[25px]' />
                        <p className='font-semibold text-[20px]'>WordPress Developer</p>
                        <p className='font-normal text-[16px]'>
                            Build dynamic, user-friendly websites and themes with WordPress — from blogs to business platforms.
                        </p>
                    </div>
                    <div data-aos='fade-left' data-aos-delay='850' className='rounded-[20px] w-full mq:w-[48%] lg:w-[23.5%] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                        <IoCodeSlashOutline className='text-[25px]' />
                        <p className='font-semibold text-[20px]'>Web Developer</p>
                        <p className='font-normal text-[16px]'>
                            Build responsive, high-performance websites and web apps that deliver seamless user experiences.
                        </p>
                    </div>
                </div>
            ) : profession === 'design' ? (
                <div className='flex justify-center flex-wrap gap-5 mt-14'>
                    <div data-aos='slide-up' data-aos-delay='' className='rounded-[20px] w-full mq:w-[48%] lg:w-[23.5%] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                        <MdVideoLibrary className='text-[25px]' />
                        <p className='font-semibold text-[20px]'>Video Editor</p>
                        <p className='font-normal text-[16px]'>
                            Transform raw footage into compelling visual stories that capture attention and deliver impact.
                        </p>
                    </div>
                    <div data-aos='slide-up' data-aos-delay='250' className='rounded-[20px] w-full mq:w-[48%] lg:w-[23.5%] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                        <FaPaintBrush className='text-[25px]' />
                        <p className='font-semibold text-[20px]'>Graphics Designer</p>
                        <p className='font-normal text-[16px]'>
                            Design eye-catching visuals that communicate ideas clearly and creatively across platforms.
                        </p>
                    </div>
                    <div data-aos='slide-up' data-aos-delay='400' className='rounded-[20px] w-full mq:w-[48%] lg:w-[23.5%] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                        <Gi3dGlasses className='text-[25px]' />
                        <p className='font-semibold text-[20px]'>3D Animator</p>
                        <p className='font-normal text-[16px]'>
                            Bring concepts to life with immersive, animated 3D experiences for games, films, and beyond.
                        </p>
                    </div>
                    <div data-aos='slide-up' data-aos-delay='550' className='rounded-[20px] w-full mq:w-[48%] lg:w-[23.5%] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                        <MdDesignServices className='text-[25px]' />
                        <p className='font-semibold text-[20px]'>Product Designer</p>
                        <p className='font-normal text-[16px]'>
                            Create intuitive, functional product experiences through user-focused design and prototyping.
                        </p>
                    </div>
                    <div data-aos='fade-right' data-aos-delay='700' className='rounded-[20px] w-full mq:w-[48%] lg:w-[23.5%] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                        <FaPenNib className='text-[25px]' />
                        <p className='font-semibold text-[20px]'>Copywriter</p>
                        <p className='font-normal text-[16px]'>
                            Write persuasive, on-brand content that drives engagement, conversions, and customer loyalty.
                        </p>
                    </div>
                    <div data-aos='fade-left' data-aos-delay='850' className='rounded-[20px] w-full mq:w-[48%] lg:w-[23.5%] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                        <MdOutlineArticle className='text-[25px]' />
                        <p className='font-semibold text-[20px]'>Content Writer</p>
                        <p className='font-normal text-[16px]'>
                            Craft informative and engaging written content tailored to educate, inform, and inspire readers.
                        </p>
                    </div>
                </div>
            ) : profession === 'admin' ? (
                <div className='flex justify-center flex-wrap gap-5 mt-14'>
                    <div data-aos='slide-up' className='rounded-[20px] w-full mq:w-[48%] lg:w-[23.5%] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                        <MdSupportAgent className='text-[25px]' />
                        <p className='font-semibold text-[20px]'>Customer Service Representative</p>
                        <p className='font-normal text-[16px]'>
                            Provide exceptional service, resolving inquiries efficiently to ensure a positive customer experience.
                        </p>
                    </div>
                    <div data-aos='slide-up' data-aos-delay='250' className='rounded-[20px] w-full mq:w-[48%] lg:w-[23.5%] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                        <HiOutlineUserGroup className='text-[25px]' />
                        <p className='font-semibold text-[20px]'>Customer Success Manager</p>
                        <p className='font-normal text-[16px]'>
                            Nurture long-term customer relationships and drive retention through proactive support and value.
                        </p>
                    </div>
                    <div data-aos='slide-up' data-aos-delay='400' className='rounded-[20px] w-full mq:w-[48%] lg:w-[23.5%] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                        <FaUserTie className='text-[25px]' />
                        <p className='font-semibold text-[20px]'>Executive Assistant</p>
                        <p className='font-normal text-[16px]'>
                            Keep executives organized and efficient by managing schedules, tasks, and communications.
                        </p>
                    </div>
                    <div data-aos='slide-up' data-aos-delay='550' className='rounded-[20px] w-full mq:w-[48%] lg:w-[23.5%] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                        <FaHeadset className='text-[25px]' />
                        <p className='font-semibold text-[20px]'>Virtual Assistant</p>
                        <p className='font-normal text-[16px]'>
                            Deliver remote administrative support, managing tasks and communication with precision.
                        </p>
                    </div>
                    <div data-aos='fade-right' data-aos-delay='700' className='rounded-[20px] w-full mq:w-[48%] lg:w-[23.5%] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                        <BiNotepad className='text-[25px]' />
                        <p className='font-semibold text-[20px]'> Administrative Assistant</p>
                        <p className='font-normal text-[16px]'>
                            Handle key clerical duties to support smooth daily operations and efficient office workflows.
                        </p>
                    </div>
                    <div data-aos='fade-up' data-aos-delay='850' className='rounded-[20px] w-full mq:w-[48%] lg:w-[23.5%] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                        <FaUsers className='text-[25px]' />
                        <p className='font-semibold text-[20px]'>Community Manager</p>
                        <p className='font-normal text-[16px]'>
                            Foster community growth and engagement through thoughtful interaction and brand advocacy.
                        </p>
                    </div>
                    <div data-aos='fade-left' data-aos-delay='1000' className='rounded-[20px] w-full mq:w-[48%] lg:w-[23.5%] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                        <GiScales className='text-[25px]' />
                        <p className='font-semibold text-[20px]'>Legal Assistant</p>
                        <p className='font-normal text-[16px]'>
                            Assist with legal documentation, research, and compliance to support legal teams and operations.
                        </p>
                    </div>
                </div>
            ) : (
                <div className='flex justify-center flex-wrap gap-5 mt-14'>
                    <div data-aos='slide-up' className='rounded-[20px] w-full mq:w-[48%] lg:w-[23.5%] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                        <FaShareAlt className='text-[25px]' />
                        <p className='font-semibold text-[20px]'>Social Media Manager</p>
                        <p className='font-normal text-[16px]'>
                            Plan and execute social strategies that build brand presence and engage online communities.
                        </p>
                    </div>
                    <div data-aos='slide-up' data-aos-delay='250' className='rounded-[20px] w-full mq:w-[48%] lg:w-[23.5%] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                        <MdCampaign className='text-[25px]' />
                        <p className='font-semibold text-[20px]'>Digital Marketing Specialist</p>
                        <p className='font-normal text-[16px]'>
                            Drive business growth through strategic online campaigns, analytics, and conversion-focused tactics.
                        </p>
                    </div>
                    <div data-aos='slide-up' data-aos-delay='400' className='rounded-[20px] w-full mq:w-[48%] lg:w-[23.5%] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                        <MdEmail className='text-[25px]' />
                        <p className='font-semibold text-[20px]'>Email Marketer</p>
                        <p className='font-normal text-[16px]'>
                            Build targeted email campaigns that nurture leads, drive sales, and strengthen audience relationships.
                        </p>
                    </div>
                    <div data-aos='slide-up' data-aos-delay='550' className='rounded-[20px] w-full mq:w-[48%] lg:w-[23.5%] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                        <BiTrendingUp className='text-[25px]' />
                        <p className='font-semibold text-[20px]'>SEO Specialist</p>
                        <p className='font-normal text-[16px]'>
                            Optimize content and websites to improve visibility, rankings, and organic traffic on search engines.
                        </p>
                    </div>
                    <div data-aos='fade-right' data-aos-delay='700' className='rounded-[20px] w-full mq:w-[48%] lg:w-[23.5%] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                        <FaBullhorn className='text-[25px]' />
                        <p className='font-semibold text-[20px]'>Paid Ads Manager</p>
                        <p className='font-normal text-[16px]'>
                            Launch and manage paid ad campaigns that maximize reach, ROI, and audience conversion.
                        </p>
                    </div>
                </div>
            )}
            <a href='/register' target='_blank'>
                <button data-aos='fade-up' className='flex items-center mx-auto justify-center text-[#0066FF] bg-white mt-16 gap-2 border-[1.2px] cursor-pointer border-[#0066FF] p-1 pl-5 rounded-[50px]'>
                    <p className='sm:text-[16px] text-[14px] z-50 font-bold font-manrope'>Find your Ideal Professional Today</p>
                    <img src={send} className='sm:size-[45px] size-[35px] z-50' alt="" />
                </button>
            </a>
        </div>
    )
}

export default Professions