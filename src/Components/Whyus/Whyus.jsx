import React from 'react'
import Styles from './Whyus.module.css'
import { GrWaypoint } from 'react-icons/gr'
const Whyus = () => {
  return (
    <div className={Styles.whyus}>
        <div className={Styles.inwhy}>
            <h1 className='gt'>why to choose us</h1>
            <p className='subp'>At AppsoBytes, we deliver innovative, scalable, and secure digital solutions tailored to your business needs. With expert developers, a client-first approach, and a commitment to quality, we ensure long-term success. Let’s build something amazing together! 🚀</p>

            <div className={Styles.whypoints}>
                <div>
                    <h3><GrWaypoint />Expert Team</h3>
                    <p className='subp'>A team of professionals with deep expertise in the latest technologies.</p>
                </div>
                <div>
                    <h3><GrWaypoint />Client-Centric Approach</h3>
                    <p className='subp'>We focus on understanding and fulfilling your unique business needs.</p>
                </div>
                <div>
                    <h3><GrWaypoint />End-to-End Solutions</h3>
                    <p className='subp'>From concept to deployment, we provide comprehensive digital solutions.</p>
                </div>
                <div>
                    <h3><GrWaypoint />Quality & Security</h3>
                    <p className='subp'>Ensuring high-performance, security, and scalability in all our projects.</p>
                </div>
                <div>
                    <h3><GrWaypoint />Long-Term Support</h3>
                    <p className='subp'>We don’t just build; we support and maintain for long-term success.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Whyus