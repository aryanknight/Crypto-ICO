import '../App.css';
import { useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Particles from '../Particles';
import NavbarSmall from '../Components/Navbar/NavbarSmall';
import HoverMenu from '../Components/Navbar/HoverMenu';
import Home from '../Components/Home/Home.jsx';
import ProbAndSol from '../Components/ProbAndSol/ProbAndSol';
import TokenUtility from '../Components/TokenUtility/TokenUtility';
import Tokenomics from '../Components/Tokenomics/Tokenomics';
import TokenSale from '../Components/TokenSale/TokenSale';
import WhyMultipad from '../Components/WhyMultipad/WhyMultipad.jsx';
import Roadmap from '../Components/Roadmap/Roadmap';
import FAQ from '../Components/FAQ/FAQ.jsx';
import Footer from '../Components/Footer/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from '../Images/loading-scrn.gif';
import gsap from 'gsap';


function LandingPage() {

  useEffect(() => {

    // gsap.to("#loader",2,{y:"-100%",delay:3,zIndex:1000,ease:"power3.in"});
    AOS.init({duration:1500,mirror:false,once:true,offset: 50});
  }, []);


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
      {/* <ProbAndSol /> */}
      <TokenUtility />
      <Tokenomics />
      {/* <TokenSale/> */}
      <Roadmap/>
      <FAQ />
      <Footer />
      
    </div>
  );
}

export default LandingPage;
