import React, {useState, useEffect} from 'react';
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

export const MediaWrap = ({render}) => {
  let[width, setWidth] = useState(window.innerWidth);

  function updateWidth(){
    setWidth(window.innerWidth);
  };

  useEffect( () => {

    const checkWidth = debounce(updateWidth, 500);

    window.addEventListener('resize', checkWidth);

    () => window.removeEventListener('resize', checkWidth);
  })

  return (
    render({width})
  )
}