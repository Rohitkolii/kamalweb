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
      <div className={Styles.head}>
                  {/* <div className={Styles.glow}></div> */}
          <Navbar />
          <section className={Styles.header}>
              <div className={Styles.innerheader} data-aos="fade-down">
                  <h1>Our <span style={{color: '#0061ff'}}>Services</span></h1>
                  <p>Get your Website & Applications done with our trusted services</p>
                    
                    <div className={Styles.btncon}>
                      <Link href='/contact'>Connect -</Link>
                    </div>
              </div>

          </section>
      </div>
    </>
  )
}

export default ServiceHeader