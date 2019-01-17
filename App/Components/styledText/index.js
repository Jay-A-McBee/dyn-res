import styled, {css} from 'styled-components';

export const SectionHeader = styled.h1`
    font-weight: ${props => props.heavy ? 700:400};
    color: ${props => props.highlight ? 'rgba(255, 241, 239, .99)' : 'rgb(237, 157, 85)'};
    text-decoration: ${props => props.underline ? 'underline' : 'none'};
    font-size: 5em;
    margin-bottom: ${props => props.spread ? '-.07em': '-.25em'};
`;

export const InnerHeader = styled.h3`
    font-weight: 400;
    color: ${props => props.color || 'white'};
    text-decoration: ${props => props.underline ? 'underline' : 'none'};
`;

export const TextBlock = styled.p`
    font-size: 1.25em;
    text-align: justify;
    ${props => props.padding && css`
        padding: 1.25em 1.25em 1.25em 0;
    `}
`;