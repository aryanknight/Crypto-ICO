import '../App.css';
import Navbar from '../Components/Navbar/Navbar';
import Particles from '../Particles';
import NavbarSmall from '../Components/Navbar/NavbarSmall';
import HoverMenu from '../Components/Navbar/HoverMenu';
import Home from '../Components/Home/Home.jsx';
import ProbAndSol from '../Components/ProbAndSol/ProbAndSol';
import TokenUtility from '../Components/TokenUtility/TokenUtility';
import WhyMultipad from '../Components/WhyMultipad/WhyMultipad.jsx'


function LandingPage() {
  return (
    <div className="App">
      <Particles  />

{/*-------------------------- All Related to Menu------------------------- */}
      <Navbar />
      <NavbarSmall />
      <HoverMenu />

      <Home />
      <WhyMultipad/>
      <ProbAndSol />
      <TokenUtility />
      
    </div>
  );
}

export default LandingPage;
