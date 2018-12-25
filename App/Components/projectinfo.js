import React from 'react';

const ProjectInfo = ({title, role, desc, tasks, photo, func, prop, link, current}) => {

  const rightColumn = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }

  const contribRow = {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between'
  }
	
	let contrib = tasks.map( (task, idx) => (
    <div
      className = 'leftText' 
      key={idx} 
    ><small>{task}</small></div>
  ))
	
	return(
      <div className = 'mdl-grid'>
        <div style={{...rightColumn}}  className = 'mdl-cell mdl-cell--2-col'>
          <h4>{title}</h4>
          <p>{desc}</p>
          <p>Role: {role}</p>
          {link && 
            <div className = 'centerText'>
              <a target='_blank' href = { link }>View Repo</a>
            </div>}
        </div>
        <div style={{...rightColumn}} className = 'mdl-cell mdl-cell--6-col screenshot'>
          <img src = {photo} />
          <div style={{...contribRow}}> 
            {[...contrib]}
          </div>
        </div>
      </div>
	)
}

export default ProjectInfo