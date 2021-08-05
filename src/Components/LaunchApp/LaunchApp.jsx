import React ,{useState,useEffect} from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import NavbarSmall from '../Navbar/NavbarSmall.jsx';
import Particles from '../../Particles';
import Footer from '../Footer/Footer.jsx';
import Tabs from './Tabs.jsx';
import Upcoming from './Pages/Ucoming.jsx';
import HoverMenu from '../../Components/Navbar/HoverMenu';
import './LaunchApp.css';

export default function LaunchApp() {

    const [tab,setTab]=useState(<Upcoming/>);

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);

    return (
        <div className="launch-app">
            <Navbar />
            <NavbarSmall />
            <HoverMenu />
            <div style={{position:'fixed',width:'100%',height:'100vh'}}>
                <Particles />
            </div>
            
            <Tabs setTab={setTab}/>
            <div className="launch-app-cont">
                <div className="launch-app-cont-1">
                    {tab}
                </div>
            </div>

            <Footer />
        </div>
    )
}
