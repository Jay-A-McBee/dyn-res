import React from 'react';
import { About } from './about';
import styled from 'styled-components';
import {Media} from './Media';

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
    position: relative;
    top: 2.5em;
    transition: all .25s ease-in-out;

    :hover {
        color: rgb(237, 157, 85);
        border-color: rgb(237, 157, 85);
    }
`

const NarrowText = styled(TextBlock)`
    width: 65%;

    ${Media.phone`
        width: 100%;
    `}
`;

export const Intro = () => {
    const container = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }

    const intro = {
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingLeft: '5em',
    }

    const greetStyles = {
        fontSize: '.35em',
        color: 'rgba(255, 241, 239, .99)'
    }

    return  (
        <ContentWrapper 
            alignSelf={'flex-start'} 
            padding={'7.5em 0'}
            offset={'left: 10em;'}
            justify={'space-around'}
        >
            <Headline spread><span style={{...greetStyles}}>Hi - my name is</span> Austin McBee.</Headline>
            <Headline heavy>I work on the web.</Headline>
            <NarrowText padding>I am software developer based in Seattle, Washington specializing in modern web technologies. From React to vanilla JS, I write clean, maintainable code that scales.</NarrowText>
            <TextBlock>My goals are to keep learning, stay sharp and build cool stuff.</TextBlock>
            <Link target="_blank" href='mailto:jmcbee1@gmail.com'>Get in touch</Link>
        </ContentWrapper>
    )
}