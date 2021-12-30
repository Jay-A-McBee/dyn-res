import styled from 'styled-components';

export const Link = styled.a`
  text-decoration: none;

  ${({ theme }) => `
    color: ${theme.color.secondary};


    :hover,
    :visited {
      text-decoration: underline;
      color: ${theme.color.background};
    }
  `};
`;
