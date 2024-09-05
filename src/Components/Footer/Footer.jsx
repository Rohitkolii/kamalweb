import Link from 'next/link'
import React from 'react'
import Styles from './Footer.module.css'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className={Styles.Footer}>
        <div className={Styles.innerFooter}>
            <div className={Styles.Footeritems}>
                <div className={Styles.Footerlogo}>
                    <h1>
                        <Link href='/'>
                            Illution<span>.</span>
                        </Link>
                    </h1>
                </div>
                <div className={Styles.FooterLinks}>
                    <ul>
                        <Link href='/'>Home</Link>
                        <Link href='about'>About</Link>
                        <Link href='services'>Services</Link>
                        <Link href='contact'>Contact</Link>
                    </ul>
                </div>
                <div className={Styles.Socialicons}>
                    <AiOutlineInstagram className={Styles.icon} />
                    <AiOutlineFacebook className={Styles.icon} />
                    <AiOutlineTwitter className={Styles.icon} />
                </div>
            </div>

            <div className={Styles.Copyright}>
                <p>Copyright @2023 <Link href='/'>Illution.</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Footer