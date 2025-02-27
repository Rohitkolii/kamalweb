import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navbar/Navbar'
import Random from '@/Components/Random/Random'
import ServiceHeader from '@/Components/ServiceHeader/ServiceHeader'
import ServicesDetails from '@/Components/ServicesDetails/ServicesDetails'
import ServiveCard from '@/Components/ServiveCard/ServiveCard'
import React from 'react'

const services = () => {
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

export default services