import Link from 'next/link'
import React from 'react'
import Styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <>
    <div style={{backgroundColor: 'black', height: 35, color: 'white', fontSize : 15, display : 'flex', justifyContent: 'space-between' , alignItems: 'center', padding: "0px  50px"}}>
        <p>example@gmail.com</p>
        <p>+91 9889988998</p>
    </div>
        <nav className={Styles.navbar}>
            <div className={Styles.logo}>
                <p>illusion</p>
            </div>
            <div>
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li>| | |</li>
                    <li><Link href='/contact' className={Styles.btn}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar