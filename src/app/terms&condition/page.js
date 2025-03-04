import CommonHeader from '@/Components/CommonHeader/CommonHeader'
import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navbar/Navbar'
import Link from 'next/link'
import React from 'react'

const headdata = {
  t1: "Term &", 
  t2: 'Condition', 
  para: 'Terms & Conditions – Clear, Fair, and Transparent Guidelines for a Seamless Experience.'
};

export const metadata = {
  title: "Terms & Condition | AppsoBytes",
  description: "Turning Ideas Into Impactful Apps",
}

const page = () => {
  return (
    <>
        {/* <Navbar /> */}
        <CommonHeader headdata={headdata} />
        <div style={{backgroundColor: 'white', color: 'black', padding: '50px 0', lineHeight: "35px"}}>
          <div style={{width: '95%', margin: ' 0px auto'}}>
            <h1 className='gtlight'>Terms and Conditions</h1>
            <p className='sublight' style={{margin: '25px 0'}}>Last Updated: 26<sup>th</sup> February 2025</p>
         
            <p className="sublight"><strong>1. Introduction</strong></p>
            <p className="sublight">Welcome to Appsobytes. These Terms and Conditions govern your use of our website and services. By accessing our website or engaging with our services, you agree to comply with these Terms. If you do not agree with any part of these Terms, please do not use our services.</p>

            <p className="sublight"><strong>2. Services</strong></p>
            <p className="sublight">Appsobytes provides IT services, including but not limited to:</p>
            <ul style={{width: "90%", margin: "auto"}}>
              <li>Custom Software Development</li>
              <li>Web & Mobile Application Development</li>
              <li>Digital Marketing Solutions</li>
              <li>Cloud Solutions</li>
              <li>IT Consulting</li>
            </ul>
            <p className="sublight">All services will be provided as per the agreement between Appsobytes and the client.</p>

            <p className="sublight"><strong>3. Payment Terms</strong></p>
            <ul style={{width: "90%", margin: "auto"}}>
              <li>All payments must be made according to the payment schedule outlined in the project proposal or contract.</li>
              <li>Payments are non-refundable once a service has been delivered or development work has commenced unless otherwise agreed in writing.</li>
              <li>Late payments may be subject to additional fees or interest.</li>
            </ul>

            <p className="sublight"><strong>4. Client Responsibilities</strong></p>
            <p className="sublight">The client agrees to:</p>
            <ul style={{width: "90%", margin: "auto"}}>
              <li>Provide accurate and complete project requirements.</li>
              <li>Supply necessary content, feedback, and approvals promptly to avoid delays.</li>
              <li>Make payments on time as per the agreed terms.</li>
            </ul>

            <p className="sublight"><strong>5. Intellectual Property</strong></p>
            <ul style={{width: "90%", margin: "auto"}}>
              <li>All intellectual property rights for the final deliverables will be transferred to the client upon full payment, unless otherwise stated in the agreement.</li>
              <li>Appsobytes retains the right to showcase completed projects in its portfolio for promotional purposes unless a confidentiality agreement is in place.</li>
            </ul>

            <p className="sublight"><strong>6. Confidentiality</strong></p>
            <p className="sublight">Both parties agree to keep all proprietary information and project details confidential unless disclosure is required by law or with mutual consent.</p>

            <p className="sublight"><strong>7. Warranties & Liability</strong></p>
            <ul style={{width: "90%", margin: "auto"}}>
              <li>Appsobytes will make reasonable efforts to deliver high-quality services. However, we do not guarantee that our services will be error-free or uninterrupted.</li>
              <li>We are not liable for any indirect, incidental, or consequential damages resulting from the use of our services.</li>
            </ul>

            <p className="sublight"><strong>8. Termination</strong></p>
            <p className="sublight">Either party may terminate the project or service agreement with written notice.</p>
            <p className="sublight">In case of termination:</p>
            <ul style={{width: "90%", margin: "auto"}}>
              <li>The client is responsible for payment of all work completed up to the termination date.</li>
              <li>Any outstanding deliverables or obligations will be handled as per the termination agreement.</li>
            </ul>

            <p className="sublight"><strong>9. Governing Law</strong></p>
            <p className="sublight">These Terms and any disputes arising from them are governed by the laws of [Insert Your Country/State].</p>

            <p className="sublight"><strong>10. Amendments</strong></p>
            <p className="sublight">Appsobytes reserves the right to update these Terms & Conditions at any time. Changes will be effective once posted on our website or communicated directly to clients.</p>

            <p className="sublight"><strong>11. Contact Information</strong></p>
            <p className="sublight">For any questions or concerns regarding these Terms, please contact us at:</p>

            
            
            <br /> <hr/> <br />
            <p className='sublight' style={{margin: '5px 0'}}>Email: <Link href="mailto:appsobytes@gmail.com">appsobytes@gmail.com</Link></p>
            <p className='sublight' style={{margin: '5px 0'}}>Phone: <Link href="tel:977-380-6588">9773806588</Link></p>
            <p className='sublight' style={{margin: '5px 0'}}>Website: <Link href="https://www.appsobytescom">Appsobytescom</Link></p>
            <i className='sublight' style={{margin: '5px 0'}}>Address: Noida, Uttar Pradesh</i>
          </div>
        </div>

        <Footer />
    </>
  )
}

export default page