import React, { useEffect } from 'react'
import Styles from './Services.module.css'
import { MdWeb } from "react-icons/md";
import { MdAppShortcut } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import { TbBasketCode } from "react-icons/tb";
import Link from 'next/link';
import AOS from 'aos'
import 'aos/dist/aos.css' 

const Services = () => {
    useEffect(()=>{
        AOS.init({duration: 1000})
      }, [])
  return (
    <>
        <section className={Styles.Services}>
            <h3>Valuable Services that our company provides to their customers</h3>
            <p className='subp'>Hey, Illusion.com provides website developement, App developement, api's and many more services to make your bussiness live.</p>
            <div className={Styles.row}>
                <div data-aos="fade-up" className={Styles.col}>
                    <span><MdWeb /></span>
                    <p>Web Developement</p>
                    <p className='subp'>Unlock the full potential of your online presence with our expert web development services.</p>
                </div>
                <div data-aos="fade-down" className={Styles.col}>
                    <span><MdWeb /></span>
                    <p>App Developement</p>
                    <p className='subp'>
                    Transform your ideas into innovative, high-performance apps with our comprehensive development services.</p>
                </div>
                <div data-aos="fade-up" className={Styles.col}>
                    <span><MdWeb /></span>
                    <p>Api's</p>
                    <p className='subp'>
                    Elevate your software capabilities with our expert API development services.</p>
                </div>
                <div data-aos="fade-down" className={Styles.col}>
                    <span><MdWeb /></span>
                    <p>Software Developement</p>
                    <p className='subp'>
                    Elevate your software capabilities with our expert API development services.</p>
                </div>
                <div data-aos="fade-up" className={Styles.col}>
                    <span><MdWeb /></span>
                    <p>Backend Developement</p>
                    <p className='subp'>
                    Elevate your software capabilities with our expert API development services.</p>
                </div>
                <div data-aos="fade-down" className={Styles.col}>
                    <span><MdWeb /></span>
                    <p>Backend Developement</p>
                    <p className='subp'>
                    Elevate your software capabilities with our expert API development services.</p>
                </div>
                <div data-aos="fade-up" className={Styles.col}>
                    <span><MdWeb /></span>
                    <p>Backend Developement</p>
                    <p className='subp'>
                    Elevate your software capabilities with our expert API development services.</p>
                </div>
                <div data-aos="fade-down" className={Styles.col}>
                    <span><MdWeb /></span>
                    <p>Other Services</p>
                    <p className='subp'>Enhance your operations with our comprehensive IT and technology services.</p>
                    <Link href='/services'>More services</Link>
                </div>
            </div>
        </section>
    </>
  )
}

export default Services