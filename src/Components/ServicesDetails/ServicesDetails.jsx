'use client'
import React, { useState } from 'react'
import Styles from './ServicesDetails.module.css'
import Link from 'next/link'
const ServicesDetails = () => {

    const sections = {
        web : 'Web Developement',
        app : 'App Developement',
        backend : 'Backend Developement',
        api : "Api's",
        others : 'others',
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
            <h2 id='web'>Web Developement</h2>
            <p className='subp'>Our web development service is designed to bring your online vision to life with cutting-edge technology and creative solutions. We specialize in building responsive, user-friendly websites that offer seamless navigation, enhanced performance, and a professional online presence. Whether you're launching a new website or enhancing an existing one, we provide end-to-end services, from concept design and coding to testing and deployment. Our team stays updated with the latest web development trends, ensuring your site is fast, secure, and optimized for all devices. With a focus on delivering tailored solutions, we help businesses grow their digital footprint effectively.</p>
        </div>

        <div onClick={()=> setshowdetail(!showdetail)} className={Styles.ServicesDetails}>
            <h2 id='app'>App Developement</h2>
            <p className='subp'>Our app development service is designed to transform your ideas into powerful, user-friendly mobile applications. With expertise across multiple platforms, including iOS and Android, we create apps that are visually engaging, highly functional, and optimized for performance. Whether you're looking for a simple app to enhance customer engagement or a complex solution to streamline operations, our team ensures seamless integration with your business goals. From concept to deployment, we focus on innovation, security, and scalability, delivering apps that not only meet today’s demands but are also built for the future.</p>
        </div>
        
        <div onClick={()=> setshowdetail(!showdetail)} className={Styles.ServicesDetails}>
            <h2 id='backend'>Backend Developement</h2>
            <p className='subp'>Our web development service is designed to bring your online vision to life with cutting-edge technology and creative solutions. We specialize in building responsive, user-friendly websites that offer seamless navigation, enhanced performance, and a professional online presence. Whether you're launching a new website or enhancing an existing one, we provide end-to-end services, from concept design and coding to testing and deployment. Our team stays updated with the latest web development trends, ensuring your site is fast, secure, and optimized for all devices. With a focus on delivering tailored solutions, we help businesses grow their digital footprint effectively.</p>
        </div>

        <div onClick={()=> setshowdetail(!showdetail)} className={Styles.ServicesDetails}>
            <h2 id='api'>Api's</h2>
            <p className='subp'>Our app development service is designed to transform your ideas into powerful, user-friendly mobile applications. With expertise across multiple platforms, including iOS and Android, we create apps that are visually engaging, highly functional, and optimized for performance. Whether you're looking for a simple app to enhance customer engagement or a complex solution to streamline operations, our team ensures seamless integration with your business goals. From concept to deployment, we focus on innovation, security, and scalability, delivering apps that not only meet today’s demands but are also built for the future.</p>
        </div>
        
        <div onClick={()=> setshowdetail(!showdetail)} className={Styles.ServicesDetails}>
            <h2 id='web'>Database</h2>
            <p className='subp'>Our app development service is designed to transform your ideas into powerful, user-friendly mobile applications. With expertise across multiple platforms, including iOS and Android, we create apps that are visually engaging, highly functional, and optimized for performance. Whether you're looking for a simple app to enhance customer engagement or a complex solution to streamline operations, our team ensures seamless integration with your business goals. From concept to deployment, we focus on innovation, security, and scalability, delivering apps that not only meet today’s demands but are also built for the future.</p>
        </div>
    </div>
  )
}

export default ServicesDetails