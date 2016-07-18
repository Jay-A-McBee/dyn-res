import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';




export function ProjectImage({func,photo,title}){
	return(
	  <ReactCSSTransitionGroup 
      transitionName={'element'} 
      transitionAppear={true}  
      transitionAppearTimeout={500} 
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}>	
			<div className = 'tooltip' onClick = { () => func(title)}>
	      <span className = 'tooltiptext'>Click for description</span>
	      <img className = 'proj' src = {photo} /> 
	    </div>
	  </ReactCSSTransitionGroup> 
	)
}

export function MakeImageObj(arrOfRefs,fn){
  return arrOfRefs.map( refPair => {
  	return {
			func: fn, 
			photo: refPair[0], 
			title: refPair[1]
		}
  })
}