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
    color: ${props => props.theme.sectionHeadings};
    text-decoration: ${props => props.underline ? 'underline' : 'none'};
    font-size: 5rem;
    margin-bottom: 0;
    margin-top: 0;
    transition: all .25s ease-in-out;
    ${props => inAndUp(props)}
    
    ${Media.phone`
        font-size: 2.75rem;
    `}

`;

export const Headline = styled(SectionHeader)`
    color:${props => props.theme.headline};
    line-height: .85;
    font-size: 6rem;
    padding: 0;
    margin-bottom: .5em;
    ${Media.tablet`
        font-size: 4rem;
        width: 100%;
    `}
    ${Media.phone`
        font-size: ${props => props.size}
        width: ${props => props.width || '100%'}
    `}
`;

export const InnerHeader = styled.p`
    font-size: 1.5rem;
    font-weight: 400;
    color: ${props => props.theme.title};
    text-decoration: ${props => props.underline ? 'underline' : 'none'};
    transition: all .25s ease-in-out;
    ${props => inAndUp(props)}
`;

export const TextBlock = styled.p`
    font-size: 1.15rem;
    text-align: justify;
    line-height: 1.25;
    transition: all .25s ease-in-out;

    ${props => inAndUp(props)}

    ${props => props.padding && css`
        padding: 1.25em 1.25em .25em 0;
    `}

    ${Media.phone`
        font-size: .85rem;
        line-height: 1.5;
    `}
`;