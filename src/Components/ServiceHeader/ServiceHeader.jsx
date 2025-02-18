import React from 'react'
import Styles from './ServiceHeader.module.css'
import Link from 'next/link'

const ServiceHeader = () => {
  return (
    <>
        <section className={Styles.ServiceHeader}>
            <div>
                <h2>Turning <span style={{color: '#0061ff'}}>Ideas</span> Into <span style={{color: '#0061ff'}}>Impactful</span>Application</h2>
                {/* <p className='subp'>At Appsobytes, we are a dynamic IT services company committed to helping startups and small businesses accelerate their growth through cutting-edge technology solutions. Our expertise lies in transforming visionary ideas into high-impact applications that drive efficiency, innovation, and success.</p> */}
                <Link href="contact">Connect & Discuss</Link>
            </div>
        </section>
    </>
  )
}

export default ServiceHeader