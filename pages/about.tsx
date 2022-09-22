import React from 'react';
import { GetStaticProps } from 'next'
import { readFile } from 'fs/promises';
import path from 'path';

import { AboutLayout } from '@components';

const AboutPage = ({ aboutData }) => {
  
  return <AboutLayout content={aboutData} />;
}

export default AboutPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const aboutData = await readFile(path.join(process.cwd(), 'copy/about.json'), 'utf-8');

  return {
    props: {
      aboutData: JSON.parse(aboutData)
    }
  }
}
