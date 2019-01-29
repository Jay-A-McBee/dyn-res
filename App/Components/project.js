import React from 'react';
import styled from 'styled-components';
import {MediaWrap} from './Media';
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
    margin: 2.5em;
    height: 15em;
    width: 20em;
`;

const FolderBack = styled.div`
    height: 15em;
    width: 20em;
    position: absolute;
    margin: 0;
    border-radius: 2.5px;
    border: 1px solid rgb(237, 157, 85);
    background-color: rgba(224, 210, 184, .9);
    transition: all .5s ease-in-out;

    ${Folder}:hover & {
        transform: translate3d(1em, -.2em, .25em) skew(-7deg);
    }
`;

const FolderFront = styled.div`
    height: 15em;
    width: 20em;
    margin: 0;
    width: 20em;
    position: absolute;
    transition: all .25s ease-in
    background-color: rgba(224, 210, 184, .9);
    border-radius: 2.5px;

    ${Folder}:hover & {
        transform: translate3d(-.85em, .2em, .25em) skew(7deg);
    }
`

const FolderTab = styled.div`
    height: 1em;
    margin: 0;
    width: 5em;
    border-radius: 3em;
    position: absolute;
    top: -.55em;
    transition: all .5s ease-in;
    background-color: rgba(224, 210, 184, .9);
    ${Folder}:hover & {
        transform: translate3d(1em, -.2em, .25em) skew(-7deg);
    }
`;

const Paper = styled.div`
    height: 14.75em;
    margin: 0;
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

const MobileFolder = styled.div`
    height: 15em;
    width: 20em;
    border: 2.5px solid rgb(237, 157, 85);
    margin-bottom: .75em;
    border-radius: 2.5px;

`;

const MobileFolderTab = styled.div`
    position: relative;
    top: 1em;
    height: 1.5em;
    margin: 0;
    width: 5em;
    border-top: 2.5px solid rgb(237, 157, 85);
    border-radius: 3em;
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
        <MediaWrap
         render={({width}) => {

            return (

                <ContentWrapper id='<Projects/>'>
                    <SectionHeader highlight>Projects</SectionHeader>
                    <br />
                    <WrapRow justify={'flex-start'}>
                    {[
                        "I was curious about Vue so I made this",
                        "React native slide calculator and freight calculator",
                        "This website"
                    ].map( val =>  width > 500 ? 
                        <FullFolder text={val} /> :
                        <div>
                            <MobileFolderTab />
                            <MobileFolder>
                                {val}
                            </MobileFolder>
                        </div>
                     )}
                    </WrapRow>
                </ContentWrapper>
            )
         }}
        />
    )
}