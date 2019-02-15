import React, {useImperativeHandle} from 'react';


export const scrollImperativeHandle = (container, ref, id) => {
  return useImperativeHandle(ref, () => ({
    id,
    scroll: () => {
      container.current.scrollIntoView({
        block: 'start', 
        inline: 'nearest', 
        behavior: 'smooth'
      })
    },
    getCoords: () => {
      const {
        top
      } = container.current.getBoundingClientRect();

      return{
        top,
        offset: container.current.offsetTop
      }
    } 
  }));
}
