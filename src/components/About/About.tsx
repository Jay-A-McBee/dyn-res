import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import Text, { TextNode } from '@text';
import about from '@copy/about.json';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background: ${({ theme }) => theme.colors.background};
`;

const Well = styled.div`
  color: #FFE3DC;
  font-size: 1.5rem;
  width: 50%;
  height: 90vh;
  border: 2px solid pink;
  border-radius: 8px;
  padding: 35px;
  overflow-y: scroll;
  margin: auto;
`

type Props = {
  content: Record<string, TextNode|TextNode[]>
}

const AboutLayout = (props: Props) => {
  return (
    <Container>
      <Head>
        <title>About</title>
        <meta name="description" content="Resume Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Well>
        <Link href="/">&larr; Go Back</Link>
        <Text content={props.content} />
      </Well>
    </Container>
  )
}

export default AboutLayout;
