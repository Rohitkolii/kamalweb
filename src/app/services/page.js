import Footer from '@/Components/Footer/Footer'
import ServiceHeader from '@/Components/ServiceHeader/ServiceHeader'
import ServicesDetails from '@/Components/ServicesDetails/ServicesDetails'
import React from 'react'

export const metadata = {
  title: "Services | AppsoBytes",
  description: "Turning Ideas Into Impactful Apps",
}

const services = () => {
  return (
    <>
        <ServiceHeader />
        <ServicesDetails />
        <Footer />
    </>
  )
}

export default services