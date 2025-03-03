import Link from 'next/link';
import Styles from './Footer.module.css'
import {FaFacebookF, FaLinkedinIn, FaRegCopyright, FaYoutube } from 'react-icons/fa'
import {FaXTwitter, FaInstagram   } from 'react-icons/fa6'

const Footer = () => {
    return(
        <div className={Styles.Footer}>
            <div className={Styles.innerFooter}>
                <div className={Styles.Footer1}>
                    <div className={Styles.Footerform}>
                        <h2><span style={{color: '#0061ff'}}>A</span>ppso<span style={{color: '#0061ff'}}>B</span>yte<span>.</span></h2>
                        <p>Turning Ideas Into Impactful Apps</p>
                            <div className={Styles.sociallinks}>
                                <p><Link href='/' ><FaFacebookF /></Link></p>
                                <p><Link href='/' ><FaXTwitter  /></Link></p>
                                <p><Link href='/' ><FaLinkedinIn /></Link></p>
                                <p><Link href='https://www.instagram.com/appsobytes' ><FaInstagram /></Link></p>
                            </div>
                    </div>

                    {/* <div className={Styles.Footeraddress}> */}
                    {/* <div className={Styles.Footerlink}>
                        <h2>Services</h2>
                        <Link href='/' >Web Developement</Link>
                        <Link href='/' >App Developement</Link>
                        <Link href='/' >Backend</Link>
                        <Link href='/' >Cloud & Database</Link>
                    </div> */}
                    <div className={Styles.Footerlink}>
                        <h2>Services</h2>
                        <Link href='/services/websitedevelopement' >Web Developement</Link>
                        <Link href='/services/applicationdevelopement' >App Developement</Link>
                        <Link href='/services/backenddevelopement' >Backend</Link>
                        <Link href='/services/cloudanddatabase' >Cloud & Database</Link>
                        <Link href='/services/itconsulting' >IT Consulting</Link>
                        <Link href='/services/devops' >DevOps</Link>
                    </div>


                    <div className={Styles.Footerlink}>
                        <h2>Industries</h2>
                        <li>IT</li>
                        <li>Social Meadia</li>
                        <li>ECommerce</li>
                        <li>Education</li>
                        <li>Entertainment</li>
                    </div>
                    
                    <div className={Styles.Footercategories}>
                        <h2>Navigations</h2>
                            <div className={Styles.footercategoriesinner}>
                                <Link href='/about' >About us</Link>
                                <Link href='/contact' >Contact</Link>
                                <Link href='/services' >Services</Link>
                                <Link href='/' >Blogs</Link>
                            </div>

                            {/* <div className={Styles.footercategoriesinner}>
                                <Link href='/' >Gallary</Link>
                                <Link href='/' >Achievements</Link>
                            </div> */}
                    </div>
                </div>
{/* 
                <div className={Styles.Footer2}>
                    <div className={Styles.sociallinks}>
                        <p><Link href='/' ><FaFacebookF /></Link></p>
                        <p><Link href='/' ><FaXTwitter  /></Link></p>
                        <p><Link href='/' ><FaLinkedinIn /></Link></p>
                        <p><Link href='/' ><FaInstagram /></Link></p>
                    </div>

                    <div className={Styles.paymentmode}>
                        <p>Google</p>
                        <p>Wipro</p>
                        <p>Infosys</p>
                        <p>Me</p>
                        <p>You</p>
                    </div>
                
                </div> */}


                <div className={Styles.Footer3}>
                    <div className={Styles.copyright}>
                        <p>All right reserved <Link href='/' > AppsoBytes </Link><FaRegCopyright /> 2025</p>
                    </div>
                    <div className={Styles.policylinks}>
                        <ul>
                            <li><Link href='/terms&condition'>Terms and Condition</Link></li>
                            <li><Link href='/privacypolicy'>Privacy Policy</Link></li>
                            <li><Link href='/sitemap'>Sitemap</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;