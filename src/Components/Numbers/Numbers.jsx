import React from 'react'
import Styles from './Numbers.module.css'

const Numbers = () => {
  return (
    <div className={Styles.Numbers}>
        <div className={Styles.innerNumbers}>
            <div>
                <h1>21+</h1>
                <p>Project Delivered</p>
            </div>
            <div>
                <h1>46+</h1>
                <p>Worldwide Client</p>
            </div>
            <div>
                <h1>83+</h1>
                <p>Team</p>
            </div>
            <div>
                <h1>100%</h1>
                <p>On Time Project Delivered</p>
            </div>
        </div>
    </div>
  )
}

export default Numbers