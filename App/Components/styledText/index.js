import styled, {css} from 'styled-components';
import {Media} from '../Media';

export const inAndUp = props => css`
  opacity: 0;
  transform: translateY(${20/16}em);

  ${props => props.active && `
      opacity: 1;
      transform: translateY(0);
  `}
`;

export const SectionHeader = styled.h1`
    font-weight: ${props => props.heavy ? 700:400};
    color: ${props => props.highlight ? 'rgb(255, 251, 242)' : 'rgb(237, 157, 85)'};
    text-decoration: ${props => props.underline ? 'underline' : 'none'};
    font-size: 5em;
    margin-bottom: ${props => props.spread ? '-.07em': '-.25em'};
    transition: all .25s ease-in-out;
    ${props => inAndUp(props)}

    
    ${Media.phone`
        font-size: 2.75em;
    `}

`;

export const Headline = styled(SectionHeader)`
    line-height: .95;
    font-size: 7em;
    padding: 0;
`;

export const InnerHeader = styled.h3`
    font-weight: 400;
    color: ${props => props.color || 'white'};
    text-decoration: ${props => props.underline ? 'underline' : 'none'};
    transition: all .25s ease-in-out;
    ${props => inAndUp(props)}
`;

export const TextBlock = styled.p`
    font-size: 1.25em;
    text-align: justify;
    transition: all .25s ease-in-out;
    ${props => inAndUp(props)}

    ${props => props.padding && css`
        padding: 1.25em 1.25em 1.25em 0;
    `}

    ${Media.phone`
        font-size: 1em;
    `}
`;