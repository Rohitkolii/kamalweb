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
        {/* Prop Named "headdata" will recieve data from other component to replact in that compnent */}
        <div className={Styles.head}>
          <Navbar />
          <section className={Styles.header}>
              <div className={Styles.innerheader} data-aos="fade-down">
                  <h1>{headdata.headdata.t1} <span style={{color: '#0061ff'}}>{headdata.headdata.t2}</span></h1>
                  <p>{headdata.headdata.para}</p>
                    
                    <div className={Styles.btncon}>
                      <Link href='/contact'>Connect -</Link>
                    </div>
              </div>

          </section>
      </div>
    </>
  )
}

export default CommonHeader