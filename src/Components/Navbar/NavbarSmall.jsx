import React from 'react';

export default function NavbarSmall() {
    return (
        <div className="small-nav">
            <ul className="small-nav-ul">
                <br />
                
                <li style={{cursor: 'pointer'}} className="small-nav-li">Launch App</li>
                <li style={{cursor: 'pointer'}} className="small-nav-li">Launch your product</li>
                <li style={{cursor: 'pointer'}} className="small-nav-li">Documentation</li>
                {/* <li className="small-nav-li">Token Sale</li>
                <li className="small-nav-li">Roadmap</li> */}
            </ul>
        </div>
    )
}
