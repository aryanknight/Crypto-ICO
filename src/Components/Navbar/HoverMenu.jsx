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
                <TwitterIcon className="hover-item" />
                <GitHubIcon className="hover-item" />
                <TelegramIcon className="hover-item" />
                <FacebookIcon className="hover-item" />
            </div>   
        </div>
    )
}
