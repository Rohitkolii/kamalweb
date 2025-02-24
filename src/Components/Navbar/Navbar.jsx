'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Styles from "./Navbar.module.css"
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { GoPlus } from "react-icons/go";



const Navbar = () => {
    const [menu, setmenu] = useState(false)
    const [widthvalue, setwidthvalue] = useState()
    const [service, setservice] = useState(false)

    useEffect(()=> {
        if(menu ){
            // && document.body.clientWidth <= 550
            document.body.style.overflow = "hidden"
        }else{
            document.body.style.overflow = "visible"
        }
        setwidthvalue(document.body.clientWidth)
    },[menu])

    const Showmenubody = () => {
            return <li onMouseEnter={()=>setmenu(!menu)} onMouseLeave={()=> setmenu(!menu)}><Link href='/services'>Services</Link>
            <div className={menu ? Styles.showservice : Styles.hideservice}>
                <div className={Styles.menuheader}>
                    <div>
                        <h2>Turning <span style={{color: '#0061ff'}}>Ideas</span> Into Impactful <span style={{color: '#0061ff'}}>Apps</span></h2>
                        <p>At AppsoBytes, we turn ideas into powerful, impactful applications that drive success.</p>
                    </div>
                </div>
                <div className={Styles.row}>
                    <div>
                        {/* <img src="images/web.jpg" alt="" /> */}
                        <img src="images/contact.png" alt="" />
                        <p></p>
                        {/* <h1><p><span style={{color: '#0061ff'}}>A</span>ppso<span style={{color: '#0061ff'}}>B</span>ytes<span>.</span></p></h1> */}
                    </div>
                    <div className={Styles.menulist}>
                        <div className={Styles.menucol}>
                            <p><Link href='/services#app'>Mobile Application</Link></p>
                            <ul>
                                <li>Point 1</li>
                                <li>Point 2</li>
                            </ul>
                        </div>

                        <div className={Styles.menucol}>
                            <p><Link href='/services#web'>Website developement</Link></p>
                            <ul>
                                <li>Point 1</li>
                                <li>Point 2</li>
                                <li>Point 3</li>
                            </ul>
                        </div>

                        <div className={Styles.menucol}>
                            <p><Link href='services/#cloud&database'>Cloud & Database</Link></p>
                            <ul>
                                <li>Point 1</li>
                                <li>Point 2</li>
                                <li>Point 3</li>
                            </ul>
                        </div>

                        <div className={Styles.menucol}>
                            <p><Link href='/services#backend'>Backend developement</Link></p>
                            <ul>
                                <li>Point 1</li>
                                <li>Point 2</li>
                            </ul>
                        </div>

                        <div className={Styles.menucol}>
                            <p><Link href='/'>DevOps</Link></p>
                            <ul>
                                <li>Point 1</li>
                                <li>Point 2</li>
                            </ul>
                        </div>

                        <div className={Styles.menucol}>
                            <p><Link href='/'>Digital Transformation</Link></p>
                            <ul>
                                <li>Point 1</li>
                                <li>Point 2</li>
                            </ul>
                        </div>
                        <div className={Styles.menucol}>
                            <p><Link href='/'>IT Consulting</Link></p>
                            <ul>
                                <li>Point 1</li>
                                <li>Point 2</li>
                            </ul>
                        </div>
                        <div className={Styles.menucol}>
                            <p><Link href='/'>Ideation & Design</Link></p>
                            <ul>
                                <li>Point 1</li>
                                <li>Point 2</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </li>
    }

    const Showmobmenu = () => {
        if(widthvalue <= 1200) return <div className={menu ? Styles.showmenu : Styles.hidemenu}>
        <div className={Styles.menuheader}>
            <div>
                <h2>Turning <span style={{color: '#0061ff'}}>Ideas</span> Into Impactful <span style={{color: '#0061ff'}}>Apps</span></h2>
                <p>At AppsoBytes, we turn ideas into powerful, impactful applications that drive success.</p>
            </div>
        </div>
        <div className={Styles.mobmenu}>
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>ABout us</Link><GoPlus /></li>
                <li><Link href='/services'>Services</Link><GoPlus onClick={()=> setservice(!service)}/></li>
                {
                    service ?
                    <div className={Styles.serviceopt}>
                    <Link href='/'>Website Developement</Link>
                    <Link href='/'>Mobile Application</Link>
                    <Link href='/'>Backend Developemet</Link>
                    <Link href='/'>Cloud & Database</Link>
                    <Link href='/'>Digital Transformation</Link>
                    <Link href='/'>DevOps</Link>
                    <Link href='/'>IT Consulting</Link>
                    </div>
                : ''
                }
                <li><Link href='/blogs'>Blogs</Link><GoPlus /></li>
                <li><Link href='/contact'>Contact</Link></li>
            </ul>
        </div>
    </div>
    }

    return (
        <>
        <nav className={Styles.navbar}>
            <div className={Styles.logo}>
                <Link href='/'><p><span style={{color: '#0061ff'}}>A</span>ppso<span style={{color: '#0061ff'}}>B</span>ytes<span>.</span></p></Link>
            </div>

            <div>
                <ul className={Styles.menucon}>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/about'>About us</Link></li>
                    {
                        Showmenubody()
                    }
                    <li><Link href='/'>Blogs</Link></li>
                    <li><Link href='/contact' className={Styles.btn}>Contact</Link></li>
                </ul>
            </div>
            {
                !menu ?
                <li className={Styles.ham} style={{zIndex: 99}}><CiMenuFries onClick={()=> setmenu(!menu)} /></li>
                :
                <li className={Styles.ham} style={{zIndex: 99}}><AiOutlineClose onClick={()=> setmenu(!menu)} /></li>
            }

            {
                Showmobmenu()
            }
        </nav>

        
        {/* {
        menu ?    
        <div onClick={()=> setmenu(!menu)} className='layer'></div>
        :
        ''
        } */}
    </>
  )
}

export default Navbar