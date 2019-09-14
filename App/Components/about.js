import React, { useState, useRef, forwardRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { bio, aside } from '../Assets/bio';
import Me from '../Assets/pics/headshot.jpg';
import {
  ContentWrapper,
  InnerContent,
  Row,
  Column,
  FluidColumn
} from './styleLayout';
import { SectionHeader, InnerHeader, TextBlock } from './styledText';
import { useVisibility } from './ScrollHook';
import { scrollImperativeHandle } from './Handles';
import { Media } from './Media';

const fadeIn = keyframes`

  from{
      opacity: 0;
  }

  to{
      opacity: 1;
  }
`;

const inAndUp = props => css`
  opacity: 0;
  transform: translateY(${20 / 16}em);

  ${props =>
    props.active &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`;

const Loader = styled.div`
  height: 5rem;
  width: 7.5rem;
  border-radius: 5rem;
  border: 1px dashed ${props => props.theme.modalText};
  animation: ${fadeIn} 1.5s ease-in-out infinite alternate;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Image = styled.img`
  height: 22.5em;
  border: 0.15rem solid ${props => props.theme.highlight};
  transition: all 0.25s ease-in-out;
  filter: ${props => props.theme.filter};
  margin-top: 2.5em;
  border-radius: 0.15rem;
  animation: ${fadeIn} 0.5s ease-in-out forwards;

  :hover {
    transform: translateY(-0.25rem);
    filter: none;
    box-shadow: 0 1.5rem 1.5rem rgba(45, 38, 38, 0.99);
  }

  ${Media.phone`
    height: ${310 / 16}rem;
    max-width: 95%;
  `}
`;

const LibBlock = styled.div`
  padding: 0.3em;
  justify-content: flex-start;
  transition: all 0.5s ease-in-out;
  ${inAndUp}

  ::before {
    content: '〉';
  }
`;

const FlexRow = styled(Row)`
  justify-content: flex-start;
  align-items: flex-start;
`;

export default forwardRef(({ inView }, ref) => {
  const jsLibs = [
    'ES6+',
    'html/css',
    'react',
    'react-native',
    'css-in-js',
    'jest',
    'node',
    'express'
  ];

  let aboutContainer = useRef(null);

  let active = useVisibility(ref);

  scrollImperativeHandle(aboutContainer, ref, 'about');

  return (
    <ContentWrapper
      ref={aboutContainer}
      active={active}
      padding={'7.5em 0 0 0'}
    >
      <SectionHeader highlight className="animate">
        About
      </SectionHeader>
      <InnerContent justify={'space-evenly'}>
        <Column justify={'space-evenly'}>
          <TextBlock className="animate" padding>
            {bio}
          </TextBlock>
          <TextBlock className="animate" padding>
            {aside}
          </TextBlock>
          <InnerHeader className="animate">Experienced with:</InnerHeader>
          <FlexRow>
            <Column>
              {jsLibs.slice(0, jsLibs.length / 2).map((lib, i) => (
                <LibBlock className="animate" key={i}>
                  {lib}
                </LibBlock>
              ))}
            </Column>
            <Column>
              {jsLibs.slice(jsLibs.length / 2).map((lib, i) => (
                <LibBlock className="animate" key={i}>
                  {lib}
                </LibBlock>
              ))}
            </Column>
          </FlexRow>
        </Column>
        <FluidColumn
          minWidth={`min-width: 25rem`}
          minHeight={'min-height: 22.5rem'}
          justify={'space-around'}
        >
          <Image className="animate" src={Me} />
        </FluidColumn>
      </InnerContent>
    </ContentWrapper>
  );
});
