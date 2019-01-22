import React, {useState} from 'react';
import {SocialLinks} from '../Components/SocialLinks';
import {Intro} from '../Components/intro';
import {About} from '../Components/About';
import {Work} from '../Components/experience';
// import {ProjectPage}  from './project-page';
import {ProjectDescription} from './projdesc-page';
import Carousel from '../Components/carousel';
import {Navigation} from '../Components/Nav';
import {
    SectionWrapper,
    Row,
    Column
} from '../Components/styleLayout';
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

  const work = {
    ClickTripz: {
      title: 'Software Engineer @',
      href: '//www.clicktripz.com',
      dates: 'March 2017 - Present',
      description: 'CT Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    SPLT: {
      title: 'Software Engineer @',
      href: '//www.splt.io',
      dates: 'Sept 2016 - April 2017',
      description: 'SPLT Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    HackReactor: {
      title: 'Software Engineering Student',
      dates: 'March 2016 - June 2016',
      description: 'HackReactor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }

  return(
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Navigation />
      <Row>
        <SocialLinks />
        <Column>
          <Intro />
          <About />
          <Work
            workDescriptions={work}
          />
        </Column>
      </Row>
    </div>
  )
}