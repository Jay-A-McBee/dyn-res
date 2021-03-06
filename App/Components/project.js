import React, { useRef, forwardRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Media, useWidthHook } from './Media';
import { ContentWrapper, Row, Column } from './styleLayout';

import { SectionHeader, inAndUp } from './styledText';
import { scrollImperativeHandle } from './Handles';
import { useVisibility } from './ScrollHook';
import { projectDescriptions } from '../Assets/shortDescription';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const jitter = keyframes`
  from{
    transform: rotate(360deg);
  }

  to{
    transform: rotate(0deg);
  }
`;

const Title = styled.p`
  font-size: 1.75em;
  font-weight: 400;
  text-decoration: underline;
`;

const TitleRow = styled(Row)`
  align-items: center;
`;

const TechItem = styled.small`
  font-size: 0.9em;
  font-weight: 100;
  margin-right: 0.5em;
`;

const Folder = styled.div`
  color: ${props => props.theme.folder};
  position: relative;
  margin: 2.5em;
  height: 15em;
  width: 20em;
  transition: all 0.5s ease-in-out;
`;

const FolderBack = styled.div`
  height: 15em;
  width: 20em;
  position: absolute;
  margin: 0;
  border-radius: 2.5px;
  border: 1px solid rgb(237, 157, 85);
  background-color: ${props => props.theme.folder};
  transition: all 0.5s ease-in-out;

  ${Folder}:hover & {
    box-shadow: 0.5em 0.75em 0.25em 0.25em rgba(10, 10, 10, 0.3);
    transform: translate3d(1em, -0.2em, 0.25em) skew(-7deg);
  }
`;

const FolderFront = styled.div`
  height: 14em;
  width: 19em;
  margin: 0;
  position: absolute;
  transition: all 0.25s ease-in;
  color: ${props => props.theme.icon};
  background-color: ${props => props.theme.folder};
  border-radius: 2.5px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0.5em;

  ${Folder}:hover & {
    transform: translate3d(-0.85em, 0.2em, 0.25em) skew(7deg);
  }
`;

const FolderTab = styled.div`
  height: 1em;
  margin: 0;
  width: 5em;
  border-radius: 3em;
  position: absolute;
  top: -0.55em;
  transition: all 0.5s ease-in;
  background-color: ${props => props.theme.folder};
  ${Folder}:hover & {
    transform: translate3d(1em, -0.2em, 0.25em) skew(-7deg);
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
  top: -0.1em;
  background-color: white;
  color: ${props => props.theme.description};
  transition: all 0.5s ease-in 0.25s;
  padding: 2em;

  ${Folder}:hover & {
    top: -92.5%;
    transform: translate3d(1em, -0.2em, 0.25em) skew(-2.5deg);
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
  width: 16em;
  border: 2.5px solid ${props => props.theme.farewell.border};
  margin-bottom: 0.75em;
  border-radius: 2.5px;
  transition: all 0.5s ease-in-out;
`;

const MobileFolderTab = styled.div`
  position: relative;
  top: 1em;
  height: 1.5em;
  margin: 0;
  width: 5em;
  border-top: 2.5px solid ${props => props.theme.farewell.border};
  border-radius: 3em;
`;

const Link = styled.a`
  color: ${props => props.theme.link};
`;

const Description = ({ title, role, tasks, link }) => {
  return (
    <React.Fragment>
      <TitleRow justify={'space-between'}>
        <Title>{title}</Title>
        <Link target="_blank" href={link}>
          <FontAwesomeIcon icon={['fab', 'github']} size="3x" />
        </Link>
      </TitleRow>
      <p style={{ lineHeight: '1.25em' }}>{role}</p>
      <Row>
        {tasks.map((task, i) => (
          <TechItem key={i}>{task}</TechItem>
        ))}
      </Row>
    </React.Fragment>
  );
};

const FullFolder = ({ inView, icon, ...rest }) => {
  return (
    <Folder className="animate">
      <FolderTab></FolderTab>
      <FolderBack></FolderBack>
      <Paper>
        <Description {...rest} />
      </Paper>
      <FolderFront>
        <FontAwesomeIcon icon={icon} size="3x" />
      </FolderFront>
    </Folder>
  );
};

const { slide, portfolio, vue, sandbox, dbBoiler, rnTweetEmbed } = projectDescriptions;

export default forwardRef(({ inView }, ref) => {
  let projectContainer = useRef(null);

  scrollImperativeHandle(projectContainer, ref, 'projects');

  let width = useWidthHook();
  let active = useVisibility(ref);

  return (
    <ContentWrapper
      ref={projectContainer}
      padding={'7.5em 0 5em 0'}
      active={active}
    >
      <SectionHeader className="animate" highlight>
        Projects
      </SectionHeader>
      <br />
      <WrapRow justify={'flex-start'}>
        {[slide, portfolio, vue, sandbox, dbBoiler, rnTweetEmbed].map((props, i) =>
          width > 800 ? (
            <FullFolder key={i} className="animate" {...props} />
          ) : (
            <div key={i}>
              <MobileFolderTab className="animate" />
              <MobileFolder className="animate">
                <Description {...props} />
              </MobileFolder>
            </div>
          )
        )}
      </WrapRow>
    </ContentWrapper>
  );
});
