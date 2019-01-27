import styled, {css} from 'styled-components';
import {Media} from '../Media';

export const SectionWrapper = styled.section`
    display: flex;
    flex-direction: ${props => props.flexDirection || 'column'};
    justify-content:${props => props.justify || 'space-between'};
    margin-top: 5em;
`;

export const ContentWrapper = styled.section`
  flex-direction: ${props => props.flexDirection || 'column'};
  justify-content: ${props => props.justify || 'space-between'};
  align-self: ${props => props.alignSelf || 'center'};
  padding: ${props => props.padding || 'none'};
  margin-top: 5em;

  ${props => props.offset && css`
    position: relative;
    ${props.offset}
  `}

  ${Media.desktop`width: 65%`}
  ${Media.tablet`width: 75%`}
  ${Media.phone`
    width: 90%;
    align-self: center;
    margin-top: 0;
    ${props => props.offset && css`
      position: static;
    `}
  `}
`;


export const InnerContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  
  ${Media.phone`
    flex-direction: column;
    justify-content: center;
  `}
`;

export const CollapsableColumn = styled.div`
  width: 5em;
  position: fixed;
  bottom: 0;
  padding: 0 2.5em;

  ${Media.phone`
    width: 0em;
  `}
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justify || 'flex-start'};
`;

export const FixedWidthColumn = styled(Column)`
  width: ${props => props.width}
`;

export const FluidColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justify || 'flex-start'};

  ${Media.phone`
    flex-direction: row;
    justify-content: center;
  `}
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justify || 'flex-start'};
`;
