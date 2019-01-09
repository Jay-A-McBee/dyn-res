import React, {useState} from 'react';
import {Intro} from '../Components/intro';
import {About} from '../Components/About';
import {ProjectPage}  from './project-page';
import {ProjectDescription} from './projdesc-page';
import Carousel from '../Components/carousel';
import '../style.css';

export default function AboutMe(){


    let [open, toggleBio] = useState(false);

    const toggle = () => {
        toggleBio(!open);
    }

    
    let [active, select] = useState(null);
    
    const selectProject = (event) => {
        const {name} = event.nativeEvent.target;
        select(name);
    };

    const clearProject = () => {
        select(null);
    }

    return(
        <div>
            <Intro 
                open={open}
                toggleBio={toggle}
            />
            <div id="About">
                <About />
            </div>
            <div id="Experience">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div id="Projects">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    )
}