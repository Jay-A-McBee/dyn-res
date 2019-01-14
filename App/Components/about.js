import React from 'react';
import {
  bio,
  aside
} from '../Assets/bio'
import Me from '../Assets/pics/me.jpg'
import {
  ContentWrapper,
  InnerContent,
  Row,
  Column,
  FluidColumn
} from './styleLayout';
import {
  SectionHeader,
  InnerHeader,
  TextBlock
} from './styledText';

import {Media} from './Media';
import styled from 'styled-components';

export const About = () => {

  const contactStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
    marginTop: '2em'
  }

  //Icons

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

  const Image = styled.img`
    height: 22.5em;
    filter: grayscale(80%);
    transition: all .25s ease-in-out;

    :hover{
      filter: none;
    }

    ${Media.phone`
      height: ${350/16}em;
      width: ${300/16}em;
    `}
  `

  const List = styled.ul`
    list-style: none;
  `
  
	return (
    <ContentWrapper id='About' padding={'7.5em 0 7.5em 0'}>
      <SectionHeader>
        {title}
      </SectionHeader>
      <InnerContent justify={'space-around'}>
        <Column justify={'space-between'}>
          <TextBlock padding>{bio}</TextBlock>
          <TextBlock padding>{aside}</TextBlock>
          <InnerHeader underline>Stuff I work with:</InnerHeader>
          <Row>
            <List>
              {jsLibs.slice(0,4).map( lib => <li>{lib}</li>)}
            </List>
            <List>
              {jsLibs.slice(4,jsLibs.length).map( lib => <li>{lib}</li>)}
            </List>
          </Row>
        </Column>
        <FluidColumn justify={'center'}>
          <Image src={Me}/>
        </FluidColumn>
      </InnerContent>
    </ContentWrapper>
	)
}
