import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Particles from '../../Particles';
import Box from './Box.jsx';
import './LaunchApp.css';

export default function LaunchApp() {
    return (
        <div className="launch-app">
            <Navbar />
            <Particles />
            <Box />
        </div>
    )
}
