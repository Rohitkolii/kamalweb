'use client'
import React, { useEffect, useState } from 'react'
import Styles from './ServicesDetails.module.css'
import Link from 'next/link'
import ServiveCard from '../ServiveCard/ServiveCard'

import { MdOutlineWeb, MdOutlineAppShortcut } from "react-icons/md";
import { GiProcessor } from "react-icons/gi";
import { VscServerProcess } from "react-icons/vsc";
import { BsDatabaseFillGear } from "react-icons/bs";
import { VscAzureDevops } from "react-icons/vsc";
import { FaHandHoldingUsd } from "react-icons/fa";
import { TbDeviceImacDollar } from "react-icons/tb";

import { FaShoppingBag } from "react-icons/fa";
import { LiaBusinessTimeSolid } from "react-icons/lia";

import { BiSupport } from "react-icons/bi";
import { MdOutlineSupportAgent } from "react-icons/md";

import { FaChalkboardUser } from "react-icons/fa6";
import { LuUserRoundCheck } from "react-icons/lu";

import { MdKeyboardArrowRight } from "react-icons/md";






import { FaArrowRightLong } from "react-icons/fa6";
import Partners from '../Partners/Partners'
import { useRouter } from 'next/navigation'

const servicedata = [
    {
        id: 0,
        svg: <MdOutlineWeb />,
        headline : 'Website Developement',
        tagline : 'Elevate Your Digital Presence with AppsoBytes',
        para : "Website development is essential for businesses looking to establish a solid online presence. It involves designing and developing user-friendly, responsive, and high-performing websites that engage visitors and drive conversions. A well-structured website ensures smooth navigation, fast loading speeds, and mobile responsiveness, making it easier for businesses to connect with their audience. Whether it's a corporate website, an e-commerce platform, or a custom web application, professional website development enhances brand credibility and boosts business growth.",
        tags : ['Custom Solutions', 'Latest Technologies', 'SEO & Mobile Optimized', 'Scalability & Flexibility', 'Dedicated Support'],
        img : 'images/web.jpg',
        url : 'services/websitedevelopement'
    },
    {
        id: 1,
        svg : <MdOutlineAppShortcut />,
        headline : 'Mobile Application',
        tagline : 'Transforming Ideas into Powerful Apps with AppsoBytes',
        para:'Mobile application development is the process of creating feature-rich, scalable, and engaging apps for smartphones and tablets. With the increasing reliance on mobile devices, businesses can reach a wider audience through well-designed apps that offer seamless functionality and a great user experience. Whether it’s for iOS, Android, or cross-platform, mobile apps enhance customer engagement, improve efficiency, and provide innovative solutions to business challenges. A powerful mobile app helps businesses stay ahead in the digital landscape.',
        tags : ['Custom-Built Apps', 'Cross-Platform Expertise', 'User-Centric Design', 'Scalability & Security', 'Agile Development & Support'],
        img : 'images/app.jpg',
        url : '/services/applicationdevelopement'
    },
    {
        id: 2,
        svg: <VscServerProcess />,
        headline : 'Backend Developement',
        tagline : 'Powering Scalable & Secure Solutions with AppsoBytes',
        para:'Backend development is crucial for ensuring the seamless performance, security, and functionality of digital applications. It involves managing databases, building APIs, and handling server-side operations that support the front-end experience. A robust backend enables smooth data flow, user authentication, and system scalability, ensuring that websites and apps run efficiently. With optimized backend architecture, businesses can provide fast, secure, and scalable digital solutions tailored to their needs.',
        tags : ['Scalable Architecture', 'Secure & Reliable', 'API-First Approach', 'Optimized Performance', 'Cloud & DevOps Integration'],
        img : 'images/code.jpg',
        url : '/services/backenddevelopement'
    },
    {
        id: 3,
        svg : <BsDatabaseFillGear />,
        headline : 'Cloud & Database Solutions',
        tagline : 'Secure, Scalable, and Future-Ready with AppsoBytes',
        para:'Cloud and database solutions are at the heart of modern digital infrastructure, enabling businesses to store, manage, and scale data efficiently. Cloud computing ensures high availability, security, and cost-effectiveness, while well-structured databases optimize data access and performance. Whether using AWS, Azure, Google Cloud, SQL, or NoSQL databases, businesses can benefit from secure, scalable, and seamlessly integrated solutions that support growth and innovation in an ever-evolving digital landscape.',
        tags : ['Scalable Cloud Infrastructure', 'Robust Database Management', 'High Security & Compliance', 'Optimized Performance', 'Seamless Integration'],
        img : 'images/data.jpg',
        url : '/services/cloudanddatabase'
    },
    {
        id: 4,
        svg : <GiProcessor />,
        headline : 'IT Consulting',
        tagline : 'Empowering Businesses with Strategic Technology Solutions',
        para:'IT consulting helps businesses leverage technology effectively to improve operations, enhance security, and drive innovation. From digital transformation and cloud migration to cybersecurity and infrastructure optimization, IT consulting services provide expert guidance to align technology with business goals. By analyzing existing systems and identifying opportunities for improvement, businesses can streamline workflows, reduce costs, and stay ahead of the competition in an ever-evolving digital landscape.',
        tags : ['Scalable Cloud Infrastructure', 'Robust Database Management', 'High Security & Compliance', 'Optimized Performance', 'Seamless Integration'],
        img : 'images/img3.jpg',
        url : '/services/itconsulting'
    },
    {
        id: 5,
        svg : <VscAzureDevops />,
        headline : 'DevOps ',
        tagline : 'Streamlining Development for Faster, Reliable Deployments.',
        para:'DevOps is a modern approach to software development and IT operations, ensuring faster, more reliable, and automated workflows. By integrating continuous integration (CI), continuous deployment (CD), and infrastructure automation, DevOps helps businesses reduce development cycles, improve collaboration, and enhance system reliability. With efficient cloud infrastructure, containerization (Docker, Kubernetes), and real-time monitoring, organizations can scale effortlessly, increase security, and accelerate product delivery, making DevOps a crucial strategy for digital success.',
        tags : ['Scalable Cloud Infrastructure', 'Robust Database Management', 'High Security & Compliance', 'Optimized Performance', 'Seamless Integration'],
        img : 'images/card1.jpg',
        url : '/services/devops'
    },
];

const ServicesDetails = () => {

    const router = useRouter();
    const [showservices, setShowservices] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

    const [widthvalue, setwidthvalue] = useState()
    useEffect(()=> {
            setwidthvalue(document.body.clientWidth)
        },[])


    // const sections = {
    //     web : 'Web Developement',
    //     app : 'App Developement',
    //     backend : 'Backend',
    //     cloudanddatabase : "Cloud & Database",
    // }

    // const [activeSection, setActiveSection] = useState(Object.keys(sections)[0])

    // console.log(servicedata)
  return (
    <>

    {/* <div>
        <div className={Styles.hrglow}></div>
        <div className={Styles.servicelist}>
                <ul>
                    {
                        Object.keys(sections)?.map((key)=>{
                            return <li key={key}
                            className={activeSection === key ? Styles.active : ''}
                            onClick={()=> setActiveSection(key)}
                            ><Link href={`#${key}`}>{sections[key]}</Link></li>
                        })
                    }
                </ul>
            </div>
    </div> */}

    <div className={Styles.ServicesDetails}>
        <h1 className='gt'>Our Services and works</h1>
        {
            servicedata.slice(0, showservices ? servicedata.length : 3).map((elm, index)=> {
                
                return <div className={Styles.serviceCardcon} key={index} onClick={() => setActiveIndex(activeIndex === elm.id ? null : elm.id)}>
                        <div className={Styles.serviceCard} >
                            <div>
                                <p>{elm.svg}{elm.headline}</p>
                                <p className='subp'>{elm.tagline}</p>
                            </div>
                            {activeIndex !== elm.id && (
                                <div>
                                    <FaArrowRightLong />
                                </div>)}
                        </div>
                        {activeIndex === elm.id && (
                        <div className={Styles.showservice}>
                            <div className={Styles.showserviceimg}>
                                <img src={elm.img} alt="" />
                            </div>
                            <div  className={Styles.briefservice}>
                                <p className='subp'>{elm.para}</p>
                                <div className={Styles.tags}>
                                    {
                                        elm.tags && elm.tags.map((tags, index)=>{
                                            return <p key={index}>#{tags}</p>
                                        })
                                    }
                                </div>
                                <div className={Styles.morebtn}>
                                    <Link href={elm.url}>Know more <MdKeyboardArrowRight /></Link>
                                </div>
                            </div>

                        </div>)}

                    </div> 
        })
        }

        <div className={Styles.showbtn}>
            {
                showservices ?
                <button onClick={()=> setShowservices(!showservices)}>Show less</button>
                :
                <button onClick={()=> setShowservices(!showservices)}>Show more</button>
            }
        </div>
    </div>

    <div className={Styles.stepcon}>
            <div className={Styles.innerstepcon}>
                <h1 className='gt'>How your work done in simple steps</h1>
                <div className={Styles.gridcon}>
                    <div>
                        <h1>01</h1>
                        <p>Get Requirement</p>
                        {widthvalue >= 1000 ?
                        <p className='subp'>Understanding client needs, business goals, and technical specifications to create a clear development roadmap.</p>
                        : 
                        <p className='subp'>Defining goals and technical needs.</p>
                    }
                    </div>
                    <div>
                        <h1>02</h1>
                        <p>Plan & Design</p>
                        {widthvalue >= 1000 ?
                        <p className='subp'>Structuring the project with wireframes, UI/UX design, architecture planning, and selecting the right tech stack for seamless development.</p>
                        : 
                        <p className='subp'>Creating wireframes, UI/UX, and architecture.</p>
                    }
                    </div>
                    <div>
                        <h1>03</h1>
                        <p>Developement</p>
                        {widthvalue >= 1000 ?
                        <p className='subp'>Writing clean, efficient code to build the application’s frontend, backend, and database while ensuring scalability and security.</p>
                        : 
                        <p className='subp'>Building secure, scalable applications.</p>
                    }
                    </div>
                    <div>
                        <h1>04</h1>
                        <p>Testing</p>
                        {widthvalue >= 1000 ?
                        <p className='subp'>Conducting rigorous testing, including functionality, security, and performance checks, to ensure a bug-free and high-performing product.</p>
                        : 
                        <p className='subp'>Ensuring performance, security, and bug-free delivery.</p>
                    }
                    </div>
                </div>
            </div>
    </div>
    
    <Partners />

    <div className={Styles.serviceinfo}>
        <h1 className='gt'>Why trust us for <br /> your IT needs</h1>
        <div className={Styles.serviceinfoinner}>
            <div className={Styles.serviceinfoimg}>
                <img src="images/sr1.jpg" alt="" />
            </div>

            <div className={Styles.serviceinfogrid}>
                <div>
                    <TbDeviceImacDollar />
                    <p>Affordable pricing</p>
                    <p className='subp'> High-quality solutions at competitive rates to fit your budget.</p>
                </div>
                <div>
                    <FaChalkboardUser />
                    <p>Professional Team</p>
                    <p className='subp'>Skilled experts dedicated to delivering innovative and efficient solutions.</p>
                </div>
                <div>
                    <LiaBusinessTimeSolid />
                    <p>Years of Experience</p>
                    <p className='subp'>Proven industry expertise to handle complex challenges with confidence.</p>
                </div>
                <div>
                    <MdOutlineSupportAgent />
                    <p>Dedicated Support</p>
                    <p className='subp'>Reliable assistance to ensure seamless performance and continuous growth.</p>
                </div>
            </div>
        </div>
    </div>

    {/* <div className={Styles.showcasecon}>
        <div className={Styles.innershowcase}>
            <p>// Our Latest Projects</p>
            <h1 className='gtlight'>Explore our showcase of <br /> <span>Featured Works</span></h1>
                <div className={Styles.showcasegrid}>
                    <div className={Styles.showcasecard}>
                        <div>
                            <img src="images/work1.png" alt="" />
                        </div>
                        <div>
                            <p>BeautyZone</p>
                            <FaArrowRightLong />
                        </div>
                    </div>
                    <div className={Styles.showcasecard}>
                        <div>
                            <img src="images/work2.png" alt="" />
                        </div>
                        <div>
                            <p>Owly Solutions</p>
                            <FaArrowRightLong />
                        </div>
                    </div>
                     <div className={Styles.showcasecard}>
                        <div>
                            <img src="images/work3.png" alt="" />
                        </div>
                        <div>
                            <p>Rentkaro</p>
                            <FaArrowRightLong />
                        </div>
                    </div>
                    <div className={Styles.showcasecard}>
                        <div>
                            <img src="images/work4.png" alt="" />
                        </div>
                        <div>
                            <p>IT Company</p>
                            <FaArrowRightLong />
                        </div>
                    </div>
                </div>

                <div className={Styles.showbtn}>
                    <button>Explore more</button>
                </div>
        </div>

    </div> */}
    </>
  )
}

export default ServicesDetails