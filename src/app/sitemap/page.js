import CommonHeader from '@/Components/CommonHeader/CommonHeader'
import Footer from '@/Components/Footer/Footer';
import Link from 'next/link';
import React from 'react'

const headdata = {
    t1: '', 
    t2: 'Sitemap', 
    para: 'Sitemap – Navigate Easily and Explore Everything We Offer.'
  };

  export const metadata = {
    title: "Sitemap | AppsoBytes",
    description: "Turning Ideas Into Impactful Apps",
  }

const page = () => {
  return (
    <>
        <CommonHeader headdata={headdata} />
        <div style={{backgroundColor: 'white', padding: '50px 0'}}>
            <div style={{width: '90%', margin: ' 0px auto'}}>
                <h1 className='gtlight'>Sitemap</h1>
                <div>
                    <Link href='/'>Home</Link>
                    <Link href='/about'>About Us</Link>
                    <ul>
                        <li><Link href='/'>About Appsobytes</Link></li>
                        <li><Link href='/'>Who we are</Link></li>
                        <li><Link href='/'>Why to choose us</Link></li>
                        <li><Link href='/'>Engagement count</Link></li>
                        <li><Link href='/'>Contact Model</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default page