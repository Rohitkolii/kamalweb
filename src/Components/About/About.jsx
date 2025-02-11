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
                    {/* <img src="images/team.jpg" alt="" /> */}
                    <h3 className='gt'>Why to choose us for Web & App Developement services?</h3>
                </div>
                <div className={Styles.col}>
                    {/* <h3 className='gt'>Why to choose us for Web & App Developement services?</h3> */}
                    <p className='subp'>At Appsobytes, we are a dynamic IT services company committed to helping startups and small businesses accelerate their growth through cutting-edge technology solutions. Our expertise lies in transforming visionary ideas into high-impact applications that drive efficiency, innovation, and success.</p>
                    <p className='subp'>Using agile methodologies, we ensure a streamlined and adaptive development process, delivering robust and scalable applications tailored to our clients' unique needs. From concept to deployment, our team works closely with businesses to turn their ideas into powerful digital solutions.</p>
                        {/* <div style={{display:'flex', gap: 20}}>
                            <Link style={{backgroundColor : '#0061FF'}} href='/about'>Read More</Link>
                            <Link style={{backgroundColor : '#e62f30'}} href='/contact'>Connect with us</Link>
                        </div> */}
                </div>
            </div>
        </section>
    </>
  )
}

export default About