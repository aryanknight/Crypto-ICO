import React ,{useState} from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';
import { ReactComponent as Logo } from '../../Images/medium.svg';

export default function HoverMenu() {

    /*-----------------Use only if not using Material Icons------------*/ 
    const [fill,setFill]=useState("#383838");
    const fillColor =()=>{
        setFill("#000000");
    }
    const remColor =()=>{
        setFill("#383838");
    }

    return (
        <div className="hover-menu">
            <div className="hover-menu-cont">
            <a href="https://twitter.com/multi_pad" target="_blank"><TwitterIcon className="hover-item" /></a>
            <a href="https://telegram.me/multipad_official" target="_blank"><TelegramIcon className="hover-item" /></a>

            {/* This is not a Material Icon and also use svg icon of 20*20px for this*/}
            <a href="https://medium.com/@multipad.official" target="_blank">
                <Logo onMouseOver={fillColor} onMouseLeave={remColor} className="hover-item" fill={fill} style={{width:'20px',height:'20px'}}/>
            </a>
            
            </div>   
        </div>
    )
}
