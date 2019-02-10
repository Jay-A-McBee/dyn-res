import React from 'react';
import { About } from './about';
import styled, {css} from 'styled-components';
import {Media, useWidthHook} from './Media';
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

const Link = styled.a`
    padding: 1.15em;
    color: rgb(255, 250, 239);
    border: .5px solid rgb(255, 250, 239);
    transition: all .25s ease-in-out;
    position: relative;
    top: 1.75em;
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

    let inView = UseScrollTracking('Intro');
    let width = useWidthHook();

    return  (
        <ContentWrapper 
            id='Intro'
            alignSelf={'flex-start'} 
            offset={`
                left: 10em;
            `}
            padding={'5em 0'}
            justify={'center'}
            active={inView}
            className='animate'
        >
            <Headline 
              className='animate'
              size={'2.5em'}
              spread
            >
              <span style={{...greetStyles}}>Hi - my name is</span> Austin McBee.
            </Headline>
            <Headline 
              className='animate'
              size={'2.30em'}
              heavy
            >
              I work on the web.
            </Headline>
            <NarrowText 
              className='animate'
            >
              I am software developer based in Seattle, Washington specializing in modern web technologies. From React to vanilla JS, I write clean, maintainable code that scales.
            </NarrowText>
            <NarrowText 
              className='animate'
            >
              My goals are to keep learning, stay sharp and build cool stuff.
            </NarrowText>
            <Link className='animate' target="_blank" href='mailto:jmcbee1@gmail.com'>Get in touch</Link>
        </ContentWrapper>
    )
}