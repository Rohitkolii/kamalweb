import CommonHeader from '@/Components/CommonHeader/CommonHeader'
import Footer from '@/Components/Footer/Footer'
import React from 'react'

const headdata = {
    t1: 'Privacy', 
    t2: 'Policy', 
    para: 'Your Privacy, Our Commitment – Protecting Your Data with Trust & Transparency.'
  };

  export const metadata = {
    title: "Privacy Policies | AppsoBytes",
    description: "Turning Ideas Into Impactful Apps",
  }

const page = () => {
  return (
    <>
        <CommonHeader headdata={headdata} />
            <div style={{backgroundColor: 'white', padding: '50px 0'}}>
                <div style={{width: '90%', margin: ' 0px auto'}}>

                </div>
            </div>
        <Footer />
    </>
  )
}

export default page