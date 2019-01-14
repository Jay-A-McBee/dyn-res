import styled, {css} from 'styled-components';

export const SectionHeader = styled.h1`
    font-weight: 400;
    color: white;
    text-decoration: ${props => props.underline ? 'underline' : 'none'};
`;

export const InnerHeader = styled.h5`
    font-weight: 400;
    color: white;
    text-decoration: ${props => props.underline ? 'underline' : 'none'};
`;

export const TextBlock = styled.p`
    font-size: 1.25em;
    ${props => props.padding && css`
        padding: 1.25em;
    `}
`;