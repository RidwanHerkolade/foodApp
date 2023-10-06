import React from 'react'
import { mealDatas } from './MealDatas'
import './MealD.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const MealD = () => {
  return (
    <>
          <h4 className='h4'>Top Picks</h4>
          <div className='meal__divs'>
                <Splide options={{perPage: "4", gap: "1.5rem", drag: 'free', arrows: false,  breakpoints: {1024: { perPage: 3, gap: '1rem' },640 : {  perPage: 1, gap: '0rem' }  },}}>
                      {mealDatas.map((data) => {
                         return (
                            <SplideSlide key={data.id}>
                            <div className='meal__grids'>
                                 <div className='meal__title'>
                                      <p className='title'>{data.name}</p>
                                      <p className='title__price'>{data.price}</p>
                                      <button className='meal__button'>add to cart</button>
                                      <div className='meal__img'>
                                          <img src={data.image} alt={data.name}/>
                                      </div>
                                      
                                 </div>
                            </div>
                            </SplideSlide>

                        )
                    })}

                </Splide>

         </div>
    </>
  )
}

export default MealD