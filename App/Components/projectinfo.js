import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Media } from './Media';
import { Column } from './styleLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const fadeIn = keyframes`

  from{
      opacity: 0;
  }

  to{
      opacity: 1;
  }
`;

const rotate = keyframes`
  from{
      transform: rotate(0deg);
  }

  to{
      transform: rotate(360deg);
  }
`;

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    transition: all .75s ease-in-out;
    flex: 1;
    min-height: 25rem;

    ${props => props.active && `opacity: 1`}

    ${Media.desktop`
        width: ${700 / 16}rem;
        max-width: ${700 / 16}rem;
    `}

    ${Media.tablet`
        width: ${480 / 16}rem;
        max-width: ${480 / 16}rem;
    `}
    
    ${Media.phone`
        flex-direction: column;
        height: ${420 / 16}rem;
        width: ${280 / 16}rem;
        max-width: ${280 / 16}rem;
    `}
`;

const DeviceImage = styled.img`
  height: 52.5vmin;
  width: 55vmin;
  animation: ${fadeIn} 0.5s ease-in-out forwards;
  ${Media.tablet`
    height: 40vmin;
    width: 40vmin;
  `}

  ${Media.phone`
    margin: auto;
    height: 70vmin;
    width: 70vmin;
  `}
`;

const ProjectName = styled.p`
  font-weight: 700;
  font-size: 1.5em;
  color: ${props => props.theme.modal.text};

  ${Media.tablet`
        font-size: 1.25em;
    `}

  ${Media.phone`
        font-size: 1.15em;
    `}
`;

const TechDescription = styled.p`
  color: ${props => props.theme.modal.text};
  font-weight: 400;
  line-height: 0.15;
  ${Media.tablet`
    font-size: .95em;
    line-height: .25;
  `}
  ${Media.phone`
    font-size: .95em;
    line-height: .25;
  `}
`;

const BigColumn = styled(Column)`
  align-items: flex-start;
  ${Media.phone`
        position: relative;
        left: 1em;
        top: -1.75em;
  `}
`;

const Link = styled.a`
  color: ${props => props.theme.link};
  position: relative;
  top: 0.5em;
  ${Media.tablet`
        top: -.25em;
    `}
  ${Media.phone`
        top: -.25em;
        font-size: .95em;
        line-height: .25;
    `}
`;

const Loader = styled.div`
  height: 5rem;
  width: 7.5rem;
  border-radius: 5rem;
  border: 1px dashed ${props => props.theme.modalText};
  animation: ${fadeIn} 1.5s ease-in-out infinite alternate;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-self: center;
`;

const ProjectInfo = ({ title, tasks, photo, link, active }) => {
  return (
    <Container active={active || false}>
      <DeviceImage src={photo} loaded={photo} />
      <BigColumn justify={'center'}>
        <ProjectName>{title}</ProjectName>
        {tasks.map((task, idx) => (
          <TechDescription key={idx}>{task}</TechDescription>
        ))}
        {link && (
          <Link target="_blank" href={link}>
            <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
          </Link>
        )}
      </BigColumn>
    </Container>
  );
};

export default ProjectInfo;
