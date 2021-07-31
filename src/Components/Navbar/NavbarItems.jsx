import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Flusa from '../../Images/flagusa.png';
import Flger from '../../Images/flaggermany.png';
import Flfran from '../../Images/flagfrance.png';
import Flind from '../../Images/flagindia.png';
import { Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export default function NavbarItems() {

        const expandMenu=()=>{
            
            const items=document.getElementsByClassName("small-nav-ul")[0];
            const samllnav=document.getElementsByClassName("small-nav")[0];
            
            if(items.style.maxHeight=="20rem"){
                samllnav.style.paddingTop="0rem";
                items.style.maxHeight="0rem";
            }else{
                samllnav.style.paddingTop="4rem";
                items.style.maxHeight="20rem";
            }
            
        }

    /*  const expandMenu=(a)=>{
            const options=document.getElementsByClassName("menu-options")[a];
            options.style.display="block";  
        }

        const collapseMenu =(a)=>{
            const options=document.getElementsByClassName("menu-options")[a];
            options.style.display="none";
        }
     */

    return (        
    <>
        <div className="menu-item">Launch App</div>
        <div className="menu-item">launch your product</div>
        <div className="menu-item">Documentation</div>
        {/* <div className="menu-item">Token Sale</div>
        <div className="menu-item">Roadmap</div> */}
                    
        {/* <div className="menu-item" onMouseOver={() => expandMenu(0)} onMouseOut={() => collapseMenu(0)} >More<ExpandMoreIcon />
            <div className='menu-options'>
                <ul className='menu-ul'>
                    <li className="menu-li"><ChevronRightIcon/> App</li>
                    <li className="menu-li"><ChevronRightIcon/> Team</li>
                    <li className="menu-li"><ChevronRightIcon/> FAQ</li>
                    <li className="menu-li"><ChevronRightIcon/> Contact</li>
                    <li className="menu-li"><ChevronRightIcon/> 404</li>
                    <li className="menu-li"><ChevronRightIcon/> Sample Page</li>
                </ul>
            </div>
        </div>

        <div className="menu-item" onMouseOver={() => expandMenu(1)} onMouseOut={() => collapseMenu(1)} >
            <img src={Flusa} style={{marginRight:'5px'}}/>EN <ExpandMoreIcon />
            <div className='menu-options'>
                <ul className='menu-ul'>
                    <li className="menu-li"><ChevronRightIcon/> <img src={Flger} style={{marginRight:'5px'}}/> GN</li>
                    <li className="menu-li"><ChevronRightIcon/> <img src={Flind} style={{marginRight:'5px'}}/> IN</li>
                    <li className="menu-li"><ChevronRightIcon/> <img src={Flfran} style={{marginRight:'5px'}}/> FR</li>
                </ul>
            </div>
        </div> */}

        {/* <div className="menu-item" ><Button variant='contained' color='primary'>Sign In</Button></div> */}

        <div className="bar-menu" onClick={expandMenu}>
            <MenuIcon/>
        </div>
    </>

    )
}
