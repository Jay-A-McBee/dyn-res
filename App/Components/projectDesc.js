import React from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import v4 from 'node-uuid';




export const ProjectImage = ({func,photo,prop,id}) => {

	return(
    <img onClick={()=>func(prop)} className = 'proj' src = {photo} /> 
	)
}

export function MakeImageObj(arrOfRefs,fn){
  return arrOfRefs.map( refPair => ({
  	  id: v4(),
			func: fn, 
			photo: refPair[0], 
			prop: refPair[1]
  }))
}