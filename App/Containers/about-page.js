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

    const {
      offset
    } = el.current;
    
    let start = offset;
    let currentTime = 0;
    let change = offset - scrollY;
    let step = 20;
    let duration = 250;

    //http://www.timotheegroleau.com/Flash/experiments/easing_function_generator.htm
    function bezier(time, base, change, duration){
      var ts=(time/=duration)*time;
      var tc=ts*time;
      return base+change*(9.4025*tc*ts + -35*ts*ts + 28.9*tc +  -6.6*ts + -0.1*time);
    }

    function animate(timestamp){
      currentTime += step;

      let distance = bezier(currentTime, start, change, duration);

      window.scroll({
        left: 0,
        top: distance,
        behavior: 'smooth'
      });

      if(currentTime < duration && distance < offset ){
        requestAnimationFrame(animate);
      }else{
        return;
      }
    }
    requestAnimationFrame(animate);
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