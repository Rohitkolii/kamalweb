'use client'
import Aboutcol from '@/Components/Aboutcol/Aboutcol'
import CommonHeader from '@/Components/CommonHeader/commonHeader'
import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navbar/Navbar'
import Numbers from '@/Components/Numbers/Numbers'
import Partners from '@/Components/Partners/Partners'
import Random from '@/Components/Random/Random'
import ServiceHeader from '@/Components/ServiceHeader/ServiceHeader'
import Services from '@/Components/Services/Services'
import Team from '@/Components/Team/Team'
import Whyus from '@/Components/Whyus/whyus'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <CommonHeader />
      <Team />
      <Aboutcol />
      <Whyus />
      <Numbers />
        <Footer />
    </>
  )
}

export default page