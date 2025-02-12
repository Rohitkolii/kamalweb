'use client'
import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navbar/Navbar'
import Numbers from '@/Components/Numbers/Numbers'
import Partners from '@/Components/Partners/Partners'
import Random from '@/Components/Random/Random'
import ServiceHeader from '@/Components/ServiceHeader/ServiceHeader'
import Services from '@/Components/Services/Services'
import Team from '@/Components/Team/Team'
import React from 'react'

const page = () => {
  return (
    <>
        <Navbar />
        <ServiceHeader />
        <div style={{width: '90%', margin: ' 20px auto',}}>
          <h2>Why to choose us for Web & App Developement services?</h2>
          <p className='subp' style={{margin: '10px 0'}}>At Appsobytes, we are a dynamic IT services company committed to helping startups and small businesses accelerate their growth through cutting-edge technology solutions. Our expertise lies in transforming visionary ideas into high-impact applications that drive efficiency, innovation, and success.</p>
          <p className='subp' style={{margin: '10px 0'}}>Using agile methodologies, we ensure a streamlined and adaptive development process, delivering robust and scalable applications tailored to our clients' unique needs. From concept to deployment, our team works closely with businesses to turn their ideas into powerful digital solutions.</p>
          <p className='subp' style={{margin: '10px 0'}}>With a passion for technology and a customer-centric approach, Appsobytes is your trusted partner in building the next generation of innovative applications. Let's create something extraordinary together!</p>
        </div>
      
      <Numbers />
      {/* <Team /> */}
      {/* <Partners /> */}
      {/* <Random /> */}
        <Footer />
    </>
  )
}

export default page