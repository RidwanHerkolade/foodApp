import React from 'react'
import './Categories.css'

const Categories = () => {
    const brands = [
        {
             id: 1,
             img: "../images/hot.png"
        },
        {
            id: 2,
            img: "../images/hut.png"
       },
       {
             id: 3,
             img: "../images/kfc.png"
       },
        {
             id: 4,
             img: "../images/pizza.jpeg"
       },
         {
             id: 5,
             img: "../images/nash.png"
       },
        {
             id: 6,
             img: "../images/olive.png"
       },
        {
             id: 7,
             img: "../images/Dennys.png"
       },
        {
             id: 8,
             img: "../images/king.png"
       },
        {
             id: 9,
             img: "../images/lemon.jpeg"
       },
        {
             id: 10,
             img: "../images/ufc.png"
       },
       
    ]
    return (
            <div className='cat__divs'>
                  <div className='cat__div'>
                       <h4>trending categories</h4>
                       <div className='brands__divs'>
                            {brands.map((brand) => {
                                return (
                                    <div className='imgsss' key={brand.id}>
                                           <img src={brand.img} alt={brand.img}/>
                                    </div>

                                )
                                 
                            })}
                       </div>
                  </div>
         
            </div>
  )
}

export default Categories