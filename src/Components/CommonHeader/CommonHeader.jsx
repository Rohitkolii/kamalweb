'use client'
import React, { useEffect } from 'react'
// import Styles from './CommonHeader.module.css'
import Styles from './CommonHeader.module.css'
import Link from 'next/link'
import Navbar from '../Navbar/Navbar'

import AOS from 'aos'
import 'aos/dist/aos.css' 

const CommonHeader = (headdata) => {
  useEffect(()=>{
        AOS.init({duration: 2000})
      }, [])
  return (
    <>
        {/* <section className={Styles.comHeader}>
            <div>
                <h2>Turning Ideas Into Impactful Application</h2>
                <p className='subp'>At AppsoBytes, we turn ideas into powerful, impactful applications that drive success.</p>
                <Link href="contact">Connect & Discuss</Link>
            </div> 
        </section> */}
        <div className={Styles.head}>
          <Navbar />
          <section className={Styles.header}>
              <div className={Styles.innerheader} data-aos="fade-down">
                  <h1>{headdata.headdata.t1} <span style={{color: '#0061ff'}}>{headdata.headdata.t2}</span></h1>
                  <p>{headdata.headdata.para}</p>
                    
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

export default CommonHeader