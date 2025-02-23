'use client'
import Aboutcol from '@/Components/Aboutcol/Aboutcol'
import CommonHeader from '@/Components/CommonHeader/CommonHeader'
import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navbar/Navbar'
import Numbers from '@/Components/Numbers/Numbers'
import Partners from '@/Components/Partners/Partners'
import Random from '@/Components/Random/Random'
import ServiceHeader from '@/Components/ServiceHeader/ServiceHeader'
import Services from '@/Components/Services/Services'
import Team from '@/Components/Aboutus/Aboutus'
import Whyus from '@/Components/Whyus/Whyus'
import React from 'react'
import Aboutus from '@/Components/Aboutus/Aboutus'

const page = () => {
  return (
    <>
      <Navbar />
      <CommonHeader />
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