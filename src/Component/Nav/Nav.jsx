import React, { useState } from 'react';
import ListIcon from '@mui/icons-material/List';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Header from '../Header/Header';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WalletIcon from '@mui/icons-material/Wallet';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import './Nav.css'

const Nav = () => {
    const [show, setShow] = useState(true)
    const [hide, setHide] = useState(false)

    const handleShw = ()=> {
         setHide(!hide)
    }
    return (
        <>
         <div className='nav__div'>
            <div className='menu__div'>
                  <div className='menu'> {show ? <ListIcon style={{color: "black", fontSize: "2rem"}} onClick={handleShw}/>:  <CloseIcon className='close'/> }</div>
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
                    <SearchIcon className='src__icon' style={{width: "0.8rem", height:"0.8rem"}}/>
      
             </div>
             <div className='cart'>
                 <AddShoppingCartIcon style={{width: "1.5rem", height:"1.5rem"}}/>
                 cart
             </div>
           
         </div>
          {hide && <div className='nav__links'>
               <div className='logo__divss'>
                      <h1>eat <span>co</span></h1>
                      <CloseIcon  onClick={handleShw}/>
                
                </div>
                <ul className='nav__link'>
                     <li className='links__icon'>
                          <AccountCircleIcon/>
                          <div className='icons__name'>delivery</div>
                     </li>
                     <li className='links__icon'>
                          <FavoriteBorderIcon/>
                          <div className='icons__name'>my favourite</div>
                     </li>
                     <li className='links__icon'>
                          <WalletIcon/>
                          <div className='icons__name'>my wallet</div>
                     </li>
                     <li className='links__icon'>
                          <HelpOutlineIcon/>
                          <div className='icons__name'>Help</div>
                     </li>
                 </ul>
          </div> }
       
         </>
    )
}

export default Nav;
