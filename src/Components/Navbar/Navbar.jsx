import React from 'react';
import NavbarItems from './NavbarItems';
import './Navbar.css';

export default function Navbar() {

    

    return (
        <div className='navbar'>
            <div className='navbar-cont'>
                <div className="navbar-left">
                    <img src="https://multipad.co/5dad980d25aa83ccca7a7bd601acaec4.png" id="logo" />
                    {/* <div className="heading-2" id="logo-text"><b>CRYPTO</b> ICO </div> */}
                </div>

                <div className="navbar-right heading-4">
                    <NavbarItems />
                </div>
            </div>
        </div>
    )
}
