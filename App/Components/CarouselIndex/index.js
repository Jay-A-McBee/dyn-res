import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components';
import ProjectImage from '../projectDesc';
import {MediaWrap} from '../Media';
import {
  Column, 
  Row
} from '../styleLayout';

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

  const DarkColumn = styled(Column)`
    background-color: rgba(10, 10, 10, 0.75);
    padding: 1%;
  `;

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(10, 10, 10, 0.95);
  `;

  // ${props => props.next && css`
  //     transition: all .35s ease-in-out;
  //     transform: translateX(-120%);
  //   `}
  //   ${props => props.current && css`
  //     transition: opacity .35s ease-in-out .5s;
  //     opacity: 1;
  //   `}
  //   ${props => props.previous && css`
  //     transition: all .35s ease-in-out;
  //     transform: translateX(120%);
  //   `}

  const ChildContainer = styled.div`
    transition: all .35s ease-in-out;
    visibility: hidden;
    ${props => props.current && css`
      visibility: visible;      
    `}
  `;

  const StretchRow = styled(Row)`
    align-self: stretch;
  `;

export const CarouselComponent = ({children = ['0', '1', '2', '3', '4', '5'], slideImages, width}) => {


  let [active, updateActive] = useState(0);

  const selectNext = (e) => {
    e.preventDefault();
    const next = ++active;
    if(next < children.length){
      updateActive(next);
    }else{
      updateActive(0);
    }
  }

  const selectPrevious = (e) => {
    e.preventDefault();
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

  return (
    <>
    {width > 500 && 
      <Container>
        <StretchRow justify={'space-between'}>
          <Column justify={'center'}>
            <RotateIcon
              handleClick={selectNext}
              size={'40px'}
              iconName={'chevron_left'}
            />
          </Column>
          {children[active]}
          <Column justify={'center'}>
            <RotateIcon
              handleClick={selectPrevious}
              size={'40px'}
              iconName={'chevron_right'}
            />
          </Column>
        </StretchRow>
        <div onClick={selectSpecific} style={{...reelStyles}}>
          {children.map( (props, idx) => <Circle />)}
        </div>
      </Container>
    }
    {width < 500 && 
      <DarkColumn>
        <StretchRow justify={'center'}>
          <Column justify={'center'}>
          <RotateIcon
            handleClick={selectNext}
            size={'25px'}
            iconName={'chevron_left'}
          />
          </Column>
          {children[active]}
          <Column justify={'center'}>
          <RotateIcon
            handleClick={selectPrevious}
            size={'25px'}
            iconName={'chevron_right'}
          />
          </Column>
        </StretchRow>
        {slideImages && slideImages.map( image => <Circle />)}
      </DarkColumn>
    }
    </>
  )
};
