import React from 'react';
import Navbar from '../../Navbar/Navbar.jsx';
import NavbarSmall from '../../Navbar/NavbarSmall.jsx';
import Particles from '../../../Particles';
import Footer from '../../Footer/Footer.jsx';
import LaunchLogo from '../../../Images/launch1logo.png';
import {Table , TableBody , TableCell , TableContainer , TableHead , TableRow , Paper} from "@material-ui/core";
import { makeStyles} from "@material-ui/core/styles";
import './Launch1.css';


const useStyles = makeStyles({
    table: {
      maxWidth: 1000,
    },
    tableHead:{
        backgroundColor:'#194089'
    },
    tableHeadItem:{
        color:'white'
    }
  });

export default function Launch1() {

    const classes = useStyles();

    const items=[{no:1,alloc:0,date:'27/04/20',claimed:'0'},
                {no:2,alloc:98,date:'21/04/18',claimed:'12'},
                {no:3,alloc:85,date:'27/04/19',claimed:'30'},
                {no:4,alloc:0,date:'27/04/20',claimed:'0'},
                {no:5,alloc:98,date:'21/04/18',claimed:'12'},
                {no:6,alloc:85,date:'27/04/19',claimed:'30'}];

    return (
        <div className="launch-app">
            <Navbar />
            <NavbarSmall />
            <div style={{position:'fixed',width:'100%',height:'100vh'}}>
                <Particles />
            </div>
            <div className="launch-app-cont">
                <div className="launch-app-cont-1" style={{marginTop:'15vh'}}>
                    <div className="launch1-box-cont">
                        <div className="launch1-box">
                            
                            <div style={{display:'flex',justifyContent:'center'}}>
                                <img src={LaunchLogo} style={{width:'60%'}} />
                            </div>

                            <div style={{display:'flex',justifyContent:'space-between',marginTop:'40px'}}>
                                <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                    <div style={{fontSize:'18px'}}>Project Name</div>
                                    <div className="launch1-sub-head">MultiPad</div>
                                </div>
                                <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                    <div style={{fontSize:'18px'}}>Ticker</div>
                                    <div className="launch1-sub-head">MPAD</div>
                                </div>
                            </div>

                            <div className="launch1-box-button">
                                WEBSITE
                            </div>

                            <div style={{height:'1px',backgroundColor:'white',marginTop:'20px'}}></div>

                            <div className="launch1-sub-text">
                                MultiPad is a community governed decentralized multi-chain powered launchpad, enabling startups to raise funds. MultiPad will partner with projects and help them with marketing, go-to-market strategies, technical advice and assistance. MultiPad will be partnering with projects that show strong passion and promising vision for DeFi.
                            </div>

                        </div>

                        <div className="launch1-box">

                            <div style={{marginTop:'20px'}}>
                                0 Sold of 10000
                            </div>
                            <div className="progress-bar-cont">
                                <progress max="100" value="47" style={{width:'90%'}}></progress>
                                <div >47%</div>
                            </div>

                            <div className="launch1-mini-box" style={{marginTop:'40px'}}>
                                <div className="launch1-mini-1">
                                    <div >Round</div>
                                    <div>1</div>
                                </div>
                                <div className="launch1-mini-1">
                                    <div className="">Time Remaining</div>
                                    <div className="">1m : 0s</div>
                                </div>
                            </div>
                            <div className="launch1-mini-box">
                                <div className="launch1-mini-1">
                                        <div style={{textAlign:'center'}}>Min Allocation</div>
                                        <div>0.00001 NA</div>
                                    </div>
                                    <div className="launch1-mini-1">
                                        <div className="">Max Allocation</div>
                                        <div className="">10000 NA</div>
                                    </div>
                                </div>
                                <div className="launch1-mini-box">
                                    <div className="launch1-mini-1">
                                        <div>NA Contribution</div>
                                        <div>0.000000 NA</div>
                                    </div>
                                    <div className="launch1-mini-1">
                                        <div className="">MPAD Allocation</div>
                                        <div className="">0 MPAD</div>
                                    </div>
                                </div>
                                <div className="launch1-box-button">
                                    CONTRIBUTE
                                </div>

                            </div>

                            
                    
                    </div>

                    <div className="table-cont">
                        <TableContainer component={Paper}>
                            <Table >
                                <TableHead>
                                <TableRow className={classes.tableHead}>
                                    <TableCell style={{color:'white'}} >NO</TableCell>
                                    <TableCell align="right" style={{color:'white'}}>TOKEN ALLOCATIONS</TableCell>
                                    <TableCell align="right" style={{color:'white'}}>DATE</TableCell>
                                    <TableCell align="right" style={{color:'white'}}>TOKENS CLAIMED</TableCell>
                                    <TableCell align="right" style={{color:'white'}}>ACTIONS</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                
                                {items.map((item) =>(
                                    <TableRow style={{backgroundColor:'#ffffff01'}}>
                                        <TableCell component="th" scope="row">
                                            {item.no}
                                        </TableCell>
                                        <TableCell align="right">{item.alloc}</TableCell>
                                        <TableCell align="right">{item.date}</TableCell>
                                        <TableCell align="right">{item.claimed}</TableCell>
                                        <TableCell align="right">
                                            <button className="table-button">CLAIM</button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}
