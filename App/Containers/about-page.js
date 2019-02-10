import React, {useState} from 'react';
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
    
  let [active, select] = useState('intro');
  
  const selectSection = (name) => {
    select(name);
  };

  return(
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%'}}>
      <GlobalStyle />
      <Navigation select={selectSection} />
      <SocialLinks />
      <Column>
        <Intro />
        <About />
        <Work />
        <Projects />
        <Farewell />
        <Footer />
      </Column>
    </div>
  )
}