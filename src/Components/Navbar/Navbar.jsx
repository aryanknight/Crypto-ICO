import React from 'react';
import Logo from '../../Images/logo.png';
import NavbarItems from './NavbarItems';
import './Navbar.css';

export default function Navbar() {

    

    return (
        <div className='navbar'>
            <div className='navbar-cont'>
                <div className="navbar-left">
                    <img src={Logo} id="logo" />
                    <div className="heading-2" id="logo-text"><b>CRYPTO</b> ICO </div>
                </div>

                <div className="navbar-right heading-4">
                    <NavbarItems />
                </div>
            </div>
        </div>
    )
}
