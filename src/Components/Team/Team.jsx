import React from 'react'
import Style from './Team.module.css'
const Team = () => {
  return (
    <div className={Style.Team}>
        <div>
            <h3 className='gt'>About AppsoBytes</h3>
            <p className='subp'>At AppsoBytes, we are passionate about technology, innovation, and excellence. As a leading IT solutions provider, we specialize in website development, mobile app development, backend solutions, cloud computing, and database management. Our mission is to empower businesses with cutting-edge digital solutions that drive growth, efficiency, and success.</p>
        </div>
        <div>
            <img src="images/web.jpg" alt="" />
        </div>
    </div>
  )
}

export default Team