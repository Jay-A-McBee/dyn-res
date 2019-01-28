import React from 'react';
import styled from 'styled-components';
import {
  ContentWrapper,
  Row
} from './styleLayout';

import {
  SectionHeader
} from './styledText';


const PositionedWrapper = styled(ContentWrapper)`
  position: relative;
  top: 15em;
`;

const Folder = styled.div`
    position: relative;
    margin-bottom: 2.5em;
    height: 15em;
    width: 20em;
`;

const FolderBack = styled(Folder)`
    position: absolute;
    border-radius: 2.5px;
    border: 1px solid rgb(237, 157, 85);
    background-color: rgba(224, 210, 184, .9);
    transition: all .5s ease-in-out;
    ${Folder}:hover & {
        transform: translate3d(1em, -.2em, .25em) skew(-7deg);
    }
`;

const FolderFront = styled(FolderBack)`
    height: 14.5em;
    width: 20em;
    position: absolute;
    transition: all .25s ease-in

    ${Folder}:hover & {
        transform: translate3d(-.85em, .2em, .25em) skew(7deg);
    }
`

const FolderTab = styled(FolderBack)`
    height: 1em;
    width: 5em;
    border-radius: 3em;
    position: absolute;
    top: -.75em;
    transition: all .5s ease-in;
    ${Folder}:hover & {
        transform: translate3d(1em, -.2em, .25em) skew(-7deg);
    }
`;

const Paper = styled.div`
    height: 14.75em;
    width: 20em;
    background-color: white;
    border-radius: 2.5px;
    position: absolute;
    top: -.1em;
    color: black;
    transition: all .5s ease-in .25s;

    ${Folder}:hover & {
        top: -10em;
        transform: translate3d(1em, -.2em, .25em) skew(-7deg);
    }
`;

const WrapRow = styled(Row)`
    flex-flow: row wrap;
    justify-content: space-around;
`;
const FullFolder = ({text}) => {
    return (
        <Folder>
            <FolderTab></FolderTab>
            <FolderBack></FolderBack>
            <Paper>{text}</Paper>
            <FolderFront></FolderFront>
        </Folder>
    )
}


export const ProjectSection = () => {
    return(
        <ContentWrapper id='<Projects/>'>
            <SectionHeader highlight>Projects</SectionHeader>
            <br />
            <WrapRow justify={'flex-start'}>
            {["I was curious about Vue so I made this","React native slide calculator and freight calculator","This website"].map( val => <FullFolder text={val} />)}
            </WrapRow>
        </ContentWrapper>
    )
}