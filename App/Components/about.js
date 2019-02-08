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

export const About = ({active}) => {

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
    'JavaScript',
    'HTML/CSS', 
    'React', 
    'React-Native',
    'Redux', 
    'Node.js',
    'Express',
    'Jest'
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
    transition: all .25s ease-in-out;
    filter: sepia(100%);
    margin-top: 2.5em;

    :hover{
      filter: none;
    }

    ${Media.phone`
      height: ${350/16}em;
      width: ${300/16}em;
    `}
  `

  const LibBlock = styled.div`
    padding: .3em;
    justify-content: flex-start;
    ::before{
      content: '〉';
    }
  `

  const FlexRow = styled(Row)`
      justify-content: flex-start;
      align-items: flex-start;
  `;
  
	return (
    <ContentWrapper id='About' padding={'4em 0'}>
      <SectionHeader highlight active={active}>
        {title}
      </SectionHeader>
      <InnerContent justify={'space-evenly'}>
        <Column justify={'space-between'}>
          <TextBlock padding>{bio}</TextBlock>
          <TextBlock padding>{aside}</TextBlock>
          <InnerHeader>Experienced with:</InnerHeader>
          <FlexRow>
            <Column>
              {jsLibs.slice(0,jsLibs.length/2).map( (lib, i) => <LibBlock key={i}>{lib}</LibBlock>)}
            </Column>
            <Column>
              {jsLibs.slice(jsLibs.length/2,jsLibs.length).map( (lib, i) => <LibBlock key={i}>{lib}</LibBlock>)}
            </Column>
          </FlexRow>
        </Column>
        <FluidColumn justify={'center'}>
          <Image src={Me}/>
        </FluidColumn>
      </InnerContent>
    </ContentWrapper>
	)
}
