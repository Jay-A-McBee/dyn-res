import React, {useState, useEffect, useRef} from 'react';
import styled, {css} from 'styled-components';
import debounce from 'lodash/debounce';

const sizes = {
  desktop: {
    size: 800,
    width: 'min-width'
  },
  tablet: {
    size: 799,
    width: 'max-width'
  },
  phone: {
    size: 600,
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
    handler.current = debounce(updateWidth, 500, {leading:false, trailing: true});
    window.addEventListener('resize', handler.current);

    return {
      unsubscribe: () => window.removeEventListener('resize', handler.current)
    }
  }

  useEffect(() => {
    const listener = subscribe();
    return () => listener.unsubscribe();
  },[])

  return width;
}