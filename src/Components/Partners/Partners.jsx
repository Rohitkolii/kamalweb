import React from 'react'
import Styles from './Partners.module.css'

const Partners = () => {
  return (
    <>
        <section className={Styles.Partners}>
            <p className='subp' style={{textAlign: 'center',  fontSize: '18px'}}>Trusted by</p>
            <div className={Styles.row}>
                <div className={Styles.col}>
                    <img src="images/c4.png" alt="" />
                </div>
                <div className={Styles.col}>
                    <img src="images/c2.png" alt="" />
                </div>
                <div className={Styles.col}>
                    <img src="images/c3.png" alt="" />
                </div>
                <div className={Styles.col}>
                    <img src="images/c4.png" alt="" />
                </div>
                <div className={Styles.col}>
                    <img src="images/c2.png" alt="" />
                </div>
                <div className={Styles.col}>
                    <img src="images/c3.png" alt="" />
                </div>
            </div>
        </section>
    </>
  )
}

export default Partners