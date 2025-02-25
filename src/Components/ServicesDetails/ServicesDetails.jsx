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



import { FaArrowRightLong } from "react-icons/fa6";

const servicedata = [
    {
        id: 0,
        svg: <MdOutlineWeb />,
        headline : 'Website Developement',
        tagline : 'Elevate Your Digital Presence with AppsoBytes',
        para:'At AppsoBytes, we specialize in crafting high-performance, user-centric websites tailored to your business needs. Our team of expert developers, designers, and strategists leverage cutting-edge technologies to deliver responsive, scalable, and visually appealing websites that drive engagement and conversions.'
    },
    {
        id: 1,
        svg : <MdOutlineAppShortcut />,
        headline : 'Mobile Application',
        tagline : 'Transforming Ideas into Powerful Apps with AppsoBytes',
        para:'At AppsoBytes, we specialize in creating innovative, high-performance mobile applications that enhance user experience and drive business growth. Our expert developers harness the latest technologies to build secure, scalable, and feature-rich apps tailored to your unique requirements.'
    },
    {
        id: 2,
        svg: <VscServerProcess />,
        headline : 'Backend Developement',
        tagline : 'Powering Scalable & Secure Solutions with AppsoBytes',
        para:'At AppsoBytes, we specialize in building robust, scalable, and high-performance backend systems that serve as the backbone of your digital applications. Our expert developers ensure seamless data management, API integration, and security, providing a reliable foundation for websites, mobile apps, and enterprise solutions.'
    },
    {
        id: 3,
        svg : <BsDatabaseFillGear />,
        headline : 'Cloud & Database Solutions',
        tagline : 'Secure, Scalable, and Future-Ready with AppsoBytes',
        para:'At AppsoBytes, we provide cutting-edge cloud and database solutions that ensure seamless data management, high availability, and security for your business. Our expertise in cloud computing, database architecture, and optimization helps businesses scale effortlessly while maintaining top-notch performance and reliability.'
    },
    {
        id: 4,
        svg : <GiProcessor />,
        headline : 'IT Consulting ',
        tagline : 'Empowering Businesses with Strategic Technology Solutions',
        para:'IT consulting helps businesses leverage technology effectively to improve efficiency, security, and scalability. It involves analyzing an organization’s IT infrastructure, identifying challenges, and providing strategic solutions to enhance performance and growth. From digital transformation and cloud adoption to cybersecurity and software integration, IT consulting ensures businesses stay competitive in a rapidly evolving technological landscape. With expert guidance, companies can optimize resources, reduce costs, and implement future-ready solutions tailored to their unique needs.'
    },
    {
        id: 5,
        svg : <VscAzureDevops />,
        headline : 'DevOps ',
        tagline : 'Streamlining Development for Faster, Reliable Deployments.',
        para:'DevOps is a modern approach that combines development and operations to enhance collaboration, automate workflows, and improve software delivery. By integrating continuous integration, continuous deployment (CI/CD), infrastructure as code (IaC), and cloud automation, DevOps ensures faster development cycles, greater efficiency, and high system reliability. It helps businesses achieve scalability, security, and seamless deployment, reducing downtime and enhancing overall performance. With the right DevOps practices, organizations can accelerate innovation while maintaining stability and operational excellence.'
    },
];

const ServicesDetails = () => {

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
            servicedata.slice(0, showservices ? servicedata.length : 3).map((elm)=> {
                
                return <div className={Styles.serviceCardcon} key={elm.id} onClick={() => setActiveIndex(activeIndex === elm.id ? null : elm.id)}>
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
                            <p className='subp'>{elm.para}</p>
                        </div>)}

                        <div className={Styles.briefservice}>
                            
                        </div>
                    </div> 
        })
        }

        <div className={Styles.showbtn}>
            <button onClick={()=> setShowservices(!showservices)}>Show more</button>
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

    <div className={Styles.serviceinfo}>
        <div>
            <h1>Driving innovation</h1>
            <p className='subp'>At Appsobytes, we are a dynamic IT services company committed to helping startups and small businesses accelerate their growth through cutting-edge technology solutions. Our expertise lies in transforming visionary ideas into high-impact applications that drive efficiency, innovation, and success.</p> <br />
            <p className='subp'>Using agile methodologies, we ensure a streamlined and adaptive development process, delivering robust and scalable applications tailored to our clients' unique needs. From concept to deployment, our team works closely with businesses to turn their ideas into powerful digital solutions.</p> <br />
            {/* <p className='subp'>With a passion for technology and a customer-centric approach, Appsobytes is your trusted partner in building the next generation of innovative applications. Let's create something extraordinary together!</p> */}
        </div>
        <div>
            <img src="images/sr1.jpg" alt="" />
        </div>
    </div>
    </>
  )
}

export default ServicesDetails