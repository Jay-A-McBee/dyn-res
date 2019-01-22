import React, {useState, useEffect} from 'react';
import { About } from './about';
import styled from 'styled-components';

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

export const Intro = ({toggleBio, open}) => {
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

    /*<Modal 
        open={open}
        toggle={toggleBio}
        child={[<About key={'desc'} />]}
        dialogAnimation={'side'}
        id={'about'}
    />*/

    /*<i onClick={toggleBio} style={{fontSize: '3em'}} className="material-icons pointer">menu</i>*/


    return  (
        <ContentWrapper 
            alignSelf={'flex-start'} 
            padding={'7.5em 0'}
            offset={'left: 10em;'}
            justify={'space-around'}
        >
            <SectionHeader spread><span style={{...greetStyles}}>Hi - my name is</span> Austin McBee.</SectionHeader>
            <SectionHeader heavy>I flip web bits.</SectionHeader>
            <TextBlock padding>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</TextBlock>
            <Link target="_blank" href='mailto:jmcbee1@gmail.com'>Get in touch</Link>
        </ContentWrapper>
    )
}