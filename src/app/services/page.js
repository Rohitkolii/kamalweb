import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navbar/Navbar'
import Random from '@/Components/Random/Random'
import ServiceHeader from '@/Components/ServiceHeader/ServiceHeader'
import ServicesDetails from '@/Components/ServicesDetails/ServicesDetails'
import React from 'react'

const page = () => {
  return (
    <>
        {/* <Navbar /> */}
        <ServiceHeader />
        <ServicesDetails />
        {/* <Random /> */}
        <Footer />
    </>
  )
}

export default page