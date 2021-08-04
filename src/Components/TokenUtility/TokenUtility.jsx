import React from 'react';
import OurCoin from "../../Images/ourcoin.png";
import Circles from "../../Images/circles.png";
import './TokenUtility.css';

export default function TokenUtility() {
    return (
        <div className="token">
            <img src={Circles} id="utility-circle" />
            <div className="token-cont">
                <div className="head-text" data-aos="fade-up">
                    <div className="shade-text">UTILITY</div>
                        TOKEN UTILITY
                </div>
                <div className="token-cont-1">

                    <div className="token-cont-left" data-aos="fade-up">
                            <img src={OurCoin} id="our-coin"/>
                    </div>

                    <div className="token-cont-right">

                        <div className="token-head" data-aos="fade-up">
                            Fair launchpad
                        </div>
                        <div className="token-para" data-aos="fade-up">
                            New startups can showcase their product and raise funds through Initial Dex Offering. The only way to participate in the idos would be by staking MPAD tokens to gain a lottery ticket.
                        </div>
                        <div className="token-head" data-aos="fade-up">
                            Farming ( Staking ) 
                        </div>
                        <div className="token-para" data-aos="fade-up">
                            Liquidity providers will be able to generate additional rewards for contributing. Key pools will be incentivized with MPAD tokens. 
                        </div>
                        <div className="token-head" data-aos="fade-up">
                            Governance
                        </div>
                        <div className="token-para" data-aos="fade-up">
                            MultiPad community will vote for projects they want to be launched first, changes to lottery modus operandi.
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
