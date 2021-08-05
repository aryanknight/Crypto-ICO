import React from 'react';
import PieChart from '../../Images/piechart.png'
import './Tokenomics.css'; 

export default function Tokenomics() {
    return (
        <div className="tokenomics">
            <div className="tokenomics-cont">
                <div className="head-text" data-aos="fade-up">
                    <div className="shade-text">TOKENOMICS</div>
                        TOKENOMICS
                </div>
                <div className="tokenomics-cont-1" >
                    
                    <div className="tokenomics-left" data-aos="fade-up">
                        <img src={PieChart} id="pie" />
                    </div>

                    <div className="tokenomics-right">
                        <div className="token-head" data-aos="fade-up">
                            The token distribution is projected as follows: 
                        </div>
                        <div className="token-para-1" data-aos="fade-up">
                            Max Supply: 100,000,000 MPAD
                        </div>
                        <div className="token-para-1" data-aos="fade-up">
                            Company reserve: 25% (Fully locked for 1 year)
                        </div>
                        <div className="token-para-1" data-aos="fade-up">
                            Marketing, Staking Rewards and Ecosystem: 20% (10% unlocked at TGE, 10% unlocked each month)
                        </div>
                        <div className="token-para-1" data-aos="fade-up">
                            Team: 20% ( 6 months cliff, 10% unlocked each month thereafter)
                        </div>
                        <div className="token-para-1" data-aos="fade-up">
                            Liquidity: 10% (20% unlocked at TGE , 20% unlocked each month thereafter)
                        </div>
                        <div className="token-para-1" data-aos="fade-up">
                            Public Token Sale: 15% (40% unlocked at TGE followed by 20% every two weeks)
                        </div>
                        <div className="token-para-1" data-aos="fade-up">
                            Partners: 10% (20% unlocked at TGE followed by 20% every two weeks)
                        </div>
                    </div>
                
                </div>
            </div>
            
        </div>
    )
}
