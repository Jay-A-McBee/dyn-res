import React from 'react';



export function ProjectImage({func,photo,title}){
	return(
		<div className = 'tooltip' onClick = { () => func(title)}>
      <span className = 'tooltiptext'>Click for description</span>
      <img className = 'proj' src = {photo} /> 
    </div>
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