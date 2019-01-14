import styled, {css} from 'styled-components';
import {Media} from '../Media';

export const SectionWrapper = styled.section`
    display: flex;
    flex-direction: ${props => props.flexDirection || 'column'};
    justify-content:${props => props.justify || 'space-between'};
    margin-top: 2em;
`;

export const ContentWrapper = styled.section`
  flex-direction: ${props => props.flexDirection || 'column'};
  justify-content: ${props => props.justify || 'space-between'};
  align-self: ${props => props.alignSelf || 'center'};
  padding: ${props => props.padding || 'none'};

  ${Media.desktop`width: 65%`}
  ${Media.tablet`width: 75%`}
  ${Media.phone`width: 95%`}
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

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justify || 'flex-start'};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justify || 'flex-start'};
  padding: 1.25em 1.25em 1.25em 0;
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