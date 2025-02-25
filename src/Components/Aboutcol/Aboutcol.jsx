import Link from 'next/link'
import React from 'react'
import Styles from './Aboutcol.module.css'

const Aboutcol = () => {
  return (
    <div style={{margin: '50px 0px'}}>
        <div className={Styles.Aboutinner}>
            {/* <span>About us</span> */}
            {/* <img src="images/team.jpg" alt="" /> */}
            <img src="images/sr4.jpg" alt="" />
            <h3 className='gt'>Who We Are</h3>
            <p className='subp'>Founded with a bold vision to revolutionize the tech industry, AppsoBytes brings together a team of highly skilled developers, creative designers, and strategic thinkers who are passionate about building innovative, scalable, and secure digital solutions. Our expertise spans across various industries, enabling us to empower businesses of all sizes—from ambitious startups to established enterprises—by providing them with the tools and technology needed to thrive in an ever-evolving digital landscape. </p>
            <p className='subp'>At AppsoBytes, we go beyond just development; we act as a strategic technology partner, guiding businesses through the complexities of digital transformation with confidence.</p>
        </div>
    </div>
  )
}

export default Aboutcol