import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';


const Logo = () => {
    return (
        <Tilt tiltMaxAngleX={50} tiltMaxAngleY={50} className="tiltEffect">
            <div className="pa3 logo br2 shadow-2">
                <img src={brain} alt="brain" />
            </div>
        </Tilt>
    )
}

export default Logo;