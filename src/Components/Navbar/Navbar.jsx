import React from 'react';
import NavbarItems from './NavbarItems';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {

    

    return (
        <div className='navbar'>
            <div className='navbar-cont'>
                <div className="navbar-left">
                   <a href="/">
                        <img src="https://multipad.co/5dad980d25aa83ccca7a7bd601acaec4.png" id="logo" />
                    </a>
                </div>

                <div className="navbar-right heading-4">
                    <NavbarItems />
                </div>
            </div>
        </div>
    )
}
