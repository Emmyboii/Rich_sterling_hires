import React, { useEffect, useRef, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebook, FaRegCheckCircle, FaStar, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaCheck, FaPlus } from "react-icons/fa6";
import group from '../Images/Logo.png';
import send from '../Images/Send.png';
import send2 from '../Images/send2.png';
import arrowUp from '../Images/ArrowUp.png';
import arrowDown from '../Images/ArrowDown.png';
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
import Man7 from '../Images/Man7.png';
import Woman1 from '../Images/Woman1.png';
import Woman2 from '../Images/Woman2.png';
import Woman3 from '../Images/Woman3.png';
import Woman4 from '../Images/Woman4.png';
import Woman5 from '../Images/Woman5.png';
import Woman6 from '../Images/Woman6.png';
import Woman7 from '../Images/Woman7.png';
import client1 from '../Images/Client1.jpg';
import client2 from '../Images/Client2.jpg';
import client3 from '../Images/Client3.jpg';
import Star from '../Images/Star.png';
import Vector from '../Images/Vector.png';
import Dollar from '../Images/Dollar.png';
import frame1 from '../Images/Frame1.png';
import frame1_1 from '../Images/frame1_1.png';
import frame2 from '../Images/Frame2.png';
import frame3 from '../Images/Frame3.png';
import frame4 from '../Images/Frame4.png';
import access1 from '../Images/Access1.png';
import access2 from '../Images/Access2.png';
import access3 from '../Images/Access3.png';
import access4 from '../Images/Access4.png';
import coin from '../Images/Coins.png';
import Professions from './Professions';
import Thumbnail1 from '../Images/Thumbnail1.png';
import Thumbnail2 from '../Images/Thumbnail2.png';
import Thumbnail3 from '../Images/Thumbnail3.png';
import ArrowLeftCircle from '../Images/ArrowLeftCircle.png'
import ArrowRightCircle from '../Images/ArrowRightCircle.png'
import question from '../Images/Question.png'
import element1 from '../Images/Element1.png'
import element2 from '../Images/Element2.png'
import BG from '../Images/BG.png'
import Rich from '../Images/Rich.png'
import SH from '../Images/Sterling Hires.png'
import small from '../Images/small.png'
import small3 from '../Images/small3.png'
import ReactPlayer from 'react-player/youtube';
import Register from './Register';

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
    const internalVideoElements = useRef([]);

    const [playingIndex, setPlayingIndex] = useState(null);

    const [faq1, setFaq1] = useState(false);
    const [faq2, setFaq2] = useState(false);
    const [faq3, setFaq3] = useState(false);
    const [faq4, setFaq4] = useState(false);
    const [faq5, setFaq5] = useState(false);
    const [faq6, setFaq6] = useState(false);



    const pauseAllVideos = () => {
        internalVideoElements.current.forEach((player) => {
            try {
                const internalPlayer = player.getInternalPlayer();
                if (internalPlayer && internalPlayer.pause) {
                    internalPlayer.pause();
                }
            } catch (_) { }
        });
        setPlayingIndex(null);
    };

    const settings = {
        infinite: false,
        dots: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        pauseOnHover: false,
        arrows: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        beforeChange: pauseAllVideos
    };

    const settings2 = {
        infinite: true,
        dots: true,
        speed: 5000,
        slidesToShow: 1.1,
        swipe: true,
        slidesToScroll: 1,
        waitForAnimate: false,
        pauseOnHover: false,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1.7,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1.3,
                }
            },
            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 1.1,
                }
            }
        ]
    };


    const content = [
        {
            quote: "Our customer satisfaction scores have soared since we brought on Ada as a Customer Support Specialist via Rich Sterling Hires. Her empathy, clear communication, and dedication to resolving issues quickly have made a profound difference to our clients. Outstanding talent!",
            client: "Aisha Bello, Head of Customer Experience, Connect Africa Services",
            proficiency: "Fluent",
            expertise: "Customer Support Specialist",
            experience: "5+ years experience",
            skills: ["Active Listening", "Empathy & Patience", "Clear Communication", "Problem Diagnosis & Resolution", "Conflict De-escalation", "Product/Service Knowledge", "CRM Software Proficiency", "Time Management", "Adaptability", "Positive Attitude"]
        },
        {
            quote: "Hiring Chukwuma as our Data Analyst through Rich Sterling Hires was a game-changer. His ability to unearth actionable insights from our complex datasets has directly influenced our strategic decisions, and the cost efficiency was remarkable. He's a true asset.",
            client: "Dr. Ngozi Okoro, Head of Strategy, Apex Innovations",
            proficiency: "Fluent",
            expertise: "Data Analyst",
            experience: "5+ years experience",
            skills: ["Data Manipulation & Cleaning", "Data Visualization", "SQL Proficiency", "Programming (Python/R)", "Critical Thinking", "Problem-Solving", "Domain Understanding", "Empathy & Patience", "Clear Communication", "Conflict De-escalation", "Product/Service Knowledge", "CRM Software Proficiency",]
        },
        {
            quote: "Winner, our Virtual Assistant from Rich Sterling Hires, has transformed our daily operations. She handles everything from scheduling to research with incredible efficiency and professionalism. It's like having a full-time executive assistant without the overhead. Highly recommend!",
            client: "Ekene, CEO, GrowthPath Consulting",
            proficiency: "Fluent",
            expertise: "Virtual Assistant",
            experience: "4+ years experience",
            skills: ["Organizational Skills", "Time Management", "Communication (Email, Phone)", "Calendar Management", "Document Preparation (Word, Excel)", "Research Skills", "Tech Savvy (G Suite, collaboration tools)", "Proactiveness", "Attention to Detail", "Discretion & Confidentiality"]
        }
    ];

    const videoThumbnails = [
        ['https://youtube.com/shorts/1tbH74QEMV0?si=ZCGlxeKhRyAGauBK', Thumbnail1],
        ['https://youtube.com/shorts/CPc-6qifLD0?si=IdColOh9-N-GZFEk', Thumbnail2],
        ['https://youtube.com/shorts/bUyzd2wIQic?si=na50JKikh6tm2KVT', Thumbnail3]
    ];

    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: "ease-out-sine",
            offset: 200,
        });
        AOS.refresh();
    }, []);

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
        <div className='mb-6'>
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
            <div className='flex overflow-hidden pt-8 w-full justify-between lg:pl-[75px] md:px-10 mp:pr-0 px-0'>
                <div className='2xl:w-[200%] mp:w-[60%] flex mp:block flex-col mp:items-start items-center pt-3'>
                    <div className='flex items-center justify-center rounded-[100px] gap-1 bg-[#0066FF] sm:px-5 px-3 max-w-[450px] py-2 text-white'>
                        <img className='size-5' src={Badge} alt="" />
                        <p className='text-center sm:text-[15px] text-[13px]'>Our clients save an average of 70% on hiring costs</p>
                    </div>
                    <p data-aos='fade-up' data-aos-delay='100' className='xl:text-[64px] sm:text-[50px] text-[30px] text-[#002B6B] text-center mp:text-start sm:leading-[70px] px-2 sr:leading-[40px] leading-[35px] mt-6 font-semibold'>
                        Join 136+ Companies Cutting Costs by 70% with Elite African Talent
                    </p>
                    <p data-aos='fade-up' data-aos-delay='300' className='xl:text-[20px] px-5 text-[16px] font-medium mt-3 text-center mp:text-start'>
                        Rich Sterling Hires connects you with exceptional African professionals who deliver outstanding results at a fraction of the costs
                    </p>
                    <a href='#register'>
                        <button data-aos='fade-up' data-aos-delay='500' className='flex items-center justify-center text-[#0066FF] bg-white mt-5 gap-2 border-[1.2px] cursor-pointer border-[#0066FF] p-1 pl-5 rounded-[50px]'>
                            <p className='text-[16px] font-bold font-manrope'>Start Hiring Now</p>
                            <img src={send} className='size-[40px]' alt="" />
                        </button>
                    </a>
                    <div className='flex flex-col mp:hidden gap-2 items-center mt-5 justify-center'>
                        <div className='flex items-center gap-2'>
                            <img data-aos='zoom-in-up' className='w-[180px]' src={Woman1} alt="" />
                            <img data-aos='zoom-in-up' className='w-[180px]' src={Man7} alt="" />
                        </div>
                        <div className='flex items-cente gap-2'>
                            <img data-aos='zoom-in-up' data-aos-delay='300' className='w-[180px]' src={Man1} alt="" />
                            <img data-aos='zoom-in-up' data-aos-delay='300' className='w-[180px]' src={Woman3} alt="" />
                        </div>
                    </div>
                    <div className='mt-10'>
                        <p data-aos='zoom-in' data-aos-delay='500' className='text-[20px] text-center lk:text-start font-medium'>Trusted by top companies</p>
                        <div className='flex flex-wrap justify-center sp:justify-start mq:gap-10 gap-3 items-center'>
                            <img data-aos='fade-up' data-aos-delay='100' className='lg:w-[70px] lg:h-[30px] h-[20px]' src={Group1} alt="" />
                            <img data-aos='fade-up' data-aos-delay='200' className='lg:w-[100px] w-[75px] lg:h-[30px] h-[15px]' src={Group2} alt="" />
                            <img data-aos='fade-up' data-aos-delay='300' className='lg:-[150px] w-[90px] lg:h-[50px] h-[30px]' src={Group3} alt="" />
                            <img data-aos='fade-up' data-aos-delay='400' className='lg:w-[120px] w-[75px] lg:h-[40px] h-[20px]' src={Group4} alt="" />
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

            <div id='why' className='font-manrope overflow-hidden sm:px-[75px] px-5 my-16'>
                <h1 data-aos='zoom-in' className='font-semibold text-[25px] mq:text-[30px] leading-8 text-center text-[#002B6B]'>
                    Why Leading US Companies Choose<br className='sm:block hidden' /> Rich Sterling Hires
                </h1>
                <div className='flex justify-center flex-wrap gap-4 mt-10'>
                    <div data-aos='fade-up' className='mq:hidden block'>
                        <div className='flex items-center gap-1'>
                            <FaCheck className='text-[#0066FF] text-[24px]' />
                            <p className='text-[18px] font-semibold'>Save Up to 70% on Hiring Costs</p>
                        </div>
                        <p className='text-[17px] font-normal mt-1'>
                            Our African professionals deliver the same or better quality work at a fraction of
                            US salary rates. The average company saves $38,000 per hire while maintaining or improving
                            quality standards.
                        </p>
                    </div>
                    <div data-aos='fade-up' className='mq:hidden block mt-3'>
                        <div className='flex items-center gap-1'>
                            <FaCheck className='text-[#0066FF] text-[24px]' />
                            <p className='text-[18px] font-semibold'>Rigorously Vetted Top 2% Talent</p>
                        </div>
                        <p className='text-[17px] font-normal mt-1'>
                            Every candidate undergoes our proprietary 5-stage assessment process, testing technical skills,
                            communication abilities, and cultural fit. We only present professionals who exceed US standards.
                        </p>
                    </div>
                    <div data-aos='fade-up' className='mq:hidden block mt-3'>
                        <div className='flex items-center gap-1'>
                            <FaCheck className='text-[#0066FF] text-[24px]' />
                            <p className='text-[18px] font-semibold'>Effortless Global Team Building</p>
                        </div>
                        <p className='text-[17px] font-normal mt-1'>
                            We handle everything from legal compliance to payment structures and time zone coordination.
                            Your new team members integrate smoothly with your existing processes and culture
                        </p>
                    </div>
                    <div data-aos='flip-up' data-aos-delay='100' className='shadow-[0_1px_20px_rgba(0,0,0,0.2)] hidden mq:border-none border-[1.7px] border-[#6C7787] w-full sm:w-[48%] lg:w-[30%] px-3 shadow-[#002b6b53] rounded-[25px] p-5 mq:flex flex-col items-center gap-3'>
                        <img src={Dollar} className='size-[20px]' alt="" />
                        <p className='text-[19px] px-10 font-semibold text-center'>Save Up to 70% on Hiring Costs</p>
                        <p className='text-[15px] text-center'>
                            Our African professionals deliver the same or better quality work at a fraction of
                            US salary rates. The average company saves $38,000 per hire while maintaining or improving
                            quality standards.
                        </p>
                    </div>
                    <div data-aos='flip-down' data-aos-delay='300' className='shadow-[0_1px_20px_rgba(0,0,0,0.2)] hidden mq:border-none border-[1.7px] border-[#6C7787] w-full sm:w-[48%] lg:w-[30%] px-3 shadow-[#002b6b53] rounded-[25px] p-5 mq:flex flex-col items-center gap-3'>
                        <img src={Star} className='size-[20px]' alt="" />
                        <p className='text-[19px] px-10 font-semibold text-center'>Rigorously Vetted Top 2% Talent</p>
                        <p className='text-[15px] text-center'>
                            Every candidate undergoes our proprietary 5-stage assessment process, testing technical skills,
                            communication abilities, and cultural fit. We only present professionals who exceed US standards.
                        </p>
                    </div>
                    <div data-aos='flip-up' data-aos-delay='500' className='shadow-[0_1px_20px_rgba(0,0,0,0.2)] hidden mq:border-none border-[1.7px] border-[#6C7787] w-full sm:w-[48%] lg:w-[30%] px-3 shadow-[#002b6b53] rounded-[25px] p-5 mq:flex flex-col items-center gap-3'>
                        <img src={Vector} className='size-[20px]' alt="" />
                        <p className='text-[19px] px-1 font-semibold text-center'>Effortless Global Team Building</p>
                        <p className='text-[15px] text-center'>
                            We handle everything from legal compliance to payment structures and time zone coordination.
                            Your new team members integrate smoothly with your existing processes and culture
                        </p>
                    </div>
                </div>
                <a href='#register'>
                    <button data-aos='fade-up' className='flex items-center justify-center mx-auto text-white bg-[#0066FF] mt-10 gap-2 border-[1.2px] cursor-pointer border-[#0066FF] p-1 pl-5 rounded-[50px]'>
                        <p className='text-[16px] font-bold font-manrope'>Start Hiring Now</p>
                        <img src={send2} className='size-[40px]' alt="" />
                    </button>
                </a>
            </div>
            <div id='careers' className='md:px-[75px] overflow-hidden px-5 my-16'>
                <h1 data-aos='zoom-in' className='font-semibold mq:text-[30px] text-[25px] mq:leading-10 text-center text-[#002B6B]'>
                    World-Class African Talent <br className='sp:block hidden' /> Across Key Disciplines
                </h1>
                <p data-aos="fade-left" className='font-normal text-[14px] mq:text-[16px] mt-4 text-center text-[#000000]'>
                    Whatever your business needs, we have thoroughly vetted professionals ready to deliver <br className='xl:block hidden' />
                    exceptional results at 60-70% lower costs.
                </p>
                <div>
                    <button onClick={() => setProfession('dev')} className='flex mq:hidden items-center justify-between w-full text-white bg-[#0066FF] mt-10 gap-2 border-[1.2px] cursor-pointer border-[#0066FF] p-1 pl-5 rounded-[50px]'>
                        <div className='text-[16px] font-bold flex relative items-center gap-2'>
                            <img className='sp:size-5 size-5' src={frame1_1} alt="" />
                            <p className='sp:text-[18px] text-[17px]'>Development & Engineering</p>
                        </div>
                        <img src={profession === 'dev' ? arrowUp : arrowDown} className='sp:size-[40px] size-[35px]' alt="" />
                    </button>
                    {(profession === 'design' || profession === 'admin' || profession === 'market') && (
                        <button onClick={() => setProfession('design')} className='flex mq:hidden items-center justify-between w-full text-white bg-[#0066FF] mt-8 gap-2 border-[1.2px] cursor-pointer border-[#0066FF] p-1 pl-5 rounded-[50px]'>
                            <div className='text-[16px] font-bold flex relative items-center gap-2'>
                                <img className='sp:size-5 size-5' src={frame2} alt="" />
                                <p className='sp:text-[18px] text-[17px]'>Design & Creative</p>
                            </div>
                            <img src={profession === 'design' ? arrowUp : arrowDown} className='sp:size-[40px] size-[35px]' alt="" />
                        </button>
                    )}
                    {(profession === 'admin' || profession === 'market') && (
                        <button onClick={() => setProfession('admin')} className='flex mq:hidden items-center justify-between w-full text-white bg-[#0066FF] mt-4 gap-2 border-[1.2px] cursor-pointer border-[#0066FF] p-1 pl-5 rounded-[50px]'>
                            <div className='text-[16px] font-bold flex relative items-center gap-2'>
                                <img className='sp:size-5 size-5' src={frame3} alt="" />
                                <p className='sp:text-[18px] text-[17px]'>Administrative Support</p>
                            </div>
                            <img src={profession === 'admin' ? arrowUp : arrowDown} className='sp:size-[40px] size-[35px]' alt="" />
                        </button>
                    )}
                    {profession === 'market' && (
                        <button onClick={() => setProfession('market')} className='flex mq:hidden items-center justify-between w-full text-white bg-[#0066FF] mt-4 gap-2 border-[1.2px] cursor-pointer border-[#0066FF] p-1 pl-5 rounded-[50px]'>
                            <div className='text-[16px] font-bold flex relative items-center gap-2'>
                                <img className='sp:size-5 size-5' src={frame4} alt="" />
                                <p className='sp:text-[18px] text-[17px]'>Marketing & Digital Growth</p>
                            </div>
                            <img src={profession === 'market' ? arrowUp : arrowDown} className='sp:size-[40px] size-[35px]' alt="" />
                        </button>
                    )}
                </div>
                <div className='text-[16px] font-medium hidden mq:flex mp:flex-row flex-col items-center justify-center mq:gap-10 gap-2 text-[#6C7787] mp:border-b border-[#6C7787] mt-14'>
                    <div className='flex gap-10 border-b mp:border-b-0 border-[#6C7787]'>
                        <div
                            onClick={() => setProfession('dev')}
                            className={`flex relative items-center gap-2 cursor-pointer border-b py-3 ${profession === 'dev' ? 'text-[#0066FF] after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-[6px] after:h-[4px] after:blur-md after:bg-[#0066FF] after:opacity-60 after:z-[-1] border-b-[#0066FF]' : ''}`}
                        >
                            <img className='sp:size-5 size-2' src={frame1} alt="" />
                            <p className='sp:text-[18px] text-[12px]'>Development & Engineering</p>
                        </div>
                        <div
                            onClick={() => setProfession('design')}
                            className={`flex relative items-center gap-2 cursor-pointer border-b py-3 ${profession === 'design' ? 'text-[#0066FF] after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-[6px] after:h-[4px] after:blur-md after:bg-[#0066FF] after:opacity-60 after:z-[-1] border-b-[#0066FF]' : ''}`}
                        >
                            <img className='sp:size-5 size-2' src={frame2} alt="" />
                            <p className='sp:text-[18px] text-[12px]'>Design & Creative</p>
                        </div>
                    </div>
                    <div className='flex gap-10 border-b mp:border-b-0 border-[#6C7787]'>
                        <div
                            onClick={() => setProfession('admin')}
                            className={`flex relative items-center gap-2 cursor-pointer border-b py-3 ${profession === 'admin' ? 'text-[#0066FF] after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-[6px] after:h-[4px] after:blur-md after:bg-[#0066FF] after:opacity-60 after:z-[-1] border-b-[#0066FF]' : ''}`}
                        >
                            <img className='sp:size-4 size-2' src={frame3} alt="" />
                            <p className='sp:text-[18px] text-[12px]'>Administrative Support</p>
                        </div>
                        <div
                            onClick={() => setProfession('market')}
                            className={`flex relative items-center gap-2 cursor-pointer border-b py-3 ${profession === 'market' ? 'text-[#0066FF] after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-[6px] after:h-[4px] after:blur-md after:bg-[#0066FF] after:opacity-60 after:z-[-1] border-b-[#0066FF]' : ''}`}
                        >
                            <img className='sp:size-5 size-2' src={frame4} alt="" />
                            <p className='sp:text-[18px] text-[12px] flex gap-1'>Marketing & Digital <span className='mq:block hidden'>Growth</span></p>
                        </div>
                    </div>
                </div>
                <Professions profession={profession} setProfession={setProfession} />
            </div>

            <div className='overflow-hidden pb-16'>
                <h1 data-aos='zoom-in' className='font-semibold sm:mx-[90px] mx-5 mq:text-[30px] text-[25px] mq:leading-10 text-center text-[#002B6B]'>
                    Meet Some of Our Exceptional Talent
                </h1>
                <p data-aos="fade-left" className='font-normal sm:mx-[90px] mx-5 mq:text-[20px] text-[17px] mq:leading-8 mt-7 text-center text-[#000000]'>
                    Watch short intro videos of vetted candidates so you can see their communication skills, <br className='xl:block hidden' />
                    professionalism, and cultural fit
                </p>
                <div className='relative md:mt-16 mp:block hidden'>
                    <img
                        className="absolute left-1/2 xl:top-16 md:top-10 sa:block hidden sm:top-[56%] top-[55%] -translate-y-1/2 md:-translate-y-0 transform -translate-x-1/2 lg:w-[560px] sp:w-[500px] w-full max-w-full"
                        src={BG}
                        alt=""
                    />
                    <Slider className='xl:mx-[90px]' {...settings}>
                        {videoThumbnails.map((videoUrl, index) => (
                            <div key={index}>
                                <div className='flex items-center justify-between 2xl:justify-center xl:my-20 md:my-10 md:px-16 px-5 gap-5 w-full'>

                                    <div className='text-[17px] flex md:flex-col sm:flex-row flex-col gap-4 md:w-[30%] mt-20'>
                                        <div className='flex flex-col gap-3 rounded-[20px] shadow-[0_1px_20px_rgba(0,0,0,0.2)] bg-white shadow-[#002b6b53] lg:p-3 sm:p-2 p-4'>
                                            <p className='font-semibold lg:text-[20px]'>Client Quote:</p>
                                            <p className='lg:text-[17px] text-[15px]'>{content[index].quote}</p>
                                            <p className='lg:text-[16px] font-semibold text-[14px]'>{content[index].client}</p>
                                        </div>
                                        <p className='text-[#1E242C] font-semibold bg-white lg:text-[18px] rounded-[20px] shadow-[0_1px_20px_rgba(0,0,0,0.2)]  shadow-[#002b6b53] lg:p-4 sm:p-2 p-4 w-full'>
                                            English Proficiency: <br /> <span className='font-normal'>{content[index].proficiency}</span>
                                        </p>
                                    </div>

                                    <div className='mt-4 w-full max-w-[300px] flex justify-center items-center'>
                                        <div className='cursor-pointer hover:scale-105 transition-transform duration-300 rounded-[20px] overflow-hidden shadow-md'>
                                            <ReactPlayer
                                                ref={el => {
                                                    if (el) internalVideoElements.current[index] = el;
                                                }}
                                                url={videoUrl[0]}
                                                width="300px"
                                                height="450px"
                                                light={videoUrl[1]}
                                                playing={playingIndex === index}
                                                controls
                                                onClickPreview={() => setPlayingIndex(index)}
                                            />
                                        </div>
                                    </div>

                                    <div className='text-[17px] flex items-center justify-between flex-col gap-4 md:w-[30%] z-50 md:mt-10'>
                                        <div className='flex flex-col gap-3 rounded-[20px] w-full shadow-[0_1px_20px_rgba(0,0,0,0.2)]  shadow-[#002b6b53] bg-white lg:p-4 sm:p-2 p-4'>
                                            <p className='font-semibold lg:text-[20px]'>
                                                Expertise: <br />
                                                {content[index].expertise}
                                            </p>
                                            <p className='lg:text-[17px] text-[15px]'>{content[index].experience}</p>
                                        </div>
                                        <div className='text-[#1E242C] rounded-[20px] shadow-[0_1px_20px_rgba(0,0,0,0.2)] shadow-[#002b6b53] bg-white p-2'>
                                            <p className='font-semibold lg:text-[20px]'>Skills:</p>
                                            <div className='flex flex-wrap gap-1 mt-3'>
                                                {content[index].skills.map((skill, skillIndex) => (
                                                    <p
                                                        key={skillIndex}
                                                        className='border-[1.3px] border-[#6C7787] rounded-[100px] lg:text-[15px] text-[13px] py-1 px-[5px]'
                                                    >
                                                        {skill}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className='relative mt-16 block mp:hidden'>
                    <img
                        className="absolute w-[80%] left-1/2 -translate-x-1/2"
                        src={BG}
                        alt=""
                    />
                    <Slider className='xl:mx-[90px]' {...settings}>
                        {videoThumbnails.map((videoUrl, index) => (
                            <div key={index}>
                                <div className='fle items-center justify-between 2xl:justify-center xl:mt-20 md:mt-10 md:px-16 px-5 gap-5 w-full'>

                                    <div className='mt-4 mx-auto w-full max-w-[300px] flex justify-center items-center'>
                                        <div className='cursor-pointer hover:scale-105 transition-transform duration-300 rounded-[20px] overflow-hidden shadow-md'>
                                            <ReactPlayer
                                                ref={el => {
                                                    if (el) internalVideoElements.current[index] = el;
                                                }}
                                                url={videoUrl[0]}
                                                width="300px"
                                                height="450px"
                                                light={videoUrl[1]}
                                                playing={playingIndex === index}
                                                controls
                                                onClickPreview={() => setPlayingIndex(index)}
                                            />
                                        </div>
                                    </div>
                                    <div className='flex mq:flex-row flex-col gap-3 mt-10'>
                                        <div className='flex mq:flex-col gap-2 justify-center mb-5 mq:mb-0'>
                                            <div className='flex flex-col gap-3 mp:border-none border-[#6C7787] border-[1.7px] sp:w-[180px] rounded-[20px] shadow-[0_1px_20px_rgba(0,0,0,0.2)]  shadow-[#002b6b53] bg-white lg:p-4 sm:p-2 p-4'>
                                                <p className='font-semibold lg:text-[20px]'>
                                                    Expertise: <br />
                                                    {content[index].expertise}
                                                </p>
                                                <p className='lg:text-[17px] text-[15px]'>{content[index].experience}</p>
                                            </div>
                                            <p className='text-[#1E242C] border-[#6C7787] mp:border-none border-[1.7px] sp:w-[180px] font-semibold bg-white lg:text-[18px] rounded-[20px] shadow-[0_1px_20px_rgba(0,0,0,0.2)]  shadow-[#002b6b53] lg:p-4 sm:p-2 p-4 w-'>
                                                English Proficiency: <br /> <span className='font-normal'>{content[index].proficiency}</span>
                                            </p>
                                        </div>
                                        <div className='text-[#1E242C] mq:block hidden rounded-[20px] mp:border-none border-[#6C7787] border-[1.7px] shadow-[0_1px_20px_rgba(0,0,0,0.2)]  shadow-[#002b6b53] bg-white lg:p-4 sm:p-2 p-4'>
                                            <p className='font-semibold lg:text-[20px]'>Skills:</p>
                                            <div className='flex flex-wrap gap-2 mt-3'>
                                                {content[index].skills.map((skill, skillIndex) => (
                                                    <p
                                                        key={skillIndex}
                                                        className='border-[1.3px] border-[#6C7787] rounded-[100px] lg:text-[15px] text-[13px] lg:py-1 py-[2px] lg:px-3 px-2'
                                                    >
                                                        {skill}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className='mq:flex hidden flex-col mt-3 border-[#6C7787] mp:border-none border-[1.7px] mb-5 gap-3 rounded-[20px] shadow-[0_1px_20px_rgba(0,0,0,0.2)] bg-white shadow-[#002b6b53] lg:p-4 sm:p-2 p-4'>
                                        <p className='font-semibold lg:text-[20px]'>Client Quote:</p>
                                        <p className='lg:text-[17px] text-[15px]'>{content[index].quote}</p>
                                        <p className='lg:text-[16px] font-semibold text-[14px]'>{content[index].client}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div >
            <div id='steps' className='lg:px-[60px] overflow-hidden px-3 py-16'>
                <h1 data-aos='zoom-in' className='font-semibold text-[33px] leading-10 text-center text-[#002B6B]'>
                    Access Global Talent in 4 Easy Steps
                </h1>
                <div className='flex mp:flex-row flex-col items-center w-full mp:gap-10'>
                    <div className='mt-10 mp:w-[50%]'>
                        <div className='flex items-center xl:gap-10 sa:gap-5 gap-2'>
                            <p data-aos='fade-up' className='font-medium xl:text-[110px] sa:block hidden text-[80px] text-[#cddbf0]'>01</p>
                            <p data-aos='fade-up' className='font-medium xl:text-[110px] block sa:hidden text-[80px] font-mono text-[#cddbf0]'>1</p>
                            <div data-aos='fade-up' data-aos-delay='300' className='flex gap-4 items-center mp:border-none border-[#9ba5b6] border-[1.5px] rounded-[20px] w-full mp:w-[430px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] shadow-[#c9d6e8] xl:p-5 p-3'>
                                <img className='xl:size-[44px] size-[40px]' src={access1} alt="" />
                                <div>
                                    <p className='xl:text-[18px] mq:text-[17px] text-[15px] font-manrope font-medium text-[#1E242C]'>Share Your Requirements</p>
                                    <p className='xl:text-[14px] text-[13.5px] font-manrope font-normal text-[#414D60]'>Define your specific needs and business goals</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center xl:mt-[-14px] mt-5 xl:gap-10 sa:gap-5 gap-1'>
                            <div data-aos='fade-up' data-aos-delay='300' className='flex gap-4 items-center mp:border-none border-[#9ba5b6] border-[1.5px] rounded-[20px] w-full mp:w-[430px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] shadow-[#c9d6e8] xl:py-5 p-3'>
                                <img className='xl:size-[50px] size-[40px]' src={access2} alt="" />
                                <div>
                                    <p className='xl:text-[18px] mq:text-[17px] text-[15px] font-manrope font-medium text-[#1E242C]'>Meet Pre-Screened Candidates</p>
                                    <p className='xl:text-[14px] text-[13.5px] font-manrope font-normal text-[#414D60]'>Meet vetted professionals who match your needs</p>
                                </div>
                            </div>
                            <p data-aos='fade-up' data-aos-delay='200' className='font-medium xl:text-[110px] sa:block hidden text-[80px] text-[#cddbf0]'>02</p>
                            <p data-aos='fade-up' data-aos-delay='200' className='font-medium xl:text-[110px] block sa:hidden text-[80px] font-mono text-[#cddbf0]'>2</p>
                        </div>
                        <div className='flex items-center xl:mt-[-14px] mt-5 xl:gap-10 sa:gap-5 gap-2'>
                            <p data-aos='fade-up' data-aos-delay='200' className='font-medium xl:text-[110px] sa:block hidden text-[80px] text-[#cddbf0]'>03</p>
                            <p data-aos='fade-up' data-aos-delay='200' className='font-medium xl:text-[110px] block sa:hidden text-[80px] font-mono text-[#cddbf0]'>3</p>
                            <div data-aos='fade-up' data-aos-delay='300' className='flex gap-4 items-center mp:border-none border-[#9ba5b6] border-[1.5px] rounded-[20px] w-full mp:w-[430px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] shadow-[#c9d6e8] xl:p-5 p-3'>
                                <img className='xl:size-[50px] size-[40px]' src={access3} alt="" />
                                <div>
                                    <p className='xl:text-[18px] mq:text-[17px] text-[15px] font-manrope font-medium text-[#1E242C]'>Hire With Confidence</p>
                                    <p className='xl:text-[14px] text-[13.5px] font-manrope font-normal text-[#414D60]'>Onboard your chosen talent seamlessly </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center xl:mt-[-14px] mt-5 xl:gap-10 sa:gap-5 gap-2'>
                            <div data-aos='fade-up' data-aos-delay='300' className='flex gap-4 items-center mp:border-none border-[#9ba5b6] border-[1.5px] rounded-[20px] w-full mp:w-[430px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] shadow-[#c9d6e8] xl:p-5 p-3'>
                                <img className='xl:size-[50px] size-[40px]' src={access4} alt="" />
                                <div>
                                    <p className='xl:text-[18px] mq:text-[17px] text-[14px] font-manrope font-medium text-[#1E242C]'>Thrive With Continuous Support</p>
                                    <p className='xl:text-[14px] text-[13.5px] font-manrope font-normal text-[#414D60]'>Success managers ensure smooth operations</p>
                                </div>
                            </div>
                            <p data-aos='fade-up' data-aos-delay='200' className='font-medium xl:text-[110px] sa:block hidden text-[80px] text-[#cddbf0]'>04</p>
                            <p data-aos='fade-up' data-aos-delay='200' className='font-medium xl:text-[110px] block sa:hidden text-[80px] font-mono text-[#cddbf0]'>4</p>
                        </div>
                    </div>
                    <div className='flex sa:flex-row flex-col sa:gap-2 gap-5 mt-12 mp:w-[50%] relative'>
                        <img data-aos='zoom-in' className='xl:w-[270px] sa:block hidden w-[200px] h-[300px] 2xl:w-[90%] 2xl:h-[90%] object-cover rounded-[20px] xl:h-[400px]' src={Man6} alt="" />
                        <img data-aos='zoom-in' className='xl:w-[270px] sa:w-[200px] h-[400px] 2xl:w-full 2xl:h-full object-cover rounded-[20px] xl:h-[500px]' src={Woman6} alt="" />
                        <div className='flex sa:absolute z-30 bg-white bottom-[2%] 2xl:bottom-12 gap-4 2xl:w-[50%] items-center rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] shadow-[#c9d6e8] p-4'>
                            <img className='size-[40px] object-cover rounded-full' src={client1} alt="" />
                            <img className='size-[40px] ml-[-20px] rounded-full' src={client2} alt="" />
                            <img className='size-[40px] ml-[-20px] rounded-full' src={Woman7} alt="" />
                            <img className='size-[40px] object-fill ml-[-20px] rounded-full' src={client3} alt="" />
                            <div>
                                <p className='text-[20px] font-manrope font-medium text-[#0066FF]'>136+</p>
                                <p className='text-[15px] font-manrope font-normal text-[#414D60]'>Satisfied Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
                <a href='#register'>
                    <button data-aos='fade-up' data-aos-delay='200' className='flex items-center justify-center mx-auto text-white bg-[#0066FF] mt-10 gap-2 border-[1.2px] cursor-pointer border-[#0066FF] p-1 pl-5 rounded-[50px]'>
                        <p className='text-[16px] font-bold font-manrope'>Get Started Now</p>
                        <img src={send2} className='size-[40px]' alt="" />
                    </button>
                </a>
            </div>
            <div id='testimonials' className='mp:px-[90px] overflow-hidden px-5 py-10'>
                <h1 data-aos='zoom-out' className='font-semibold text-[30px] leading-10 text-center text-[#002B6B]'>
                    What our Clients are Saying
                </h1>
                <div className='mq:flex hidden w-full justify-center flex-wrap gap-5 mt-10'>
                    <div data-aos='zoom-in' data-aos-delay='300' className='flex flex-col gap-5 items-center w-full mq:w-[48%] lg:w-[30%]'>
                        <div className='rounded-[20px] py-6 px-5 shadow-[0_1px_20px_rgba(0,0,0,0.2)] mp:border-none border-[#6C7787] border-[1.7px]  shadow-[#002b6b53] flex flex-col items-center gap-2'>
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
                            <div className='flex gap-2 items-start text-center'>
                                <div>
                                    <p>Jennifer Brown</p>
                                    <p className='text-black/70 text-[15px]'>Chief Information Security Officer, SecureTech Industries</p>
                                </div>
                            </div>
                        </div>
                        <p className='text-[27px] text-center font-medium w-[260px]'><span className='text-[#0066FF]'>98%</span> Client Satisfaction Rate</p>
                    </div>
                    <div data-aos='zoom-in' data-aos-delay='600' className='flex flex-col gap-5 items-center w-full mq:w-[48%] lg:w-[30%]'>
                        <div className='rounded-[20px] py-6 px-4 shadow-[0_1px_20px_rgba(0,0,0,0.2)] mp:border-none border-[#6C7787] border-[1.7px]  shadow-[#002b6b53] flex flex-col items-center gap-2'>
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
                            <div className='flex gap-2 items-start text-center mx-2'>
                                <div>
                                    <p>James Olsen</p>
                                    <p className='text-black/70 text-[15px]'>Chief Marketing Officer, GlobalReach Corp.</p>
                                </div>
                            </div>
                        </div>
                        <p className='text-[27px] text-center font-medium w-[300px]'>Over <span className='text-[#0066FF]'>$2 million+</span> Saved by Clients </p>
                    </div>
                    <div data-aos='zoom-in' data-aos-delay='900' className='flex flex-col gap-5 items-center w-full mq:w-[48%] lg:w-[30%]'>
                        <div className='rounded-[20px] py-6 px-4 shadow-[0_1px_20px_rgba(0,0,0,0.2)] mp:border-none border-[#6C7787] border-[1.7px]  shadow-[#002b6b53] flex flex-col items-center gap-2'>
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
                            <div className='flex gap-2 items-start text-center mx-2'>
                                <div>
                                    <p>David Miller</p>
                                    <p className='text-black/70 text-[15px]'>VP of Engineering, CloudLeap Technologies</p>
                                </div>
                            </div>
                        </div>
                        <p className='text-[27px] text-center font-medium w-[250px]'><span className='text-[#0066FF]'>136+</span> businesses trust us to Hire</p>
                    </div>
                    <div data-aos='zoom-in' data-aos-delay='100' className='flex flex-col gap-5 items-center w-full mq:w-[48%] lg:w-[30%]'>
                        <div className='rounded-[20px] py-6 px-4 shadow-[0_1px_20px_rgba(0,0,0,0.2)] mp:border-none border-[#6C7787] border-[1.7px]  shadow-[#002b6b53] flex flex-col items-center gap-2'>
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
                            <div className='flex gap-2 items-start text-center'>
                                <div>
                                    <p>Dr. Eleanor Vance</p>
                                    <p className='text-black/70 text-[15px]'>VP of Research & Development, DataWise Analytics</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Slider className='my-10 flex mq:hidden' {...settings2}>
                    <div className='flex flex-col gap-5 items-center w-full mb-5'>
                        <div className='rounded-[20px] py-6 px-5 h-[300px] mp:border-none border-[#6C7787] border-[1.7px]  shadow-[#002b6b53] flex flex-col gap-2'>
                            <div className='flex gap-2'>
                                <FaStar className='text-[17px] text-[#0066FF]' />
                                <FaStar className='text-[17px] text-[#0066FF]' />
                                <FaStar className='text-[17px] text-[#0066FF]' />
                                <FaStar className='text-[17px] text-[#0066FF]' />
                                <FaStar className='text-[17px] text-[#0066FF]' />
                            </div>
                            <p className='font-normal mq:text-[16px] text-[12px]'>
                                "Securing our digital assets is crucial. Rich Sterling Hires connected us with Kofi Mensah, a Senior Cybersecurity
                                Analyst from Ghana. His expertise in threat intelligence and incident response has greatly strengthened our security—at
                                a much lower cost than local alternatives."
                            </p>
                            <div className='flex gap-2 items-start'>
                                <div>
                                    <p className='text-[14px]'>Jennifer Brown</p>
                                    <p className='text-black/70 text-[14px]'>Chief Information Security Officer, SecureTech Industries</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 items-center w-full'>
                        <div className='rounded-[20px] py-6 px-4 h-[300px] mp:border-none border-[#6C7787] border-[1.7px]  shadow-[#002b6b53] flex flex-col gap-2'>
                            <div className='flex gap-2'>
                                <FaStar className='text-[17px] text-[#0066FF]' />
                                <FaStar className='text-[17px] text-[#0066FF]' />
                                <FaStar className='text-[17px] text-[#0066FF]' />
                                <FaStar className='text-[17px] text-[#0066FF]' />
                                <FaStar className='text-[17px] text-[#0066FF]' />
                            </div>
                            <p className='font-normal mq:text-[16px] text-[12px]'>
                                "Expanding our reach into Sub-Saharan Africa required a culturally astute Marketing Manager. Zola Mkhize from South
                                Africa, sourced by Rich Sterling Hires, has been exceptional. Her understanding of the regional nuances and her effective
                                marketing strategies have significantly increased our brand awareness."
                            </p>
                            <div className='flex gap-2 items-start'>
                                <div>
                                    <p className='text-[14px]'>James Olsen</p>
                                    <p className='text-black/70 text-[14px]'>Chief Marketing Officer, GlobalReach Corp.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 items-center w-full'>
                        <div className='rounded-[20px] py-6 px-4  h-[300px] mp:border-none border-[#6C7787] border-[1.7px]  shadow-[#002b6b53] flex flex-col gap-2'>
                            <div className='flex gap-2'>
                                <FaStar className='text-[17px] text-[#0066FF]' />
                                <FaStar className='text-[17px] text-[#0066FF]' />
                                <FaStar className='text-[17px] text-[#0066FF]' />
                                <FaStar className='text-[17px] text-[#0066FF]' />
                                <FaStar className='text-[17px] text-[#0066FF]' />
                            </div>
                            <p className='font-normal mq:text-[16px] text-[12px]'>
                                "Scaling our infrastructure efficiently was critical. Rich Sterling Hires found us Adewale Adebayo from Nigeria, a Senior DevOps Engineer
                                whose expertise in cloud automation and system optimization has been transformative. He's streamlined our deployments and enhanced our
                                system stability, bringing a level of skill we struggled to find locally."
                            </p>
                            <div className='flex gap-2 items-start'>
                                <div>
                                    <p className='text-[14px]'>David Miller</p>
                                    <p className='text-black/70 text-[14px]'>VP of Engineering, CloudLeap Technologies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 items-center w-full'>
                        <div className='rounded-[20px] py-6 px-4  h-[300px] mp:border-none border-[#6C7787] border-[1.7px]  shadow-[#002b6b53] flex flex-col gap-2'>
                            <div className='flex gap-2'>
                                <FaStar className='text-[17px] text-[#0066FF]' />
                                <FaStar className='text-[17px] text-[#0066FF]' />
                                <FaStar className='text-[17px] text-[#0066FF]' />
                                <FaStar className='text-[17px] text-[#0066FF]' />
                                <FaStar className='text-[17px] text-[#0066FF]' />
                            </div>
                            <p className='font-normal mq:text-[16px] text-[12px]'>
                                "Our search for a specialized AI data scientist felt endless until we partnered with Rich Sterling Hires. They connected us with Dr.
                                Imani Nkosi from Kenya, whose expertise in machine learning has been instrumental in refining our predictive models. Her insightful
                                contributions and proactive approach have accelerated our research significantly."
                            </p>
                            <div className='flex gap-2 items-start'>
                                <div>
                                    <p className='text-[14px]'>Dr. Eleanor Vance</p>
                                    <p className='text-black/70 text-[14px]'>VP of Research & Development, DataWise Analytics</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
                <div className='flex mq:hidden flex-col gap-5 justify-center'>
                    <div className='flex gap-5'>
                        <p className='text-[17px] font-medium'><span className='text-[#0066FF]'>136+</span> businesses trust us to Hire</p>
                        <p className='text-[17px] font-medium'>Over <span className='text-[#0066FF]'>$2 million+</span> Saved by Clients </p>
                    </div>
                    <div className='flex gap-5'>
                        <p className='text-[17px] font-medium'><span className='text-[#0066FF]'>98%</span> Client Satisfaction Rate</p>
                        <p className='text-[17px] font-medium'><span className='text-[#0066FF]'>1000+</span> Vetted African Professionals</p>
                    </div>
                </div>
                <a href='#register'>
                    <button data-aos='fade-up' className='flex items-center justify-center text-[#0066FF] bg-white mt-14 mx-auto gap-2 border-[1.2px] cursor-pointer border-[#0066FF] p-1 pl-5 rounded-[50px]'>
                        <p className='text-[16px] font-bold font-manrope'>Start Hiring Now</p>
                        <img src={send} className='size-[40px]' alt="" />
                    </button>
                </a>
            </div>
            <div id='pricing' className='lg:px-[50px] overflow-hidden xl:px-[90px] mp:px-5 md:px-[90px] px-7 py-10'>
                <div data-aos='zoom-in' data-aos-delay='200' className='font-semibold text-[31px] leading-10 items-center justify-center text-[#002B6B] flex flex-wrap gap-1'>
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
                                <p data-aos='fade-down' data-aos-delay='200' className='text-[19px] font-normal'>Clients save up to 70% compared to local hiring while maintaining world-class quality.</p>
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
                                <div data-aos='fade-up' data-aos-delay='200' className='flex items-start gap-1'>
                                    <FaCheck className='text-[#0066FF] text-[24px]' />
                                    <p className='text-[19px] font-medium'>Access to Vetted Talent</p>
                                </div>
                                <p data-aos='fade-up' data-aos-delay='500' className='text-[19px] font-normal'>Top 2% of candidates across Africa in tech, design, marketing, and operations roles.</p>
                            </div>
                            <div>
                                <div data-aos='fade-up' data-aos-delay='800' className='flex items-start gap-1'>
                                    <FaCheck className='text-[#0066FF] text-[24px]' />
                                    <p className='text-[19px] font-medium'>End-to-End Admin Support</p>
                                </div>
                                <p data-aos='fade-up' data-aos-delay='1100' className='text-[19px] font-normal'>We handle the contracts, time tracking, and local compliance so you don’t have to.</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-down' data-aos-delay='1000' className='bg-[#0066FF] shadow-lg shadow-black/30 text-white rounded-[20px] p-5 font-manrope'>
                        <p>Start Hiring with us from</p>
                        <p className='sm:text-[70px] sa:text-[50px] text-[40px] font-semibold'>$4.38/<span className='sm:text-[40px] sa:text-[26px] text-[20px]'>talent hourly</span></p>
                        <div className='flex flex-col gap-3 mt-1'>
                            <p className='flex items-center gap-3'><FaRegCheckCircle /> Huge Cost Savings</p>
                            <p className='flex items-center gap-3'><FaRegCheckCircle /> Access to Vetted Talent</p>
                            <p className='flex items-center gap-3'><FaRegCheckCircle /> End-to-End Admin Support</p>
                            <p className='flex items-center gap-3'><FaRegCheckCircle /> Seamless Remote Collaboration</p>
                            <p className='flex items-center gap-3'><FaRegCheckCircle /> Fast Matching, Within Days</p>
                            <p className='flex items-center gap-3'><FaRegCheckCircle /> Dedicated Success Managers</p>
                        </div>
                        <a href='/pricing' target='_blank'>
                            <button className='bg-white rounded-xl text-black h-[60px] w-full mt-7 text-[20px] font-medium'>See our Price Guide Here</button>
                        </a>
                    </div>
                </div>
            </div>
            <Register />
            <div id='faqs' className='lg:px-[60px] overflow-hidden px-5 pt-12'>
                <h1 data-aos='zoom-out' className='font-semibold flex items-center justify-center gap-2 sp:text-[33px] sr:text-[25px] text-[20px] leading-10 text-[#002B6B]'>
                    Frequently Asked Questions
                    <img className='sp:size-[34px] sr:size-[26px] size-[21px]' src={question} alt="" />
                </h1>
                <div>
                    <div className='grid mq:grid-cols-2 items-start justify-center lg:gap-5 gap-3 mt-14 font-manrope'>
                        <div data-aos='zoom-in' data-aos-delay='200' className='bg-[#EDEEF0] border-[#AAAAAA] border rounded-[20px] shadow-[0_1px_20px_rgba(0,0,0,0.2)]  shadow-[#002b6b53] p-5 flex flex-col gap-4'>
                            <div className='flex justify-between items-center'>
                                <p className='bg-white text-black rounded-[70px] py-2 px-3'>01</p>
                                <FaPlus
                                    className={`transform transition-transform text-blue-500 text-[20px] duration-300 ${faq1 ? 'rotate-45' : 'rotate-0'}`}
                                    onClick={() => setFaq1(!faq1)}
                                />
                            </div>
                            <div className='flex justify-between items-start'>
                                <div className='flex flex-col gap-3'>
                                    <p className='text-[#1E242C] text-[17px] font-medium leading-6'>How do you handle time zone differences?</p>
                                    {faq1 && (
                                        <p className='text-[#414D60] text-[15px] font-normal'>
                                            Most of our professionals work in time zones with at least 4-6 hours of overlap with US business hours.
                                            Many choose to align their schedules with their US employers for maximum collaboration. We also
                                            provide tools and best practices for asynchronous work to ensure productivity around the clock.
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div data-aos='zoom-in' data-aos-delay='400' className='bg-[#EDEEF0] border-[#AAAAAA] border rounded-[20px] shadow-[0_1px_20px_rgba(0,0,0,0.2)]  shadow-[#002b6b53] p-5 flex flex-col gap-4'>
                            <div className='flex justify-between items-center'>
                                <p className='bg-white text-black rounded-[70px] py-2 px-3'>02</p>
                                <FaPlus
                                    className={`transform transition-transform text-blue-500 text-[20px] duration-300 ${faq2 ? 'rotate-45' : 'rotate-0'}`}
                                    onClick={() => setFaq2(!faq2)}
                                />
                            </div>
                            <div className='flex justify-between items-start'>
                                <div className='flex flex-col gap-3'>
                                    <p className='text-[#1E242C] text-[17px] font-medium leading-6'>What about language barriers and communication issues?</p>
                                    {faq2 && (
                                        <p className='text-[#414D60] text-[15px] font-normal'>
                                            English proficiency is a core requirement in our vetting process. All our candidates undergo comprehensive language assessments
                                            and demonstrate excellent written and verbal communication skills. Many have worked with US companies
                                            before and understand American business communication styles.
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div data-aos='zoom-in' data-aos-delay='200' className='bg-[#EDEEF0] border-[#AAAAAA] border rounded-[20px] shadow-[0_1px_20px_rgba(0,0,0,0.2)]  shadow-[#002b6b53] p-5 flex flex-col gap-4'>
                            <div className='flex justify-between items-center'>
                                <p className='bg-white text-black rounded-[70px] py-2 px-3'>03</p>
                                <FaPlus
                                    className={`transform transition-transform text-blue-500 text-[20px] duration-300 ${faq3 ? 'rotate-45' : 'rotate-0'}`}
                                    onClick={() => setFaq3(!faq3)}
                                />
                            </div>
                            <div className='flex justify-between items-start'>
                                <div className='flex flex-col gap-3'>
                                    <p className='text-[#1E242C] text-[17px] font-medium leading-6'>How do you handle legal and compliance issues?</p>
                                    {faq3 && (
                                        <p className='text-[#414D60] text-[15px] font-normal'>
                                            Our legal team manages all compliance aspects, including contracts, intellectual property protection, data security, and payment
                                            structures. We create compliant arrangements that protect your business while ensuring proper
                                            classification.
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div data-aos='zoom-in' data-aos-delay='400' className='bg-[#EDEEF0] border-[#AAAAAA] border rounded-[20px] shadow-[0_1px_20px_rgba(0,0,0,0.2)]  shadow-[#002b6b53] p-5 flex flex-col gap-4'>
                            <div className='flex justify-between items-center'>
                                <p className='bg-white text-black rounded-[70px] py-2 px-3'>04</p>
                                <FaPlus
                                    className={`transform transition-transform text-blue-500 text-[20px] duration-300 ${faq4 ? 'rotate-45' : 'rotate-0'}`}
                                    onClick={() => setFaq4(!faq4)}
                                />
                            </div>
                            <div className='flex justify-between items-start'>
                                <div className='flex flex-col gap-3'>
                                    <p className='text-[#1E242C] text-[17px] font-medium leading-6'>What types of roles can I fill through Rich Sterling Hires?</p>
                                    {faq4 && (
                                        <p className='text-[#414D60] text-[15px] font-normal'>
                                            We specialize in knowledge worker roles including software development, digital marketing, design, customer support, and administrative
                                            functions. Our talent pool includes entry-level to senior executive professionals across these domains.
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div data-aos='zoom-in' data-aos-delay='200' className='bg-[#EDEEF0] border-[#AAAAAA] border rounded-[20px] shadow-[0_1px_20px_rgba(0,0,0,0.2)]  shadow-[#002b6b53] p-5 flex flex-col gap-4'>
                            <div className='flex justify-between items-center'>
                                <p className='bg-white text-black rounded-[70px] py-2 px-3'>05</p>
                                <FaPlus
                                    className={`transform transition-transform text-blue-500 text-[20px] duration-300 ${faq5 ? 'rotate-45' : 'rotate-0'}`}
                                    onClick={() => setFaq5(!faq5)}
                                />
                            </div>
                            <div className='flex justify-between items-start'>
                                <div className='flex flex-col gap-3'>
                                    <p className='text-[#1E242C] text-[17px] font-medium leading-6'>How do you ensure the security of our company data?</p>
                                    {faq5 && (
                                        <p className='text-[#414D60] text-[15px] font-normal'>
                                            All professionals sign comprehensive NDAs and security agreements. We provide security training and can implement your company's
                                            security protocols. For highly sensitive industries, we can arrange dedicated secure workspaces and equipment.
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div data-aos='zoom-in' data-aos-delay='200' className='bg-[#EDEEF0] border-[#AAAAAA] border rounded-[20px] shadow-[0_1px_20px_rgba(0,0,0,0.2)]  shadow-[#002b6b53] p-5 flex flex-col gap-4'>
                            <div className='flex justify-between items-center'>
                                <p className='bg-white text-black rounded-[70px] py-2 px-3'>06</p>
                                <FaPlus
                                    className={`transform transition-transform text-blue-500 text-[20px] duration-300 ${faq6 ? 'rotate-45' : 'rotate-0'}`}
                                    onClick={() => setFaq6(!faq6)}
                                />
                            </div>
                            <div className='flex justify-between items-start'>
                                <div className='flex flex-col gap-3'>
                                    <p className='text-[#1E242C] text-[17px] font-medium leading-6'>Do I need to worry about contracts, benefits, or compliance?</p>
                                    {faq6 && (
                                        <p className='text-[#414D60] text-[15px] font-normal'>
                                            One of the biggest advantages of working with Rich Sterling Hires is that your hired talent functions as an independent contractor, not a
                                            local employee, you get the output and commitment of a full-time team member — without the traditional overhead.
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href='#register'>
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
                    <a href='#register'>
                        <button className='flex items-center justify-center text-white bg-[#0066FF] z-50 mt-5 gap-2 border-[1.2px] cursor-pointer border-[#0066FF] p-1 pl-5 rounded-[50px]'>
                            <p className='text-[16px] font-medium font-manrope'>Get Started Today</p>
                            <img src={send2} className='size-[40px] z-50' alt="" />
                        </button>
                    </a>
                </div>
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
                        <p className='text-[14px] mt-3 font-normal font-jakarta'><span className='font-bold font-manrope'>US Office</span>: <br className='sa:hidden block' /> 24021 Lewes Georgetown Hwy, Georgetown, DE 19947, United States</p>
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

        </div >
    )
}

export default LandingPage