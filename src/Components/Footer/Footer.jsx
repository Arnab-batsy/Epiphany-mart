import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import brand from "../Assets/brand.png";
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img id="bag" src={footer_logo} alt='footer logo'/>
            <p>
            <img src={brand} width="170px" alt="logo" />
            </p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icons-container'>
                <img src={instagram_icon} alt='instagram icon'/>
            </div>
            <div className='footer-icons-container'>
                <img src={pinterest_icon} alt='pinterest icon'/>
            </div>
            <div className='footer-icons-container'>
                <img src={whatsapp_icon} alt='whatsapp icon'/>
            </div>
        </div>
        <div className='footer-copyright'>
            <hr/>
            <p>©2024 by Arnab Kumar Das. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer