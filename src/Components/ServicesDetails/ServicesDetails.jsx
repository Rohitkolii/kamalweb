'use client'
import React, { useState } from 'react'
import Styles from './ServicesDetails.module.css'
import Link from 'next/link'
import ServiveCard from '../ServiveCard/ServiveCard'

import { MdOutlineWeb } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";


const ServicesDetails = () => {

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

        <div className={Styles.serviceCard}>
            <div>
                <p><MdOutlineWeb />Website developement</p>
                <p className='subp'>Crafting responsive, user-friendly, and engaging websites that enhance brand presence.</p>
            </div>

            <div>
                <FaArrowRightLong />
            </div>
        </div>

        <div className={Styles.serviceCard}>
            <div>
                <p><MdOutlineWeb />Mobile Application</p>
                <p className='subp'>Crafting responsive, user-friendly, and engaging websites that enhance brand presence.</p>
            </div>

            <div>
                <FaArrowRightLong />
            </div>
        </div>

        <div className={Styles.serviceCard}>
            <div>
                <p><MdOutlineWeb />Backend developement</p>
                <p className='subp'>Crafting responsive, user-friendly, and engaging websites that enhance brand presence.</p>
            </div>

            <div>
                <FaArrowRightLong />
            </div>
        </div>

        <div className={Styles.serviceCard}>
            <div>
                <p><MdOutlineWeb />Cloud & Database</p>
                <p className='subp'>Crafting responsive, user-friendly, and engaging websites that enhance brand presence.</p>
            </div>

            <div>
                <FaArrowRightLong />
            </div>
        </div>

        {/* <div className={Styles.serviceCard}>
            <div>
                <p><MdOutlineWeb />DevOps</p>
                <p className='subp'>Crafting responsive, user-friendly, and engaging websites that enhance brand presence.</p>
            </div>

            <div>
                <FaArrowRightLong />
            </div>
        </div> */}

        <div className={Styles.showbtn}>
            <button>Show more</button>
        </div>
    </div>

    <div className={Styles.stepcon}>
            <div className={Styles.innerstepcon}>
                <h1 className='gt'>How your work done insimple steps</h1>
                <div className={Styles.gridcon}>
                    <div>
                        <h1>01</h1>
                        <p>Get Requirement</p>
                        <p className='subp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat itaque voluptates alias neque veniam perspiciatis?</p>
                    </div>
                    <div>
                        <h1>02</h1>
                        <p>Plan & Design</p>
                        <p className='subp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat itaque voluptates alias neque veniam perspiciatis?</p>
                    </div>
                    <div>
                        <h1>03</h1>
                        <p>Developement</p>
                        <p className='subp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat itaque voluptates alias neque veniam perspiciatis?</p>
                    </div>
                    <div>
                        <h1>04</h1>
                        <p>Testing</p>
                        <p className='subp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat itaque voluptates alias neque veniam perspiciatis?</p>
                    </div>
                </div>
            </div>
    </div>

    <div className={Styles.serviceinfo}>
        <div>
            <h1>Driving innovation</h1>
            <p className='subp'>At Appsobytes, we are a dynamic IT services company committed to helping startups and small businesses accelerate their growth through cutting-edge technology solutions. Our expertise lies in transforming visionary ideas into high-impact applications that drive efficiency, innovation, and success.</p> <br />
            <p className='subp'>Using agile methodologies, we ensure a streamlined and adaptive development process, delivering robust and scalable applications tailored to our clients' unique needs. From concept to deployment, our team works closely with businesses to turn their ideas into powerful digital solutions.</p> <br />
            <p className='subp'>With a passion for technology and a customer-centric approach, Appsobytes is your trusted partner in building the next generation of innovative applications. Let's create something extraordinary together!</p>
        </div>
        <div>
            <img src="images/web.jpg" alt="" />
        </div>
    </div>
    </>
  )
}

export default ServicesDetails