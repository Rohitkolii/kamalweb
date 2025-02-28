import React from 'react'
// import servicedata from '../../data/data.json'
import Styles from './ServicepageContent.module.css'

const ServicepageContent = ({newdata}) => {

  return (
    <>
        <div className={Styles.myservice}>
        {/* <h1 className='gtlight'>Page Name : {params.ServicedetailsPage}</h1>   */}
        <div className={Styles.innermyservice}>
          <h1 className='gtlight'>About {newdata[0].title} Services</h1>
          <p className='sublight'>{newdata[0].aboutpara}</p>
            <br/>
          <div> 
            <h3 className='gtlighth3'>Our Experties in {newdata[0].title} Services</h3>
            <p className='sublight'>{newdata[0].expertiespara}</p>
            <div className={Styles.myservicegrid}>
              
              {
                newdata[0].expertiesarr?.map((exp) => {
                  return <div key={exp.id}>
                  <div>{exp.id+1}</div>
                  <p>{exp.title}</p>
                  <p className='sublight'>{exp.para}</p>
                </div>
                })
              }
              

            </div>

            <div>
              <h3 className='gtlighth3'>Service Benefits</h3>
              <p className='sublight'>{newdata[0].benefitpara}</p>
              <ul>
                {
                  newdata[0].benefitarr?.map((benefit, index)=> <li key={index} className='sublight'>{benefit}</li>)
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicepageContent