import React, {useRef, useEffect, useState} from 'react';
import styled from 'styled-components';
import {SocialLinks} from '../Components/SocialLinks';
import {Intro} from '../Components/intro';
import {About} from '../Components/about';
import {Work} from '../Components/experience';
import {ProjectSection as Projects}  from '../Components/project';
import {ProjectDescription} from './projdesc-page';
import {Navigation} from '../Components/Nav';
import {Footer} from '../Components/Footer';
import {Farewell} from '../Components/Farewell';
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
  faArrowLeft
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
  faArrowLeft
);


const AppWrapper = styled.div`
  display: flex; 
  flexDirection: column; 
  justifyContent: space-between; 
  width: 100%;
  ${props => props.isLocked && `
    position: fixed;
  `}
`;

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
  }

  return(
    <AppWrapper>
      <GlobalStyle />
      <Navigation 
        scroll={scroll}
      />
      <SocialLinks 
        ref={linksEl} 
      />
      <Column>
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
      </Column>
    </AppWrapper>
  )
}