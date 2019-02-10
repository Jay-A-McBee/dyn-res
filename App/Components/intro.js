import React from 'react';
import { About } from './about';
import styled, {css} from 'styled-components';
import {Media} from './Media';
import {UseScrollTracking} from './ScrollHook';

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
  TextBlock, 
  Headline
} from './styledText';

const inAndUp = props => css`
  opacity: 0;
  transform: translateY(${20/16}em);

  ${props => props.active && `
      opacity: 1;
      transform: translateY(0);
  `}
`;

const Link = styled.a`
    padding: 1.15em;
    color: rgb(255, 250, 239);
    border: .5px solid rgb(255, 250, 239);
    transition: all .25s ease-in-out;
    position: relative;
    top: 4.5em;
    ${props => inAndUp(props)}
    ${Media.phone`
      padding: .75em;
      font-size: .85em;
    `}

    :hover {
        color: rgb(237, 157, 85);
        border-color: rgb(237, 157, 85);
    }
`

const NarrowText = styled(TextBlock)`
    position: relative;
    top: 2.25em;
    width: 65%;

    ${Media.phone`
      width: 95%
    `}
`;

export const Intro = () => {

    const greetStyles = {
        fontSize: '.25em',
        color: 'rgba(255, 241, 239, .99)'
    }

    let active = UseScrollTracking('Intro');

    return  (
        <ContentWrapper 
            id='Intro'
            alignSelf={'flex-start'} 
            offset={`
                left: 10em;
            `}
            padding={'5em 0'}
            justify={'center'}
            margin
        >
            <Headline 
              size={'2.15em'} 
              active={active} 
              spread
            >
              <span style={{...greetStyles}}>Hi - my name is</span> Austin McBee.
            </Headline>
            <Headline 
              size={'2.15em'} 
              margin={'.75em 0em -.15em -.075em'}
              active={active} 
              heavy
            >
              I work on the web.
            </Headline>
            <NarrowText 
              active={active} 
            >
              I am software developer based in Seattle, Washington specializing in modern web technologies. From React to vanilla JS, I write clean, maintainable code that scales.
            </NarrowText>
            <NarrowText 
              active={active}
            >
              My goals are to keep learning, stay sharp and build cool stuff.
            </NarrowText>
            <Link active={active} target="_blank" href='mailto:jmcbee1@gmail.com'>Get in touch</Link>
        </ContentWrapper>
    )
}