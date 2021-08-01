import React from 'react';
import ManGif from '../../Images/man.gif';
import Circles from "../../Images/circles.png";
import "./WhyMultipad.css"

export default function WhyMultipad() {
    return (
        <div className="why-multi" >
            <img id="why-circles" src={Circles} />
            <div className="why-multi-cont">
                <div className="head-text" data-aos="fade-up">
                    <div className="shade-text">WHY</div>
                        WHY MULTIPAD
                </div>
                <div className="para" data-aos="fade-up">
                        <div className="para-cont">
                        The current leading launchpads are suffering from the below issues which inspired us to develop a fair and more robust Launchpad.
                        </div>
                    </div>
                <div className="why-multi-cont-1" >
                    
                    <div className="why-multi-left" data-aos="fade-up">
                        <div className="image-container">
                            <img src={ManGif} id="man-gif"/>
                        </div>    
                    </div>

                    <div className="why-multi-right">
                        <div className="token-head" data-aos="fade-up">
                            High gas fees: 
                        </div>
                        <div className="token-para" data-aos="fade-up">
                            It costs over $200 on ETH to claim and sell one’s ido tokens which is a major chunk for small investors. Claiming vested tokens cost as much as the token value in certain situations. Multipad is concentrating ONLY on low fees blockchains,avoiding high transaction fees altogether.
                        </div>
                        <div className="token-head" data-aos="fade-up">
                             Low allocations: 
                        </div>
                        <div className="token-para" data-aos="fade-up">
                            Many of the leading launchpads need you to hold $5000+ native tokens and provide a very small allocation in return.Staking a certain amount of MPAD would give you 1 lottery allocation and ample allocation if you have a winning Lottery. MPAD will also implement badluck protection so that everyone gets a fair chance to win.
                        </div>
                        <div className="token-head" data-aos="fade-up">
                            Multiple tokens for multiple chains:
                        </div>
                        <div className="token-para" data-aos="fade-up">
                            Every major project has a monopoly on certain chain projects. In order to participate in different blockchains you need to hold different launchpad tokens. Multipad solves all this, holding MPAD would enable you to participate in launchpads on Binance smart chain, Polygon , Avalanche and Cardano.
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}
