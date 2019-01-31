import React from 'react';
import {Experience} from './shufflePanel';
import styled from 'styled-components';
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


const PositionedWrapper = styled(ContentWrapper)`
  position: relative;
  top: 7.5em;
`
export const Work = ({workDescriptions, active}) => {
  return(
    <ContentWrapper
      id='Work'
      justify={'center'}
      padding={'5.5em 0'}
      active={active}
    >
      <SectionHeader highlight>Work Stuff</SectionHeader>
      <Experience
        workDesc={workDescriptions}
      />
    </ContentWrapper>  
  )
}