import React from 'react';
import styled from 'styled-components';
import {
  ContentWrapper
} from './styleLayout';

import {
  SectionHeader
} from './styledText';


const PositionedWrapper = styled(ContentWrapper)`
  position: relative;
  top: 15em;
`;

const FolderBack = styled.div`
    height: 15em;
    width: 15em;
    background-color: rgb(224, 210, 184);
    border-radius: 2.5px;
`;

const FolderFront = styled(FolderBack)`
    height: 14.5em;
    width: 15em;
    position: relative;
    border: .5px solid black;
    top: -29.25em;
    transition: all .25s ease-in

    :hover{
        transform: translate3d(-.85em, .2em, .25em) skew(7deg);
    }
`

const FolderTab = styled(FolderBack)`
    height: 1em;
    width: 5em;
    border-radius: 3em;
    position: relative;
    top: .5em;
`;

const Paper = styled.div`
    height: 14.75em;
    width: 15em;
    background-color: white;
    position: relative;
    top: -14.75em;

    :hover{
        height: 12em;
    }
`;


export const ProjectSection = () => {
    return(
        <ContentWrapper padding={'3.5em 0'} id='<Projects/>'>
            <SectionHeader highlight>Projects</SectionHeader>
            <br />
            <FolderTab></FolderTab>
            <FolderBack></FolderBack>
            <Paper></Paper>
            <FolderFront></FolderFront>
        </ContentWrapper>
    )
}