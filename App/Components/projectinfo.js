import React from 'react';
import styled, {css} from 'styled-components';
import {Media, MediaWrap} from './Media';
import {Column} from './styleLayout';

const ProjectInfo = ({title, role, desc, tasks, photo, func, prop, link, current}) => {

  const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    ${Media.phone`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-self: stretch;
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
      top: -1.5em;
      left: .75em;
    `}
  `;

  const TechDescription = styled.p`
    font-weight: 300;
    line-height: 1.5;

    ${Media.phone`
      position: relative;
      top: -2em;
      left: 1.5em;
      line-height: 1.25;
    `}
  `;
	
	let contrib = tasks.map( (task, idx) => (
    <TechDescription key={idx} style={{"fontSize": '1.15em'}} >{task}</TechDescription>
  ))
	
	return(
    <Container>
      <DeviceImage src={photo} />
      <Column justify={'center'}>
        <ProjectName>{title}</ProjectName>
        {tasks.map( (task, idx) => (
          <TechDescription key={idx}>{task}</TechDescription>
        ))}
        {link && 
          <a target='_blank' href = {link}>
            <i className='zmdi zmdi-github-box zmdi-hc-2x'>
            </i>
          </a>
        }
      </Column>
    </Container>
	)
}

export default ProjectInfo