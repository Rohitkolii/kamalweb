import React from 'react'
import Styles from './CommonHeader.module.css'
import Link from 'next/link'


const CommonHeader = () => {
  return (
    <>
        <section className={Styles.comHeader}>
            <div>
                <h2>Turning Ideas Into Impactful Application</h2>
                <p className='subp'>At AppsoBytes, we turn ideas into powerful, impactful applications that drive success.</p>
                <Link href="contact">Connect & Discuss</Link>
            </div> 
        </section>
    </>
  )
}

export default CommonHeader