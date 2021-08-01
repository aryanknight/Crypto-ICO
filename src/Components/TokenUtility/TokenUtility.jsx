import React from 'react';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import './TokenUtility.css';

export default function TokenUtility() {
    return (
        <div className="token">
            <div className="token-cont">
                <div className="head-text">
                    <div className="shade-text">UTILITY</div>
                        TOKEN UTILITY
                </div>
                <div className="token-cont-1">

                    <div className="token-cont-left">
                        <div className="token-box">
                            <div className="token-text-box">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit  term concerning a type of government-issued document has proliferated, taking a somewhat new 
                            </div>
                            <div className="token-doc-box"  >
                                <a href="https://multipad.gitbook.io/multipad/" target="_blank" id="docs-link">Read Documentation...</a>
                            </div>
                            <img src="https://multipad.co/5dad980d25aa83ccca7a7bd601acaec4.png" id="token-logo" />
                        </div>
                    </div>

                    <div className="token-cont-right">

                        <div className="token-head">
                            Fair launchpad
                        </div>
                        <div className="token-para">
                            New startups can showcase their product and raise funds through Initial Dex Offering. The only way to participate in the idos would be by staking MPAD tokens to gain a lottery ticket.
                        </div>
                        <div className="token-head">
                            Farming ( Staking ) 
                        </div>
                        <div className="token-para">
                            Liquidity providers will be able to generate additional rewards for contributing. Key pools will be incentivized with MPAD tokens. 
                        </div>
                        <div className="token-head">
                            Governance
                        </div>
                        <div className="token-para">
                            MultiPad community will vote for projects they want to be launched first, changes to lottery modus operandi.
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
