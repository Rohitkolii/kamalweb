import React from 'react'
import Styles from './Contact.module.css'

const Contact = () => {
  return (
    <div className={Styles.Contact}>
        <section className={Styles.contact_con}>
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

                    {/* <div className={Styles.row}>
                        <div className={Styles.col}>
                            <label htmlFor="phone">
                                Contact :
                                <input type="tel" 
                                placeholder='Enter your Contact no.'
                                />
                            </label>
                        </div>
                    </div> */}

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
      </section>
    </div>
  )
}

export default Contact