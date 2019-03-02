import React, {useState, useEffect, useRef} from 'react';
import styled, {css, keyframes} from 'styled-components';
import ProjectImage from '../projectDesc';
import {useWidthHook} from '../Media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Column, 
  Row
} from '../styleLayout';
import { Media } from '../Media';

const Reel = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: center;
  width: 60%;
`;

const ChevronContainer = styled(Column)`
  justify-content: center;
  width: 10%;
  align-items: center;
  align-self: center;
  z-index: 25;
  ${props => css`
    ${props.align}
  `}
`;

const Circle = styled.div`
  border-radius: 50%;
  height: ${15/16}em;
  width: ${15/16}em;
  background: rgba(114, 98, 99, 0.75);
  margin-right: .75em;
  ${props => props.selected && css`
    background-color: rgba(114, 98, 99, 1);
  `}
`;

const DarkColumn = styled(Column)`
  background-color: inherit;
  padding: 1%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: inherit;
`;

const StretchRow = styled(Row)`
  justify-content: space-around;
`;

const ViewPort = styled(Row)`
  justify-content: space-between;
  transition: transform .75s cubic-bezier(.1, .25, .75, 1) .15s;
  position: absolute;
  top: auto;
  left: 0px;

  ${props => props.active && css`
    transform: translateX(${props => props.active * (props.dimensions.width/-16)}em);
  `}
`
const View = styled.div`
  position: relative;
  align-self: center;
  width: ${props => props.dimensions.width/16}em
  height: ${props => props.dimensions.height/16}em;
  overflow: hidden;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em;
  border: none;
  background-color: inherit;
  cursor: pointer;
`;

const RotateIcon = ({handleClick, size, iconName}) => (
  <Button onClick={handleClick}>
    <FontAwesomeIcon 
      icon={iconName}
      size={size}
      color='#fcdb94'
    />
  </Button>
);

export const CarouselComponent = ({children = ['0', '1', '2', '3', '4', '5'], slideImages}) => {


  let [active, updateActive] = useState(0);
  let width = useWidthHook();

  const resetActive = () => {
    if(!children[active]){
      updateActive(0);
    }
  }

  const selectNext = (e) => {
    const next = ++active;
    if(next < children.length){
      updateActive(next);
    }else{
      updateActive(0);
    }
  }

  const selectPrevious = (e) => {
    const previous = --active;
    if(previous >= 0){
      updateActive(previous);
    }else{
      updateActive(children.length - 1);
    }
  }

  useEffect(() => {
    resetActive();
  },[children.length])
  
  const selectSpecific = (e) => {
    updateActive(parseInt(e.nativeEvent.target.getAttribute('name'),10));
  }

  const projectImages = slideImages ? slideImages.map( (imgObj, index) => ({
    index,
    handleClick: selectSpecific,
    styles: reelCard,
    ...imgObj
  })) : null;

  let view = useRef(null);

  const getDimensions = (width) => {

    const makeDimensions = (height, width) => ({
      height, 
      width
    });

    if(width > 800){
      return makeDimensions(500, 716);
    }else if(width < 800 && width > 500){
      return makeDimensions(320, 496);
    }else{
      return makeDimensions(450, 296);
    }
  };

  return width > 800 ? (
    <Container>
      <StretchRow justify={'space-between'}>
        <ChevronContainer 
            justify={'center'}
            align={`
                position: absolute;
                left: 1em;
            `}
            ref={comp => view.current = comp}
        >
          <RotateIcon
            handleClick={selectPrevious}
            size={'2x'}
            iconName={'chevron-left'}
          />
        </ChevronContainer>
        <View dimensions={getDimensions(width)}>
            <ViewPort dimensions={getDimensions(width)} active={active}>
              {children}
            </ViewPort> 
        </View> 
        <ChevronContainer 
            justify={'center'}
            align={`
                position: absolute;
                right: 1em;
            `}
        >
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
        <View dimensions={getDimensions(width)}>
            <ViewPort dimensions={getDimensions(width)} active={active}>
                {children}
            </ViewPort> 
        </View> 
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
