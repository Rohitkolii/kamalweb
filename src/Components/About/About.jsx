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
                    <img src="images/img2.jpg" alt="" />
                </div>
                <div className={Styles.col}>
                    <h3>Why to choose us for Web & App Developement services?</h3>
                    <p className='subp'>When it comes to web and app development, choosing us means opting for a partner who is deeply committed to your success. We blend cutting-edge technology with creative innovation to deliver solutions that are not only functional but also engaging. Our experienced team of developers and designers takes the time to understand your unique business needs and objectives, ensuring that every project is tailored to meet your specific goals. With a focus on quality, efficiency, and user experience, we guarantee a seamless development process and a final product that stands out in today’s competitive digital landscape. Trust us to turn your vision into a powerful, effective digital presence.</p>
                    {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat impedit molestias, quod, qui ipsam reprehenderit vitae, eaque accusamus ut voluptatibus assumenda iste aliquam. Adipisci commodi ipsam delectus iusto corrupti? Labore.</p> */}
                        <div style={{display:'flex', gap: 20}}>
                            <Link style={{backgroundColor : '#0061FF'}} href='/'>Read More</Link>
                            <Link style={{backgroundColor : '#e62f30'}} href='/'>Connect with us</Link>
                        </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About