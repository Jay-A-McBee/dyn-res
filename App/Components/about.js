import React from 'react';
import {
  bio,
  aside
} from '../Assets/bio'
import Me from '../Assets/pics/me.jpg'
import {
  ContentWrapper,
  InnerContent
} from './styleLayout';
import {
  SectionHeader
} from './styledText';

export const About = () => {

  const contactStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
    marginTop: '2em'
  }

  /*        <a target='_blank' href='mailto:jmcbee1@gmail.com'>
          <i
            className='zmdi zmdi-google zmdi-hc-2x'
          >
          </i>
        </a>
        <a target='_blank' href='https://github.com/Jay-A-McBee'>
          <i
            className='zmdi zmdi-github-box zmdi-hc-2x'
          >
          </i>
        </a>
        <a target='_blank' href='https://www.linkedin.com/in/jayaustinmcbee/'>
          <i
            className='zmdi zmdi-linkedin-box zmdi-hc-2x'
          >
          </i>
        </a*/

  const jsLibs = [
    'ES6/7', 
    'React/React-Native', 
    'Redux', 
    'Webpack',
    'Node.js',
    'Express',
    'Jest',
    'Enzyme'
  ];

  const libSection = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    maxWidth: '80%'
  }

  const aboutContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '65%',
    margin: 'auto'
  }

  const title = 'About';
  
	return (
    <ContentWrapper
      id='About'
    >
      <SectionHeader>
        {title}
      </SectionHeader>
      <InnerContent>
        <div style={{...libSection}}>
          <p>{bio}</p>
          <br />
          <p>{aside}</p>
          <br />
          <small style={{textDecoration: 'underline'}}>Stuff I work with:</small>
          <div style={{...section}}>
            <ul>
              {jsLibs.slice(0,4).map( lib => <li>{lib}</li>)}
            </ul>
            <ul>
              {jsLibs.slice(4,jsLibs.length).map( lib => <li>{lib}</li>)}
            </ul>
          </div>
        </div>
        <img id='me' style={{filter: 'grayscale(80%)', maxHeight: '220px'}} src = {Me} />
      </InnerContent>
    </ContentWrapper>
	)
}
