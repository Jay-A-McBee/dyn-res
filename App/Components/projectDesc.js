import React from 'react';

const ProjectImage = ( {func,photo,prop,id} ) => {
	return (
    <img src={photo} onClick={func} name={prop} className = 'proj'/> 
	)
};

export default ProjectImage;