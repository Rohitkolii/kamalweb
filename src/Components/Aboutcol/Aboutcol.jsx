import Link from 'next/link'
import React from 'react'
import Styles from './Aboutcol.module.css'

const Aboutcol = () => {
  return (
    <div style={{margin: '50px 0px'}}>
        <div className={Styles.Aboutinner}>
            {/* <span>About us</span> */}
            <img src="images/team.jpg" alt="" />
            <h3 className='gt'>Who We Are</h3>
            <p className='subp'>Founded with a vision to revolutionize the tech industry, AppsoBytes is a team of highly skilled developers, designers, and strategists dedicated to delivering scalable, secure, and performance-driven solutions. We work with businesses of all sizes, from startups to enterprises, helping them navigate the digital landscape with confidence.</p>
            {/* <Link href='/'>Discover more</Link> */}
        </div>
    </div>
  )
}

export default Aboutcol