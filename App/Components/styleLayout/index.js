import styled, {css, keyframes} from 'styled-components';
import {Media} from '../Media';

const enter = keyframes`
  from{
    top: 100%
  }

  to{
    top: 0
  }

`;

export const inAndUp = props => css`
    .animate{
        transition: all .5s ease-in-out;
        opacity: 0;
        transform: translateY(${20/16}em);
    }

    ${props => props.active && `
        .animate{
          opacity: 1;
          transform: translateY(0);
        }
    `}
`;

export const SectionWrapper = styled.section`
    display: flex;
    flex-direction: ${props => props.flexDirection || 'column'};
    justify-content:${props => props.justify || 'space-between'};
    margin-top: 5em;
`;

export const ContentWrapper = styled.section`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'column'};
  justify-content: ${props => props.justify || 'space-between'};
  align-self: ${props => props.alignSelf || 'center'};
  padding: ${props => props.padding || '0'};
  margin-top: ${props => props.margin ? props.margin : '5.5em'};

  ${props => inAndUp(props)}

  ${props => props.offset && css`
    position: relative;
    ${props.offset}
  `}

  ${Media.desktop`width: 65%`}

  ${Media.tablet`
    width: 75%;
    margin-top: ${props => props.margin ? props.margin : '5.5em'};
    align-self: center;
  `}

  ${Media.phone`
    width: 90%;
    align-self: center;
    margin-top: ${props => props.margin ? props.margin : '2.5em'};
    position: relative;
    top: 2.5em;
    left: 0;
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
    opacity: 0;
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
