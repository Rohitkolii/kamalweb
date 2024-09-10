'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Styles from "./Navbar.module.css"
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";


const Navbar = () => {
    const [menu, setmenu] = useState(false)
    useEffect(()=> {
        if(menu && document.body.clientWidth <= 550){
            document.body.style.overflow = "hidden"
        }else{
            document.body.style.overflow = "visible"
        }
    },[menu])
  return (
    <>
        <nav className={Styles.navbar}>
            <div className={Styles.logo}>
                <Link href='/'><p><span style={{color: '#0061ff'}}>i</span>llusion<span style={{color: '#0061ff'}}>.</span></p></Link>
            </div>
            <div>
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    {
                        !menu ?
                        <li style={{zIndex: 99}}><CiMenuFries onClick={()=> setmenu(!menu)} /></li>
                        :
                        <li style={{zIndex: 99}}><AiOutlineClose onClick={()=> setmenu(!menu)} /></li>
                    }
                    <li><Link href='/contact' className={Styles.btn}>Contact</Link></li>
                </ul>
            </div>
        </nav>

        <div className={menu ? Styles.showmenu : Styles.hidemenu}>
            <ul>
                <li><Link href=''>Home</Link></li>
                <li><Link href=''>About</Link></li>
                <li><Link href=''>Services</Link></li>
                <li><Link href=''>Contact</Link></li>
            </ul>
        </div>
        {
        menu ?    
        <div onClick={()=> setmenu(!menu)} className='layer'></div>
        :
        ''
        }
    </>
  )
}

export default Navbar