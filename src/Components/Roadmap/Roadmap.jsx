import React, { useEffect, useState } from 'react';
import { Chrono } from "react-chrono";
import './Roadmap.css';

export default function Roadmap() {

    const [mode,setMode]=useState("VERTICAL_ALTERNATING")
    
    useEffect(()=>{
        if(window.screen.width<750){
            setMode("VERTICAL")
        }
    },[]);
    
    return (
        <div className="roadmap">
            <div className="roadmap-cont">
                <div className="head-text" data-aos="fade-up">
                    <div className="shade-text">TIMELINE</div>
                        ROADMAP
                </div>
                <div className="roadmap-cont-1">
                    <div className="timeline">

                        <Chrono mode={mode} cardWidth="100%" cardHeight="100" useReadMore={false} theme={{ 
                            primary: "#496BD9",
                            secondary: "white",
                            cardBgColor: "#FFC40000",
                            cardForeColor: "white",
                            titleColor: "white"
                        }}>
                            <div className="card">
                                <div className="card-date">
                                    March 2021
                                </div>
                                <div className="card-options">
                                    <li className="card-li">
                                        Market Research
                                    </li>
                                </div>

                            </div>

                            <div className="card">
                                <div className="card-date">
                                    June 2021
                                </div>
                                <div className="card-options">
                                    <li className="card-li">
                                        Launch platform
                                    </li>
                                    <li className="card-li">
                                        Public Token Sale
                                    </li>
                                    <li className="card-li">
                                        Upgrade platform with staking
                                    </li>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-date">
                                    August 2021
                                </div>
                                <div className="card-options">
                                    <li className="card-li">
                                        Implement new blockchain - Polygon & Solana 
                                    </li>
                                    <li className="card-li">
                                        Upgrade Platform version
                                    </li>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-date">
                                    December 2021
                                </div>
                                <div className="card-options">
                                    <li className="card-li">
                                        Implement new blockchain - Avalanche & Cardano
                                    </li>
                                    <li className="card-li">
                                        Launch Incubator 
                                    </li>
                                </div>
                            </div>
                            
                        </Chrono>
                    </div>
                </div>
            </div>
        </div>
    )
}
