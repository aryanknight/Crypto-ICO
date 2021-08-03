import React from 'react';
import BoxLogo from '../../Images/boxlogo.png';
import { NavLink } from 'react-router-dom';
import './LaunchApp.css';

export default function Box() {
    return (
        <NavLink to="/launch-app/1" className="menu-link">
            <div className="box">
            <div className="box-head">
                    <div className="box-head-logo">
                        <img src={BoxLogo} style={{height:'54px',width:'50px'}} alt="" />
                        <div style={{fontSize:'16px'}}>MultiPad</div>
                        <div style={{fontSize:'13px'}}><b>MPAD</b></div>
                    </div>
                    <div className="box-head-button">
                        <div className="box-button">
                            TBA
                        </div>
                    </div>
            </div>
            <div style={{marginTop:'10px',borderBottom:'1px solid white'}}>Total Raise</div>
            <div ><b>TBA</b></div>
            
            <div className="progress-bar">
                    <div style={{marginTop:'10px'}} >Progress</div>
                    <div className="progress-bar-cont">
                        <progress max="100" value="47"></progress>
                        <div >47%</div>
                    </div>     
            </div>

            <div className="allocation">
                <div className="min-alloc">
                        <div style={{fontSize:'14px',fontWeight:'400'}}>Min Allocation</div>
                        <div><b>TBA</b></div>
                </div>

                <div className="max-alloc">
                        <div style={{fontSize:'14px',fontWeight:'400'}} >Max Allocation </div>
                        <div><b>TBA</b></div>
                </div>
            </div>
            </div>
        </NavLink>
    )
}
