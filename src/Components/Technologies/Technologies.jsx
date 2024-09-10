import React from 'react'
import Styles from './Technologies.module.css'


const Technologies = () => {
  return (
    <>
        <section className={Styles.Technologies}>
            <h3>Technologies we Use</h3>

            <div className={Styles.list}>
                <ul>
                    <li>Web</li>
                    <li>App</li>
                    <li>Backend</li>
                    <li>Api's</li>
                </ul>
            </div>

            <div className={Styles.techs}>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
            </div>
        </section>
    </>
  )
}

export default Technologies