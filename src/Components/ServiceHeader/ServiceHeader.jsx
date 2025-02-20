"use client"

import React, { useEffect } from 'react'
import Styles from './ServiceHeader.module.css'
import Link from 'next/link'
import Navbar from '../Navbar/Navbar'
import { FaFacebookSquare, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { GrContact } from 'react-icons/gr'

import AOS from 'aos'
import 'aos/dist/aos.css' 

const ServiceHeader = () => {
  
    useEffect(()=>{
      AOS.init({duration: 2000})
    }, [])

  return (
    <>
        {/* <section className={Styles.ServiceHeader}>
            <div>
                <h2>Turning <span style={{color: '#0061ff'}}>Ideas</span> Into <span style={{color: '#0061ff'}}>Impactful</span>Application</h2>
                <Link href="contact">Connect & Discuss</Link>
            </div>
        </section> */}

<div className={Styles.head}>
                <div className={Styles.glow}></div>
        <Navbar />
        <section className={Styles.header}>
            <div className={Styles.innerheader} data-aos="fade-down">
                <ul style={{zIndex: -9}} className={Styles.dytext}>
                  <li><h2>Website Developement</h2></li>
                  <li><h2>Application Developement</h2></li>
                  <li><h2>Backend</h2></li>
                  <li><h2>Cloud & Database</h2></li>
                </ul>
                <h1>Developement <span style={{color: '#0061ff'}}>Services</span></h1>
                <p>Get your Website & Applications done with our trusted services</p>
                  
                  <div className={Styles.btncon}>
                    {/* <Link href='/services'>Services</Link> */}
                    <Link href='/contact'>Connect -</Link>
                  </div>

            </div>


        </section>
    </div>
    </>
  )
}

export default ServiceHeader