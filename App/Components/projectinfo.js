import React from 'react';
import styled, {css, keyframes} from 'styled-components';
import {Media} from './Media';
import {Column} from './styleLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const fadeIn = keyframes`

  from{
      opacity: 0;
  }

  to{
      opacity: 1;
  }
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    transition: all .75s ease-in-out;
    padding: 0 .5em;
    border-right: 2px solid orange;

    ${props => props.active && `opacity: 1`}

    ${Media.desktop`
        width: ${700/16}em;
    `}

    ${Media.tablet`
        width: ${480/16}em;
        justify-content: space-around;
    `}

    ${Media.phone`
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: ${420/16}em;
        width: ${280/16}em;
    `}
`;

const heightBlock = window.innerHeight / 160;



const DeviceImage = styled.img`
  height: 100%;
  width: 75%;
  margin: auto;

  ${Media.tablet`
    width: 65%;
    height: 110%;
  `}

  ${Media.phone`
    position: relative;
    left: -.5em;
    height: 65%;
    width: 95%;
  `}
`;

const ProjectName = styled.p`
    font-weight: 700;
    font-size: 1.65em;
    color: rgb(237, 157, 85);

    ${Media.tablet`
        position: relative;
        top: 1em;
        margin-bottom: .5em;
        font-size: 1.5em;
    `}

    ${Media.phone`
        position: relative;
        top: 1em;
        left: .5em;
        margin-bottom: .5em;
        font-size: 1.5em;
    `}
`;

const TechDescription = styled.p`
  font-weight: 400;
  line-height: .15;
  ${Media.tablet`
    font-size: .95em;
    position: relative;
    top: 1.75em;
    line-height: .25;
  `}
  ${Media.phone`
    font-size: .95em;
    position: relative;
    top: 1.75em;
    left: .75em;
    line-height: .25;
  `}
`;

const BigColumn = styled(Column)`
    position: relative;
    top: -2.5em;
`	

const Link = styled.a`
    position: relative;
    top: .5em;
    ${Media.tablet`
    top: 1.75em;
  `}
  ${Media.phone`
    font-size: .95em;
    left: .65em;
    top: 1.75em;
    line-height: .25;
  `}
`;
const ProjectInfo = ({title, role, desc, tasks, photo, func, prop, link, current, active}) => {
	return(
    <Container active={active || false}>
      <DeviceImage src={photo} />
      <BigColumn justify={'center'}>
        <ProjectName>{title}</ProjectName>
        {tasks.map( (task, idx) => (
          <TechDescription key={idx}>{task}</TechDescription>
        ))}
        {link && 
          <Link target='_blank' href={link}>
            <FontAwesomeIcon icon={['fab','github']} size='2x'/>
          </Link>
        }
      </BigColumn>
    </Container>
	)
}

export default ProjectInfo;