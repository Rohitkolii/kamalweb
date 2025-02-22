import React from 'react'
import Styles from './CommonHeader.module.css'
import Link from 'next/link'


const CommonHeader = () => {
  return (
    <>
        <section className={Styles.comHeader}>
            <div>
                <h2>TurningIdeas Into Impactful Application</h2>
                <Link href="contact">Connect & Discuss</Link>
            </div> 
        </section>
    </>
  )
}

export default CommonHeader