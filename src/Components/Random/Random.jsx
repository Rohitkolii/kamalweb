import Link from 'next/link'
import React from 'react'

const Random = () => {
  return (
    <div style={{width: '80%', margin: '100px auto', textAlign: 'center'}}>
        <p style={{fontSize: 30, fontWeight: 900, textTransform: 'uppercase'}}><span style={{color: '#0061ff'}}>i</span>llution<span style={{color:'#0061ff'}}>.</span></p>
        <h3>Ready to get started</h3>
        <p className='subp'>Make your ideas Real.</p>

        <div style={{display:'flex', gap: 20, justifyContent: 'center', margin: '30px 0'}}>
            <Link style={{backgroundColor : '#0061FF', padding: '10px 15px', textDecoration: 'none', color: 'white'}} href='/'>Services</Link>
            <Link style={{backgroundColor : '#e62f30', padding: '10px 15px', textDecoration: 'none', color: 'white'}} href='/'>Connect with us</Link>
        </div>
    </div>
  )
}

export default Random