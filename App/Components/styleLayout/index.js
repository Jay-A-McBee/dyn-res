import styled, {css} from 'styled-components';

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
    width: ${props => props.width || '100%'}
    marginTop: 2em;
`;