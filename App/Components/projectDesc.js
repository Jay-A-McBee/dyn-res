import React from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';




export function ProjectImage({func,photo,prop}){

	return(
	  <ReactCSSTransitionGroup 
      transitionName={'element'} 
      transitionAppear={true}  
      transitionAppearTimeout={500} 
      transitionEnterTimeout={500}
      transitionLeaveTimeout={100}>
	    <img onClick={()=>func(prop)} className = 'proj' src = {photo} /> 
	  </ReactCSSTransitionGroup> 
	)
}

export function MakeImageObj(arrOfRefs,fn){
  return arrOfRefs.map( refPair => ({
			func: fn, 
			photo: refPair[0], 
			prop: refPair[1]
  }))
}