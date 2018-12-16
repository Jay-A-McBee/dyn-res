import React from 'react';
import v4 from 'node-uuid';


export const ProjectImage = ( {func,photo,prop,id} ) => {
    console.log([func])
	return(
        <img src={photo} onClick={func} name={prop} className = 'proj'/> 
	)
}

export const MakeImageObj = (arrOfRefs,fn) => {
  return arrOfRefs.map( refPair => ({
  	  id: v4(),
			func: fn, 
			photo: refPair[0], 
			prop: refPair[1]
  }))
}