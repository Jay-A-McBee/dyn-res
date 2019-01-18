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

export const MediaWrap = ({component, ...rest}) => {
  let[device, setDevice] = useState('desktop');

  const updateWidth = () => {
    const width = window.innerWidth;

    if(width > 770){
      setDevice('desktop');
    }else if(width > 768){
      setDevice('tablet');
    }else if(width > 576){
      setDevice('phone');
    }else{
      setDevice('phone');
    }
  };

  useEffect( () => {

    const checkWidth = debounce(updateWidth, 500);

    window.addEventListener('resize', checkWidth);

    () => window.removeEventListener('resize', checkWidth);
  })

  return (
    component({device, ...rest})
  )
}