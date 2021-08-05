import React ,{useEffect}from 'react';
import Navbar from '../../Navbar/Navbar.jsx';
import NavbarSmall from '../../Navbar/NavbarSmall.jsx';
import Particles from '../../../Particles';
import Footer from '../../Footer/Footer.jsx';
import LaunchLogo from '../../../Images/launch1logo.png';
import {Table , TableBody , TableCell , TableContainer , TableHead , TableRow , Paper} from "@material-ui/core";
import HoverMenu from '../../../Components/Navbar/HoverMenu';
import { makeStyles} from "@material-ui/core/styles";
import './Launch1.css';


const useStyles = makeStyles({
    table: {
      maxWidth: 1000,
    },
    tableHead:{
        backgroundImage: "linear-gradient(40deg, #f959ff, #b700ff)"
    },
    tableHeadItem:{
        color:'white'
    }
  });

export default function Launch1() {

    const classes = useStyles();

    const buttonClickContribute=()=>{
        // write function here
        console.log('Contribute button clicked');
    }

    const buttonClickWebsite=()=>{
        // write function here
        console.log('Website button clicked');
    }

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);

    
    //Items for table

    const items=[{no:1,alloc:0,date:'-',claimed:'0'},
                {no:2,alloc:0,date:'-',claimed:'0'},
                {no:3,alloc:0,date:'-',claimed:'0'},
                {no:4,alloc:0,date:'-',claimed:'0'},
                ];

    return (
        <div className="launch-app">

            <Navbar />
            <NavbarSmall />
            <HoverMenu />
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

                            <div className="launch1-box-button" onClick={buttonClickWebsite}>
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
                                <progress max="100" value="0" style={{width:'90%'}}></progress>
                                <div >0%</div>
                            </div>

                            <div className="launch1-mini-box" style={{marginTop:'40px'}}>
                                <div className="launch1-mini-1">
                                    <div >Round</div>
                                    <div>1</div>
                                </div>
                                <div className="launch1-mini-1">
                                    <div className="">Time Remaining</div>
                                    <div className="">0m : 0s</div>
                                </div>
                            </div>
                            <div className="launch1-mini-box">
                                <div className="launch1-mini-1">
                                        <div style={{textAlign:'center'}}>Min Allocation</div>
                                        <div>0.0 N/A</div>
                                    </div>
                                    <div className="launch1-mini-1">
                                        <div className="">Max Allocation</div>
                                        <div className=""> N/A</div>
                                    </div>
                                </div>
                                <div className="launch1-mini-box">
                                    <div className="launch1-mini-1">
                                        <div>N/A Contribution</div>
                                        <div>N/A</div>
                                    </div>
                                    <div className="launch1-mini-1">
                                        <div className="">MPAD Allocation</div>
                                        <div className="">0 MPAD</div>
                                    </div>
                                </div>
                                <div className="launch1-box-button" onClick={buttonClickContribute}>    
                                    CONTRIBUTE
                                </div>

                            </div>

                            
                    
                    </div>

                    <div className="table-cont">
                        <TableContainer component={Paper}>
                            <Table  >
                                <TableHead>
                                <TableRow style={{backgroundImage: 'linear-gradient(40deg, #252525, #3503be)'}}>
                                    <TableCell style={{color:'white'}} >NO</TableCell>
                                    <TableCell align="right" style={{color:'white'}}>TOKEN ALLOCATIONS</TableCell>
                                    <TableCell align="right" style={{color:'white'}}>DATE</TableCell>
                                    <TableCell align="right" style={{color:'white'}}>TOKENS CLAIMED</TableCell>
                                    <TableCell align="right" style={{color:'white'}}>ACTIONS</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                
                                {items.map((item) =>(
                                    <TableRow style={{backgroundImage: 'linear-gradient(40deg, #b4b4b4, #b4b4b4)'}} >
                                        <TableCell component="th" scope="row" >
                                            {item.no}
                                        </TableCell>
                                        <TableCell  align="right" >{item.alloc}</TableCell>
                                        <TableCell  align="right" >{item.date}</TableCell>
                                        <TableCell  align="right" >{item.claimed}</TableCell>
                                        <TableCell  align="right">
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
