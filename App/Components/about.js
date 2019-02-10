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


import {UseScrollTracking} from './ScrollHook';
import {Media} from './Media';
import styled, {css} from 'styled-components';

const inAndUp = props => css`
  opacity: 0;
  transform: translateY(${20/16}em);

  ${props => props.active && css`
      opacity: 1;
      transform: translateY(0);
  `}
`;

const Image = styled.img`
  height: 22.5em;
  transition: all .25s ease-in-out;
  filter: sepia(100%);
  margin-top: 2.5em;
  ${inAndUp}

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
  transition: all .5s ease-in-out;
  ${inAndUp}

  ::before{
    content: '〉';
  }
`

const FlexRow = styled(Row)`
    justify-content: flex-start;
    align-items: flex-start;
`;


export const About = () => {

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

  const title = 'About';

  let inView = UseScrollTracking('About');

	return (
    <ContentWrapper active={inView} id='About' padding={'7.5em 0 0 0'}>
      <SectionHeader highlight className='animate'>
        {title}
      </SectionHeader>
      <InnerContent justify={'space-evenly'}>
        <Column justify={'space-evenly'}>
          <TextBlock className='animate' padding>{bio}</TextBlock>
          <TextBlock className='animate' padding>{aside}</TextBlock>
          <InnerHeader className='animate'>Experienced with:</InnerHeader>
          <FlexRow>
            <Column>
              {jsLibs.slice(0,jsLibs.length/2).map( (lib, i) => <LibBlock className='animate' key={i}>{lib}</LibBlock>)}
            </Column>
            <Column>
              {jsLibs.slice(jsLibs.length/2,jsLibs.length).map( (lib, i) => <LibBlock className='animate' key={i}>{lib}</LibBlock>)}
            </Column>
          </FlexRow>
        </Column>
        <FluidColumn justify={'center'}>
          <Image className='animate' src={Me}/>
        </FluidColumn>
      </InnerContent>
    </ContentWrapper>
	)
}