import React from 'react';

const ProjectImage = ({photo, prop, handleClick, index, styles, thumbnail}) => {
  return (
    <img 
      style={{...styles}} 
      key={index} 
      data-index={index} 
      src={thumbnail || photo} 
      onClick={handleClick} 
      name={prop}
    /> 
  )
};

export default ProjectImage;