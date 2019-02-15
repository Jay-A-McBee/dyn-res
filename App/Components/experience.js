import React, {useRef} from 'react';
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

  let container = useRef(null);
  let inView = UseScrollTracking(container);

  return(
    <ContentWrapper
      id='Work'
      justify={'center'}
      padding={'5em 0 0 0'}
      margin={'10em'}
      active={inView}
      ref={container}
    >
      <SectionHeader 
        className='animate' 
        highlight
      >
      Work
      </SectionHeader>
      <br />
      <Experience
        workDesc={workDescriptions}
      />
    </ContentWrapper>  
  )
}