import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  padding: 0 2.5rem;

  ${({ theme }) => `
    background: ${theme.color.primary};
    color: ${theme.color.secondary};
    font-weight: bold;
  `};
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => `
    & > *:not(:last-child) {
      margin-right: ${theme.spacing[20]};
    }
  `}
`;
