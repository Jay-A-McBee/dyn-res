import Head from 'next/head';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
`;

const TileContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  
  ${({ theme }) => `
    grid-row-gap: ${theme.spacing.xxl};
    grid-column-gap: ${theme.spacing.xxl};
  `}
`

const Tile = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 6px;
  box-shadow: 2px 2px 16px -3px rgb(250, 177, 227, .5);
  border: 2.5px solid rgb(250, 177, 227, .25);
  transition: transform .5s ease-in-out;

  :hover {
    transform: rotate(45deg);
  }
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>J. Austin McBee | Software Engineer</title>
        <meta name="description" content="Resume Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TileContainer>
        {[1,2,3,4,5,6,7,8].map((_, idx) => <Tile delay={idx} />)}
      </TileContainer>
    </Container>
  )
}
