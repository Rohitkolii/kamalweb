'use client'
import Contact from '@/Components/Contact/Contact'
import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navbar/Navbar'
// import React from 'react'
import Styles from './Contact.module.css'
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";


import Link from 'next/link'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';


const contact = () => {

    const form = useRef()

    // const [name, setname] = useState();
    // const [mail, setmail] = useState();
    // const [message, setmessage] = useState();

    const sendEmail = (e) => {
        e.preventDefault();
            
            emailjs.sendForm('service_unk70pt', 'template_rmhzg26', form.current, 'EoRqXeN9WXwvaf8lr')
          .then((result) => {
              console.log(result.text);
            //   toast.success('Sent Succesfully!', {
            //       position: "top-center",
            //       autoClose: 5000,
            //       hideProgressBar: false,
            //       closeOnClick: true,
            //       pauseOnHover: true,
            //       draggable: true,
            //       progress: undefined,
            //       theme: "dark",
            //   });
  
            //   setmail('')
            //   setname('')
            //   setmessage('')
              
              e.target.reset();
          }, (error) => {
              console.log(error);
          });
          
          e.target.reset();
      }
  

    return (
    <div>
      <section className={Styles.inner_Header}>
            <div data-aos="zoom-in-right" className={Styles.col1}>
                {/* <img src="images/contact.png" alt="" /> */}
                <h1 className='gt'>Contact us</h1>
                <p className='subp'>At Appsobytes, we’re here to help you bring your ideas to life! Whether you have a question about our services, need technical support, or want to discuss your next big project, our team is ready to assist you.</p>
                    <p style={{marginTop:10}}>Get in touch</p>
                
                <div style={{marginTop: 10}} className={Styles.coninfo}>
                    <div>
                        <CiLocationOn />
                    </div>
                    <div>
                        <p>Office Address:</p>
                        <p>Block C, Noida 113355</p>
                    </div>
                </div>
                
                <div className={Styles.coninfo}>
                    <div>
                        <IoCallOutline />
                    </div>
                    <div>
                        <p>Contact:</p>
                        <p>989898XX99</p>
                    </div>
                </div>
                
                

                <div className={Styles.coninfo}>
                    <div>
                        <CiMail />
                    </div>
                    <div>
                        <p>Mail:</p>
                        <p>example@domain.com</p>
                    </div>
                </div>
                
                <div className={Styles.coninfo}>
                    <div>
                        <CiCalendarDate />
                    </div>
                    <div>
                        <p>Business Hours:</p>
                        <p>Monday - Friday | 9:00 AM - 6:00 PM (IST)</p>
                    </div>
                </div>

            </div>

            <div data-aos="zoom-in-left" className={Styles.col2}>

            <form ref={form} onSubmit={sendEmail}>
                <p>contact us</p>
                    <div className={Styles.row}>
                        <div className={Styles.col}>
                            <label htmlFor="name">
                                Name :
                                <input type="text" 
                                placeholder='Enter your name'
                                // onChange={(e)=> setname(e.target.value)}
                                // value={name}
                                name="user_name"
                                />
                            </label>
                        </div>
                        <div className={Styles.col}>
                            <label htmlFor="email">
                                Email :
                                <input type="email" 
                                placeholder='example@gmail.com'
                                // onChange={(e)=> setmail(e.target.value)}
                                // value={mail}
                                name="user_email"
                                />
                            </label>
                        </div>
                    </div>

                    <div className={Styles.row}>
                        <div className={Styles.col}>
                            <label htmlFor="phone">
                                Contact :
                                <input type="tel" 
                                placeholder='Enter your Contact no.'
                                // onChange={(e)=> setphone(e.target.value)}
                                // value={name}
                                 name="user_phone"
                                />
                            </label>
                        </div>
                    </div>

                    <div className={Styles.row}>
                        <div className={Styles.col}>
                            <label htmlFor="message">
                                Message :
                                <textarea 
                                name="message" 
                                id="message" 
                                // cols="30" 
                                rows="4"
                                placeholder='Enter your message or query'
                                // onChange={(e)=> setmessage(e.target.value)}
                                // value={message}
                                ></textarea>
                            </label>
                        </div>
                    </div>

                    <button>Submit</button>
                </form>

                {/* <div>
                    <img src="images/ils1.jpg" alt="" />
                </div> */}
            </div>

            {/* <div>
                <p>Let’s Build Something Great Together!</p>
                <p>Fill out the form below, and we’ll get back to you as soon as possible. We look forward to collaborating with you and turning your ideas into impactful digital solutions.</p>
            </div> */}
        </section>
    </div>
  )
}

export default contact