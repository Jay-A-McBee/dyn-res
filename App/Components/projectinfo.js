'use strict'

import React from 'react';
import uuid from 'node-uuid';
import { Link } from 'react-router';
import { MakeImageObj } from './projectDesc';



export function ProjectInfo({title, role, desc, tasks, photo, func, prop, link}){
	
	let contrib = tasks.map( task => (<li key={uuid.v4()} style={{fontSize:'20px'}}>{task}</li>))
	
	return(
    <div className = 'modal-overlay'>
      <div className = 'mdl-grid description'>
        <i className = 'pointer material-icons md-48'onClick = {() => func(prop)}>arrow_back</i>
        <div className = 'mdl-cell mdl-cell--4-col'>
          <h2>{title}</h2>
          <h4>{desc}</h4>
          <h4>Role: {role}</h4>
          <ul>
           {[...contrib]}
          </ul>
         {link && <a href = {link}>View Repo</a>}
        </div>
        <div className = 'mdl-cell mdl-cell--6-col'>
          <img className = 'screenshot' src = {photo} />
        </div>
      </div>
    </div>
	)
}

export function MakeDescObj(arrOfRefs, fn, arrOfDesc){
  let imageObjects = MakeImageObj(arrOfRefs, fn);
  return arrOfDesc.map( (descObj, idx) => Object.assign({}, descObj, imageObjects[idx]))
}