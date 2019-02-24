import React, {useImperativeHandle} from 'react';


export const scrollImperativeHandle = (container, ref, id) => {
  return useImperativeHandle(ref, () => {
    return {
      id,
      offset: container.current.offsetTop
    }
  });
}
