import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import { ReactComponent as Logo } from '../../Images/medium.svg';
import {NavLink} from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-cont">
                <div className="footer-sec-1">
                    <img src="https://multipad.co/5dad980d25aa83ccca7a7bd601acaec4.png" id="logo" />
                    <div className="footer-text">
                        MultiPad is a community-governed decentralized multi-chain powered launchpad, enabling upcoming promising projects to raise funds.
                    </div>
                    <div className="footer-icons">

                        <a href="https://twitter.com/multi_pad" target="_blank"><TwitterIcon style={{color:'white'}} /></a>
                        <a href="https://telegram.me/multipad_official" target="_blank"><TelegramIcon style={{color:'white',marginLeft:'15px'}}/></a>
                        <a href="https://medium.com/@multipad.official" target="_blank">
                            <Logo fill="white" style={{width:'20px',height:'20px',marginLeft:'20px'}}/>
                        </a>
                    
                    </div>
                </div>
                <div className="footer-sec-2">
                    <div className="footer-head">
                        Useful Links
                    </div>
                    <li className="footer-li">
                        <a className="menu-link" href="#about">About Us</a>
                    </li>
                    <li className="footer-li">
                        <NavLink to="/launch-app" className="menu-link" >Launch App</NavLink>
                    </li>
                    <li className="footer-li">
                        <a className="menu-link" href="https://docs.google.com/forms/d/e/1FAIpQLSerz7SIGT-XG91WMBI1-bVpmouiBVNt0B1iW8z1VdLkIxRrHQ/viewform" target="_blank">Launch Your Project</a>
                    </li>
                    <li className="footer-li">
                        <a className="menu-link" href="https://multipad.gitbook.io/multipad/" target="_blank">Documentation</a>
                    </li>
                </div>
            </div>
        </div>
    )
}
