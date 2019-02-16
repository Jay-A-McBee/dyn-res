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
import {useScrollPosition} from '../Components/ScrollHook';
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
    let step = 25;
    let duration = 200;

    //http://www.timotheegroleau.com/Flash/experiments/easing_function_generator.htm
    function bezier(time, base, change, duration){
      var ts=(time/=duration)*time;
      var tc=ts*time;
      return base+change*(9.4025*tc*ts + -30.6025*ts*ts + 28.9*tc +  -6.6*ts + -0.1*time);
    }

    function animate(timestamp){
      currentTime += step;

      let distance = bezier(currentTime, start, change, duration);

      window.scrollTo({
        left: 0,
        top: distance,
        behavior: 'smooth'
      });

      if(currentTime < duration && distance < offset){
        requestAnimationFrame(animate);
      }else{
        return;
      }
    }
    requestAnimationFrame(animate);
  }

  let [inView, updateScroll] = useState({
    intro: false,
    about: false,
    work: false,
    projects: false,
    links: false
  });

  let [allVisible, setVisible] = useState(false);
  let scrollPosition = useScrollPosition();

  const checkVisibility = (scrollPosition) => {

    const isInView = ({current:{offset}}) => {
      return offset - scrollPosition <= window.innerHeight || offset < window.innerHeight;
    }

    let allVisible = true;

    const refMap = [aboutEl, introEl, projectEl, linksEl, workEl].reduce( (acc,ref) => {
      acc[ref.current.id] = ref;
      return acc;
    },{})

    const newState = Object.keys(inView).reduce((newState, k) => {
      
      if(!inView[k]){
        allVisible = false;
        newState[k] = isInView(refMap[k])
      }else{
        newState[k] = true;
      }
      return newState;
    },{});

    if(allVisible){
      setVisible(true);
    }else{
      updateScroll(newState);
    }
  }

  useEffect(() => {
    checkVisibility(scrollPosition);
  },[scrollPosition])

  return(
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%'}}>
      <GlobalStyle />
      <Navigation 
        scroll={scroll}
      />
      <SocialLinks ref={linksEl} inView={inView.links || allVisible} />
      <Column>
        <Intro ref={introEl} inView={inView.intro || allVisible} />
        <About ref={aboutEl} inView={inView.about || allVisible} />
        <Work ref={workEl} inView={inView.work || allVisible} />
        <Projects ref={projectEl} inView={inView.projects || allVisible} />
        <Farewell />
        <Footer />
      </Column>
    </div>
  )
}