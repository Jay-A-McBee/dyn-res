import React, { useRef, forwardRef, useState, useEffect } from 'react';
import { About } from './about';
import styled, { css } from 'styled-components';
import { Media, useWidthHook } from './Media';
import { scrollImperativeHandle } from './Handles';
import { useVisibility } from './ScrollHook';
import {
  ContentWrapper,
  InnerContent,
  Row,
  Column,
  FluidColumn
} from './styleLayout';

import { SectionHeader, InnerHeader, TextBlock, Headline } from './styledText';

const Link = styled.a`
  display: flex;
  justify-content: center;
  padding: 1.15em;
  background-color: ${props => props.theme.btnContact.bckg};
  color: ${props => props.theme.btnContact.text};
  border: 0.5px solid ${props => props.theme.btnContact.border};
  transition: all 0.25s ease-in-out;
  position: relative;
  top: 1.75em;
  width: 12.5%;

  ${Media.tablet`
    width: 20%;
    padding: .75em;
    font-size: .75em;
  `}

  ${Media.phone`
    width: 27.5%;
    padding: .75em;
    font-size: .85em;
  `}


  :hover {
    color: ${props => props.theme.btnContact.hover};
    border-color: rgb(237, 157, 85);
  }
`;
const PositionedWrapper = styled(ContentWrapper)`
  position: relative;
  top: 4em;
  margin-bottom: 7.5em;

  ${Media.tablet`
    top: 5.5em;
  `}

  ${Media.phone`
    top: 4em;
  `}
`;

const NarrowText = styled(TextBlock)`
  width: 65%;

  ${Media.tablet`
    width: 75%
  `}

  ${Media.phone`
    width: 95%
  `}
`;

const Greeting = styled.span`
  font-size: 1.5rem;
  ${Media.phone`
    font-size: .75rem;
  `}
  color: ${props => props.theme.greet}
`;

export default forwardRef(({ inView, offset }, ref) => {
  let width = useWidthHook();

  let introContainer = useRef(null);

  let active = useVisibility(ref);

  scrollImperativeHandle(introContainer, ref, 'intro');

  return (
    <PositionedWrapper
      ref={introContainer}
      alignSelf={'flex-start'}
      offset={width > 800 ? `left: 12.5em;` : null}
      padding={'2.5rem 0'}
      justify={'space-around'}
      active={active}
    >
      <Headline className="animate" size={'2rem'} spread>
        <Greeting>Hi - my name is</Greeting> Austin McBee.
      </Headline>
      <Headline className="animate" size={'2.30em'} heavy>
        I work on the web.
      </Headline>
      <NarrowText className="animate">
        I am a software developer based in Seattle, Washington specializing in
        modern web technologies. From React to vanilla JS, I write clean,
        maintainable code that scales.
      </NarrowText>
      <NarrowText className="animate">
        My goals are to keep learning, stay sharp and build useful tech.
      </NarrowText>
      <Link className="animate" target="_blank" href="mailto:jmcbee1@gmail.com">
        Get in touch
      </Link>
    </PositionedWrapper>
  );
});
