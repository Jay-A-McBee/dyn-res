import React, {useState} from 'react';
import {Intro} from '../Components/intro';
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
            <ProjectPage />
        </div>
    )
}