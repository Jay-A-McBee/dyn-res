import React, {useRef, useEffect} from 'react';
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
import {UseScrollTracking} from '../Components/ScrollHook';
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

  let aboutInView = UseScrollTracking(aboutEl);
  let introInView = UseScrollTracking(introEl);
  let workInView = UseScrollTracking(workEl);
  let projectInView = UseScrollTracking(projectEl);
  let linksInView = UseScrollTracking(linksEl);

  const scroll = (name) => {
    let el = [
      aboutEl,
      workEl, 
      projectEl
    ].filter( ref => ref.current.id === name)[0];

    el.current.scroll();
  }

  return(
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%'}}>
      <GlobalStyle />
      <Navigation 
        scroll={scroll}
      />
      <SocialLinks ref={linksEl} inView={linksInView} />
      <Column>
        <Intro ref={introEl} inView={introInView} />
        <About ref={aboutEl} inView={aboutInView} />
        <Work ref={workEl} inView={workInView} />
        <Projects ref={projectEl} inView={projectInView} />
        <Farewell />
        <Footer />*/}
      </Column>
    </div>
  )
}