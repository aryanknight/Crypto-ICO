import React from 'react';
import Logo from '../../Images/logo.png';
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
                </div>
                <div className="footer-sec-2"></div>
                <div className="footer-sec-3"></div>
            </div>
        </div>
    )
}
