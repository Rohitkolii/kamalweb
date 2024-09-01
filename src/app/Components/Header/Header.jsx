import React from 'react'
import Navbar from '../Navbar/Navbar'
import Styles from './Header.module.css'
const Header = () => {
  return (
    <div className={Styles.head}>
        <Navbar />
        <section className={Styles.header}>
            <div className={Styles.innerheader}>
                <h1>Web & App <span style={{color: 'cornflowerblue'}}>Developement</span> Agency</h1>
                <p>Get your Website & Applications done with our trusted services</p>
            </div>

            <div className={Styles.services}>
                <div className={Styles.col}>
                    <h3>
                        <span>O</span>Web Developement
                    </h3>
                </div>
                <div className={Styles.col}>
                    <h3>
                        <span>O</span>App Developement
                    </h3>
                </div>
                <div className={Styles.col}>
                    <h3>
                        <span>O</span> Api's
                    </h3>
                </div>
                <div className={Styles.col}>
                    <h3>
                        <span>O</span>Etc.
                    </h3>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Header