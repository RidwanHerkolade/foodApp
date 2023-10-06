import React from 'react'
import Form from './Form'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className="news__div">
         <div className='newss__divss'>
              <div className='news__tip'>
                   <p>Need advice on how to improve your flow</p>
                   <p>Sign Up to join our newsletter on how improve your flow?</p>
              </div>
              <Form/>
         </div>
    </div>
  )
}

export default Newsletter