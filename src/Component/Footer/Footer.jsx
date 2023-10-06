import React from 'react'
import Newsletter from '../Newsletter/Newsletter'
import FooterLinks from './FooterLinks'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer__divs'>
         <div className='footer__div'>
              <Newsletter/>
              <div className='footer__grids'>
                   <div className='footer__contents'>
                        <h1>EATCO</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, velit illum! Nemo, amet commodi ad totam quidem aperiam quas officiis dolor, inventore doloremque nostrum distinctio ab ipsa blanditiis iusto quod!</p>
                        <div className='footer__icon'></div>
                   </div>
                   <div className='footer__con'>
                         <FooterLinks/>
                      
                   </div>
                   <div className='footer__con'>
                         <FooterLinks/>
                      
                   </div>
                   <div className='footer__con'>
                         <FooterLinks/>
                      
                   </div>

              </div>
               
          </div>
    </div>
  )
}

export default Footer