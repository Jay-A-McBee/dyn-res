import styled, {css} from 'styled-components';

export const SectionWrapper = styled.section`
    display: flex;
    flexDirection: ${props => props.flexDirection || 'column'};
    justifyContent:${props => props.justify || 'space-between'};
    marginTop: 2em;
`;

export const ContentWrapper = styled.section`
    flexDirection: ${props => props.flexDirection || 'column'};
    justifyContent: ${props => props.justify || 'space-between'};
    alignSelf: ${props => props.alignSelf || 'center'};
    width: ${props => props.width || '100%'}
    marginTop: 2em;
`;