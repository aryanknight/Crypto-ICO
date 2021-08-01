import React from 'react';
import Prob1 from '../../Images/prob-1.png';
import Prob2 from '../../Images/prob-2.png';
import './ProbAndSol.css';

export default function ProbAndSol() {
    return (
        <div className="prob-sol">
            <div className="prob-cont">
                <div className="head-text">
                    <div className="shade-text">SOLUTIONS</div>
                    PROBLEM & SOLUTIONS
                </div>
                <div className="para">
                    <div className="para-cont">
                        More than $40 million in assets were placed under restraint pending forfeiture, and more than 30
                        Liberty Reserve exchanger domain names were seized.
                    </div>
                </div>

                <div className="prob-cont-1">
                    <div className="prob-cont-text">
                        <div className="prob-cont-text-head">PROBLEMS</div>
                        <div className="prob-cont-text-para">
                            Different pieces of the new Internet are born as building blocks, but there’s no way for them to work together.
                            <br /><br />
                            Even interoperating new technologies with old centralised resources can prove useful in making the paradigm shift from Web 2 to Web 3 happen. Now we own our data, we can prove that we own what we have and have created it on different platforms, but how do we put it together into a whole new cohesive framework.
                        </div>
                    </div>
                    <div className="prob-cont-img">
                        <img src={Prob1} className="prob-img"/>
                    </div>
                </div>

                <div className="prob-cont-1" id="prob-2" style={{marginTop:'20px'}} >
                    <div className="prob-cont-img">
                        <img src={Prob2} className="prob-img"/>
                    </div>
                    <div className="prob-cont-text">
                        <div className="prob-cont-text-head">SOLUTIONS</div>
                        <div className="prob-cont-text-para">
                            Decentralized cryptocurrency is produced by the entire cryptocurrency system collectively, at a rate which is defined when the system is created and which is publicly known.
                            <br /><br />
                            In centralized banking and economic systems such as the Federal Reserve System, corporate boards or governments control the supply of currency by printing units of fiat money or demanding additions to digital banking ledgers.
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
