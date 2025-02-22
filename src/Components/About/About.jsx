import React, { useEffect } from 'react'
import Styles from './About.module.css'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css' 

const About = () => {
    useEffect(()=>{
        AOS.init({duration: 2000})
      }, [])
  return (
    <>
        <section className={Styles.aboutcon}>
            <div className={Styles.inneraboutcon}>
                <div className={Styles.col}>
                    <h3 className='gt'>Turning Ideas Into Impactful Apps</h3>
                    <h3 className='gt'>with bestest technology ever!</h3>
                </div>
                <div className={Styles.col}>
                    <p className='subp'>At Appsobytes, we are a dynamic IT services company committed to helping startups and small businesses accelerate their growth through cutting-edge technology solutions. Our expertise lies in transforming visionary ideas into high-impact applications that drive efficiency, innovation, and success.</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default About