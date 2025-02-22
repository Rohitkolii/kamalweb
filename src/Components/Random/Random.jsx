import Link from 'next/link'
import React from 'react'
import Styles from './Random.module.css'

const Random = () => {
  return (
    <div className={Styles.Random}>
        <p style={{fontSize: 30, fontWeight: 900, textTransform: 'uppercase'}}>Get in <span style={{color: '#0061ff'}}>Touch</span><span style={{color:'#0061ff'}}>.</span></p>
        {/* <h3>Get in touch</h3> */}
        <p className='subp'>Have an idea or need a tech solution? Let’s bring it to life! 🚀 Connect with AppsoBytes for expert web, mobile, and backend development solutions tailored to your business needs. Reach out today, and let’s build something amazing together! 💡✨</p>

        <div style={{display:'flex', gap: 20, justifyContent: 'center', margin: '30px 0',}}>
            <Link href='/contact'>Connect with us</Link>
        </div>
    </div>
  )
}

export default Random