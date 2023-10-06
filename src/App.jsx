import React from 'react'
import Nav from './Component/Nav/Nav';
import Header from './Component/Header/Header';
import Hero from './Component/Hero/Hero';
import FoodPick from './Component/Food/FoodPick';
import MealD from './Component/MealData/MealD';
import Categories from './Component/Categories/Categories';
import Footer from './Component/Footer/Footer';
import './App.css'

function App() {
  return (
      <div className='app'>
          <Nav/> 
          <Header/>
          <Hero/>
          <MealD/>
          <FoodPick/>
          <Categories/>
          <Footer/>
      </div>
  )
}

export default App;
