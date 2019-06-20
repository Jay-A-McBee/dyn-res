import React, {useRef, useEffect, useState} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {SocialLinks} from '../Components/SocialLinks';
import {Navigation} from '../Components/Nav';
import {LightDarkToggle} from '../Components/Toggle';
import {useTheme} from '../Components/LightDarkHook';
import {
    SectionWrapper,
    Row,
    Column
} from '../Components/styleLayout';
import {GlobalStyle} from '../Components/globalStyles';
import {Scroll} from '../Components/ScrollHook';
import {
  faGithub, 
  faLinkedin, 
  faGoogle, 
  faReact, 
  faVuejs, 
  faNode
} from '@fortawesome/free-brands-svg-icons'
import { 
  faChevronLeft, 
  faChevronRight, 
  faBars, 
  faTimes,
  faEnvelope,
  faArrowLeft,
  faSun,
  faMoon
} from '@fortawesome/free-solid-svg-icons'

import {library} from '@fortawesome/fontawesome-svg-core'

library.add(
  faLinkedin, 
  faGithub, 
  faGoogle, 
  faReact, 
  faVuejs, 
  faNode, 
  faChevronLeft, 
  faChevronRight, 
  faBars, 
  faTimes,
  faEnvelope,
  faArrowLeft,
  faSun,
  faMoon
);


const AppWrapper = styled.div`
  display: flex; 
  flex-direction: column; 
  justify-content: space-between; 
`;

import Intro from '../Components/intro';
const About = React.lazy(() => import('../Components/about'));
const Work = React.lazy(() => import('../Components/experience'));
const Projects = React.lazy(() => import('../Components/project'));
const ProjectDescription = React.lazy(() => import('./projdesc-page'));
const Footer = React.lazy(() => import('../Components/Footer'));
const Farewell = React.lazy(() => import('../Components/Farewell'));

export default function AboutMe(){

    let aboutEl = useRef();
    let workEl = useRef();
    let projectEl = useRef();
    let introEl = useRef();
    let linksEl = useRef();

    const scroll = (name, width) => {
        let el = [
        aboutEl,
        workEl, 
        projectEl
        ].filter( ref => ref.current.id === name)[0];
        
        const {
        offsetTop,
        } = el.current.container;
        
        let startPositionY = window.pageYOffset;
        let endPositionY = offsetTop;
        
        let duration = width > 500 ? 500 : 1500;
        let startTime
        let currentPositionY
        
        function animate(timestamp){
            if(!startTime) startTime = timestamp;
            
            const defaultEasing = (t) => t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t;
            
            let progress = timestamp - startTime;
            let deltaTop = endPositionY - startPositionY;
            let changePercent = progress >= duration ? 1 : defaultEasing(progress/duration);
            
            currentPositionY = startPositionY + Math.ceil(deltaTop * changePercent);
            
            window.scroll({
                left: 0,
                top: currentPositionY,
                behavior: 'smooth'
            });
            
            if(changePercent < 1){
                requestAnimationFrame(animate);
            }else{
                return;
            }
        }

        requestAnimationFrame(animate);
    };

    let {
        theme,
        changeTheme
    } = useTheme();


    const btnStyles = {
        height: '5em',
        width: '10%',
        position: 'relative',
        top: '5em'
    };

    return(
        <ThemeProvider theme={theme}>
            <AppWrapper>
                <GlobalStyle />
                <Navigation 
                    cb={changeTheme}
                    scroll={scroll}
                />
                <SocialLinks 
                    ref={linksEl} 
                />
                <Column>
                    <React.Suspense fallback={<p></p>}>
                        <Intro 
                            ref={introEl} 
                        />
                        <About 
                            ref={aboutEl} 
                        />
                        <Work 
                            ref={workEl} 
                        />
                        <Projects 
                            ref={projectEl} 
                        /> 
                        <Farewell />
                        <Footer />
                    </React.Suspense>
                </Column>
            </AppWrapper>
        </ThemeProvider>
    )
}