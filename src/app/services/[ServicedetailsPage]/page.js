'use client'
import CommonHeader from '@/Components/CommonHeader/CommonHeader'
import Footer from '@/Components/Footer/Footer'
import React, { useEffect } from 'react'
// import ServicepageContent from '@/Components/ServicepageContent/servicepageContent'
import servicedata from '../../../data/data.json'
import ServicepageContent from '@/Components/ServicepageContent/ServicepageContent'


const servicePage = ( { params } ) => {
  
  //Getting Single Service Details Page
  let newdata = servicedata.filter( data => data.titleurl == params.ServicedetailsPage)
  // console.log(newdata[0])
  
  const headdata = {
    t1: "Service", 
    t2: 'Details', 
    para: newdata[0].title
  };

  return (
    <>
      <CommonHeader headdata={headdata} />
      <ServicepageContent newdata={newdata} />
      <Footer />
    </>
  )
}

export default servicePage