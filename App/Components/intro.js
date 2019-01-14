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
    color: white;
    border: .5px solid rgba(179, 248, 218);
    position: relative;
    top: 2.5em;

    :hover {
        color: rgba(179, 248, 218);
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

    /*<Modal 
        open={open}
        toggle={toggleBio}
        child={[<About key={'desc'} />]}
        dialogAnimation={'side'}
        id={'about'}
    />*/

    /*<i onClick={toggleBio} style={{fontSize: '3em'}} className="material-icons pointer">menu</i>*/


    return  (
        <ContentWrapper alignSelf={'flex-start'} padding={'7.5em 0 7.5em 7.5em'}>
            <SectionHeader>Hi - I'm Austin McBee.</SectionHeader>
            <InnerHeader>I write code for the web.</InnerHeader>
            <TextBlock>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</TextBlock>
            <Link target="_blank" href='mailto:jmcbee1@gmail.com'>Get in touch</Link>
        </ContentWrapper>
    )
}