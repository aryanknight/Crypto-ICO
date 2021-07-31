import React from 'react';
import {Button} from "@material-ui/core";
import './Home.css';

export default function Home() {
    return (
        <div className="home">
            <div className="home-cont-1">
                
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
                    <img src="https://multipad.co/162fc25721d32ca0accf57ebe0e5d952.gif" alt="" />
                </div>
            </div>

            <div className="home-cont-2">
                <div className="home-text-2-1" >
                    <div className="about-shade">ABOUT</div>
                    WHAT IS CRYPTO ICO
                </div>
                <div className="home-text-2 home-text-2-2" >
                    <div style={{maxWidth:'50%',textAlign:'center'}}>
                        Crypto ICO aims to disrupt the cryptotrading industry by lowering the barrier
                        to creating algorithmic trading models.
                    </div>    
                </div>
            </div>
        </div>
    )
}