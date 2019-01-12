import styled, {css} from 'styled-components';

const sizes = {
  desktop: {
    size: 770,
    width: 'min-width'
  },
  tablet: {
    size: 768,
    width: 'max-width'
  },
  phone: {
    size: 576,
    width: 'max-width'
  }
};

const media = Object.keys(sizes).reduce( (acc, label) => {
    let {
      size,
      width
    } = sizes[label];

    acc[label] = (...args) => css`
      @media only screen and (${width}: ${size/16}em) {
          ${css(...args)}
      }`

    return acc;
},{});

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
  marginTop: 2em;

  ${media.desktop`width: 65%`}
  ${media.tablet`width: 75%`}
  ${media.phone`width: 95%`}
`;


export const InnerContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  
  ${media.phone`
    flex-direction: column;
    justify-content: center;
  `}
`;