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

const handleOffset = ({active, numItems, dimensions}) => {
    debugger
    if(active >= 0 && active <= numItems){
        return `${active * ((dimensions.width + 2)/-16)}em`;
    }else{
        return `${active * -1}px`;
    }
}

const ViewPort = styled(Row)`
  justify-content: space-between;
  transition: transform .75s cubic-bezier(0,1,.8,.9) .15s;
  position: absolute;
  top: auto;
  left: 0px;

  ${props => props.active && css`
    transform: translateX(${props => handleOffset(props)});
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
  color: ${props => props.theme.chevron}
`;

const RotateIcon = ({handleClick, size, iconName}) => (
  <Button onClick={handleClick}>
    <FontAwesomeIcon 
      icon={iconName}
      size={size}
    />
  </Button>
);

export const CarouselComponent = ({children = ['0', '1', '2', '3', '4', '5'], slideImages}) => {


    let [active, updateActive] = useState(0);
    let width = useWidthHook();

    let dragging = useRef(false);
    let startX = useRef(0);
    let callback = useRef(null);
    let handlers = useRef(null);

    const animate = (cb) => (...args) => {
        requestAnimationFrame(() => cb(...args));
    };

    const subscribe = (event, fn) => {
        callback.current = fn
        window.addEventListener(event, callback.current);

        return {
            unsubscribe: () => window.removeEventListener(event, callback.current)
        }
    }

    const handleMouseDown = (ev) => {
        if(!startX.current){
            startX.current = ev.clientX;
        }
        dragging.current = true;
        handlers.current = subscribe('mousemove', updatePosition);
    };

    function updatePosition(ev){
        const offset = ev.clientX  - startX.current;
        startX.current = offset;
    }

    const handleMouseUp = (ev) => {
        ev.persist();
        handlers.current.unsubscribe();
        dragging.current = false;
        triggerDrag(ev);
    };

    function triggerDrag(ev){
        const dragDistance = startX.current - ev.clientX;
        dragging.current = false;
        updateActive(dragDistance);
    };

    const resetActive = () => {
        if(!children[active]){
            updateActive(0);
        }
    };

    const selectNext = animate(() => {
        const next = ++active;
        if(next < children.length){
            updateActive(next);
        }else{
            updateActive(0);
        }
    });

    const selectPrevious = animate(() => {
        const previous = --active;
        if(previous >= 0){
            updateActive(previous);
        }else{
            updateActive(children.length - 1);
        }
    });

    useEffect(() => {
        resetActive();
    },[children.length]);
    
    const selectByIndex = animate((i) => {
        updateActive(i);
    });

    const projectImages = slideImages ? slideImages.map( (imgObj, index) => ({
        index,
        handleClick: selectByIndex,
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
            <ViewPort 
                dimensions={getDimensions(width)} 
                active={active} 
                numItems={children.length}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
            >
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
            selected={i === active} 
            onClick={() => selectByIndex(i)}
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
            <ViewPort 
                dimensions={getDimensions(width)} 
                active={active} 
                numItems={children.length}
                onTouchStart={handleMouseDown}
            >
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
            selected={i === active} 
            onClick={() => selectByIndex(i)} 
          />
        ))}
      </Reel>
    </DarkColumn>
  )
};
