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
            <h3 className='gt'>Innovative Web & App Development Solutions Tailored to Your Business Needs</h3>
            <p className={`subp ${Styles.spara}`}>At Appsobytes, we craft custom web and app solutions that drive growth and enhance user experience. Our expert team delivers high-quality, scalable digital products tailored to your business needs."</p>
            <div className={Styles.row}>
                <div data-aos="fade-up" className={Styles.col}>
                    <span><MdWeb /></span>
                    <p>Web Application Developement</p>
                    <p className='subp'>Unlock the full potential of your online presence with our expert web development services.</p>
                </div>
                <div data-aos="fade-down" className={Styles.col}>
                    <span><MdWeb /></span>
                    <p>Mobile Application Developement</p>
                    <p className='subp'>
                    Transform your ideas into innovative, high-performance apps with our comprehensive development services.</p>
                </div>
                
                <div data-aos="fade-down" className={Styles.col}>
                    <span><MdWeb /></span>
                    <p>Digital Transformation</p>
                    <p className='subp'>
                    Elevate your software capabilities with our expert API development services.</p>
                </div>
                <div data-aos="fade-up" className={Styles.col}>
                    <span><MdWeb /></span>
                    <p>IT Consulting</p>
                    <p className='subp'>
                    Elevate your software capabilities with our expert API development services.</p>
                </div>
                <div data-aos="fade-up" className={Styles.col}>
                    <span><MdWeb /></span>
                    <p>Ideation And Design Strategy</p>
                    <p className='subp'>
                    Elevate your software capabilities with our expert API development services.</p>
                </div>
                <div data-aos="fade-down" className={Styles.col}>
                    <span><MdWeb /></span>
                    <p>DevOps</p>
                    <p className='subp'>
                    Elevate your software capabilities with our expert API development services.</p>
                </div>
                <div data-aos="fade-down" className={Styles.col}>
                    <span><MdWeb /></span>
                    <p>Cloud Management Services</p>
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