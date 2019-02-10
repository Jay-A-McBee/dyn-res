import React, {useState, useEffect} from 'react';
import styled, {css, keyframes} from 'styled-components';
import ProjectImage from '../projectDesc';
import {useWidthHook} from '../Media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Column, 
  Row
} from '../styleLayout';

const Reel = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: center;
  width: 60%;
`;

const ChevronContainer = styled(Column)`
  justify-content: center;
  align-items: center;
`;

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

const StretchRow = styled(Row)`
  justify-content: space-around;
  width: 100%;
`;

const RotateIcon = ({handleClick, size, iconName}) => (
  <FontAwesomeIcon 
    icon={iconName}
    onClick={handleClick}
    size={size}
  />
);

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

  return width > 700 ? (
    <Container>
      <StretchRow justify={'space-between'}>
        <ChevronContainer justify={'center'}>
          <RotateIcon
            handleClick={selectPrevious}
            size={'2x'}
            iconName={'chevron-left'}
          />
        </ChevronContainer>
        {children[active]}
        <ChevronContainer justify={'center'}>
          <RotateIcon
            handleClick={selectNext}
            size={'2x'}
            iconName={'chevron-right'}
          />
        </ChevronContainer>
      </StretchRow>
      <Reel>
        {children.map( (props, i) => (
          <Circle 
            key={i}
            name={i} 
            selected={i === active} 
            onClick={selectSpecific}
          />
        ))}
      </Reel>
    </Container>
  ) : (
    <DarkColumn>
      <StretchRow justify={'center'}>
        <ChevronContainer justify={'center'}>
          <RotateIcon
            handleClick={selectPrevious}
            iconName={'chevron-left'}
          />
        </ChevronContainer>
        {children[active]}
        <ChevronContainer justify={'center'}>
          <RotateIcon
            handleClick={selectNext}
            iconName={'chevron-right'}
          />
        </ChevronContainer>
      </StretchRow>
      <Reel>
        {children.map((child, i) => (
          <Circle 
            key={i}
            name={i} 
            selected={i === active} 
            onClick={selectSpecific} 
          />
        ))}
      </Reel>
    </DarkColumn>
  )
};
