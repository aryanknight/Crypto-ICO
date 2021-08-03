import React from 'react';

export default function NavbarSmall() {
    return (
        <div className="small-nav">
            <ul className="small-nav-ul">
                <br />
                
                <li style={{cursor: 'pointer'}} className="small-nav-li">
                    <a href="/launch-app" className="menu-link" target="_blank">Launch App</a>
                </li>
                <li style={{cursor: 'pointer'}} className="small-nav-li">
                    <a href="#" className="menu-link" target="_blank">Launch Your Product</a>
                </li>
                <li style={{cursor: 'pointer'}} className="small-nav-li">
                    <a className="menu-link" href="https://multipad.gitbook.io/multipad/" target="_blank">Documentation</a>
                </li>
                <li style={{cursor: 'pointer'}} className="small-nav-li">
                    <a href="https://multipad.co/77b74b2ad8f9c55e8e05d25520711cc2.pdf" className="menu-link" target="_blank">One Pager</a>
                </li>
                {/* <li className="small-nav-li">Token Sale</li>
                <li className="small-nav-li">Roadmap</li> */}
            </ul>
        </div>
    )
}
