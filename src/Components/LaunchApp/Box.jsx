import React from 'react';
import BoxLogo from '../../Images/boxlogo.png';
import LinearProgress from '@material-ui/core/LinearProgress';
import './LaunchApp.css';

export default function Box() {
    return (
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
           <div style={{marginTop:'10px',borderBottom:'1px solid red'}}>Total Raise</div>
           <div className=""><b>TBA</b></div>
           <div>
               <LinearProgress value="40" variant='determinate'/>
           </div>
        </div>
    )
}
