import React from 'react';
import {Experience} from './shufflePanel';

const workContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '65%',
  margin: 'auto'
};


export const Work = ({workDescriptions}) => {
  return(
    <div style={{...workContainer}}>
      <h1 style={{fontWeight: '700', fontSize: '4em', color: 'white'}}>Work Stuff</h1>
      <Experience
        workDesc={workDescriptions}
      />
    </div>  
  )
}