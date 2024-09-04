import Link from 'next/link'
import React from 'react'
import Styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={Styles.footercon}>
        <div className={Styles.inner_footer}>
            <div>
                <ul>
                    <li><Link href=''>Home</Link></li>
                    <li><Link href=''>About</Link></li>
                    <li><Link href=''>Contact</Link></li>
                    <li><Link href=''>Projects</Link></li>
                </ul>
            </div>
            <hr />
            <div>
                <p>@All Right Reserved <Link href='/'>Webname</Link> 2024</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer