'use strict'

import React from 'react';
import uuid from 'node-uuid';
import { Link } from 'react-router';
import { MakeImageObj } from './projectDesc';



export const ProjectInfo = ({title, role, desc, tasks, photo, func, prop, link, current}) => {
	
	let contrib = tasks.map( task => (
    <li 
    className = 'leftText' 
    key={uuid.v4()} 
    style={{fontSize:'20px'}}>
    {task}
  </li>))
	
  const leaveWithAnim = () => {
    let modal = document.getElementById('descMod');
    modal.className = 'mdl-grid description-out';
    setTimeout( () => func(prop), 250)
  }

	return(
    <div className = 'modal-overlay'>
      <div  id='descMod' className = 'mdl-grid description-in'>
        <i className = 'pointer material-icons md-48'onClick = {()=>leaveWithAnim()}>arrow_back</i>
        <div className = 'mdl-cell mdl-cell--4-col'>
          <h2>{title}</h2>
          <h4>{desc}</h4>
          <h4>Role: {role}</h4>
          <ul>
           {[...contrib]}
          </ul>
          {link && 
            <div className = 'centerText'>
              <a href = {link}>View Repo</a>
            </div>}
          {current && 
            <div className = 'centerText' style={{color: 'red'}}>
              <p>{current}</p>
            </div>}
        </div>
        <div className = 'mdl-cell mdl-cell--6-col screenshot'>
          <img className = 'showFast' src = {photo} />
        </div>
      </div>
    </div>
	)
}

export function MakeDescObj(arrOfRefs, fn, arrOfDesc){
  let imageObjects = MakeImageObj(arrOfRefs, fn);
  return arrOfDesc.map( (descObj, idx) => Object.assign({}, descObj, imageObjects[idx]))
}