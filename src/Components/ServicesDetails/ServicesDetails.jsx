'use client'
import React, { useState } from 'react'
import Styles from './ServicesDetails.module.css'
import Link from 'next/link'
import ServiveCard from '../ServiveCard/ServiveCard'
const ServicesDetails = () => {

    const sections = {
        web : 'Web Developement',
        app : 'App Developement',
        backend : 'Backend',
        cloudanddatabase : "Cloud & Database",
    }

    const [activeSection, setActiveSection] = useState(Object.keys(sections)[0])


    const [showdetail, setshowdetail] = useState(false);

  return (
    <>

    <div style={{width: '90%', margin: ' 20px auto'}}>
        {/* <div className={Styles.hrglow}></div> */}
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
        
        <div onClick={()=> setshowdetail(!showdetail)} className={Styles.ServicesDetails}>
            {/* <ServiveCard /> */}
        </div>
        
        {/* <div onClick={()=> setshowdetail(!showdetail)} className={Styles.ServicesDetails}>
            <ServiveCard />
        </div> */}

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