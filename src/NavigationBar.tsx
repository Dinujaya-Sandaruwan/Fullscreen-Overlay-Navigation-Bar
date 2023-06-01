import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { SiSass } from 'react-icons/si';

const NavigationBar = () => {
    return (
        <div>
            <input type="checkbox" id="active" />
            <label htmlFor="active" className="menu-btn">
                <FontAwesomeIcon icon={faBars} />
            </label>
            <div className="wrapper">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Gallery</a>
                    </li>
                    <li>
                        <a href="#">Feedback</a>
                    </li>
                </ul>
            </div>
            <div className="content">
                <div className="title">Fullscreen Overlay Navigation Bar</div>
                <span className="tech">
                    <SiTypescript />
                    <FaReact />
                    <SiSass />
                </span>
            </div>
        </div>
    );
};

export default NavigationBar;
