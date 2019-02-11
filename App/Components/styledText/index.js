import styled, {css} from 'styled-components';
import {Media} from '../Media';

export const inAndUp = props => css`
    .animate {
        transition: all .5s ease-in-out;
        opacity: 0;
        transform: translateY(${20/16}em);
    }

    ${props => props.active && `
        .animate {
          opacity: 1;
          transform: translateY(0);
        }
    `}
`;

export const SectionHeader = styled.h3`
    font-weight: ${props => props.heavy ? 700:400};
    color: ${props => props.highlight ? 'rgb(255, 251, 242)' : 'rgb(237, 157, 85)'};
    text-decoration: ${props => props.underline ? 'underline' : 'none'};
    font-size: 5em;
    margin-bottom: 0;
    margin-top: 0;
    transition: all .25s ease-in-out;
    ${props => inAndUp(props)}
    
    ${Media.phone`
        font-size: 2.75em;
    `}

`;

export const Headline = styled(SectionHeader)`
    line-height: .85;
    font-size: 6em;
    padding: 0;
    margin-bottom: .5em;
    ${Media.phone`
        font-size: ${props => props.size}
        width: ${props => props.width || '100%'}
    `}
`;

export const InnerHeader = styled.h3`
    font-weight: 400;
    color: ${props => props.color || 'white'};
    text-decoration: ${props => props.underline ? 'underline' : 'none'};
    transition: all .25s ease-in-out;
    ${props => inAndUp(props)}
`;

export const TextBlock = styled.p`
    font-size: 1.15em;
    text-align: justify;
    line-height: 1.25;
    transition: all .25s ease-in-out;

    ${props => inAndUp(props)}

    ${props => props.padding && css`
        padding: 1.25em 1.25em .25em 0;
    `}

    ${Media.phone`
        font-size: .85em;
        line-height: 1.5;
    `}
`;