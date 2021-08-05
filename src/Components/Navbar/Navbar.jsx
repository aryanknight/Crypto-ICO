import React from 'react';
import NavbarItems from './NavbarItems';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../Images/launch1logo.png'
export default function Navbar() {

    

    return (
        <div className='navbar'>
            <div className='navbar-cont'>
                <div className="navbar-left">
                   <a href="/">
                   <img src={logo} id="logo" />
                    </a>
                </div>

                <div className="navbar-right heading-4">
                    <NavbarItems />
                </div>
            </div>
        </div>
    )
}
