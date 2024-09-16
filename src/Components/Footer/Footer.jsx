import Link from 'next/link';
import Styles from './Footer.module.css'
import {FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return(
        <div className={Styles.Footer}>
            <div className={Styles.innerFooter}>
                <div className={Styles.Footer1}>
                    <div className={Styles.Footerform}>
                        <h2><span style={{color: '#0061ff'}}>i</span>llusion<span style={{color: '#0061ff'}}>.</span></h2>
                        <p>You think we Develope, <br /> Turn your imagination into code</p>
                        <input type="email" placeholder='Your email here' />
                    </div>
                    <div className={Styles.Footeraddress}>
                        <h2>Address</h2>
                        <p>20, Awesome Road, <br /> New Delhi, 532C</p>
                        <p> &#9990; +91 9999888852</p>
                        <p>contact@illusion.com</p>
                    </div>
                    <div className={Styles.Footerlink}>
                        <h2>Useful Links</h2>
                        <Link href='/' >Home</Link>
                        <Link href='/' >About</Link>
                        <Link href='/' >Services</Link>
                        <Link href='/' >Contact</Link>
                    </div>
                    <div className={Styles.Footercategories}>
                        <h2>Other Links</h2>
                            <div className={Styles.footercategoriesinner}>
                                <Link href='/' >Link 1</Link>
                                <Link href='/' >Link 1</Link>
                                <Link href='/' >Link 1</Link>
                                <Link href='/' >Link 1</Link>
                            </div>
                            <div className={Styles.footercategoriesinner}>
                                <Link href='/' >Link A</Link>
                                <Link href='/' >Link A</Link>
                                <Link href='/' >Link A</Link>
                                <Link href='/' >Link A</Link>
                            </div>
                    </div>
                </div>

                <div className={Styles.Footer2}>
                    <div className={Styles.sociallinks}>
                        <p><Link href='/' ><FaFacebookF /></Link></p>
                        <p><Link href='/' ><FaTwitter /></Link></p>
                        <p><Link href='/' ><FaLinkedinIn /></Link></p>
                        <p><Link href='/' ><FaYoutube /></Link></p>
                    </div>
                    <div className={Styles.paymentmode}>
                        <p>Google</p>
                        <p>Wipro</p>
                        <p>Infosys</p>
                        <p>Me</p>
                        <p>You</p>
                    </div>
                </div>
                <div className={Styles.Footer3}>
                    <div className={Styles.copyright}>
                        <p>All right reserved <Link href='/' > ShopinGo </Link>c 2022</p>
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