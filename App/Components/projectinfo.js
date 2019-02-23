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
    margin: 0 2.5em;

    ${props => props.active && `opacity: 1`}

    ${Media.desktop`
        max-width: ${700/16}em;
    `}

    ${Media.phone`
        display: flex;
        flex-direction: column;
        height: ${420/16}em;
    `}
`;

const heightBlock = window.innerHeight / 160;

const DeviceImage = styled.img`
height: 30em;

${Media.tablet`
  align-self: center;
  height: 17.5em;
  width: 17.5em;
`}

${Media.phone`
  align-self: center;
  height: 17.5em;
  width: 17.5em;
`}
`;

const ProjectName = styled.p`
font-weight: 700;
font-size: 1.75em;
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
  line-height: .25;
`}
`;

const BigColumn = styled(Column)`
position: relative;
top: -2.5em;
`	

const Link = styled.a`
position: relative;
top: 1.25em;
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