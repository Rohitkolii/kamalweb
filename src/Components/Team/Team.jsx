import React from 'react'
import Style from './Team.module.css'
const Team = () => {
  return (
    <div className={Style.Team}>
        <div>
            <img src="images/team.jpg" alt="" />
        </div>

        <div>
            <h3 className='gt'>Team work does work faster</h3>
            <p className='subp'>When it comes to web and app development, choosing us means opting for a partner who is deeply committed to your success. We blend cutting-edge technology with creative innovation to deliver solutions that are not only functional but also engaging. Our experienced team of developers and designers takes the time to understand your unique business</p>
        </div>
    </div>
  )
}

export default Team