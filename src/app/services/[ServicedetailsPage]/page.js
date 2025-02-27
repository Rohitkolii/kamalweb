'use client'
import CommonHeader from '@/Components/CommonHeader/CommonHeader'
import Footer from '@/Components/Footer/Footer'
import React, { useEffect } from 'react'
import ServicepageContent from '@/Components/ServicepageContent/servicepageContent'
import servicedata from '../../../data/data.json'

const headdata = {
  t1: "Service", 
  t2: 'Details', 
  para: 'Website Developement'
};

const servicePage = ( { params } ) => {
  
  let newdata = servicedata.filter( data => data.titleurl == params.ServicedetailsPage)
  console.log(newdata[0])

  return (
    <>
      <CommonHeader headdata={headdata} />
      <ServicepageContent newdata={newdata} />
      <Footer />
    </>
  )
}

export default servicePage