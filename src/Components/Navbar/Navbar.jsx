'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Styles from "./Navbar.module.css"
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";


const Navbar = () => {
    const [menu, setmenu] = useState(false)
    useEffect(()=> {
        if(menu ){
            // && document.body.clientWidth <= 550
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
            <div className={Styles.menuheader}>
                <div>
                    <h2>You think we <span style={{color: '#0061ff'}}>Develope</span></h2>
                    <p className='subp'>We ensure to establish websites with the latest trends as we believe that, products whose value satisfies the needs of the market and its potential customers can be efficiently successful.</p>
                </div>
            </div>

            <div className={Styles.menulist}>
                <div className={Styles.menucol}>
                    <p>Quick Links</p>
                    <ul>
                        <Link href="/about">About</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/blogs">Blogs</Link>
                    </ul>
                </div>
                <div className={Styles.menucol}>
                    <p>Quick Links</p>
                    <ul>
                        <Link href="/">Gallary</Link>
                        <Link href="/">Achivements</Link>
                        {/* <Link href="/">Link C</Link>
                        <Link href="/">Link D</Link>
                        <Link href="/">Link E</Link> */}
                    </ul>
                </div>
                <div className={Styles.menucol}>
                    <p>Quick Links</p>
                    <ul>
                        <Link href="/">Link *</Link>
                        <Link href="/">Link -</Link>
                        <Link href="/">Link +</Link>
                        <Link href="/">Link /</Link>
                        <Link href="/">Link ?</Link>
                    </ul>
                </div>
                <div className={Styles.menucol}>
                    <p>Connect</p>
                    <ul>
                        <Link href="/">Facebook</Link>
                        <Link href="/">Instagram</Link>
                        <Link href="/">Linkedin</Link>
                        <Link href="/">Twitter</Link>
                        <Link href="/">Mail</Link>
                    </ul>
                </div>

            </div>
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