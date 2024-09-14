import React from 'react'
import Styles from './ServiceHeader.module.css'
import Link from 'next/link'

const ServiceHeader = () => {
  return (
    <>
        <section className={Styles.ServiceHeader}>
            <div>
                <h2>You think we <span style={{color: '#0061ff'}}>Develope</span></h2>
                <p>Turn your imagination into code</p>
                <Link href="">Connect & Discuss</Link>
            </div>
        </section>
    </>
  )
}

export default ServiceHeader