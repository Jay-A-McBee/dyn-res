'use strict'

import React from 'react';
import v4 from 'node-uuid';
import { MakeImageObj } from './projectDesc';



export const ProjectInfo = ({title, role, desc, tasks, photo, func, prop, link, current}) => {
	
	let contrib = tasks.map( task => (
    <li 
      className = 'leftText' 
      key={v4()} 
      style={{fontSize:'20px'}}
    >{task}</li>
  ))
	
	return(
      <div className = 'mdl-grid'>
        <div className = 'mdl-cell mdl-cell--4-col'>
          <h2>{title}</h2>
          <h4>{desc}</h4>
          <h4>Role: {role}</h4>
          <ul>
           {[...contrib]}
          </ul>
          {link && 
            <div className = 'centerText'>
              <a target='_blank' href = { link }>View Repo</a>
            </div>}
        </div>
        <div className = 'mdl-cell mdl-cell--6-col screenshot'>
          <img className = 'showFast' src = {photo} />
        </div>
      </div>
	)
}

export const MakeDescObj = (arrOfRefs, fn, arrOfDesc) => {
  let imageObjects = MakeImageObj(arrOfRefs, fn);
  return arrOfDesc.reduce( (acc,descObj, idx) => {
      acc[imageObjects[idx].prop] = Object.assign({}, descObj, imageObjects[idx]);
      return acc;
  },{});
}