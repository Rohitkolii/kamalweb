import React from 'react'
import Styles from './Feedback.module.css'

const Feedback = () => {
  return (
    <>
        <section className={Styles.Feedback}>
            <div className={Styles.col1}>
                <p>WHAT OUR CLIENTs SAY</p>
                <h3>Hear It from Those <br /> Who Know Us Best</h3>
                <p className='subp'>Great people make great companies, and we specialize in building the best. Our success stories show why clients trust us with their recruitment needs.</p>
            </div>

            <div className={Styles.reviews}>
                <div>
                    <p className='subp'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, ad ipsam. Magni accusamus eos quam quaerat! Fugiat aspernatur eveniet velit minus quisquam eligendi voluptatem nesciunt.</p>
                    <p style={{color: '#0061ff', fontSize: 14}}>myName021</p>
                </div>
                <div>
                    <p className='subp'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, ad ipsam. Magni accusamus eos quam quaerat! Fugiat aspernatur eveniet velit minus quisquam eligendi voluptatem nesciunt.</p>
                    <p style={{color: '#0061ff', fontSize: 14}}>myName021</p>
                </div>
                <div>
                    <p className='subp'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, ad ipsam. Magni accusamus eos quam quaerat! Fugiat aspernatur eveniet velit minus quisquam eligendi voluptatem nesciunt.</p>
                    <p style={{color: '#0061ff', fontSize: 14}}>myName021</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Feedback