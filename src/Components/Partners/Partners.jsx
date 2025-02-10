import React from 'react'
import Styles from './Partners.module.css'
const Partners = () => {

    const imgs = [
        "./images/c4.png",
        "./images/c2.png",
        "images/c3.png",
        "/images/c2.png"
    ]

  return (
    <>
        <section className={Styles.Partners}>
            <p className='subp' style={{textAlign: 'center',  fontSize: '18px'}}>Trusted by</p>
            <div className={Styles.row}>
                {
                    imgs.map(el=> {
                        <div className={Styles.col}>
                            <img src={el} alt="" />
                        </div>
                    })
                }
            </div>
        </section>
    </>
  )
}

export default Partners