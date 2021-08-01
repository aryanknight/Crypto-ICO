import React from 'react';
import {Button} from "@material-ui/core";
import FeatureImg from '../../Images/featureimg.png';
import './Home.css';

export default function Home() {
    return (
        <div className="home">
            <div className="home-cont-1">
                
                <div className="home-left">
                    <div className="home-text-1">
                        <span style={{fontWeight:'bolder'}}>MultiPad</span> is a community governed, decentralized multi-chain powered launchpad.
                    </div>
                    <div className="home-buttons">
                        <Button variant="contained" color="primary" id="home-btn-1" >Purchase Token</Button>
                        <Button variant="contained" color="primary" id="home-btn-2" style={{marginLeft:'20px'}}>Whitepaper</Button>
                    </div>
                </div>
                
                <div className="home-right">
                    <img id="anim-img" src="https://multipad.co/162fc25721d32ca0accf57ebe0e5d952.gif" alt="" />
                </div>
            </div>

            <div className="home-cont-2">
                
                <div className="home-text-2-1" >
                    <div className="about-shade">ABOUT</div>
                    WHAT IS MULTIPAD
                </div>
                <div className="home-text-2 home-text-2-2" >
                    <div id="intro" >
                        MultiPad is a community-governed decentralized multi-chain powered launchpad, enabling upcoming promising projects to raise funds. MultiPad will also partner with these projects and help them with marketing, go-to-market strategies, technical advice and assistance wherever needed.
                    </div>    
                </div>

                <div className="home-cont-2-1">
                    <div className="home-cont-2-left">
                        <div className="home-cont-2-text-3">
                        As our tagline stands, at MultiPad, we are fully committed to our strong community and every decision is taken by keeping the interest of the community in mind.
                        </div>
                        <div className="home-cont-2-text-3">
                            This is the sole reason why strategic investment groups and Venture Capitalists will pay the same token price as our IDO investors.
                            <br/><br/>
                            We want to ensure that the concentration of power (to vote/stake/win launchpad lotteries) is not in the hands of early investors getting MPAD at low prices, to the detriment of our community's interests.
                            <br/><br/>
                            BinanceSmartChain/ Polygon/ Solana/ Avalanche/ Cardano were chosen as the underlying blockchain to allow for low-cost and high-speed transactions starting with BinanceSmartChain implementation.
                        </div>

                    </div>
                    <div className="home-cont-2-right">
                        <img src={FeatureImg} alt="" id="feature-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}