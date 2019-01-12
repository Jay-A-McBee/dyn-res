import React from 'react';
import {Experience} from './shufflePanel';
import {
  ContentWrapper
} from './styleLayout';

import {
  SectionHeader
} from './styledText'

const workContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '65%',
  margin: 'auto'
};


export const Work = ({workDescriptions}) => {
  return(
    <ContentWrapper
      justify={'center'}
      width={'65%'}
      marginAuton
    >
      <SectionHeader>Work Stuff</SectionHeader>
      <Experience
        workDesc={workDescriptions}
      />
    </ContentWrapper>  
  )
}