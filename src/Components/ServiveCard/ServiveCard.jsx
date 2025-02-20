import React from 'react'
import Styles from './ServiveCard.module.css'
const ServiveCard = () => {
  return (
    <>

        <div className={Styles.servicecard}>
            <div className={Styles.col}>
                <h2>Website Developement</h2>
                <p className={Styles.in}>Elevate Your Digital Presence with AppsoBytes</p>
                <p className='subp'>At AppsoBytes, we specialize in crafting high-performance, user-centric websites tailored to your business needs. Our team of expert developers, designers, and strategists leverage cutting-edge technologies to deliver responsive, scalable, and visually appealing websites that drive engagement and conversions.</p>

                <div className={Styles.tag}>
                    <p>Custom Solutions</p>
                    <p>Latest Technologies</p>
                    <p>SEO & Mobile Optimized</p>
                    <p>Scalability & Flexibility</p>
                    <p>Dedicated Support</p>
                </div>
            </div>
            <div className={Styles.col}>
                <img src="images/code.jpg" alt="" />
            </div>
        </div>
        <p className='subp' style={{width: "95%", margin: "auto", marginBottom: 100}}>In today’s digital world, a well-designed website is essential for any business looking to grow and succeed. Website development involves creating functional, visually appealing, and user-friendly websites that enhance brand presence and customer engagement. From simple business websites to complex e-commerce platforms, a well-built website ensures seamless navigation, fast performance, and mobile responsiveness. With the right development approach and technologies, businesses can establish credibility, improve customer interaction, and drive conversions.</p>
        
        <div className={Styles.servicecard} style={{flexDirection: 'row-reverse'}}>
            <div className={Styles.col}>
                <h2>Mobile Application Developement</h2>
                <p className={Styles.in}>Elevate Your Digital Presence with AppsoBytes</p>
                <p className='subp'>At AppsoBytes, we specialize in creating innovative, high-performance mobile applications that enhance user experience and drive business growth. Our expert developers harness the latest technologies to build secure, scalable, and feature-rich apps tailored to your unique requirements.</p>

                <div className={Styles.tag}>
                    <p>Custom-Built Apps</p>
                    <p>Cross-Platform Expertise</p>
                    <p>User-Centric Design</p>
                    <p>Scalability & Security</p>
                    <p>Agile Development & Support</p>
                </div>
            </div>

            <div className={Styles.col}>
                <img src="images/app.jpg" alt="" />
            </div>
        </div>
        <p className='subp' style={{width: "95%", margin: "auto"}}>Mobile application development is the process of creating powerful, user-friendly apps that enhance customer engagement and streamline business operations. With the growing reliance on smartphones, having a well-designed mobile app can give businesses a competitive edge. Whether it’s for iOS, Android, or cross-platform, a well-built app ensures seamless functionality, intuitive design, and top-notch security. From startups to enterprises, mobile apps help businesses connect with their audience, improve efficiency, and drive growth in the digital era.</p>

    </>
  )
}

export default ServiveCard