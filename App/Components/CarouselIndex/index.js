import React, {useState, useEffect} from 'react';
import styled, {css, keyframes} from 'styled-components';
import ProjectImage from '../projectDesc';
import {useWidthHook} from '../Media';
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
    height: ${15/16}em;
    width: ${15/16}em;
    background: rgba(114, 98, 99, 0.75);
    margin-right: .25em;
    ${props => props.selected && css`
      background-color: rgba(114, 98, 99, 1);
    `}
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


  const StretchRow = styled(Row)`
    align-self: stretch;
  `;

export const CarouselComponent = ({children = ['0', '1', '2', '3', '4', '5'], slideImages}) => {


  let [active, updateActive] = useState(0);
  let width = useWidthHook();

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
  
  const selectSpecific = (e) => {
    updateActive(parseInt(e.nativeEvent.target.getAttribute('name'),10));
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
        <div style={{...reelStyles}}>
          {children.map( (props, i) => (
            <Circle 
              key={i}
              name={i} 
              selected={i === active} 
              onClick={selectSpecific}
            />
          ))}
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
        {slideImages && slideImages.map((image, i) => (
          <Circle 
            key={i}
            name={i} 
            selected={i === active} 
            onClick={selectSpecific} 
          />
        ))}
      </DarkColumn>
    }
    </>
  )
};
