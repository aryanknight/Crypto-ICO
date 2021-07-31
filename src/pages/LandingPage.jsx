import '../App.css';
import Navbar from '../Components/Navbar/Navbar';
import Particles from '../Particles';
import NavbarSmall from '../Components/Navbar/NavbarSmall';
import HoverMenu from '../Components/Navbar/HoverMenu';
import Home from '../Components/Home/Home.jsx';
import ProbAndSol from '../Components/ProbAndSol/ProbAndSol';


function LandingPage() {
  return (
    <div className="App">
      <Particles  />

{/*-------------------------- All Related to Menu------------------------- */}
      <Navbar />
      <NavbarSmall />
      <HoverMenu />

      <Home />
      <ProbAndSol />
      
    </div>
  );
}

export default LandingPage;
