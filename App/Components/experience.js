import React from 'react';
import {Experience} from './shufflePanel';
import styled from 'styled-components';
import {UseScrollTracking} from './ScrollHook';
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
export const Work = ({workDescriptions}) => {

  let inView = UseScrollTracking('Work');

  return(
    <ContentWrapper
      id='Work'
      justify={'center'}
      padding={'5em 0 0 0'}
    >
      <SectionHeader 
        active={inView} 
        highlight
      >
      Work Stuff
      </SectionHeader>
      <br />
      <Experience
        inView={inView}
        workDesc={workDescriptions}
      />
    </ContentWrapper>  
  )
}