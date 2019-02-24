import React, {useRef, useEffect, useState} from 'react';
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
  faEnvelope
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
  faEnvelope
);

export default function AboutMe(){

  let aboutEl = useRef();
  let workEl = useRef();
  let projectEl = useRef();
  let introEl = useRef();
  let linksEl = useRef();

  const scroll = (name) => {
    let el = [
      aboutEl,
      workEl, 
      projectEl
    ].filter( ref => ref.current.id === name)[0];
debugger
    const {
      offset
    } = el.current;

    let startPositionY = window.scrollY;
    let endPositionY = offset;
    let duration = 150;
    let startTime
    let currentPositionY

    function animate(timestamp){
      if(!startTime) startTime = timestamp;

      const defaultEasing = function (t) { return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t };

      let progress = timestamp - startTime;
      let deltaTop = endPositionY - startPositionY;
      let rateOfChange = progress >= duration ? 1 : defaultEasing(progress/duration);

      currentPositionY = startPositionY + Math.ceil(deltaTop * rateOfChange);

      window.scroll({
        left: 0,
        top: currentPositionY,
        behavior: 'smooth'
      });

      if(rateOfChange < 1){
        requestAnimationFrame(animate);
      }else{
        return;
      }
    }
    setTimeout(() => requestAnimationFrame(animate), 100);
  }

  return(
    <div style={{
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        width: '100%'
      }}
    >
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
    </div>
  )
}