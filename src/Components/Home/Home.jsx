import React from 'react';
import {Button} from "@material-ui/core";
import './Home.css';

export default function Home() {
    return (
        <div className="home">
            <div className="home-cont">
                
                <div className="home-left">
                    <div className="home-text-1">
                    MultiPad is a community governed, decentralized multi-chain powered Launchpad.

                    </div>
                    {/* <div className="home-text-2">
                        First decentralized marketing platform that allows <br/>merchants and affiliates.
                    </div> */}
                    <div className="home-buttons">
                        <Button style={{color: 'white',backgroundImage: 'linear-gradient(to right bottom, #000e52, #0f206b, #1c3284, #27469f, #315aba, #3166c8, #3173d7, #3080e5, #2588e9, #198fed, #0b97f0, #009ef3)'}} >Purchase Token</Button>
                       
                    </div>
                </div>
                
                <div className="home-right">
                    <img src="https://multipad.co/162fc25721d32ca0accf57ebe0e5d952.gif" alt="" />
                </div>
            </div>
        </div>
    )
}
