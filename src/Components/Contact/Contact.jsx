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
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../Loader/Loader'



const contact = () => {

    const form = useRef()
    const [loading, setloading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        // console.log(form.current[0].value);
        if(form.current[0].value && form.current[1].value && form.current[2].value && form.current[3].value){
            setloading(true)
            emailjs.sendForm('service_ftx5ev9', 'template_sbjpmjp', form.current, 'DA4KsLR9lJJvsXu7F')
            .then((result) => {
                setloading(false)
                console.log(result);
                    toast.success('Thank you! Your form has been submitted successfully.', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                
                e.target.reset();
                }, (error) => {
                    setloading(false)
                    console.log(error);
                });
            }else{
                    toast.warning('Please fill out all required fields before submitting.', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
            }

          
        //   e.target.reset();
      }

      useEffect(()=> {
        if(loading ){
            document.body.style.overflow = "hidden"
        }else{
            document.body.style.overflow = "visible"
        }
    },[loading])
  

    return (
    <div>
        <ToastContainer />
        {loading ? <Loader /> : ''}
        {loading ? <div className='layer'></div> : ''}
      <section className={Styles.inner_Header}>
            <div data-aos="zoom-in-right" className={Styles.col1}>
                <h1 className='gt'>Contact us</h1>
                <p className='subp'>At Appsobytes, we’re here to help you bring your ideas to life! Whether you have a question about our services, need technical support, or want to discuss your next big project, our team is ready to assist you.</p>
                    <p style={{marginTop:10}}>Get in touch</p>
                
                <div style={{marginTop: 10}} className={Styles.coninfo}>
                    <div>
                        <CiLocationOn />
                    </div>
                    <div>
                        <p>Office Address:</p>
                        <p>Noida, Uttar Pradesh</p>
                    </div>
                </div>
                
                <div className={Styles.coninfo}>
                    <div>
                        <IoCallOutline />
                    </div>
                    <div>
                        <p>Contact:</p>
                        <p>9899999999</p>
                    </div>
                </div>
                
                

                <div className={Styles.coninfo}>
                    <div>
                        <CiMail />
                    </div>
                    <div>
                        <p>Email:</p>
                        <p>appsobytes@gmail.com</p>
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
                                name="user_name"
                                />
                            </label>
                        </div>
                        <div className={Styles.col}>
                            <label htmlFor="email">
                                Email :
                                <input type="email" 
                                placeholder='example@gmail.com'
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
