import React from 'react';
import Banner from '../../Images/banner.gif';
import Circles from "../../Images/circles.png";
import FeatureImg from '../../Images/featureimg.png';
import Particles from '../../Particles';
import Polygon from '../../Images/polygoncolor.png';
import Bnb from '../../Images/bnb.png';
import Ava from '../../Images/ava.png';
import Cardano from '../../Images/cardano.png';
import Solana from '../../Images/solana.png';
import './Home.css';

export default function Home() {
    return (
        <div className="home" >
            <div className="home-cont-1" data-aos="fade-up">
                
                <div className="home-left">
                    <div className="home-text-1">
                        <span style={{fontWeight:'bolder'}}>MultiPad</span> is a community governed, decentralized multi-chain powered launchpad.
                    </div>
                    <div className="home-buttons">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeTfJXmv_PBEHC0klKOyuoe215ZeDPemumm1UgYMAR_pN6I1w/viewform" className='menu-link' target="_blank">
                            <button className="button-style" id="home-btn-1" >Apply For Whitelist</button>
                        </a>
                    </div>
                </div>
                
                <div className="home-right" >
                    <img id="anim-img" src={Banner} alt="" />
                </div>
            </div>

            <div className="home-cont-2" >
                <img id="home-circles" src={Circles} />

                <div className="home-text-2-1" data-aos="fade-up">
                    <div className="about-shade" id="about">ABOUT</div>
                    WHAT IS MULTIPAD
                </div>
                <div className="home-text-2 home-text-2-2" data-aos="fade-up">
                    <div id="intro" >
                        MultiPad is a community-governed decentralized multi-chain powered launchpad, enabling upcoming promising projects to raise funds. MultiPad will also partner with these projects and help them with marketing, go-to-market strategies, technical advice and assistance wherever needed.
                    </div>    
                </div>

                <div className="home-cont-2-1" data-aos="fade-up">
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
                    <div className="home-cont-2-right" data-aos="fade-up">
                        <img src={FeatureImg} alt="" id="feature-img" />
                    </div>
                </div>


                <div className="backed-by" data-aos="fade-up">
                        <Particles />
                        <div className="backed-by-head">POWERED BY</div>
                        <div className="backed-by-cont">
                            <div className="powered-by-img-cont">
                                <img src={Polygon}  />
                            </div>
                            <div className="powered-by-img-cont">
                                <img src={Bnb} alt="" />
                            </div>
                            <div className="powered-by-img-cont">
                                <img src={Ava} />
                            </div>
                            <div className="powered-by-img-cont">
                                <img src={Solana} />
                            </div>
                            <div className="powered-by-img-cont">
                                <img src={Cardano} />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}