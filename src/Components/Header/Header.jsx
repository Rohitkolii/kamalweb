import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Styles from './Header.module.css'
import {FaGithub, FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { GrContact } from "react-icons/gr";



import AOS from 'aos'
import 'aos/dist/aos.css' 
import Link from 'next/link'


const Header = () => {
  useEffect(()=>{
    AOS.init({duration: 2000})
  }, [])
  return (
    <div className={Styles.head}>
                <div className={Styles.glow}></div>
        <Navbar />
        <section className={Styles.header}>
            <div className={Styles.innerheader} data-aos="fade-down">
                <ul style={{zIndex: -9}} className={Styles.dytext}>
                  <li><h2>Web Developement</h2></li>
                  <li><h2>Application Developement</h2></li>
                  <li><h2>Api's Creation</h2></li>
                  <li><h2>Backend Developement</h2></li>
                </ul>
                <h1>Web & App <span style={{color: '#0061ff'}}>Developement</span> Agency</h1>
                <p>Get your Website & Applications done with our trusted services</p>
                  
                  <div className={Styles.btncon}>
                    <Link href='/services'>Services</Link>
                    <Link href='/contact'>Connect -</Link>
                  </div>

                  <div data-aos="fade-down" className={Styles.socials}>
                    <ul>
                      <li><Link href='/'><FaInstagram /></Link></li>
                      <li><Link href='/'><FaLinkedin /></Link></li>
                      <li><Link href='/'><FaGithub /></Link></li>
                      <li><Link href='/'><FaFacebookSquare /></Link></li>
                      <li><Link href='/'><GrContact /></Link></li>
                    </ul>
                  </div>

            </div>

            <div className={Styles.imgcol}><img src="images/h.svg" alt="" /></div>


        </section>
    </div>
  )
}

export default Header