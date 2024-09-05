'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Styles from "./Navbar.module.css"
import { CiMenuFries } from "react-icons/ci";


const Navbar = () => {
    const [menu, setmenu] = useState(false)
  return (
    <>
        <nav className={Styles.navbar}>
            <div className={Styles.logo}>
                <Link href='/'><p><span style={{color: '#0061ff'}}>i</span>llusion<span style={{color: '#0061ff'}}>.</span></p></Link>
            </div>
            <div>
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li><CiMenuFries onClick={()=> setmenu(!menu)} /></li>
                    <li><Link href='/contact' className={Styles.btn}>Contact</Link></li>
                </ul>
            </div>
        </nav>

        <div className={menu ? Styles.showmenu : Styles.hidemenu}>

        </div>
    </>
  )
}

export default Navbar