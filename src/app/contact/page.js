import Contact from '@/Components/Contact/Contact'
import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navbar/Navbar'
import React from 'react'

export const metadata = {
  title: "Contact | AppsoBytes",
  description: "Turning Ideas Into Impactful Apps",
}

const contact = () => {
  return (
    <div>
      <Navbar />
      <Contact />
      <Footer />
    </div>
  )
}

export default contact