import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components';
import ProjectImage from '../projectDesc';
import {MediaWrap} from '../Media';
import {
  Column, 
  Row
} from '../styleLayout';

export const Carousel = ({children = ['0', '1', '2', '3', '4', '5'], slideImages, device}) => {

  const reelStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '.5%',
    width: '60%'
  }

  const reelCard = {
    maxWidth: '20%',
    maxHeight: '3em',
    transition: 'filter 1s'
  }

  const inactive = {
    filter: `brightness(0.25)`,
    opacity: '0.98' 
  }

  const chevronContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const Circle = styled.div`
    border-radius: 50%;
    height: ${10/16}em;
    width: ${10/16}em;
    background: rgba(114, 98, 99, 0.99);
  `;

  let [active, updateActive] = useState(0);

  const selectNext = () => {
    const next = ++active;
    if(next < children.length){
      updateActive(next);
    }else{
      updateActive(0);
    }
  }

  const selectPrevious = () => {
    const previous = --active;
    if(previous >= 0){
      updateActive(previous);
    }else{
      updateActive(children.length - 1);
    }
  }
  
  const selectSpecific = ({nativeEvent}) => {
    updateActive(parseInt(nativeEvent.target.getAttribute('data-index'),10));
  }

  const projectImages = slideImages ? slideImages.map( (imgObj, index) => ({
    index,
    handleClick: selectSpecific,
    styles: reelCard,
    ...imgObj
  })) : null;

  const RotateIcon = ({handleClick, size, iconName}) => (
    <i 
      className='material-icons' 
      style={{"fontSize": size}} 
      onClick={handleClick}>{iconName}
    </i>
  )

  debugger

  return device !== 'phone' ? (
    <div style={{"justifyContent": 'center'}} className='carousel mdl-grid'>
      <div className='mdl-cell mdl-cell--2-col' style={{...chevronContainer}}>
        <RotateIcon
          handleClick={selectNext}
          size={'40px'}
          iconName={'chevron_left'}
        />
      </div>
      <div className='mdl-cell mdl-cell--8-col'>{children[active]}</div>
      <div className='mdl-cell mdl-cell--2-col' style={{...chevronContainer}}>
        <RotateIcon
          handleClick={selectPrevious}
          size={'40px'}
          iconName={'chevron_right'}
        />
      </div>
      <div onClick={selectSpecific} style={{...reelStyles}}>
        {projectImages ? projectImages.map( (props, idx) => {
          if(idx === active){
            return (  
              <ProjectImage {...props}  />
            )
          }else{
            props.styles = {...props.styles, ...inactive};
            return (
              <ProjectImage {...props} />
            )
          }
        }) : ['1', '2', '3'].map( val => <p>{val}</p>)}
      </div>
    </div>
  ) : (
    <Column>
      <div>{children[active]}</div>
      <Row justify={'center'}>
        <RotateIcon
          handleClick={selectNext}
          size={'20px'}
          iconName={'chevron_left'}
        />
        {slideImages && slideImages.map( image => <Circle />)}
        <RotateIcon
          handleClick={selectPrevious}
          size={'20px'}
          iconName={'chevron_right'}
        />
      </Row>
    </Column>
  )
};