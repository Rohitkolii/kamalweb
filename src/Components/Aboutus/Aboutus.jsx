import React from 'react'
import Style from './Team.module.css'
const Aboutus = () => {
  return (
    <div className={Style.Aboutus}>
        <div>
            <h3 className='gt'>About AppsoBytes</h3>
            <p className='subp'>At Appsobytes, we are a dynamic IT services company committed to helping startups and small businesses accelerate their growth through cutting-edge technology solutions. Our expertise lies in transforming visionary ideas into high-impact applications that drive efficiency, innovation, and success.</p>
            <br />
            <p className='subp'>We use agile methodologies to deliver scalable, robust applications, ensuring a smooth and adaptive development process. From concept to deployment, we turn ideas into powerful digital solutions.</p>
            <p className='subp'></p>
        </div>
        <div>
            <img src="images/about.jpg" alt="" />
        </div>
    </div>
  )
}

export default Aboutus