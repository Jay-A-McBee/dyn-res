import React, {useState, useEffect, useRef} from 'react';
import styled, {css} from 'styled-components';
import debounce from 'lodash.debounce';

const sizes = {
  desktop: {
    size: 770,
    width: 'min-width'
  },
  tablet: {
    size: 768,
    width: 'max-width'
  },
  phone: {
    size: 576,
    width: 'max-width'
  }
};

export const Media = Object.keys(sizes).reduce( (acc, label) => {
    let {
      size,
      width
    } = sizes[label];

    acc[label] = (...args) => css`
      @media only screen and (${width}: ${size/16}em) {
          ${css(...args)}
      }`

    return acc;
},{});

export const useWidthHook = () => {
  let[width, setWidth] = useState(window.innerWidth);

  function updateWidth(){
    setWidth(window.innerWidth);
  };

  let handler = useRef();

  function subscribe(){
    handler.current = debounce(updateWidth, 500);
    window.addEventListener('resize', handler.current);
  }

  function unsubscribe(current){
    window.removeEventListener('resize', current);
    handler.current = null;
  }

  useEffect( () => {
    if(!handler.current){
      subscribe();
    }

    return () => unsubscribe();
  })

  return width;
}