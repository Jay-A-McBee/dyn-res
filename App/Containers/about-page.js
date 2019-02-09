import React, {useState} from 'react';
import {SocialLinks} from '../Components/SocialLinks';
import {Intro} from '../Components/intro';
import {About} from '../Components/about';
import {Work} from '../Components/experience';
import {ProjectSection as Projects}  from '../Components/project';
import {ProjectDescription} from './projdesc-page';
import {Navigation} from '../Components/Nav';
import {Footer} from '../Components/Footer';
import {
    SectionWrapper,
    Row,
    Column
} from '../Components/styleLayout';
import '../style.css';
import {fab} from '@fortawesome/free-brands-svg-icons'
import {library} from '@fortawesome/fontawesome-svg-core'

library.add(fab);

export default function AboutMe(){
    
  let [active, select] = useState('intro');
  
  const selectSection = (name) => {
    select(name);
  };

  const work = {
    ClickTripz: {
      title: 'Software Engineer @',
      href: '//www.clicktripz.com',
      dates: 'March 2017 - Present',
      description: {
        a: 'Maintain and contribute to propietary ad-tech JS framework (CTI)',
        b: 'Work with S3 data storage and Riot.js to build out admin dashboard analytics tooling',
        c: 'Provide direct support to client tech teams integrating CT software on high-traffic sites (~50k-100k uniques/week)'
      }
    },
    SPLT: {
      title: 'Software Engineer @',
      href: '//www.splt.io',
      dates: 'Sept 2016 - April 2017',
      description: {
        a:'Contributed to a few different products including an enterprise-first carpooling mobile app, an accompanying analytics dashboard, and a non-emergency medical transport dispatch portal',
        b:'Worked extensively with React and React-Native to create a reusable component library',
        c:'Integrated multiple third-party APIs including PayPal, Stripe, Google Geolocate and Edmund\'s',
      }
    },
    HackReactor: {
      title: 'Software Engineering Student',
      dates: 'March 2016 - June 2016',
      description: {
        a:'Completed a rigourous class schedule combining computer science fundamentals with modern software development best practices',
        b:'Worked with a modern JS stack including frontend and backend frameworks',
        c:'Produced three full-stack JS applications as part of a four person team that included a bill-splitting app, a local musician directory and a sentiment analysis app',
      }
    }
  }

  return(
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      <Navigation select={selectSection} />
      <Row>
        <SocialLinks />
        <Column>
          <Intro active={active === 'intro'} />
          <About active={active === 'about'}/>
          <Work
            workDescriptions={work}
          />
          <Projects />
          <Footer />
        </Column>
      </Row>
    </div>
  )
}