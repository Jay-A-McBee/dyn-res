import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Text, { TextNode, TextProperties } from '@text';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
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
const Content = styled.div`
  color: #FFE3DC;
  opacity: 0;
  transition: opacity .5s ease-in-out;
  overflow: scroll;
  max-height: 100%;
  font-size: 8px;
`

const Tile = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 6px;
  box-shadow: 2px 2px 16px -3px rgb(245, 152, 223, .75);
  border: 2.5px solid rgb(245, 152, 223, .5);
  transition: all .5s ease-in-out;

  :focus,
  :hover {
    transform: perspective(5000px) translateZ(3000px) translateY(10%);
    background: ${({ theme }) => theme.colors.background};

    > ${Content} {
      opacity: 1;
    }
  }

  :focus-visible {
    border: 2.5px solid rgb(245, 152, 223, .5);
  }
`;

type SectionTitleNode = Record<TextProperties.Title, TextNode>;

const sectionTextNodes: SectionTitleNode[] = [
  {
    [TextProperties.Title]: {
      type: 'h2',
      text: 'About'
    }
  },
  {
    [TextProperties.Title]: {
      type: 'h2',
      text: 'Work'
    }
  },
  {
    [TextProperties.Title]: {
      type: 'h2',
      text: 'Projects'
    }
  }
];

export default function Home() {
  return (
    <Container>
      <Head>
        <title>J. Austin McBee | Software Engineer</title>
        <meta name="description" content="Resume Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TileContainer>
        {sectionTextNodes.map((section) => (
          <Link href="/about">
            <Tile tabIndex={0}>
              <Content>
                <Text content={section} />
              </Content>
            </Tile>
          </Link>
        ))}
      </TileContainer>
    </Container>
  )
}
