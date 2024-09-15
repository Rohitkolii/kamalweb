import Contact from '@/Components/Contact/Contact'
import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navbar/Navbar'
import React from 'react'
import Styles from './Contact.module.css'
import Link from 'next/link'

const contact = () => {
  return (
    <div>
      <Navbar />
      <section className={Styles.inner_Header}>
            <div data-aos="zoom-in-right" className={Styles.col1}>
                {/* <img src="images/contact.png" alt="" /> */}
                <h1>Contact us</h1>
                <p className='subp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus illum perferendis aliquid temporibus, hic rerum?</p>
            </div>

            <div data-aos="zoom-in-left" className={Styles.col2}>

            <form>
                <p>contact us</p>
                    <div className={Styles.row}>
                        <div className={Styles.col}>
                            <label htmlFor="name">
                                Name :
                                <input type="text" 
                                placeholder='Enter your name'
                                />
                            </label>
                        </div>
                        <div className={Styles.col}>
                            <label htmlFor="email">
                                Email :
                                <input type="email" 
                                placeholder='example@gmail.com'
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
        </section>
      <Footer />
    </div>
  )
}

export default contact