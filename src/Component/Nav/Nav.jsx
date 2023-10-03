import React from 'react';
import ListIcon from '@mui/icons-material/List';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Header from '../Header/Header';
import './Nav.css'

const Nav = () => {
    return (
        <>
         <div className='nav__div'>
            <div className='menu__div'>
                 <div className='menu'><ListIcon style={{color: "black", fontSize: "2rem"}}/></div>
                  <div className='logo__divs'>
                         <h1>eat <span>co</span></h1>
                  </div>
                  <div className='btn'>
                      <div className='btn1'>free</div>
                      <div className='btn2'>delivery</div>
                  </div>
                  
            </div>
             <div className='inp'>
                 <input 
                    className=''
                    placeholder="search menu"
                    value=""

                    
                    
                    />
      
             </div>
             <div className='cart'>
                 <AddShoppingCartIcon style={{width: "1.5rem", height:"1.5rem"}}/>
                 cart
             </div>
           
         </div>
       
         </>
    )
}

export default Nav;
