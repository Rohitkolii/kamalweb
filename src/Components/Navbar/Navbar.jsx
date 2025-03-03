'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Styles from "./Navbar.module.css"
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { GoPlus } from "react-icons/go";



const Navbar = () => {
    const [menu, setmenu] = useState(false)
    const [servicemenu, setservicemenu] = useState(false)
    const [widthvalue, setwidthvalue] = useState()
    const [service, setservice] = useState(false)

    useEffect(()=> {
        if(menu || servicemenu ){
            // && document.body.clientWidth <= 550
            document.body.style.overflow = "hidden"
        }else{
            document.body.style.overflow = "visible"
        }
        setwidthvalue(document.body.offsetWidth)

        
    },[menu, widthvalue, servicemenu])
    // console.log(widthvalue);

    const Showmenubody = () => {
            return <li onMouseEnter={()=>setservicemenu(true)} onMouseLeave={()=> setservicemenu(false)}><Link href='/services'>Services</Link>
            <div className={servicemenu ? Styles.showservice : Styles.hideservice}>
                <div className={Styles.menuheader}>
                    <div>
                        <h2 style={{color: '#0061ff'}}>Turning Ideas Into Impactful Apps</h2>
                        <p>At AppsoBytes, we turn ideas into powerful, impactful applications that drive success.</p>
                    </div>
                </div>
                <div className={Styles.row}>
                    <div>
                        {/* <img src="images/web.jpg" alt="" /> */}
                        <img src={"images/contact.png" && "../../images/contact.png"} alt="" />
                        <p></p>
                        {/* <h1><p><span style={{color: '#0061ff'}}>A</span>ppso<span style={{color: '#0061ff'}}>B</span>ytes<span>.</span></p></h1> */}
                    </div>
                    <div className={Styles.menulist}>
                        <div className={Styles.menucol}>
                            <p><Link href='/services/applicationdevelopement'>Mobile Application</Link></p>
                            <ul>
                                <li>iOS App</li>
                                <li>Android App</li>
                                <li>Hybrid App</li>
                                <li>App UI/UX Design</li>
                            </ul>
                        </div>

                        <div className={Styles.menucol}>
                            <p><Link href='/services/websitedevelopement'>Website developement</Link></p>
                            <ul>
                                <li>Custom Website</li>
                                <li>E-commerce</li>
                                <li>CMS Development</li>
                            </ul>
                        </div>

                        <div className={Styles.menucol}>
                            <p><Link href='/services/cloudanddatabase'>Cloud & Database</Link></p>
                            <ul>
                                <li>Cloud Hosting Services</li>
                                <li>Database Management</li>
                                <li>Database Design & Optimization</li>
                                <li>Cloud Storage Solutions</li>
                            </ul>
                        </div>

                        <div className={Styles.menucol}>
                            <p><Link href='/services/backenddevelopement'>Backend developement</Link></p>
                            <ul>
                                <li>Custom Backend</li>
                                <li>API Development & Integration</li>
                                <li>Server-Side Scripting</li>
                                <li>Payment Gateway Integration</li>
                            </ul>
                        </div>

                        <div className={Styles.menucol}>
                            <p><Link href='/services/devops'>DevOps</Link></p>
                            <ul>
                                <li>CI/CD Pipeline Implementation</li>
                                <li>Infrastructure as Code</li>
                                <li>Containerization</li>
                            </ul>
                        </div>

                        <div className={Styles.menucol}>
                            <p><Link href='/'>Digital Transformation</Link></p>
                            <ul>
                                <li>Business Process Automation</li>
                                <li>Digital Strategy & Roadmap</li>
                            </ul>
                        </div>
                        <div className={Styles.menucol}>
                            <p><Link href='/services/itconsulting'>IT Consulting</Link></p>
                            <ul>
                                <li>Digital Transformation Strategy</li>
                                <li>IT Infrastructure Assessment</li>
                                <li>Software Architecture Consulting</li>
                                <li>IT Support & Managed Services</li>
                                <li>Technology Roadmap Planning</li>
                            </ul>
                        </div>
                        <div className={Styles.menucol}>
                            <p><Link href='/'>Ideation & Design</Link></p>
                            <ul>
                                <li>UI/UX Design & User Research</li>
                                <li>Product Design Strategy</li>
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
                <li><Link href='/about'>ABout us</Link></li>
                <li><Link href='/services'>Services</Link><GoPlus onClick={()=> setservice(!service)}/></li>
                {
                    service ?
                    <div className={Styles.serviceopt}>
                    <Link href='/services/websitedevelopement'>Website Developement</Link>
                    <Link href='/services/applicationdevelopement'>Mobile Application</Link>
                    <Link href='/services/backenddevelopement'>Backend Developemet</Link>
                    <Link href='/services/cloudanddatabase'>Cloud & Database</Link>
                    {/* <Link href='services/'>Digital Transformation</Link> */}
                    <Link href='/services/devops'>DevOps</Link>
                    <Link href='/services/itconsulting'>IT Consulting</Link>
                    </div>
                : ''
                }
                <li><Link href='/blogs'>Blogs</Link></li>
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
                    {/* <li><Link href='/'>Home</Link></li> */}
                    <li><Link href='/about'>About us</Link></li>
                    {
                        Showmenubody()
                    }
                    <li><Link href='/blogs'>Blogs</Link></li>
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