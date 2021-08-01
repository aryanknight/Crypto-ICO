import React from 'react';
import Facebook from '../../Images/facebook.png';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TelegramIcon from '@material-ui/icons/Telegram';

export default function HoverMenu() {
    return (
        <div className="hover-menu">
            <div className="hover-menu-cont">
            <a href="#" target="_blank"><TwitterIcon className="hover-item" /></a>
            <a href="#" target="_blank"><GitHubIcon className="hover-item" /></a>
            <a href="#" target="_blank"><TelegramIcon className="hover-item" /></a>
            <a href="#" target="_blank"><FacebookIcon className="hover-item" /></a>
            </div>   
        </div>
    )
}
