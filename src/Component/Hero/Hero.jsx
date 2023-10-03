import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero__divs'>
        <div className='hero__div'>
            <h2>quick delivery app</h2>
             <div className='hero__grids'>
                 <div className='imgs'>
                     <img src='../images/isecp.png'/>
                 </div>
                 <div className='hero__grid'>
                      <small className='small'>Get the app</small>
                      <h3>Limitless Convenience on-demand</h3>
                      <p className='content'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet mollitia maiores dolorem dicta harum excepturi reprehenderit, quae assumenda, perferendis consequuntur doloremque eum, necessitatibus quos voluptatum laborum veniam est soluta aspernatur!</p>
                    <div className='getBtn'>Get Started</div>
                 </div>
                 
             </div>

        </div>
    </div>
    
    
  )
}

export default Hero