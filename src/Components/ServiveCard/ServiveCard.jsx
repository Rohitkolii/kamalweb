'use client'
import React, { useEffect } from 'react'
import Styles from './ServiveCard.module.css'
import { MdOutlineWeb } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

import AOS from 'aos'
import 'aos/dist/aos.css' 
const ServiveCard = ({setShowservices, showservices, elm}) => {
   
  return (
    <>
        <div className={Styles.serviceCardcon} onClick={()=> setShowservices(!showservices)}>
            <div className={Styles.serviceCard}>
                <div>
                    <p><MdOutlineWeb />{elm.headline}</p>
                    <p className='subp'>{elm.tagline}</p>
                </div>
                {!showservices ?
                    <div>
                        <FaArrowRightLong />
                    </div>
                : ''}
            </div>

            <div className={showservices ? Styles.showservice : Styles.hideservice}>
                <p className='subp'>{elm.para}</p>
            </div>
        </div>
    </>
  )
}

export default ServiveCard