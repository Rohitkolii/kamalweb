import React, { useEffect } from 'react'
import Styles from './ServiveCard.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css' 

const ServiveCard = () => {
    useEffect(()=>{
            AOS.init({duration: 1000})
          }, [])
  return (
    <>
        <div id='web' className={Styles.servicecard}>
            <div data-aos="fade-right" className={Styles.col}>
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
            <div data-aos="fade-left" className={Styles.col}>
                <img src="images/web.jpg" alt="" />
            </div>
        </div>
        <p className='subp' style={{ margin: "auto", marginBottom: 100}}>In today’s digital world, a well-designed website is essential for any business looking to grow and succeed. Website development involves creating functional, visually appealing, and user-friendly websites that enhance brand presence and customer engagement. From simple business websites to complex e-commerce platforms, a well-built website ensures seamless navigation, fast performance, and mobile responsiveness. With the right development approach and technologies, businesses can establish credibility, improve customer interaction, and drive conversions.</p>
        
        <div id='app' className={Styles.servicecard} style={{flexDirection: 'row-reverse'}}>
            <div data-aos="fade-left" className={Styles.col}>
                <h2>Mobile Application Developement</h2>
                <p className={Styles.in}>Transforming Ideas into Powerful Apps with AppsoBytes</p>
                <p className='subp'>At AppsoBytes, we specialize in creating innovative, high-performance mobile applications that enhance user experience and drive business growth. Our expert developers harness the latest technologies to build secure, scalable, and feature-rich apps tailored to your unique requirements.</p>

                <div className={Styles.tag}>
                    <p>Custom-Built Apps</p>
                    <p>Cross-Platform Expertise</p>
                    <p>User-Centric Design</p>
                    <p>Scalability & Security</p>
                    <p>Agile Development & Support</p>
                </div>
            </div>

            <div data-aos="fade-right" className={Styles.col}>
                <img src="images/app.jpg" alt="" />
            </div>
        </div>
        <p className='subp' style={{ margin: "auto", marginBottom: 100}}>Mobile application development is the process of creating powerful, user-friendly apps that enhance customer engagement and streamline business operations. With the growing reliance on smartphones, having a well-designed mobile app can give businesses a competitive edge. Whether it’s for iOS, Android, or cross-platform, a well-built app ensures seamless functionality, intuitive design, and top-notch security. From startups to enterprises, mobile apps help businesses connect with their audience, improve efficiency, and drive growth in the digital era.</p>


        <div id='backend' className={Styles.servicecard}>
            <div data-aos="fade-right" className={Styles.col}>
                <h2>Backend Developement</h2>
                <p className={Styles.in}>Powering Scalable & Secure Solutions with AppsoBytes</p>
                <p className='subp'>At AppsoBytes, we specialize in building robust, scalable, and high-performance backend systems that serve as the backbone of your digital applications. Our expert developers ensure seamless data management, API integration, and security, providing a reliable foundation for websites, mobile apps, and enterprise solutions.</p>

                <div className={Styles.tag}>
                    <p>Scalable Architecture</p>
                    <p>Secure & Reliable</p>
                    <p>API-First Approach</p>
                    <p>Optimized Performance</p>
                    <p>Cloud & DevOps Integration </p>
                </div>
            </div>
            <div data-aos="fade-left" className={Styles.col}>
                <img src="images/code.jpg" alt="" />
            </div>
        </div>
        <p className='subp' style={{ margin: "auto", marginBottom: 100}}>Backend development is the foundation of any digital application, ensuring seamless functionality, data processing, and system security. It involves building and maintaining the server, database, and application logic that power websites and mobile apps. A well-structured backend enables smooth communication between the front end and the database, ensuring fast performance, scalability, and security. Whether it's handling user authentication, managing data, or integrating third-party services, a strong backend is essential for delivering a reliable and efficient digital experience.</p>
        
        <div id='cloudanddatabase' className={Styles.servicecard} style={{flexDirection: 'row-reverse'}}>
            <div data-aos="fade-left" className={Styles.col}>
                <h2>Cloud & Database</h2>
                <p className={Styles.in}>nsuring Secure & Scalable Data Management</p>
                <p className='subp'>At AppsoBytes, we provide cutting-edge cloud and database solutions that ensure seamless data management, high availability, and security for your business. Our expertise in cloud computing, database architecture, and optimization helps businesses scale effortlessly while maintaining top-notch performance and reliability.</p>

                <div className={Styles.tag}>
                    <p>Scalable Cloud Infrastructure</p>
                    <p>Robust Database Management</p>
                    <p>High Security & Compliance</p>
                    <p>Optimized Performance</p>
                    <p>Seamless Integration</p>
                </div>
            </div>

            <div data-aos="fade-right" className={Styles.col}>
                <img src="images/data.jpg" alt="" />
            </div>
        </div>
        <p className='subp' style={{ margin: "auto", marginBottom: 100}}>Cloud and database solutions are essential for businesses looking to store, manage, and process data efficiently while ensuring security and scalability. Cloud computing enables seamless access to resources, reducing infrastructure costs and enhancing flexibility. Meanwhile, a well-optimized database ensures fast data retrieval, secure storage, and smooth application performance. Whether it's SQL, NoSQL, or cloud-based databases, businesses rely on these technologies to handle large volumes of data while maintaining reliability, security, and scalability in an ever-evolving digital landscape.</p>

    </>
  )
}

export default ServiveCard