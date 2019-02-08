import React from 'react';
import styled, {css, keyframes} from 'styled-components';
import {Media} from './Media';
import {Column} from './styleLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectInfo = ({title, role, desc, tasks, photo, func, prop, link, current}) => {

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
    justify-content: space-evenly;
    align-self: stretch;
    opacity: 0;
    animation: ${fadeIn} .5s ease-in-out .25s;
    animation-fill-mode: forwards;

    ${Media.phone`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    `}
`;

  const heightBlock = window.innerHeight / 160;

  const DeviceImage = styled.img`
    border-radius: .25em;
    height: 30em;

    ${Media.phone`
      align-self: center;
      height: 20em;
    `}
  `;

  const ProjectName = styled.p`
    font-weight: 700;
    font-size: 1.75em;
    color: rgb(237, 157, 85);
    
    ${Media.phone`
      position: relative;
      top: -.5em;
    `}
  `;

  const TechDescription = styled.p`
    font-weight: 300;
    line-height: 1.5;

    ${Media.phone`
      position: relative;
      top: -.5em;
      line-height: 1.25;
    `}
  `;

  const BigColumn = styled(Column)`
    flex: 2;
  `
	
	let contrib = tasks.map( (task, idx) => (
    <TechDescription key={idx} style={{"fontSize": '1.15em'}} >{task}</TechDescription>
  ))
	
	return(
    <Container>
      <DeviceImage src={photo} />
      <BigColumn justify={'center'}>
        <ProjectName>{title}</ProjectName>
        {tasks.map( (task, idx) => (
          <TechDescription key={idx}>{task}</TechDescription>
        ))}
        {link && 
          <a target='_blank' href = {link}>
            <FontAwesomeIcon icon={['fab', 'github']} size='2x'/>
          </a>
        }
      </BigColumn>
    </Container>
	)
}

export default ProjectInfo;