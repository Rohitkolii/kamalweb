import Link from 'next/link';
import Styles from './Footer.module.css'
import {FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import {FaXTwitter, FaInstagram   } from 'react-icons/fa6'

const Footer = () => {
    return(
        <div className={Styles.Footer}>
            <div className={Styles.innerFooter}>
                <div className={Styles.Footer1}>
                    <div className={Styles.Footerform}>
                        <h2><span style={{color: '#0061ff'}}>A</span>ppso<span style={{color: '#0061ff'}}>B</span>yte<span>.</span></h2>
                        <p>Turning Ideas Into Impactful Apps</p>
                        {/* <input type="email" placeholder='Your email here' /> */}
                    </div>
                    {/* <div className={Styles.Footeraddress}>
                        <h2>Address</h2>
                        <p>20, Awesome Road, <br /> New Delhi, 532C</p>
                        <p> &#9990; +91 9999888852</p>
                        <p>contact@illusion.com</p>
                    </div> */}


                    <div className={Styles.Footerlink}>
                        <h2>Social Links</h2>
                        <Link href='/' >Twitter</Link>
                        <Link href='/' >Linkedin</Link>
                        <Link href='/' >Instagram</Link>
                        <Link href='/' >Facebook</Link>
                    </div>
                    
                    <div className={Styles.Footercategories}>
                        <h2>Useful Links</h2>
                            <div className={Styles.footercategoriesinner}>
                                <Link href='/' >Home</Link>
                                <Link href='/' >About us</Link>
                                <Link href='/' >Contact us</Link>
                                <Link href='/' >Services</Link>
                            </div>
                            <div className={Styles.footercategoriesinner}>
                                <Link href='/' >Blogs</Link>
                                <Link href='/' >Gallary</Link>
                                <Link href='/' >Achievements</Link>
                            </div>
                    </div>
                </div>

                <div className={Styles.Footer2}>
                    <div className={Styles.sociallinks}>
                        <p><Link href='/' ><FaFacebookF /></Link></p>
                        <p><Link href='/' ><FaXTwitter  /></Link></p>
                        <p><Link href='/' ><FaLinkedinIn /></Link></p>
                        <p><Link href='/' ><FaInstagram /></Link></p>
                    </div>

                    {/* <div className={Styles.paymentmode}>
                        <p>Google</p>
                        <p>Wipro</p>
                        <p>Infosys</p>
                        <p>Me</p>
                        <p>You</p>
                    </div> */}
                
                </div>
                <div className={Styles.Footer3}>
                    <div className={Styles.copyright}>
                        <p>All right reserved <Link href='/' > AppsoBytes </Link>c 2024</p>
                    </div>
                    <div className={Styles.policylinks}>
                        <ul>
                            <li><Link href='/'>Terms n Condition</Link></li>
                            <li><Link href='/'>Privacy Policy</Link></li>
                            <li><Link href='/'>Legal</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;