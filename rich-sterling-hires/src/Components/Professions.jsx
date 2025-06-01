import { useEffect, useState } from 'react'
import { IoCodeSlashOutline } from "react-icons/io5";
import { GoCodeSquare } from "react-icons/go";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import send from '../Images/Send.png';
import arrowUp from '../Images/ArrowUp.png';
import arrowDown from '../Images/ArrowDown.png';
import frame2 from '../Images/Frame2_2.png';
import frame3 from '../Images/Frame3_3.png';
import frame4 from '../Images/Frame4_4.png';
import { FaMobileAlt, FaWordpressSimple, FaPenNib, FaPaintBrush, FaUserTie, FaHeadset, FaUsers, FaShareAlt, FaBullhorn } from 'react-icons/fa';
import { MdVideoLibrary, MdDesignServices, MdOutlineArticle, MdSupportAgent, MdEmail, MdCampaign, } from 'react-icons/md'
import { Gi3dGlasses, GiScales } from 'react-icons/gi'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { BiNotepad, BiTrendingUp } from 'react-icons/bi'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Professions = ({ profession, setProfession }) => {

    const settings = {
        infinite: false,
        speed: 3000,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        waitForAnimate: false,
        pauseOnHover: false,
    };

    useEffect(() => {
        AOS.init({
            duration: 1700,
            easing: "ease-out-sine",
            offset: 200,
        });
        AOS.refresh();
    }, []);

    const [aosType, setAosType] = useState('');
    const [aosType2, setAosType2] = useState('');

    useEffect(() => {
        const handleResize = () => {
            const isLarge = window.innerWidth >= 900;
            setAosType(isLarge ? 'fade-right' : 'slide-up');
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const isLarge = window.innerWidth >= 900;
            setAosType2(isLarge ? 'fade-left' : 'slide-up');
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            {profession === 'dev' ? (
                <>
                    <div className='grid mp:grid-cols-4 mq:grid-cols-3 grid-cols-2 mq:gap-5 gap-[10px] mq:mt-14 mt-5'>
                        <div data-aos='slide-up' className='rounded-[20px] w-full py-6 px-2 mq:border-none border-[1.7px] border-[#6C7787] shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                            <IoCodeSlashOutline className='mq:text-[25px] text-[21px]' />
                            <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Frontend Developers</p>
                            <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                Create responsive, high-performance user interfaces that engage customers and boost conversions.
                            </p>
                        </div>
                        <div data-aos='slide-up' data-aos-delay='250' className='rounded-[20px] w-full py-6 px-2 mq:border-none border-[1.7px] border-[#6C7787] shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                            <GoCodeSquare className='mq:text-[25px] text-[21px]' />
                            <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Backend Developers</p>
                            <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                Build robust server architectures and APIs that power scalable, secure applications.
                            </p>
                        </div>
                        <div data-aos='slide-up' data-aos-delay='400' className='rounded-[20px] w-full py-6 px-2 mq:border-none border-[1.7px] border-[#6C7787] shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                            <HiOutlineComputerDesktop className='mq:text-[25px] text-[21px]' />
                            <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Full-Stack Engineers</p>
                            <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                End-to-end development expertise that seamlessly integrates all aspects of your application.
                            </p>
                        </div>
                        <div data-aos='slide-up' className='rounded-[20px] w-full py-6 px-2 mq:border-none border-[1.7px] border-[#6C7787] shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                            <FaMobileAlt className='mq:text-[25px] text-[21px]' />
                            <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Mobile App Developers</p>
                            <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                Craft native and cross-platform mobile experiences that users love and keep returning to
                            </p>
                        </div>
                        <div data-aos={aosType} className='rounded-[20px] mp:col-start-2 mq:border-none border-[1.7px] border-[#6C7787] w-full py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                            <FaWordpressSimple className='mq:text-[25px] text-[21px]' />
                            <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>WordPress Developer</p>
                            <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                Build dynamic, user-friendly websites and themes with WordPress — from blogs to business platforms.
                            </p>
                        </div>
                        <div data-aos={aosType2} className='rounded-[20px] w-full py-6 px-2 mq:border-none border-[1.7px] border-[#6C7787] shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                            <IoCodeSlashOutline className='mq:text-[25px] text-[21px]' />
                            <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Web Developer</p>
                            <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                Build responsive, high-performance websites and web apps that deliver seamless user experiences.
                            </p>
                        </div>
                    </div>
                    <Slider className='hidden' {...settings}>
                        <div className="py-5">
                            <div className='rounded-[20px] w-[360px h-[260px] py-6 px-2 mq:border-none border-[1.7px] border-[#6C7787] shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                                <IoCodeSlashOutline className='mq:text-[25px] text-[21px]' />
                                <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Frontend Developers</p>
                                <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                    Create responsive, high-performance user interfaces that engage customers and boost conversions.
                                </p>
                            </div>
                        </div>

                        <div className="py-5">
                            <div className='rounded-[20px] w-[360px h-[260px] py-6 px-2 mq:border-none border-[1.7px] border-[#6C7787] shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                                <GoCodeSquare className='mq:text-[25px] text-[21px]' />
                                <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Backend Developers</p>
                                <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                    Build robust server architectures and APIs that power scalable, secure applications, ensuring seamless data flow                            </p>
                            </div>
                        </div>

                        <div className="py-5">
                            <div className='rounded-[20px] w-[360px h-[260px] py-6 px-2 mq:border-none border-[1.7px] border-[#6C7787] shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                                <HiOutlineComputerDesktop className='mq:text-[25px] text-[21px]' />
                                <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Full-Stack Engineers</p>
                                <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                    End-to-end development expertise that seamlessly integrates all aspects of your application.
                                </p>
                            </div>
                        </div>

                        <div className="py-5">
                            <div className='rounded-[20px] w-[360px h-[260px] py-6 px-2 mq:border-none border-[1.7px] border-[#6C7787] shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                                <FaMobileAlt className='mq:text-[25px] text-[21px]' />
                                <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Mobile App Developers</p>
                                <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                    Craft native and cross-platform mobile experiences that users love and keep returning to
                                </p>
                            </div>
                        </div>

                        <div className="py-5">
                            <div className='rounded-[20px] border-[1.7px] mq:border-none border-[#6C7787] w-[360px h-[260px] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                                <FaWordpressSimple className='mq:text-[25px] text-[21px]' />
                                <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>WordPress Developer</p>
                                <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                    Build dynamic, user-friendly websites and themes with WordPress — from blogs to business platforms.
                                </p>
                            </div>
                        </div>

                        <div className="py-5">
                            <div className='rounded-[20px] w-[360px h-[260px] py-6 px-2 mq:border-none border-[1.7px] border-[#6C7787] shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                                <IoCodeSlashOutline className='mq:text-[25px] text-[21px]' />
                                <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Web Developer</p>
                                <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                    Build responsive, high-performance websites and web apps that deliver seamless user experiences.
                                </p>
                            </div>
                        </div>
                    </Slider>
                    <button onClick={() => setProfession('design')} className='flex items-center justify-between w-full text-white bg-[#0066FF] mt-8 gap-2 border-[1.2px] cursor-pointer border-[#0066FF] p-1 pl-5 rounded-[50px]'>
                        <div className='text-[16px] font-bold flex relative items-center gap-2'>
                            <img className='sp:size-5 size-5' src={frame2} alt="" />
                            <p className='sp:text-[18px] text-[17px]'>Design & Creative</p>
                        </div>
                        <img src={profession === 'design' ? arrowUp : arrowDown} className='sp:size-[40px] size-[35px]' alt="" />
                    </button>
                    <button onClick={() => setProfession('admin')} className='flex items-center justify-between w-full text-white bg-[#0066FF] mt-4 gap-2 border-[1.2px] cursor-pointer border-[#0066FF] p-1 pl-5 rounded-[50px]'>
                        <div className='text-[16px] font-bold flex relative items-center gap-2'>
                            <img className='sp:size-5 size-5' src={frame3} alt="" />
                            <p className='sp:text-[18px] text-[17px]'>Administrative Support</p>
                        </div>
                        <img src={profession === 'admin' ? arrowUp : arrowDown} className='sp:size-[40px] size-[35px]' alt="" />
                    </button>
                    <button onClick={() => setProfession('market')} className='flex items-center justify-between w-full text-white bg-[#0066FF] mt-4 gap-2 border-[1.2px] cursor-pointer border-[#0066FF] p-1 pl-5 rounded-[50px]'>
                        <div className='text-[16px] font-bold flex relative items-center gap-2'>
                            <img className='sp:size-5 size-5' src={frame4} alt="" />
                            <p className='sp:text-[18px] text-[17px]'>Marketing & Digital Growth</p>
                        </div>
                        <img src={profession === 'market' ? arrowUp : arrowDown} className='sp:size-[40px] size-[35px]' alt="" />
                    </button>
                </>
            ) : profession === 'design' ? (
                <>
                    <div className='grid mp:grid-cols-4 mq:grid-cols-3 grid-cols-2 mq:gap-5 gap-[10px] mq:mt-14 mt-5'>
                        <div data-aos='slide-up' className='rounded-[20px] w-full mq:border-none border-[1.7px] border-[#6C7787] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                            <MdVideoLibrary className='mq:text-[25px] text-[21px]' />
                            <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Video Editor</p>
                            <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                Transform raw footage into compelling visual stories that capture attention and deliver impact.
                            </p>
                        </div>
                        <div data-aos='slide-up' data-aos-delay='250' className='rounded-[20px] w-full mq:border-none border-[1.7px] border-[#6C7787] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                            <FaPaintBrush className='mq:text-[25px] text-[21px]' />
                            <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Graphics Designer</p>
                            <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                Design eye-catching visuals that communicate ideas clearly and creatively across platforms.
                            </p>
                        </div>
                        <div data-aos='slide-up' data-aos-delay='400' className='rounded-[20px] w-full mq:border-none border-[1.7px] border-[#6C7787] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                            <Gi3dGlasses className='mq:text-[25px] text-[21px]' />
                            <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>3D Animator</p>
                            <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                Bring concepts to life with immersive, animated 3D experiences for games, films, and beyond.
                            </p>
                        </div>
                        <div data-aos='slide-up' className='rounded-[20px] w-full mq:border-none border-[1.7px] border-[#6C7787] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                            <MdDesignServices className='mq:text-[25px] text-[21px]' />
                            <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Product Designer</p>
                            <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                Create intuitive, functional product experiences through user-focused design and prototyping.
                            </p>
                        </div>
                        <div data-aos={aosType} data-aos-delay='250' className='rounded-[20px] mp:col-start-2 w-full mq:border-none border-[1.7px] border-[#6C7787] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                            <FaPenNib className='mq:text-[25px] text-[21px]' />
                            <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Copywriter</p>
                            <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                Write persuasive, on-brand content that drives engagement, conversions, and customer loyalty.
                            </p>
                        </div>
                        <div data-aos={aosType2} data-aos-delay='400' className='rounded-[20px] w-full mq:border-none border-[1.7px] border-[#6C7787] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                            <MdOutlineArticle className='mq:text-[25px] text-[21px]' />
                            <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Content Writer</p>
                            <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                Craft informative and engaging written content tailored to educate, inform, and inspire readers.
                            </p>
                        </div>
                    </div>
                    <Slider className='hidden' {...settings}>
                        <div className="py-5">
                            <div className='rounded-[20px] w-[360px h-[260px] py-6 px-2 mq:border-none border-[1.7px] border-[#6C7787] shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                                <IoCodeSlashOutline className='mq:text-[25px] text-[21px]' />
                                <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Video Editor</p>
                                <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                    Transform raw footage into compelling visual stories that capture attention and deliver impact.
                                </p>
                            </div>
                        </div>

                        <div className="py-5">
                            <div className='rounded-[20px] w-[360px h-[260px] py-6 px-2 mq:border-none border-[1.7px] border-[#6C7787] shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                                <GoCodeSquare className='mq:text-[25px] text-[21px]' />
                                <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Graphics Designer</p>
                                <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                    Design eye-catching visuals that communicate ideas clearly and creatively across platforms.
                                </p>
                            </div>
                        </div>

                        <div className="py-5">
                            <div className='rounded-[20px] w-[360px h-[260px] py-6 px-2 mq:border-none border-[1.7px] border-[#6C7787] shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                                <HiOutlineComputerDesktop className='mq:text-[25px] text-[21px]' />
                                <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>3D Animator</p>
                                <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                    Bring concepts to life with immersive, animated 3D experiences for games, films, and beyond.
                                </p>
                            </div>
                        </div>

                        <div className="py-5">
                            <div className='rounded-[20px] w-[360px h-[260px] py-6 px-2 mq:border-none border-[1.7px] border-[#6C7787] shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                                <FaMobileAlt className='mq:text-[25px] text-[21px]' />
                                <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Product Designer</p>
                                <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                    Create intuitive, functional product experiences through user-focused design and prototyping.
                                </p>
                            </div>
                        </div>

                        <div className="py-5">
                            <div className='rounded-[20px] border-[1.7px] mq:border-none border-[#6C7787] w-[360px h-[260px] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                                <FaWordpressSimple className='mq:text-[25px] text-[21px]' />
                                <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Copywriter</p>
                                <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                    Write persuasive, on-brand content that drives engagement, conversions, and customer loyalty.
                                </p>
                            </div>
                        </div>

                        <div className="py-5">
                            <div className='rounded-[20px] w-[360px h-[260px] py-6 px-2 mq:border-none border-[1.7px] border-[#6C7787] shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                                <IoCodeSlashOutline className='mq:text-[25px] text-[21px]' />
                                <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Content Writer</p>
                                <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                    Craft informative and engaging written content tailored to educate, inform, and inspire readers.
                                </p>
                            </div>
                        </div>
                    </Slider>
                    <button onClick={() => setProfession('admin')} className='flex items-center justify-between w-full text-white bg-[#0066FF] mt-4 gap-2 border-[1.2px] cursor-pointer border-[#0066FF] p-1 pl-5 rounded-[50px]'>
                        <div className='text-[16px] font-bold flex relative items-center gap-2'>
                            <img className='sp:size-5 size-5' src={frame3} alt="" />
                            <p className='sp:text-[18px] text-[17px]'>Administrative Support</p>
                        </div>
                        <img src={profession === 'admin' ? arrowUp : arrowDown} className='sp:size-[40px] size-[35px]' alt="" />
                    </button>
                    <button onClick={() => setProfession('market')} className='flex items-center justify-between w-full text-white bg-[#0066FF] mt-4 gap-2 border-[1.2px] cursor-pointer border-[#0066FF] p-1 pl-5 rounded-[50px]'>
                        <div className='text-[16px] font-bold flex relative items-center gap-2'>
                            <img className='sp:size-5 size-5' src={frame4} alt="" />
                            <p className='sp:text-[18px] text-[17px]'>Marketing & Digital Growth</p>
                        </div>
                        <img src={profession === 'market' ? arrowUp : arrowDown} className='sp:size-[40px] size-[35px]' alt="" />
                    </button>
                </>
            ) : profession === 'admin' ? (
                <>
                    <div className='grid mp:grid-cols-4 mq:grid-cols-3 grid-cols-2 mq:gap-5 gap-[10px] mq:mt-14 mt-5'>
                        <div data-aos='slide-up' className='rounded-[20px] w-full mq:border-none border-[1.7px] border-[#6C7787] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                            <MdSupportAgent className='mq:text-[25px] text-[21px]' />
                            <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Customer Service Representative</p>
                            <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                Provide exceptional service, resolving inquiries efficiently to ensure a positive customer experience.
                            </p>
                        </div>
                        <div data-aos='slide-up' data-aos-delay='250' className='rounded-[20px] w-full mq:border-none border-[1.7px] border-[#6C7787] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                            <HiOutlineUserGroup className='mq:text-[25px] text-[21px]' />
                            <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Customer Success Manager</p>
                            <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                Nurture long-term customer relationships and drive retention through proactive support and value.
                            </p>
                        </div>
                        <div data-aos='slide-up' data-aos-delay='400' className='rounded-[20px] w-full mq:border-none border-[1.7px] border-[#6C7787] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                            <FaUserTie className='mq:text-[25px] text-[21px]' />
                            <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Executive Assistant</p>
                            <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                Keep executives organized and efficient by managing schedules, tasks, and communications.
                            </p>
                        </div>
                        <div data-aos='slide-up' className='rounded-[20px] w-full mq:border-none border-[1.7px] border-[#6C7787] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                            <FaHeadset className='mq:text-[25px] text-[21px]' />
                            <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Virtual Assistant</p>
                            <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                Deliver remote administrative support, managing tasks and communication with precision.
                            </p>
                        </div>
                        <div data-aos='slide-up' className='rounded-[20px] w-full mq:border-none border-[1.7px] border-[#6C7787] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                            <BiNotepad className='mq:text-[25px] text-[21px]' />
                            <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'> Administrative Assistant</p>
                            <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                Handle key clerical duties to support smooth daily operations and efficient office workflows.
                            </p>
                        </div>
                        <div data-aos='slide-up' data-aos-delay='200' className='rounded-[20px] w-full mq:border-none border-[1.7px] border-[#6C7787] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                            <FaUsers className='mq:text-[25px] text-[21px]' />
                            <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Community Manager</p>
                            <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                Foster community growth and engagement through thoughtful interaction and brand advocacy.
                            </p>
                        </div>
                        <div data-aos='slide-up' data-aos-delay='350' className='rounded-[20px] w-full mq:border-none border-[1.7px] border-[#6C7787] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                            <GiScales className='mq:text-[25px] text-[21px]' />
                            <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Legal Assistant</p>
                            <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                Assist with legal documentation, research, and compliance to support legal teams and operations.
                            </p>
                        </div>
                    </div>
                    <Slider className='hidden' {...settings}>
                        <div className="py-5">
                            <div className='rounded-[20px] w-[360px h-[260px] py-6 px-2 mq:border-none border-[1.7px] border-[#6C7787] shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                                <IoCodeSlashOutline className='mq:text-[25px] text-[21px]' />
                                <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Customer Service Representative</p>
                                <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                    Provide exceptional service, resolving inquiries efficiently to ensure a positive customer experience.
                                </p>
                            </div>
                        </div>

                        <div className="py-5">
                            <div className='rounded-[20px] w-[360px h-[260px] py-6 px-2 mq:border-none border-[1.7px] border-[#6C7787] shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                                <GoCodeSquare className='mq:text-[25px] text-[21px]' />
                                <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Customer Success Manager</p>
                                <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                    Nurture long-term customer relationships and drive retention through proactive support and value.
                                </p>
                            </div>
                        </div>

                        <div className="py-5">
                            <div className='rounded-[20px] w-[360px h-[260px] py-6 px-2 mq:border-none border-[1.7px] border-[#6C7787] shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                                <HiOutlineComputerDesktop className='mq:text-[25px] text-[21px]' />
                                <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Executive Assistant</p>
                                <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                    Keep executives organized and efficient by managing schedules, tasks, and communications.
                                </p>
                            </div>
                        </div>

                        <div className="py-5">
                            <div className='rounded-[20px] w-[360px h-[260px] py-6 px-2 mq:border-none border-[1.7px] border-[#6C7787] shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                                <FaMobileAlt className='mq:text-[25px] text-[21px]' />
                                <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Virtual Assistant</p>
                                <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                    Deliver remote administrative support, managing tasks and communication with precision.
                                </p>
                            </div>
                        </div>

                        <div className="py-5">
                            <div className='rounded-[20px] border-[1.7px] mq:border-none border-[#6C7787] w-[360px h-[260px] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                                <FaWordpressSimple className='mq:text-[25px] text-[21px]' />
                                <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'> Administrative Assistant</p>
                                <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                    Handle key clerical duties to support smooth daily operations and efficient office workflows.
                                </p>
                            </div>
                        </div>

                        <div className="py-5">
                            <div className='rounded-[20px] w-[360px h-[260px] py-6 px-2 mq:border-none border-[1.7px] border-[#6C7787] shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                                <IoCodeSlashOutline className='mq:text-[25px] text-[21px]' />
                                <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Community Manager</p>
                                <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                    Foster community growth and engagement through thoughtful interaction and brand advocacy.
                                </p>
                            </div>
                        </div>

                        <div className="py-5">
                            <div className='rounded-[20px] w-[360px h-[260px] py-6 px-2 mq:border-none border-[1.7px] border-[#6C7787] shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                                <IoCodeSlashOutline className='mq:text-[25px] text-[21px]' />
                                <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Legal Assistant</p>
                                <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                    Assist with legal documentation, research, and compliance to support legal teams and operations.
                                </p>
                            </div>
                        </div>
                    </Slider>
                    <button onClick={() => setProfession('market')} className='flex items-center justify-between w-full text-white bg-[#0066FF] mt-4 gap-2 border-[1.2px] cursor-pointer border-[#0066FF] p-1 pl-5 rounded-[50px]'>
                        <div className='text-[16px] font-bold flex relative items-center gap-2'>
                            <img className='sp:size-5 size-5' src={frame4} alt="" />
                            <p className='sp:text-[18px] text-[17px]'>Marketing & Digital Growth</p>
                        </div>
                        <img src={profession === 'market' ? arrowUp : arrowDown} className='sp:size-[40px] size-[35px]' alt="" />
                    </button>
                </>
            ) : (
                <>
                    <div className='grid mp:grid-cols-4 mq:grid-cols-3 grid-cols-2 mq:gap-5 gap-[10px] mq:mt-14 mt-5'>
                        <div data-aos='slide-up' className='rounded-[20px] w-full mq:border-none border-[1.7px] border-[#6C7787] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                            <FaShareAlt className='mq:text-[25px] text-[21px]' />
                            <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Social Media Manager</p>
                            <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                Plan and execute social strategies that build brand presence and engage online communities.
                            </p>
                        </div>
                        <div data-aos='slide-up' data-aos-delay='250' className='rounded-[20px] w-full mq:border-none border-[1.7px] border-[#6C7787] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                            <MdCampaign className='mq:text-[25px] text-[21px]' />
                            <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Digital Marketing Specialist</p>
                            <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                Drive business growth through strategic online campaigns, analytics, and conversion-focused tactics.
                            </p>
                        </div>
                        <div data-aos='slide-up' data-aos-delay='350' className='rounded-[20px] w-full mq:border-none border-[1.7px] border-[#6C7787] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                            <MdEmail className='mq:text-[25px] text-[21px]' />
                            <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Email Marketer</p>
                            <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                Build targeted email campaigns that nurture leads, drive sales, and strengthen audience relationships.
                            </p>
                        </div>
                        <div data-aos='slide-up' data-aos-delay='450' className='rounded-[20px] w-full mq:border-none border-[1.7px] border-[#6C7787] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                            <BiTrendingUp className='mq:text-[25px] text-[21px]' />
                            <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>SEO Specialist</p>
                            <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                Optimize content and websites to improve visibility, rankings, and organic traffic on search engines.
                            </p>
                        </div>
                        <div data-aos='slide-up' data-aos-delay='250' className='rounded-[20px] w-full mq:border-none border-[1.7px] border-[#6C7787] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                            <FaBullhorn className='mq:text-[25px] text-[21px]' />
                            <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Paid Ads Manager</p>
                            <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                Launch and manage paid ad campaigns that maximize reach, ROI, and audience conversion.
                            </p>
                        </div>
                    </div>
                    <Slider className='hidden' {...settings}>
                        <div className="py-5">
                            <div className='rounded-[20px] w-[360px h-[260px] py-6 px-2 mq:border-none border-[1.7px] border-[#6C7787] shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                                <IoCodeSlashOutline className='mq:text-[25px] text-[21px]' />
                                <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Social Media Manager</p>
                                <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                    Plan and execute social strategies that build brand presence and engage online communities.
                                </p>
                            </div>
                        </div>

                        <div className="py-5">
                            <div className='rounded-[20px] w-[360px h-[260px] py-6 px-2 mq:border-none border-[1.7px] border-[#6C7787] shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                                <GoCodeSquare className='mq:text-[25px] text-[21px]' />
                                <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Digital Marketing Specialist</p>
                                <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                    Drive business growth through strategic online campaigns, analytics, and conversion-focused tactics.
                                </p>
                            </div>
                        </div>

                        <div className="py-5">
                            <div className='rounded-[20px] w-[360px h-[260px] py-6 px-2 mq:border-none border-[1.7px] border-[#6C7787] shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                                <HiOutlineComputerDesktop className='mq:text-[25px] text-[21px]' />
                                <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Email Marketer</p>
                                <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                    Build targeted email campaigns that nurture leads, drive sales, and strengthen audience relationships.
                                </p>
                            </div>
                        </div>

                        <div className="py-5">
                            <div className='rounded-[20px] w-[360px h-[260px] py-6 px-2 mq:border-none border-[1.7px] border-[#6C7787] shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                                <FaMobileAlt className='mq:text-[25px] text-[21px]' />
                                <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>SEO Specialist</p>
                                <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                    Optimize content and websites to improve visibility, rankings, and organic traffic on search engines.
                                </p>
                            </div>
                        </div>

                        <div className="py-5">
                            <div className='rounded-[20px] border-[1.7px] mq:border-none border-[#6C7787] w-[360px h-[260px] py-6 px-2 shadow-md shadow-black/40 text-center flex flex-col items-center gap-4'>
                                <FaWordpressSimple className='mq:text-[25px] text-[21px]' />
                                <p className='font-semibold mq:text-[20px] sk:text-[17.5px] text-[13px]'>Paid Ads Manager</p>
                                <p className='font-normal mq:text-[16px] sk:text-[14px] text-[12px]'>
                                    Launch and manage paid ad campaigns that maximize reach, ROI, and audience conversion.
                                </p>
                            </div>
                        </div>
                    </Slider>
                </>
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