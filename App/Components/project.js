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
    height: 15em;
    width: 20em;
    margin-right: 2em;
`;

const FolderBack = styled(Folder)`
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
    position: relative;
    top: -29em;
    transition: all .25s ease-in

    ${Folder}:hover & {
        transform: translate3d(-.85em, .2em, .25em) skew(7deg);
    }
`

const FolderTab = styled(FolderBack)`
    height: 1em;
    width: 5em;
    border-radius: 3em;
    position: relative;
    top: .5em;
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
    position: relative;
    top: -14.75em;
    color: black;
    transition: all .5s ease-in .25s;

    ${Folder}:hover & {
        top: -25em;
        transform: translate3d(1em, -.2em, .25em) skew(-7deg);
    }
`;

const WrapRow = styled(Row)`
    flex-flow: row wrap;
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
        <ContentWrapper padding={'3.5em 0'} id='<Projects/>'>
            <SectionHeader highlight>Projects</SectionHeader>
            <br />
            <WrapRow justify={'space-between'}>
            {["I was curious about Vue so I made this","React native slide calculator and freight calculator","This website"].map( val => <FullFolder text={val} />)}
            </WrapRow>
        </ContentWrapper>
    )
}