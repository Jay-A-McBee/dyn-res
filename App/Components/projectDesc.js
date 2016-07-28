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
      transitionLeaveTimeout={300}>
      <div>
	      <img onClick={()=>func(prop)} className = 'proj' src = {photo} /> 
	    </div>
	  </ReactCSSTransitionGroup> 
	)
}

export function MakeImageObj(arrOfRefs,fn){
  return arrOfRefs.map( refPair => {
  	return {
			func: fn, 
			photo: refPair[0], 
			prop: refPair[1]
		}
  })
}