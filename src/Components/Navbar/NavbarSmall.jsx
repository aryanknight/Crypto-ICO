import React from 'react';
import { NavLink } from 'react-router-dom';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import { ReactComponent as Logo } from '../../Images/medium.svg';

export default function NavbarSmall() {
    return (
        <div className="small-nav">
            <ul className="small-nav-ul">
                <br />
                
                <li style={{cursor: 'pointer'}} className="small-nav-li">
                    <NavLink to="/launch-app" className="menu-link">Launch App</NavLink>
                </li>
                <li style={{cursor: 'pointer'}} className="small-nav-li">
                    <NavLink to="/" className="menu-link" >Launch Your Product</NavLink>
                </li>
                <li style={{cursor: 'pointer'}} className="small-nav-li">
                    <a className="menu-link" href="https://multipad.gitbook.io/multipad/" target="_blank">Documentation</a>
                </li>
                <li style={{cursor: 'pointer'}} className="small-nav-li">
                    <a href="https://multipad.co/77b74b2ad8f9c55e8e05d25520711cc2.pdf" className="menu-link" target="_blank">One Pager</a>
                </li>

                <li style={{cursor: 'pointer'}} className="small-nav-li">
                    <a href="https://twitter.com/multi_pad" style={{margin:'0 10px'}} className="menu-link" target="_blank">
                        <TwitterIcon/>
                    </a> 
                    <a href="https://telegram.me/multipad_official" style={{margin:'0 10px'}} className="menu-link" target="_blank">
                        <TelegramIcon />
                    </a> 
                    <a href="https://medium.com/@multipad.official" style={{margin:'0 10px'}} className="menu-link" target="_blank">
                        <Logo fill="#ffffff" style={{width:'20px',height:'20px'}}/>
                    </a>    
                        
                        
                </li>
                {/* <li className="small-nav-li">Token Sale</li>
                <li className="small-nav-li">Roadmap</li> */}
            </ul>
        </div>
    )
}
