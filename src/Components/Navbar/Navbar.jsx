import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import brand from '../Assets/brand.png'

function Navbar() {
    const [menu, setMenu]= useState("shop");
  return (
    <div className="navbar">
    <div className='nav-logo'>
        <img id="bag" src={logo} alt='logo'/>
        <p><img src={brand} width="130px" alt='logo'/></p>
    </div>
    <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}>Shop</li>
        <li onClick={()=>{setMenu("ladies")}}>Ladies</li>
        <li onClick={()=>{setMenu("gentlemen")}}>Gentlemen</li>
        <li onClick={()=>{setMenu("kids")}}>Kids</li>
    </ul>
    <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="cart-icon"/>
        <div className='nav-cart-count'>0</div>
    </div>
    </div>
  )
}

export default Navbar