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
        api : "Cloud & Database",
    }

    const [activeSection, setActiveSection] = useState(Object.keys(sections)[0])


    const [showdetail, setshowdetail] = useState(false);

  return (
    <div style={{width: '90%', margin: ' 20px auto'}}>
        
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
            <ServiveCard />
        </div>
        
        {/* <div onClick={()=> setshowdetail(!showdetail)} className={Styles.ServicesDetails}>
            <ServiveCard />
        </div> */}

    </div>
  )
}

export default ServicesDetails