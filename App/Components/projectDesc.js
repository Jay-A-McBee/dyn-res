import React from 'react';

const ProjectImage = ({photo, prop, handleClick, index, styles}) => {
  return (
    <img 
      style={{...styles}} 
      key={index} 
      data-index={index} 
      src={photo} 
      onClick={handleClick} 
      name={prop}
    /> 
  )
};

export default ProjectImage;