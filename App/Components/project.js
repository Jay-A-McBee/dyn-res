import React from 'react';
import styled, {css} from 'styled-components';
import {Media, useWidthHook} from './Media';
import {
  ContentWrapper,
  Row,
  Column
} from './styleLayout';

import {
  SectionHeader,
  inAndUp
} from './styledText';

import {UseScrollTracking} from './ScrollHook';

import {
    projectDescriptions
} from '../Assets/shortDescription';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Title = styled.p`
    font-size: 1.75em;
    font-weight: 400;
    text-decoration: underline;
`;

const TitleRow = styled(Row)`
    align-items: center;
`;

const TechItem = styled.small`
    font-size: .9em;
    font-weight: 100;
    margin-right: .5em;
`;

const Folder = styled.div`
    position: relative;
    margin: 2.5em;
    height: 15em;
    width: 20em;
    transition: all .5s ease-in-out;
    ${props => inAndUp(props)}
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
        box-shadow: .5em .75em .25em .25em rgba(10, 10, 10, 0.3);
        transform: translate3d(1em, -.2em, .25em) skew(-7deg);
    }
`;

const FolderFront = styled.div`
    height: 14em;
    width: 19em;
    margin: 0;
    position: absolute;
    transition: all .25s ease-in;
    color: rgb(237, 157, 85);
    background-color: rgba(224, 210, 184, .9);
    border-radius: 2.5px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: .5em;

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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    height: 10.75em;
    width: 16em;
    margin: 0;
    background-color: white;
    border-radius: 2.5px;
    top: -.1em;
    background-color: white;
    color: rgb(237, 157, 85);
    transition: all .5s ease-in .25s;
    padding: 2em;

    ${Folder}:hover & {
        top: -92.5%;
        transform: translate3d(1em, -.2em, .25em) skew(-2.5deg);
    }
`;

const WrapRow = styled(Row)`
    flex-flow: row wrap;
    justify-content: space-around;
`;

const MobileFolder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2em;
    height: 11em;
    width: 18em;
    border: 2.5px solid rgb(237, 157, 85);
    margin-bottom: .75em;
    border-radius: 2.5px;
    transition: all .5s ease-in-out;
    ${props => inAndUp(props)}

`;

const MobileFolderTab = styled.div`
    position: relative;
    top: 1em;
    height: 1.5em;
    margin: 0;
    width: 5em;
    border-top: 2.5px solid rgb(237, 157, 85);
    border-radius: 3em;
    ${props => inAndUp(props)}
`;

const Description = ({title, role, tasks, link}) => {
    return (
        <React.Fragment>
            <TitleRow justify={'space-between'}>
                <Title>{title}</Title>
                <a target='_blank' href = {link}>
                    <FontAwesomeIcon icon={['fab', 'github']} size='3x' />
                </a>
            </TitleRow>
            <p style={{lineHeight: '1.25em'}}>{role}</p>
            <Row>
                {tasks.map((task, i) => <TechItem key={i}>{task}</TechItem>)}
            </Row>
        </React.Fragment>
    )
};


const FullFolder = ({inView, icon, ...rest}) => {
    return (
        <Folder active={inView}>
            <FolderTab></FolderTab>
            <FolderBack></FolderBack>
            <Paper>
                <Description {...rest} />
            </Paper>
            <FolderFront>
                <FontAwesomeIcon icon={icon} size='3x' />
            </FolderFront>
        </Folder>
    )
}


const {
    slide,
    portfolio,
    vue,
    sandbox
} = projectDescriptions;

export const ProjectSection = () => {

    let inView = UseScrollTracking('Projects');
    let width = useWidthHook();

    return(
        <ContentWrapper     
            id='Projects'
            padding={width > 500 ? '5em 0 0 0' : '3.5em 0 0 0'}
        >
            <SectionHeader active={inView} highlight>Projects</SectionHeader>
            <br />
            <WrapRow justify={'flex-start'}>
            {[slide, portfolio, vue, sandbox].map((props, i) =>  width > 500 ? 
                <FullFolder key={i} inView={inView} {...props}/> :
                <div key={i}>
                    <MobileFolderTab />
                    <MobileFolder active={inView}>
                        <Description {...props} />
                    </MobileFolder>
                </div>
             )}
            </WrapRow>
        </ContentWrapper>
    )
}