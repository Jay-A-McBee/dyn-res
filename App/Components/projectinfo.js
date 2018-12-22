import React from 'react';

const ProjectInfo = ({title, role, desc, tasks, photo, func, prop, link, current}) => {
	
	let contrib = tasks.map( (task, idx) => (
    <li 
      className = 'leftText' 
      key={idx} 
      style={{fontSize:'20px'}}
    >{task}</li>
  ))
	
	return(
      <div className = 'mdl-grid'>
        <div className = 'mdl-cell mdl-cell--6-col'>
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

export default ProjectInfo