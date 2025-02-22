import React from 'react'
import Styles from './Whyus.module.css'
import { GrUserExpert, GrWaypoint } from 'react-icons/gr'
import { MdGroups, MdSecurity } from 'react-icons/md'
import { AiOutlineSolution } from 'react-icons/ai'
import {BiSupport} from 'react-icons/bi'

const Whyus = () => {
  return (
    <div className={Styles.whyus}>
        <div className={Styles.inwhy}>
            <h1 className='gt'>Why to choose us</h1>
            <p className='subp'>At AppsoBytes, we deliver innovative, scalable, and secure digital solutions tailored to your business needs. With expert developers, a client-first approach, and a commitment to quality, we ensure long-term success. Let’s build something amazing together! 🚀</p>

            <div className={Styles.whypoints}>
                <div>
                    <h3><MdGroups />Expert Team</h3>
                    <p className='subp'>A team of professionals with deep expertise in the latest technologies.</p>
                </div>
                <div>
                    <h3><GrUserExpert />Client-Centric Approach</h3>
                    <p className='subp'>We focus on understanding and fulfilling your unique business needs.</p>
                </div>
                <div>
                    <h3><AiOutlineSolution />End-to-End Solutions</h3>
                    <p className='subp'>From concept to deployment, we provide comprehensive digital solutions.</p>
                </div>
                <div>
                    <h3><MdSecurity />Quality & Security</h3>
                    <p className='subp'>Ensuring high-performance, security, and scalability in all our projects.</p>
                </div>
                <div>
                    <h3><BiSupport />Long-Term Support</h3>
                    <p className='subp'>We don’t just build; we support and maintain for long-term success.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Whyus