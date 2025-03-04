import Aboutcol from '@/Components/Aboutcol/Aboutcol'
import CommonHeader from '@/Components/CommonHeader/CommonHeader'
import Footer from '@/Components/Footer/Footer'
import Numbers from '@/Components/Numbers/Numbers'
import Random from '@/Components/Random/Random'
import Whyus from '@/Components/Whyus/Whyus'
import React from 'react'
import Aboutus from '@/Components/Aboutus/Aboutus'

const headdata = {
  t1: "About", 
  t2: 'us', 
  para: 'Innovating Digital Solutions for a Smarter Future.'
};

export const metadata = {
  title: "About | AppsoBytes",
  description: "Turning Ideas Into Impactful Apps",
}

const page = () => {
  return (
    <>
      <CommonHeader headdata={headdata}/>
      <Aboutus />
      <Aboutcol />
      <Whyus />
      <Numbers />
      <Random />
      <Footer />
    </>
  )
}

export default page