import CommonHeader from '@/Components/CommonHeader/commonHeader'
import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navbar/Navbar'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
        <Navbar />
        <CommonHeader />

        <div style={{width: '90%', margin: ' 20px auto',}}>
          <h2>Terms and Conditions</h2>
          <p className='subp' style={{margin: '10px 0'}}>Last Updated: 10<sup>th</sup> February 2025</p>
          <p className='subp' style={{margin: '10px 0'}}>Welcome to Appsobytes! By using our services, including application development and website development, you agree to be bound by the following Terms and Conditions. Please read them carefully.</p>
          <p className='subp' style={{margin: '10px 0'}}>1. Acceptance of Terms By accessing or using the services of Appsobytes, you agree to comply with and be legally bound by these Terms and Conditions. If you do not agree to these Terms, please do not use our services.</p>
          <p className='subp' style={{margin: '10px 0'}}>2. Services Provided At Appsobytes, we specialize in the creation of impactful applications and websites. Our team excels in both front-end and back-end development, delivering custom solutions that convert your ideas into innovative applications designed to drive business growth.</p>
          <p className='subp' style={{margin: '10px 0'}}>3. Client Responsibilities Provide Clear Requirements: You agree to provide clear, comprehensive, and accurate information about your project requirements to help us deliver the best possible solution.</p>
          <p className='subp' style={{margin: '10px 0'}}>Timely Communication: You agree to provide timely feedback and responses as requested by our team throughout the development process. Content and Materials: You ensure that all content, designs, images, and materials provided for use in your project are either owned by you or licensed for use by you. You are solely responsible for any intellectual property violations related to content you provide.</p>
          <p className='subp' style={{margin: '10px 0'}}>4. Our Responsibilities
Development Process: We will provide front-end and back-end development services to create applications and websites based on the specifications provided by you. Our work includes the design, coding, testing, and deployment of applications.
Quality Assurance: We will ensure the applications and websites developed are fully functional and meet the requirements as agreed upon.
Confidentiality: We are committed to keeping your business and project details confidential. All personal, business, and proprietary information shared with us will be kept private.</p>
          <p className='subp' style={{margin: '10px 0'}}>5. Payment and Fees
Project Fees: The fees for our services will be outlined in the contract or project agreement. Any changes in scope or project requirements may result in additional fees.
Payment Terms: Payments will be due as per the agreed terms, with a specified upfront deposit and milestone payments. Late payments may incur additional fees or delays in project timelines.</p>
          <p className='subp' style={{margin: '10px 0'}}>6. Ownership and License
Client Ownership: Once the project is completed and full payment is made, you will own all intellectual property rights associated with the custom application or website.
License to Use Tools: We retain the right to use third-party tools, frameworks, and libraries in the development process, but this does not affect your ownership of the final deliverable.</p>
          <p className='subp' style={{margin: '10px 0'}}>7. Termination and Cancellation
Project Cancellation: Either party may terminate the project at any time with written notice. In the event of cancellation, you are responsible for paying for all work completed up to the termination point.
Refunds: Refunds are at the sole discretion of Appsobytes. Any refund requests must be submitted in writing and will be evaluated on a case-by-case basis.</p>
          <p className='subp' style={{margin: '10px 0'}}>8. Limitation of Liability
          Appsobytes will not be held responsible for any indirect, incidental, or consequential damages resulting from the use of our applications or websites. Our total liability is limited to the amount paid for the services rendered.</p>
          <p className='subp' style={{margin: '10px 0'}}>9. Indemnification
You agree to indemnify and hold harmless Appsobytes, its employees, contractors, and agents from any claims, damages, liabilities, and expenses arising from your use of our services, your breach of these Terms, or any content provided by you.
</p>
          <p className='subp' style={{margin: '10px 0'}}>10. Privacy Policy
          Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information. By using our services, you agree to the terms of our Privacy Policy.</p>
          <p className='subp' style={{margin: '10px 0'}}>11. Amendments to the Terms
Appsobytes reserves the right to update or modify these Terms and Conditions at any time. Any changes will be posted on our website, and the revised Terms will apply immediately upon posting. We encourage you to review these Terms periodically.
</p>
          <p className='subp' style={{margin: '10px 0'}}>12. Governing Law
These Terms and Conditions are governed by and construed in accordance with the laws of Noida/Uttarpradesh, without regard to its conflict of law principles. Any disputes will be resolved in the courts of India/Uttarpradesh.
</p>
          <p className='subp' style={{margin: '10px 0'}}>13. Contact Information
          For any questions or concerns regarding these Terms and Conditions, please contact us at:</p> <br /> <hr/> <br />
          <p className='subp' style={{margin: '10px 0'}}>Email: <Link href="mailto:appsobytes@gmail.com">appsobytes@gmail.com</Link></p>
          <i className='subp' style={{margin: '10px 0'}}>Address: Noida, Uttar Pradesh</i>
        </div>

        <Footer />
    </>
  )
}

export default page