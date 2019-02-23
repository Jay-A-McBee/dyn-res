import React, {useRef, forwardRef} from 'react';
import {Experience} from './shufflePanel';
import styled from 'styled-components';
import {scrollImperativeHandle} from './Handles';
import {useVisibility} from './ScrollHook';
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
export const Work = forwardRef(({workDescriptions, inView}, ref) => {

  let workContainer = useRef(null);

  scrollImperativeHandle(workContainer, ref, 'work');

  let active = useVisibility(ref);

  return(
    <ContentWrapper
      ref={workContainer}
      justify={'center'}
      padding={'5em 0 0 0'}
      margin={'10em'}
      active={active}
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
});