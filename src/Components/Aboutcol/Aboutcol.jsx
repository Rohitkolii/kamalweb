import Link from 'next/link'
import React from 'react'
import Styles from './Aboutcol.module.css'

const Aboutcol = () => {
  return (
    <div style={{margin: '50px 0px'}}>
        <div className={Styles.Aboutinner}>
            <span>About us</span>
            <h3 className='gt'>Know About illusion</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis accusamus, debitis minus repellendus aliquam distinctio.</p>
            <Link href='/'>Discover more</Link>
        </div>
    </div>
  )
}

export default Aboutcol