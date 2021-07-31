import React from 'react';
import {Button} from "@material-ui/core";
import './Home.css';

export default function Home() {
    return (
        <div className="home">
            <div className="home-cont">
                
                <div className="home-left">
                    <div className="home-text-1">
                        Crypto ICO is modern, clean and gradient ui ico most trending
                            template of 2018
                    </div>
                    <div className="home-text-2">
                        First decentralized marketing platform that allows <br/>merchants and affiliates.
                    </div>
                    <div className="home-buttons">
                        <Button variant="contained" color="primary" id="home-btn-1" >Purchase Token</Button>
                        <Button variant="contained" color="primary" id="home-btn-2" style={{marginLeft:'20px'}}>Whitepaper</Button>
                    </div>
                </div>
                
                <div className="home-right">
                    
                </div>
            </div>
        </div>
    )
}
