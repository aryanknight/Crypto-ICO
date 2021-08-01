import '../App.css';
import { useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Particles from '../Particles';
import NavbarSmall from '../Components/Navbar/NavbarSmall';
import HoverMenu from '../Components/Navbar/HoverMenu';
import Home from '../Components/Home/Home.jsx';
import ProbAndSol from '../Components/ProbAndSol/ProbAndSol';
import TokenUtility from '../Components/TokenUtility/TokenUtility';
import WhyMultipad from '../Components/WhyMultipad/WhyMultipad.jsx'
import Loading from '../Images/loading-scrn.gif';
import gsap from 'gsap';


function LandingPage() {

  // useEffect(() => {
  //   gsap.to("#loader",2,{y:"-100%",delay:3,zIndex:1000,ease:"power3.in"});
  // }, []);


  return (
    <div className="App">
{/*----------------------------Loading Screen----------------------------- */}
      
      {/* <div id="loader" style={{maxWidth:'100vw' ,width:'100vw', height:'100vh',maxHeight:'100vh',position:'absolute'}}>
        <img src={Loading} style={{width:'100vw', height:'100vh' , position:'absolute' , zIndex:'1000'}} />
      </div> */}
      
      
      <Particles  />

{/*-------------------------- All Related to Menu------------------------- */}
      
      <Navbar />
      <NavbarSmall />
      <HoverMenu />

{/* -------------------------Sections--------------------------------------*/}
      
      <Home />
      <WhyMultipad/>
      <ProbAndSol />
      <TokenUtility />
      
    </div>
  );
}

export default LandingPage;
