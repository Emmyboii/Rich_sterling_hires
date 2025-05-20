import React, { useEffect, useRef, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLinkedinIn, FaPauseCircle, FaPlayCircle, FaRegCheckCircle, FaStar, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaCheck, FaXTwitter } from "react-icons/fa6";
import group from '../Images/Logo.png';
import send from '../Images/Send.png';
import send2 from '../Images/send2.png';
import Badge from '../Images/Dollar badge.png';
import Group1 from '../Images/Group1.png';
import Group2 from '../Images/Group2.png';
import Group3 from '../Images/Group3.png';
import Group4 from '../Images/Group4.png';
import Man1 from '../Images/Man1.png';
import Man2 from '../Images/Man2.png';
import Man3 from '../Images/Man3.png';
import Man4 from '../Images/Man4.png';
import Man5 from '../Images/Man5.png';
import Man6 from '../Images/Man6.png';
import Woman1 from '../Images/Woman1.png';
import Woman2 from '../Images/Woman2.png';
import Woman3 from '../Images/Woman3.png';
import Woman4 from '../Images/Woman4.png';
import Woman5 from '../Images/Woman5.png';
import Woman6 from '../Images/Woman6.png';
import Star from '../Images/Star.png';
import Vector from '../Images/Vector.png';
import Dollar from '../Images/Dollar.png';
import frame1 from '../Images/Frame1.png';
import frame2 from '../Images/Frame2.png';
import frame3 from '../Images/Frame3.png';
import frame4 from '../Images/Frame4.png';
import avatar from '../Images/Avatar.png';
import access1 from '../Images/Access1.png';
import access2 from '../Images/Access2.png';
import access3 from '../Images/Access3.png';
import access4 from '../Images/Access4.png';
import coin from '../Images/Coins.png';
import Professions from './Professions';
import video1 from '../Images/Video1.mp4';
import video2 from '../Images/Video2.mp4';
import video3 from '../Images/Video3.mp4';
import ArrowLeftCircle from '../Images/ArrowLeftCircle.png'
import ArrowRightCircle from '../Images/ArrowRightCircle.png'
import question from '../Images/Question.png'
import cancle from '../Images/Cancel.png'
import element1 from '../Images/Element1.png'
import element2 from '../Images/Element2.png'
import BG from '../Images/BG.png'
import Rich from '../Images/Rich.png'
import SH from '../Images/Sterling Hires.png'
import small from '../Images/small.png'
import small3 from '../Images/small3.png'

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <img
            className='cursor-pointer absolute size-[30px] top-[50%] left-[10px] z-10'
            src={ArrowLeftCircle}
            alt="Previous"
            onClick={onClick}
        />
    );
};

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <img
            className='cursor-pointer absolute size-[30px] top-[50%] right-[10px] z-10'
            src={ArrowRightCircle}
            alt="Next"
            onClick={onClick}
        />
    );
};


const LandingPage = () => {
    const [profession, setProfession] = useState('dev')

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showButton, setShowButton] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const hideTimeoutRef = useRef(null);

    const togglePlayPause = async () => {
        if (!videoRef.current) return;

        try {
            const video = videoRef.current;

            // Force repaint
            video.style.display = 'none';
            void video.offsetHeight;
            video.style.display = '';

            if (video.paused) {
                await video.play();
                setIsPlaying(true);
            } else {
                video.pause();
                setIsPlaying(false);
            }

            setShowButton(true);
            resetHideTimer();
        } catch (err) {
            console.error("Video play error:", err);
        }
    };



    const resetHideTimer = () => {
        if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);

        if (!videoRef.current?.paused) {
            hideTimeoutRef.current = setTimeout(() => {
                setShowButton(false);
            }, 3000); // hide after 3s
        }
    };

    useEffect(() => {
        const video = videoRef.current;

        const handlePlay = () => {
            setIsPlaying(true);
            setShowButton(true);
            resetHideTimer();
        };

        const handlePause = () => {
            setIsPlaying(false);
            setShowButton(true);
            if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
        };

        if (video) {
            video.addEventListener("play", handlePlay);
            video.addEventListener("pause", handlePause);
        }

        return () => {
            if (video) {
                video.removeEventListener("play", handlePlay);
                video.removeEventListener("pause", handlePause);
            }
            if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
        };
    }, []);

    const shouldShowButton = !isPlaying || showButton || isHovered;

    const settings = {
        infinite: true,
        dots: true,
        speed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        waitForAnimate: false,
        pauseOnHover: false,
        // autoplay: true,
        arrows: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };

    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: "ease-out-sine",
            offset: 200,
        });
        AOS.refresh();
    }, []);

    return (
        <div>
            <div className='flex overflow-hidden justify-between md:px-[75px] px-5 z-50 bg-white text-[#0066FF]'>
                <a href="/">
                    <img onClick={() => window.scrollTo(0, 0)} src={group} className='w-[130px] h-[40px]' alt="" />
                </a>
                <a href='/register' target='_blank'>
                    <button className='flex items-center justify-center gap-2 bg-white border-[1.2px] z-50 cursor-pointer border-[#0066FF] p-1 pl-5 rounded-[50px]'>
                        <p className='text-[16px] font-bold font-manrope'>Get Started</p>
                        <img src={send} className='size-[40px]' alt="" />
                    </button>
                </a>
            </div>
            <div className='flex overflow-hidden pt-8 w-full justify-between lg:pl-[75px] md:px-10 mp:pr-0 px-5 font-manrope'>
                <div className='2xl:w-[200%] mp:w-[60%] flex mp:block flex-col mp:items-start items-center pt-3'>
                    <div className='flex items-center justify-center rounded-[100px] gap-1 bg-[#0066FF] px-5 max-w-[450px] py-2 text-white'>
                        <img className='size-6' src={Badge} alt="" />
                        <p className='text-center'>Our clients save an average of 65% on hiring costs</p>
                    </div>
                    <p data-aos='fade-up' data-aos-delay='100' className='xl:text-[64px] sm:text-[50px] sr:text-[40px] text-[28px] text-[#002B6B] text-center mp:text-start xl:leading-[76px] sr:leading-[60px] mt-6 font-semibold'>
                        Join 2,000+ Companies Cutting Costs by 70% with Elite African Talent
                    </p>
                    <p data-aos='fade-up' data-aos-delay='300' className='xl:text-[20px] sr:text-[17px] text--[15px] font-medium mt-3 text-center mp:text-start'>
                        Rich Sterling Hires connects you with exceptional African professionals who deliver outstanding results at a fraction of the costs
                    </p>
                    <a href='/register' target='_blank'>
                        <button data-aos='fade-up' data-aos-delay='500' className='flex items-center justify-center text-[#0066FF] bg-white mt-5 gap-2 border-[1.2px] cursor-pointer border-[#0066FF] p-1 pl-5 rounded-[50px]'>
                            <p className='text-[16px] font-bold font-manrope'>Start Hiring Now</p>
                            <img src={send} className='size-[40px]' alt="" />
                        </button>
                    </a>
                    <div className='mt-10'>
                        <p data-aos='zoom-in' data-aos-delay='500' className='text-[20px] text-center lk:text-start font-medium'>Trusted by top companies</p>
                        <div className='flex flex-wrap justify-center sp:justify-start gap-10 items-center'>
                            <img data-aos='fade-up' data-aos-delay='100' className='lg:w-[70px] lg:h-[30px] h-[20px]' src={Group1} alt="" />
                            <img data-aos='fade-up' data-aos-delay='200' className='lg:w-[100px] w-[80px] lg:h-[30px] h-[20px]' src={Group2} alt="" />
                            <img data-aos='fade-up' data-aos-delay='300' className='lg:-[150px] w-[110px] lg:h-[50px] h-[40px]' src={Group3} alt="" />
                            <img data-aos='fade-up' data-aos-delay='400' className='lg:w-[120px] w-[90px] lg:h-[40px] h-[30px]' src={Group4} alt="" />
                        </div>
                    </div>
                </div>
                <div className='mp:w-[50%] mp:flex hidden gap-3'>
                    <div className='flex flex-col gap-3 mt-1'>
                        <img data-aos='zoom-in-up' data-aos-delay='100' className='w-[350px]' src={Woman1} alt="" />
                        <img data-aos='zoom-in-up' data-aos-delay='200' className='w-[350px]' src={Man1} alt="" />
                        <img data-aos='zoom-in-up' data-aos-delay='300' className='w-[350px]' src={Woman2} alt="" />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <img data-aos='zoom-out-up' data-aos-delay='400' className='w-[350px]' src={Man2} alt="" />
                        <img data-aos='zoom-out-up' data-aos-delay='500' className='w-[350px]' src={Woman3} alt="" />
                        <img data-aos='zoom-out-up' data-aos-delay='600' className='w-[350px]' src={Man3} alt="" />
                        <img data-aos='zoom-out-up' data-aos-delay='700' className='w-[350px]' src={Man4} alt="" />
                    </div>
                    <div className='flex flex-col gap-3 mt-1'>
                        <img data-aos='zoom-in-up' data-aos-delay='800' className='w-[250px]' src={Woman4} alt="" />
                        <img data-aos='zoom-in-up' data-aos-delay='900' className='w-[250px]' src={Man5} alt="" />
                        <img data-aos='zoom-in-up' data-aos-delay='1000' className='w-[250px]' src={Woman5} alt="" />
                    </div>
                </div>
            </div>
            <div className='font-manrope overflow-hidden sm:px-[75px] px-5 my-16'>
                <h1 data-aos='zoom-in' className='font-semibold text-[30px] leading-10 text-center text-[#002B6B]'>
                    Why Leading US Companies Choose<br className='sm:block hidden' /> Rich Sterling Hires
                </h1>
                <div className='flex justify-center flex-wrap gap-4 mt-10'>
                    <div data-aos='flip-up' data-aos-delay='100' className='shadow-[0_1px_20px_rgba(0,0,0,0.2)] w-full sm:w-[48%] lg:w-[30%] px-3 shadow-[#002b6b53] rounded-[25px] p-5 flex flex-col items-center gap-3'>
                        <img src={Dollar} className='size-[20px]' alt="" />
                        <p className='text-[25px] px-10 font-semibold text-center'>Save Up to 70% on Hiring Costs</p>
                        <p className='text-[17px] text-center'>
                            Our African professionals deliver the same or better quality work at a fraction of
                            US salary rates. The average company saves $38,000 per hire while maintaining or improving
                            quality standards.
                        </p>
                    </div>
                    <div data-aos='flip-down' data-aos-delay='400' className='shadow-[0_1px_20px_rgba(0,0,0,0.2)] w-full sm:w-[48%] lg:w-[30%] px-3 shadow-[#002b6b53] rounded-[25px] p-5 flex flex-col items-center gap-3'>
                        <img src={Star} className='size-[20px]' alt="" />
                        <p className='text-[25px] px-10 font-semibold text-center'>Rigorously Vetted Top 2% Talent</p>
                        <p className='text-[17px] text-center'>
                            Every candidate undergoes our proprietary 5-stage assessment process, testing technical skills,
                            communication abilities, and cultural fit. We only present professionals who exceeds US standards.
                        </p>
                    </div>
                    <div data-aos='flip-up' data-aos-delay='700' className='shadow-[0_1px_20px_rgba(0,0,0,0.2)] w-full sm:w-[48%] lg:w-[30%] px-3 shadow-[#002b6b53] rounded-[25px] p-5 flex flex-col items-center gap-3'>
                        <img src={Vector} className='size-[20px]' alt="" />
                        <p className='text-[25px] px-1 font-semibold text-center'>Effortless Global Team Building</p>
                        <p className='text-[17px] text-center'>
                            We handle everything from legal compliance to payment structures and time zone coordination.
                            Your new team members integrate smoothly with your existing processes and culture
                        </p>
                    </div>
                </div>
                <a href='/register' target='_blank'>
                    <button data-aos='fade-up' className='flex items-center justify-center mx-auto text-white bg-[#0066FF] mt-10 gap-2 border-[1.2px] cursor-pointer border-[#0066FF] p-1 pl-5 rounded-[50px]'>
                        <p className='text-[16px] font-bold font-manrope'>Start Hiring Now</p>
                        <img src={send2} className='size-[40px]' alt="" />
                    </button>
                </a>
            </div>
            <div id='careers' className='sm:px-[90px] overflow-hidden px-5 my-16'>
                <h1 data-aos='zoom-in' className='font-semibold text-[33px] leading-10 text-center text-[#002B6B]'>
                    World-Class African Talent <br className='sp:block hidden' /> Across Key Disciplines
                </h1>
                <p data-aos="fade-left" className='font-normal text-[22px] leading-8 mt-7 text-center text-[#000000]'>
                    Whatever your business needs, we have thoroughly vetted professionals ready to deliver <br className='xl:block hidden' />
                    exceptional results at 60-70% lower costs.
                </p>
                <div className='text-[16px] font-medium overflow-x-auto scrollbar-hide scroll-smooth snap-x flex gap-10 text-[#6C7787] border-b border-[#6C7787] mt-14'>
                    <div
                        onClick={() => setProfession('dev')}
                        className={`flex min-w-max snap-start relative items-center gap-2 cursor-pointer border-b py-3 ${profession === 'dev' ? 'text-[#0066FF] after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-[6px] after:h-[4px] after:blur-md after:bg-[#0066FF] after:opacity-60 after:z-[-1] border-b-[#0066FF]' : ''}`}
                    >
                        <img className='size-5' src={frame1} alt="" />
                        <p className=''>Development & Engineering</p>
                    </div>
                    <div
                        onClick={() => setProfession('design')}
                        className={`flex min-w-max snap-start relative items-center gap-2 cursor-pointer border-b py-3 ${profession === 'design' ? 'text-[#0066FF] after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-[6px] after:h-[4px] after:blur-md after:bg-[#0066FF] after:opacity-60 after:z-[-1] border-b-[#0066FF]' : ''}`}
                    >
                        <img className='size-5' src={frame2} alt="" />
                        <p>Design & Creative</p>
                    </div>
                    <div
                        onClick={() => setProfession('admin')}
                        className={`flex min-w-max snap-start relative items-center gap-2 cursor-pointer border-b py-3 ${profession === 'admin' ? 'text-[#0066FF] after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-[6px] after:h-[4px] after:blur-md after:bg-[#0066FF] after:opacity-60 after:z-[-1] border-b-[#0066FF]' : ''}`}
                    >
                        <img className='size-4' src={frame3} alt="" />
                        <p>Administrative Support</p>
                    </div>
                    <div
                        onClick={() => setProfession('market')}
                        className={`flex min-w-max snap-start relative items-center gap-2 cursor-pointer border-b py-3 ${profession === 'market' ? 'text-[#0066FF] after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-[6px] after:h-[4px] after:blur-md after:bg-[#0066FF] after:opacity-60 after:z-[-1] border-b-[#0066FF]' : ''}`}
                    >
                        <img className='size-5' src={frame4} alt="" />
                        <p>Marketing & Digital Growth</p>
                    </div>
                </div>
                <Professions profession={profession} />
            </div>

            <div className='my-16'>
                <h1 data-aos='zoom-in' className='font-semibold sm:mx-[90px] mx-5 text-[33px] leading-10 text-center text-[#002B6B]'>
                    Meet Some of Our Exceptional Talent
                </h1>
                <p data-aos="fade-left" className='font-normal sm:mx-[90px] mx-5 text-[22px] leading-8 mt-7 text-center text-[#000000]'>
                    Watch short intro videos of vetted candidates so you can see their communication skills, <br className='xl:block hidden' />
                    professionalism, and cultural fit
                </p>
                <div className='relative md:mt-24'>
                    <img
                        className="absolute left-1/2 xl:top-16 md:top-10 sa:block hidden sm:top-[56%] top-[55%] -translate-y-1/2 md:-translate-y-0 transform -translate-x-1/2 lg:w-[560px] sp:w-[500px] w-full max-w-full"
                        src={BG}
                        alt=""
                    />
                    <Slider className='xl:mx-[90px] mx-0' {...settings}>
                        <div>
                            <div className='flex md:flex-row flex-col items-center justify-center md:justify-between 2xl:justify-center xl:mt-20 md:mt-10 md:px-16 px-5 gap-5 w-full'>
                                <div className='text-[17px] flex md:flex-col sm:flex-row flex-col gap-4 md:w-[30%] mt-20'>
                                    <div className='flex flex-col gap-3 rounded-[20px] shadow-[0_1px_20px_rgba(0,0,0,0.2)] bg-white shadow-[#002b6b53] lg:p-4 sm:p-2 p-4'>
                                        <p className='font-semibold lg:text-[18px]'>Client Quote:</p>
                                        <p className='text-[15px]'>
                                            Finding a Product Designer who truly understood our user needs and could translate them into intuitive and engaging interfaces was a challenge.
                                            Rich Sterling Hires introduced us to Jennifer. Her design thinking process, coupled with her strong visual skills, has significantly improved
                                            the usability and aesthetics of our flagship product.
                                        </p>
                                        <p className='text-[15px]'>Jennifer Brown, Chief Information Security Officer, SecureTech Industries</p>
                                    </div>
                                    <p className='text-[#1E242C] font-semibold bg-white lg:text-[16px] rounded-[20px] shadow-[0_1px_20px_rgba(0,0,0,0.2)]  shadow-[#002b6b53] lg:p-4 sm:p-2 p-4 w-full'>English Proficiency: <br /> Fluent</p>
                                </div>
                                <div className='relative group'
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    <video
                                        ref={videoRef}
                                        className="w-full h-[520px] z-50 rounded-[20px] will-change-transform"
                                        playsInline
                                        controls
                                        src={video1}
                                    />
                                    {/* <div
                                        className={`
                                                    absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                                    flex items-center justify-center
                                                    transition-opacity duration-500 ease-in-out
                                                    ${shouldShowButton ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                                                `}
                                    >
                                        <button
                                            onClick={togglePlayPause}
                                            className="text-blue-500 bg-white rounded-full text-[50px]"
                                        >
                                            {isPlaying ? <FaPauseCircle /> : <FaPlayCircle />}
                                        </button>
                                    </div> */}
                                </div>
                                <div className='text-[17px] flex md:flex-col sm:flex-row flex-col gap-4 md:w-[30%] z-50 md:mt-10'>
                                    <div className='flex flex-col gap-3 rounded-[20px] w-full shadow-[0_1px_20px_rgba(0,0,0,0.2)]  shadow-[#002b6b53] bg-white lg:p-4 sm:p-2 p-4'>
                                        <p className='font-semibold lg:text-[17px]'>Expertise: <br /> Product Designer (UI/UX)</p>
                                        <p className='text-[15px]'>4+ years experience</p>
                                    </div>
                                    <div className='text-[#1E242C] rounded-[20px] shadow-[0_1px_20px_rgba(0,0,0,0.2)]  shadow-[#002b6b53] bg-white lg:p-2 sm:p-2 p-4'>
                                        <p className='font-semibold lg:text-[20px]'>Skills:</p>
                                        <div className='flex flex-wrap gap-1 mt-3'>
                                            <p className='border rounded-[100px] text-[15px] lg:py-1 py-[2px] lg:px-3 px-2'>User Research</p>
                                            <p className='border rounded-[100px] text-[15px] lg:py-1 py-[2px] lg:px-3 px-2'>Wireframing & Prototyping</p>
                                            <p className='border rounded-[100px] text-[15px] lg:py-1 py-[2px] lg:px-3 px-2'>User Interface (UI) Design</p>
                                            <p className='border rounded-[100px] text-[15px] lg:py-1 py-[2px] lg:px-3 px-2'>User Experience (UX) Design</p>
                                            <p className='border rounded-[100px] text-[15px] lg:py-1 py-[2px] lg:px-3 px-2'>Usability Testing</p>
                                            <p className='border rounded-[100px] text-[15px] lg:py-1 py-[2px] lg:px-3 px-2'>Design Thinking</p>
                                            <p className='border rounded-[100px] text-[15px] lg:py-1 py-[2px] lg:px-3 px-2'>Collaboration & Communication</p>
                                            <p className='border rounded-[100px] text-[15px] lg:py-1 py-[2px] lg:px-3 px-2'>Figma</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex md:flex-row flex-col items-center justify-center md:justify-between 2xl:justify-center xl:mt-20 md:mt-10 md:px-16 px-5 gap-5 w-full'>
                                <div className='text-[17px] flex md:flex-col sm:flex-row flex-col gap-4 md:w-[30%] mt-20'>
                                    <div className='flex flex-col gap-3 rounded-[20px] shadow-[0_1px_20px_rgba(0,0,0,0.2)] bg-white shadow-[#002b6b53] lg:p-4 sm:p-2 p-4'>
                                        <p className='font-semibold lg:text-[20px]'>Client Quote:</p>
                                        <p className='lg:text-[17px] text-[15px]'>
                                            Hiring David through Rich Sterling was one of the best decision we made.
                                            In just a few weeks, he rebuilt our web app’s entire architecture—front to
                                            back—with clean, scalable code.
                                        </p>
                                        <p className='lg:text-[17px] text-[15px]'>Sarah K., Head of Product, Fintech Startup (NY)</p>
                                    </div>
                                    <p className='text-[#1E242C] font-semibold bg-white lg:text-[18px] rounded-[20px] shadow-[0_1px_20px_rgba(0,0,0,0.2)]  shadow-[#002b6b53] lg:p-4 sm:p-2 p-4 w-full'>English Proficiency: <br /> Fluent</p>
                                </div>
                                <div>
                                    <video className='w-full rounded-[20px] h-[520px]' controls>
                                        <source src={video2} type="video/mp4" />
                                    </video>
                                </div>
                                <div className='text-[17px] flex md:flex-col sm:flex-row flex-col gap-4 md:w-[30%] z-50 md:mt-10'>
                                    <div className='flex flex-col gap-3 rounded-[20px] w-full shadow-[0_1px_20px_rgba(0,0,0,0.2)]  shadow-[#002b6b53] bg-white lg:p-4 sm:p-2 p-4'>
                                        <p className='font-semibold lg:text-[20px]'>Expertise: <br />Full-Stack Developer</p>
                                        <p className='lg:text-[17px] text-[15px]'>5+ years experience</p>
                                    </div>
                                    <div className='text-[#1E242C] rounded-[20px] shadow-[0_1px_20px_rgba(0,0,0,0.2)]  shadow-[#002b6b53] bg-white lg:p-4 sm:p-2 p-4'>
                                        <p className='font-semibold lg:text-[20px]'>Skills:</p>
                                        <div className='flex flex-wrap lg:gap-2 gap-1 mt-3'>
                                            <p className='border rounded-[100px] lg:text-[17px] text-[15px] lg:py-1 py-[2px] lg:px-3 px-2'>HTML</p>
                                            <p className='border rounded-[100px] lg:text-[17px] text-[15px] lg:py-1 py-[2px] lg:px-3 px-2'>CSS</p>
                                            <p className='border rounded-[100px] lg:text-[17px] text-[15px] lg:py-1 py-[2px] lg:px-3 px-2'>JavaScript</p>
                                            <p className='border rounded-[100px] lg:text-[17px] text-[15px] lg:py-1 py-[2px] lg:px-3 px-2'>React</p>
                                            <p className='border rounded-[100px] lg:text-[17px] text-[15px] lg:py-1 py-[2px] lg:px-3 px-2'>TailwindCSS</p>
                                            <p className='border rounded-[100px] lg:text-[17px] text-[15px] lg:py-1 py-[2px] lg:px-3 px-2'>REST API</p>
                                            <p className='border rounded-[100px] lg:text-[17px] text-[15px] lg:py-1 py-[2px] lg:px-3 px-2'>Postgre SQL</p>
                                            <p className='border rounded-[100px] lg:text-[17px] text-[15px] lg:py-1 py-[2px] lg:px-3 px-2'>Mongo DB</p>
                                            <p className='border rounded-[100px] lg:text-[17px] text-[15px] lg:py-1 py-[2px] lg:px-3 px-2'>Git</p>
                                            <p className='border rounded-[100px] lg:text-[17px] text-[15px] lg:py-1 py-[2px] lg:px-3 px-2'>Docker</p>
                                            <p className='border rounded-[100px] lg:text-[17px] text-[15px] lg:py-1 py-[2px] lg:px-3 px-2'>AWS</p>
                                            <p className='border rounded-[100px] lg:text-[17px] text-[15px] lg:py-1 py-[2px] lg:px-3 px-2'>Vercel</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex md:flex-row flex-col items-center justify-center md:justify-between 2xl:justify-center xl:mt-20 md:mt-10 md:px-16 px-5 gap-5 w-full'>
                                <div className='text-[17px] flex md:flex-col sm:flex-row flex-col gap-4 md:w-[30%] mt-20'>
                                    <div className='flex flex-col gap-3 rounded-[20px] shadow-[0_1px_20px_rgba(0,0,0,0.2)] bg-white shadow-[#002b6b53] lg:p-4 sm:p-2 p-4'>
                                        <p className='font-semibold lg:text-[20px]'>Client Quote:</p>
                                        <p className='lg:text-[17px] text-[15px]'>
                                            Hiring David through Rich Sterling was one of the best decision we made.
                                            In just a few weeks, he rebuilt our web app’s entire architecture—front to
                                            back—with clean, scalable code.
                                        </p>
                                        <p className='lg:text-[17px] text-[15px]'>Sarah K., Head of Product, Fintech Startup (NY)</p>
                                    </div>
                                    <p className='text-[#1E242C] font-semibold bg-white lg:text-[18px] rounded-[20px] shadow-[0_1px_20px_rgba(0,0,0,0.2)]  shadow-[#002b6b53] lg:p-4 sm:p-2 p-4 w-full'>English Proficiency: <br /> Fluent</p>
                                </div>
                                <div>
                                    <video className='w-full rounded-[20px] h-[520px]' controls>
                                        <source src={video3} type="video/mp4" />
                                    </video>
                                </div>
                                <div className='text-[17px] flex md:flex-col sm:flex-row flex-col gap-4 md:w-[30%] z-50 md:mt-10'>
                                    <div className='flex flex-col gap-3 rounded-[20px] w-full shadow-[0_1px_20px_rgba(0,0,0,0.2)]  shadow-[#002b6b53] bg-white lg:p-4 sm:p-2 p-4'>
                                        <p className='font-semibold lg:text-[20px]'>Expertise: <br />Full-Stack Developer</p>
                                        <p className='lg:text-[17px] text-[15px]'>5+ years experience</p>
                                    </div>
                                    <div className='text-[#1E242C] rounded-[20px] shadow-[0_1px_20px_rgba(0,0,0,0.2)]  shadow-[#002b6b53] bg-white lg:p-4 sm:p-2 p-4'>
                                        <p className='font-semibold lg:text-[20px]'>Skills:</p>
                                        <div className='flex flex-wrap lg:gap-2 gap-1 mt-3'>
                                            <p className='border rounded-[100px] lg:text-[17px] text-[15px] lg:py-1 py-[2px] lg:px-3 px-2'>HTML</p>
                                            <p className='border rounded-[100px] lg:text-[17px] text-[15px] lg:py-1 py-[2px] lg:px-3 px-2'>CSS</p>
                                            <p className='border rounded-[100px] lg:text-[17px] text-[15px] lg:py-1 py-[2px] lg:px-3 px-2'>JavaScript</p>
                                            <p className='border rounded-[100px] lg:text-[17px] text-[15px] lg:py-1 py-[2px] lg:px-3 px-2'>React</p>
                                            <p className='border rounded-[100px] lg:text-[17px] text-[15px] lg:py-1 py-[2px] lg:px-3 px-2'>TailwindCSS</p>
                                            <p className='border rounded-[100px] lg:text-[17px] text-[15px] lg:py-1 py-[2px] lg:px-3 px-2'>REST API</p>
                                            <p className='border rounded-[100px] lg:text-[17px] text-[15px] lg:py-1 py-[2px] lg:px-3 px-2'>Postgre SQL</p>
                                            <p className='border rounded-[100px] lg:text-[17px] text-[15px] lg:py-1 py-[2px] lg:px-3 px-2'>Mongo DB</p>
                                            <p className='border rounded-[100px] lg:text-[17px] text-[15px] lg:py-1 py-[2px] lg:px-3 px-2'>Git</p>
                                            <p className='border rounded-[100px] lg:text-[17px] text-[15px] lg:py-1 py-[2px] lg:px-3 px-2'>Docker</p>
                                            <p className='border rounded-[100px] lg:text-[17px] text-[15px] lg:py-1 py-[2px] lg:px-3 px-2'>AWS</p>
                                            <p className='border rounded-[100px] lg:text-[17px] text-[15px] lg:py-1 py-[2px] lg:px-3 px-2'>Vercel</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div >
            <div id='steps' className='lg:px-[60px] overflow-hidden px-5 py-16'>
                <h1 data-aos='zoom-in' className='font-semibold text-[33px] leading-10 text-center text-[#002B6B]'>
                    Access Global Talent in 4 Easy Steps
                </h1>
                <div className='flex mp:flex-row flex-col items-center w-full mp:gap-10'>
                    <div className='mt-10 mp:w-[50%]'>
                        <div className='flex items-center sa:flex-row flex-col xl:gap-10 sa:gap-5'>
                            <p data-aos='fade-up' className='font-medium xl:text-[110px] text-[80px] text-[#cddbf0]'>01</p>
                            <div data-aos='fade-up' data-aos-delay='300' className='flex gap-4 items-center rounded-[20px] w-full mp:w-[430px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] shadow-[#c9d6e8] xl:p-5 p-3'>
                                <img className='xl:size-[44px] size-[40px]' src={access1} alt="" />
                                <div>
                                    <p className='xl:text-[20px] font-manrope font-medium text-[#1E242C]'>Share Your Requirements</p>
                                    <p className='xl:text-[15px] text-[13.5px] font-manrope font-normal text-[#414D60]'>Define your specific needs and business goals</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center sa:flex-row flex-col-reverse xl:mt-[-30px] mt-5 xl:gap-10 sa:gap-5'>
                            <div data-aos='fade-up' data-aos-delay='700' className='flex gap-4 items-center rounded-[20px] w-full mp:w-[430px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] shadow-[#c9d6e8] xl:py-5 p-3'>
                                <img className='xl:size-[50px] size-[40px]' src={access2} alt="" />
                                <div>
                                    <p className='xl:text-[20px] font-manrope font-medium text-[#1E242C]'>Meet Pre-Screened Candidates</p>
                                    <p className='xl:text-[15px] text-[13.5px] font-manrope font-normal text-[#414D60]'>Meet vetted professionals who match your needs</p>
                                </div>
                            </div>
                            <p data-aos='fade-up' data-aos-delay='500' className='font-medium xl:text-[110px] text-[80px] text-[#cddbf0]'>02</p>
                        </div>
                        <div className='flex items-center sa:flex-row flex-col xl:mt-[-30px] mt-5 xl:gap-10 sa:gap-5'>
                            <p data-aos='fade-up' data-aos-delay='700' className='font-medium xl:text-[110px] text-[80px] text-[#cddbf0]'>03</p>
                            <div data-aos='fade-up' data-aos-delay='900' className='flex gap-4 items-center rounded-[20px] w-full mp:w-[430px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] shadow-[#c9d6e8] xl:p-5 p-3'>
                                <img className='xl:size-[50px] size-[40px]' src={access3} alt="" />
                                <div>
                                    <p className='xl:text-[20px] font-manrope font-medium text-[#1E242C]'>Hire With Confidence</p>
                                    <p className='xl:text-[15px] text-[13.5px] font-manrope font-normal text-[#414D60]'>Onboard your chosen talent seamlessly </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center sa:flex-row flex-col-reverse xl:mt-[-30px] mt-5 xl:gap-10 sa:gap-5'>
                            <div data-aos='fade-up' data-aos-delay='1000' className='flex gap-4 items-center rounded-[20px] w-full mp:w-[430px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] shadow-[#c9d6e8] xl:p-5 p-3'>
                                <img className='xl:size-[50px] size-[40px]' src={access4} alt="" />
                                <div>
                                    <p className='xl:text-[20px] font-manrope font-medium text-[#1E242C]'>Thrive With Continuous Support</p>
                                    <p className='xl:text-[15px] text-[13.5px] font-manrope font-normal text-[#414D60]'>Success managers ensure smooth operations</p>
                                </div>
                            </div>
                            <p data-aos='fade-up' data-aos-delay='900' className='font-medium xl:text-[110px] text-[80px] text-[#cddbf0]'>04</p>
                        </div>
                    </div>
                    <div className='flex sa:flex-row flex-col sa:gap-2 gap-5 mt-12 mp:w-[50%] relative'>
                        <img data-aos='zoom-in' className='xl:w-[270px] sa:block hidden w-[200px] h-[300px] 2xl:w-[90%] 2xl:h-[90%] object-cover rounded-[20px] xl:h-[400px]' src={Man6} alt="" />
                        <img data-aos='zoom-in' className='xl:w-[270px] sa:w-[200px] h-[400px] 2xl:w-full 2xl:h-full object-cover rounded-[20px] xl:h-[500px]' src={Woman6} alt="" />
                        <div className='flex sa:absolute z-50 bg-white bottom-[2%] 2xl:bottom-12 gap-4 2xl:w-[50%] items-center rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] shadow-[#c9d6e8] p-4'>
                            <img className='size-[40px]' src={avatar} alt="" />
                            <img className='size-[40px] ml-[-20px]' src={avatar} alt="" />
                            <img className='size-[40px] ml-[-20px]' src={avatar} alt="" />
                            <img className='size-[40px] ml-[-20px]' src={avatar} alt="" />
                            <div>
                                <p className='text-[20px] font-manrope font-medium text-[#0066FF]'>2k+</p>
                                <p className='text-[15px] font-manrope font-normal text-[#414D60]'>Satisfied Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
                <a href='/register' target='_blank'>
                    <button data-aos='fade-up' data-aos-delay='1500' className='flex items-center justify-center mx-auto text-white bg-[#0066FF] mt-10 gap-2 border-[1.2px] cursor-pointer border-[#0066FF] p-1 pl-5 rounded-[50px]'>
                        <p className='text-[16px] font-bold font-manrope'>Get Started Now</p>
                        <img src={send2} className='size-[40px]' alt="" />
                    </button>
                </a>
            </div>
            <div className='sm:px-[90px] overflow-hidden px-5 py-10'>
                <h1 data-aos='zoom-out' className='font-semibold text-[33px] leading-10 text-center text-[#002B6B]'>
                    What our Clients are Saying
                </h1>
                <div className='flex w-full justify-center flex-wrap gap-5 mt-10'>
                    <div data-aos='zoom-in' data-aos-delay='300' className='flex flex-col gap-5 items-center w-full mq:w-[48%] lg:w-[30%]'>
                        <div className='rounded-[20px] py-6 px-5 shadow-[0_1px_20px_rgba(0,0,0,0.2)]  shadow-[#002b6b53] flex flex-col items-center gap-2'>
                            <div className='flex gap-2'>
                                <FaStar className='text-[25px] text-[#0066FF]' />
                                <FaStar className='text-[25px] text-[#0066FF]' />
                                <FaStar className='text-[25px] text-[#0066FF]' />
                                <FaStar className='text-[25px] text-[#0066FF]' />
                                <FaStar className='text-[25px] text-[#0066FF]' />
                            </div>
                            <p className='text-center font-semibold text-[20px]'>Senior Cybersecurity Analyst (Remote - Ghana)</p>
                            <p className='font-normal text-[16px]'>
                                "Securing our digital assets is our top priority. Rich Sterling Hires connected us with Kofi
                                Mensah from Ghana, a highly skilled Senior Cybersecurity Analyst with a strong focus on
                                threat intelligence and incident response. His proactive approach has significantly fortified
                                our security posture. His expertise has been invaluable, and the cost was considerably more
                                favorable than domestic options."
                            </p>
                            <div className='flex gap-2 items-start'>
                                <img className='size-[40px] mt-1' src={avatar} alt="" />
                                <div>
                                    <p>Jennifer Brown</p>
                                    <p className='text-black/70 text-[15px]'>Chief Information Security Officer, SecureTech Industries</p>
                                </div>
                            </div>
                        </div>
                        <p className='text-[27px] text-center font-medium w-[260px]'><span className='text-[#0066FF]'>98%</span> Client Satisfaction Rate</p>
                    </div>
                    <div data-aos='zoom-in' data-aos-delay='600' className='flex flex-col gap-5 items-center w-full mq:w-[48%] lg:w-[30%]'>
                        <div className='rounded-[20px] py-6 px-4 shadow-[0_1px_20px_rgba(0,0,0,0.2)]  shadow-[#002b6b53] flex flex-col items-center gap-2'>
                            <div className='flex gap-2'>
                                <FaStar className='text-[25px] text-[#0066FF]' />
                                <FaStar className='text-[25px] text-[#0066FF]' />
                                <FaStar className='text-[25px] text-[#0066FF]' />
                                <FaStar className='text-[25px] text-[#0066FF]' />
                                <FaStar className='text-[25px] text-[#0066FF]' />
                            </div>
                            <p className='text-center font-semibold text-[20px] px-2'>Marketing Manager (Nearshore - South Africa)</p>
                            <p className='font-normal text-[16px]'>
                                "Expanding our reach into Sub-Saharan Africa required a culturally astute Marketing Manager. Zola Mkhize from South
                                Africa, sourced by Rich Sterling Hires, has been exceptional. Her understanding of the regional nuances and her effective
                                marketing strategies have significantly increased our brand awareness and lead generation. Her communication is top-notch,
                                and the cost savings have been substantial."
                            </p>
                            <div className='flex gap-2 items-start'>
                                <img className='size-[40px] mt-1' src={avatar} alt="" />
                                <div>
                                    <p>James Olsen</p>
                                    <p className='text-black/70 text-[15px]'>Chief Marketing Officer, GlobalReach Corp.</p>
                                </div>
                            </div>
                        </div>
                        <p className='text-[27px] text-center font-medium w-[300px]'>Over <span className='text-[#0066FF]'>$2 million+</span> Saved by Clients </p>
                    </div>
                    <div data-aos='zoom-in' data-aos-delay='900' className='flex flex-col gap-5 items-center w-full mq:w-[48%] lg:w-[30%]'>
                        <div className='rounded-[20px] py-6 px-4 shadow-[0_1px_20px_rgba(0,0,0,0.2)]  shadow-[#002b6b53] flex flex-col items-center gap-2'>
                            <div className='flex gap-2'>
                                <FaStar className='text-[25px] text-[#0066FF]' />
                                <FaStar className='text-[25px] text-[#0066FF]' />
                                <FaStar className='text-[25px] text-[#0066FF]' />
                                <FaStar className='text-[25px] text-[#0066FF]' />
                                <FaStar className='text-[25px] text-[#0066FF]' />
                            </div>
                            <p className='text-center font-semibold text-[20px]'>Senior DevOps Engineer (Remote - Nigeria)</p>
                            <p className='font-normal text-[16px]'>
                                "Scaling our infrastructure efficiently was critical. Rich Sterling Hires found us Adewale Adebayo from Nigeria, a Senior DevOps Engineer
                                whose expertise in cloud automation and system optimization has been transformative. He's streamlined our deployments and enhanced our
                                system stability, bringing a level of skill we struggled to find locally. His dedication and communication have been excellent."
                            </p>
                            <div className='flex gap-2 items-start'>
                                <img className='size-[40px] mt-1' src={avatar} alt="" />
                                <div>
                                    <p>David Miller</p>
                                    <p className='text-black/70 text-[15px]'>VP of Engineering, CloudLeap Technologies</p>
                                </div>
                            </div>
                        </div>
                        <p className='text-[27px] text-center font-medium w-[250px]'><span className='text-[#0066FF]'>2000+</span> businesses trust us to Hire</p>
                    </div>
                    <div data-aos='zoom-in' data-aos-delay='100' className='flex flex-col gap-5 items-center w-full mq:w-[48%] lg:w-[30%]'>
                        <div className='rounded-[20px] py-6 px-4 shadow-[0_1px_20px_rgba(0,0,0,0.2)]  shadow-[#002b6b53] flex flex-col items-center gap-2'>
                            <div className='flex gap-2'>
                                <FaStar className='text-[25px] text-[#0066FF]' />
                                <FaStar className='text-[25px] text-[#0066FF]' />
                                <FaStar className='text-[25px] text-[#0066FF]' />
                                <FaStar className='text-[25px] text-[#0066FF]' />
                                <FaStar className='text-[25px] text-[#0066FF]' />
                            </div>
                            <p className='text-center font-semibold text-[20px] px-5'>Senior Data Scientist (Remote - Kenya)</p>
                            <p className='font-normal text-[16px]'>
                                "Our search for a specialized AI data scientist felt endless until we partnered with Rich Sterling Hires. They connected us with Dr.
                                Imani Nkosi from Kenya, whose expertise in machine learning has been instrumental in refining our predictive models. Her insightful
                                contributions and proactive approach have accelerated our research significantly, all at a much more accessible cost than local hires.
                                A truly valuable asset to our team."
                            </p>
                            <div className='flex gap-2 items-start'>
                                <img className='size-[40px] mt-1' src={avatar} alt="" />
                                <div>
                                    <p>Dr. Eleanor Vance</p>
                                    <p className='text-black/70 text-[15px]'>VP of Research & Development, DataWise Analytics</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href='/register' target='_blank'>
                    <button data-aos='fade-up' className='flex items-center justify-center text-[#0066FF] bg-white mt-14 mx-auto gap-2 border-[1.2px] cursor-pointer border-[#0066FF] p-1 pl-5 rounded-[50px]'>
                        <p className='text-[16px] font-bold font-manrope'>Start Hiring Now</p>
                        <img src={send} className='size-[40px]' alt="" />
                    </button>
                </a>
            </div>
            <div id='pricing' className='lg:px-[50px] overflow-hidden xl:px-[90px] mp:px-5 md:px-[90px] px-7 py-10'>
                <div data-aos='zoom-in' data-aos-delay='200' className='font-semibold text-[33px] leading-10 items-center justify-center text-[#002B6B] flex flex-wrap gap-1'>
                    <p className='flex items-center gap-1'>Start Saving <img className='size-[40px]' src={coin} alt="" /> and</p><p> Scaling Today</p>
                </div>
                <div className='flex mp:flex-row flex-col items-center justify-between gap-10 mp:mt-20'>
                    <div className='flex flex-col gap-20 mp:w-[60%] 2xl:w-full mt-[75px]'>
                        <div className='flex sk:flex-row flex-col items-center gap-16'>
                            <div>
                                <div data-aos='fade-down' data-aos-delay='500' className='flex items-start gap-1'>
                                    <FaCheck className='text-[#0066FF] text-[24px]' />
                                    <p className='text-[19px] font-medium'>Huge Cost Savings</p>
                                </div>
                                <p data-aos='fade-down' data-aos-delay='200' className='text-[19px] font-normal'>Clients save up to 80% compared to local hiring while maintaining world-class quality.</p>
                            </div>
                            <div>
                                <div data-aos='fade-down' data-aos-delay='1100' className='flex items-start gap-1'>
                                    <FaCheck className='text-[#0066FF] text-[24px]' />
                                    <p className='text-[19px] font-medium'>Flexible Engagement Models</p>
                                </div>
                                <p data-aos='fade-down' data-aos-delay='800' className='text-[19px] font-normal'>Need a full-time hire, part-time contributor, or project-based team? We match your exact needs.</p>
                            </div>
                        </div>
                        <div className='flex sk:flex-row flex-col items-center gap-16'>
                            <div>
                                <div data-aos='fade-up' data-aos-delay='800' className='flex items-start gap-1'>
                                    <FaCheck className='text-[#0066FF] text-[24px]' />
                                    <p className='text-[19px] font-medium'>Access to Vetted Talent</p>
                                </div>
                                <p data-aos='fade-up' data-aos-delay='1100' className='text-[19px] font-normal'>Top 2% of candidates across Africa in tech, design, marketing, and operations roles.</p>
                            </div>
                            <div>
                                <div data-aos='fade-up' data-aos-delay='900' className='flex items-start gap-1'>
                                    <FaCheck className='text-[#0066FF] text-[24px]' />
                                    <p className='text-[19px] font-medium'>End-to-End Admin Support</p>
                                </div>
                                <p data-aos='fade-up' data-aos-delay='1200' className='text-[19px] font-normal'>We handle the contracts, time tracking, and local compliance so you don’t have to.</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-down' data-aos-delay='1000' className='bg-[#0066FF] shadow-lg shadow-black/30 text-white rounded-[20px] p-5 font-manrope'>
                        <p>Start Hiring with Us</p>
                        <p className='text-[70px] font-semibold'>$700/<span className='text-[40px]'>month</span></p>
                        <div className='flex flex-col gap-3'>
                            <p className='flex items-center gap-3'><FaRegCheckCircle /> Huge Cost Savings</p>
                            <p className='flex items-center gap-3'><FaRegCheckCircle /> Access to Vetted Talent</p>
                            <p className='flex items-center gap-3'><FaRegCheckCircle /> End-to-End Admin Support</p>
                            <p className='flex items-center gap-3'><FaRegCheckCircle /> Seamless Remote Collaboration</p>
                            <p className='flex items-center gap-3'><FaRegCheckCircle /> Fast Matching, Within Days</p>
                            <p className='flex items-center gap-3'><FaRegCheckCircle /> Dedicated Success Managers</p>
                        </div>
                        <a href='/register' target='_blank'>
                            <button className='bg-white rounded-xl text-black w-[300px] h-[60px] mt-7 text-[20px] font-medium'>Get Started</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='lg:px-[60px] overflow-hidden px-5 pt-12'>
                <h1 data-aos='zoom-out' className='font-semibold flex items-center justify-center gap-2 sp:text-[33px] sr:text-[25px] text-[20px] leading-10 text-[#002B6B]'>
                    Frequently Asked Questions
                    <img className='sp:size-[34px] sr:size-[26px] size-[21px]' src={question} alt="" />
                </h1>
                <div>
                    <div className='grid mq:grid-cols-2 justify-center lg:gap-5 gap-3 mt-14 font-manrope'>
                        <div data-aos='zoom-in' data-aos-delay='200' className='bg-[#EDEEF0] border-[#AAAAAA] border rounded-[20px] shadow-[0_1px_20px_rgba(0,0,0,0.2)]  shadow-[#002b6b53] p-5 flex mp:flex-row flex-col mp:items-start gap-4'>
                            <div className='flex justify-between items-center'>
                                <p className='bg-white text-black rounded-[70px] py-2 px-3'>01</p>
                                <img src={cancle} className='mp:hidden block' alt="" />
                            </div>
                            <div className='flex justify-between items-start'>
                                <div className='flex flex-col gap-3'>
                                    <p className='text-[#1E242C] text-[20px] font-medium w-[300px] leading-6'>How do you handle time zone differences?</p>
                                    <p className='text-[#414D60] text-[15px] font-normal'>
                                        Most of our professionals work in time zones with at least 4-6 hours of overlap with US business hours.
                                        Many choose to align their schedules with their US employers for maximum collaboration. We also
                                        provide tools and best practices for asynchronous work to ensure productivity around the clock.
                                    </p>
                                </div>
                            </div>
                            <img className='hidden mp:block' src={cancle} alt="" />
                        </div>
                        <div data-aos='zoom-in' data-aos-delay='400' className='bg-[#EDEEF0] border-[#AAAAAA] border rounded-[20px] shadow-[0_1px_20px_rgba(0,0,0,0.2)]  shadow-[#002b6b53] p-5 flex mp:flex-row flex-col mp:items-start gap-4'>
                            <div className='flex justify-between items-center'>
                                <p className='bg-white text-black rounded-[70px] py-2 px-3'>02</p>
                                <img src={cancle} className='mp:hidden block' alt="" />
                            </div>
                            <div className='flex justify-between items-start'>
                                <div className='flex flex-col gap-3'>
                                    <p className='text-[#1E242C] text-[20px] font-medium w-[300px] leading-6'>What about language barriers and communication issues?</p>
                                    <p className='text-[#414D60] text-[15px] font-normal'>
                                        English proficiency is a core requirement in our vetting process. All our candidates undergo comprehensive language assessments
                                        and demonstrate excellent written and verbal communication skills. Many have worked with US companies
                                        before and understand American business communication styles.
                                    </p>
                                </div>
                            </div>
                            <img src={cancle} className='hidden mp:block' alt="" />
                        </div>
                        <div data-aos='zoom-in' data-aos-delay='200' className='bg-[#EDEEF0] border-[#AAAAAA] border rounded-[20px] shadow-[0_1px_20px_rgba(0,0,0,0.2)]  shadow-[#002b6b53] p-5 flex mp:flex-row flex-col mp:items-start gap-4'>
                            <div className='flex justify-between items-center'>
                                <p className='bg-white text-black rounded-[70px] py-2 px-3'>03</p>
                                <img src={cancle} className='mp:hidden block' alt="" />
                            </div>
                            <div className='flex justify-between items-start'>
                                <div className='flex flex-col gap-3'>
                                    <p className='text-[#1E242C] text-[20px] font-medium w-[300px] leading-6'>How do you handle legal and compliance issues?</p>
                                    <p className='text-[#414D60] text-[15px] font-normal'>
                                        Our legal team manages all compliance aspects, including contracts, intellectual property protection, data security, and payment
                                        structures. We create compliant arrangements that protect your business while ensuring proper
                                        classification.
                                    </p>
                                </div>
                            </div>
                            <img src={cancle} className='hidden mp:block' alt="" />
                        </div>
                        <div data-aos='zoom-in' data-aos-delay='400' className='bg-[#EDEEF0] border-[#AAAAAA] border rounded-[20px] shadow-[0_1px_20px_rgba(0,0,0,0.2)]  shadow-[#002b6b53] p-5 flex mp:flex-row flex-col mp:items-start gap-4'>
                            <div className='flex justify-between items-center'>
                                <p className='bg-white text-black rounded-[70px] py-2 px-3'>04</p>
                                <img src={cancle} className='mp:hidden block' alt="" />
                            </div>
                            <div className='flex justify-between items-start'>
                                <div className='flex flex-col gap-3'>
                                    <p className='text-[#1E242C] text-[20px] font-medium w-[300px] leading-6'>What types of roles can I fill through Rich Sterling Hires?</p>
                                    <p className='text-[#414D60] text-[15px] font-normal'>
                                        We specialize in knowledge worker roles including software development, digital marketing, design, customer support, and administrative
                                        functions. Our talent pool includes entry-level to senior executive professionals across these domains.
                                    </p>
                                </div>
                            </div>
                            <img src={cancle} className='hidden mp:block' alt="" />
                        </div>
                        <div data-aos='zoom-in' data-aos-delay='200' className='bg-[#EDEEF0] border-[#AAAAAA] border rounded-[20px] shadow-[0_1px_20px_rgba(0,0,0,0.2)]  shadow-[#002b6b53] p-5 flex mp:flex-row flex-col mp:items-start gap-4'>
                            <div className='flex justify-between items-center'>
                                <p className='bg-white text-black rounded-[70px] py-2 px-3'>05</p>
                                <img src={cancle} className='mp:hidden block' alt="" />
                            </div>
                            <div className='flex justify-between items-start'>
                                <div className='flex flex-col gap-3'>
                                    <p className='text-[#1E242C] text-[20px] font-medium w-[300px] leading-6'>How do you ensure the security of our company data?</p>
                                    <p className='text-[#414D60] text-[15px] font-normal'>
                                        All professionals sign comprehensive NDAs and security agreements. We provide security training and can implement your company's
                                        security protocols. For highly sensitive industries, we can arrange dedicated secure workspaces and equipment.
                                    </p>
                                </div>
                            </div>
                            <img src={cancle} className='hidden mp:block' alt="" />
                        </div>
                        <div data-aos='zoom-in' data-aos-delay='400' className='bg-[#EDEEF0] border-[#AAAAAA] border rounded-[20px] shadow-[0_1px_20px_rgba(0,0,0,0.2)]  shadow-[#002b6b53] p-5 flex mp:flex-row flex-col mp:items-start gap-4'>
                            <div className='flex justify-between items-center'>
                                <p className='bg-white text-black rounded-[70px] py-2 px-3'>06</p>
                                <img src={cancle} className='mp:hidden block' alt="" />
                            </div>
                            <div className='flex justify-between items-start'>
                                <div className='flex flex-col gap-3'>
                                    <p className='text-[#1E242C] text-[20px] font-medium w-[300px] leading-6'>Do I need to worry about contracts, benefits, or compliance?</p>
                                    <p className='text-[#414D60] text-[15px] font-normal'>
                                        One of the biggest advantages of working with Rich Sterling Hires is that your hired talent functions as an independent contractor, not a
                                        local employee, you get the output and commitment of a full-time team member — without the traditional overhead.
                                    </p>
                                </div>
                            </div>
                            <img src={cancle} className='hidden mp:block' alt="" />
                        </div>
                    </div>
                    <a href='/register' target='_blank'>
                        <button data-aos='fade-up' className='flex items-center justify-center text-[#0066FF] mt-14 mx-auto gap-2 border-[1.2px] cursor-pointer border-[#0066FF] p-1 pl-5 rounded-[50px]'>
                            <p className='text-[16px] font-bold font-manrope'>Contact Us for more Questions</p>
                            <img src={send} className='size-[40px]' alt="" />
                        </button>
                    </a>
                </div>
            </div>
            <div className='md:mx-[60px] mx-5 flex flex-col items-start py-3'>
                <div className='flex flex-col items-start mx-auto'>
                    <img src={Rich} alt="" />
                    <img className='w-[1200px] mt-3' src={SH} alt="" />
                </div>
                <div className='rounded-[20px] relative mt-[-7%] mt--80px] mx-auto bg-white border-4 font-manrope border-[#00000040] shadow-[#002B6B40] max-w-[1000px] w-[900px w-full min-h-[270px] p-5'>
                    <div className='absolute top-0 overflow-hidden right-0 flex flex-wrap items-start left-0 opacity-10'>
                        <div className='flex items-start'>
                            <img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" />
                            <img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small3} alt="" />
                        </div>
                        <div className='flex items-start'>
                            <img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" />
                            <img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small3} alt="" />
                        </div>
                        <div className='flex items-start'>
                            <img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" />
                            <img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small3} alt="" />
                        </div>
                        <div className='flex items-start'>
                            <img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" />
                            <img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small3} alt="" />
                        </div>
                        <div className='flex items-start'>
                            <img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" />
                            <img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small3} alt="" />
                        </div>
                        <div className='flex items-start'>
                            <img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" />
                            <img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small3} alt="" />
                        </div>
                        <div className='flex sw:hidden items-start'>
                            <img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" />
                            <img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small} alt="" /><img src={small3} alt="" />
                        </div>
                    </div>
                    <h1 className='mp:text-[35px] text-[27px] font-bold text-[#002B6B]'>Ready to Build Your Dream Team — <br className='mq:block hidden' /> for Less?</h1>
                    <p className='text-[18px] font-normal mp:mt-7 mt-3'>Join dozens of forward-thinking companies already saving thousands while scaling faster.</p>
                    <img className='absolute top-0 mp:w-[170px] w-[140px] right-[20%]' src={element1} alt="" />
                    <img className='absolute bottom-0 mp:w-[170px] w-[140px] right-[4%]' src={element2} alt="" />
                    <a href='/register' target='_blank'>
                        <button className='flex items-center justify-center text-white bg-[#0066FF] z-50 mt-5 gap-2 border-[1.2px] cursor-pointer border-[#0066FF] p-1 pl-5 rounded-[50px]'>
                            <p className='text-[16px] font-medium font-manrope'>Get Started Today</p>
                            <img src={send2} className='size-[40px] z-50' alt="" />
                        </button>
                    </a>
                </div>
            </div>
            <div className='relative mt-10'>
                {/* <img className='w-full top- blur-[20px] absolute' src={SH} alt="" /> */}
                <div className='md:mx-[60px] mx-5 w-[90%] absolute top-0'>
                    <div className='flex mp:flex-row flex-col gap-10 mp:gap-0 justify-between'>
                        <div className='mp:w-[60%] flex flex-col sp:items-start items-center'>
                            <a href="/">
                                <img onClick={() => window.scrollTo(0, 0)} src={group} className='w-[130px] h-[40px]' alt="" />
                            </a>
                            <p className='text-[14px] mt-3 font-normal text-center font-jakarta'><span className='font-bold font-manrope'>Corporate Head Office</span>: <br className='sa:hidden block' /> New york City, Lagos Nigeria, Nairobi Kenya.</p>
                            <div className='mt-4 flex flex-col gap-2'>
                                <p className='text-[14px] font-normal text-center sa:text-start font-jakarta'><span className='font-bold font-manrope'>Phone</span>: <br className='sa:hidden block' /> 843-496-7759</p>
                                <p className='text-[14px] font-normal text-center sa:text-start font-jakarta'><span className='font-bold font-manrope'>Fax</span>: <br className='sa:hidden block' /> 02-222264303</p>
                                <p className='text-[14px] font-normal text-center sa:text-start font-jakarta'><span className='font-bold font-manrope'>Email</span>: <br className='sa:hidden block' /> info@richsterling.com</p>
                            </div>
                        </div>
                        <div className='flex sa:flex-row flex-col flex-wrap gap-10 items-center text-center sa:text-start sa:items-start sa:justify-between w-full mp:w-[60%]'>
                            <div className='flex flex-col gap-[13px] text-[15px] text-[#414D60] font-normal xl:w-[150px]'>
                                <h1 className='text-[18px] text-[#1E242C] font-bold'>Quick Links</h1>
                                <a href="#pricing">
                                    <p>Pricing</p>
                                </a>
                                <a href="#careers">
                                    <p>Сareers</p>
                                </a>
                                <a href="/contact">
                                    <p>Contact Us</p>
                                </a>
                            </div>
                            <div className='flex flex-col gap-[13px] text-[15px] text-[#414D60] font-normal xl:w-[150px]'>
                                <h1 className='text-[18px] text-[#1E242C] font-bold'>Others</h1>
                                <a href="#steps">
                                    <p>How it works</p>
                                </a>
                                <a href="/t&c">
                                    <p>Terms and condition</p>
                                </a>
                                <a href="/privacy">
                                    <p>Privacy Policy</p>
                                </a>
                                <a href="/about">
                                    <p>About Us</p>
                                </a>
                            </div>
                            <div className='flex flex-col gap-[13px] text-[15px] text-[#414D60] font-normal xl:w-[150px]'>
                                <h1 className='text-[18px] text-[#1E242C] font-bold'>About us</h1>
                                <p>Company milestone</p>
                                <p>Web mail</p>
                                <p>Board of Directors</p>
                                <p>Senior Management</p>
                            </div>
                        </div>

                    </div>
                    <div className='flex sr:flex-row flex-col gap-5 items-center justify-between mt-16 mb-10'>
                        <p className='text-[15px] font-normal'>©2025 All rights reserved</p>
                        <div className='flex items-center gap-5 text-[24px] text-[#002B6B]'>
                            <a href="/"><AiFillInstagram /></a>
                            <a href="/"><FaLinkedinIn /></a>
                            <a href="/"><FaXTwitter /></a>
                            <a href="/"><FaYoutube /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default LandingPage