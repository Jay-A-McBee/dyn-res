import React from 'react';

const ProjectInfo = ({title, role, desc, tasks, photo, func, prop, link, current}) => {

  const rightColumn = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  }

  const heightBlock = window.innerHeight / 10;


  const image = {
    borderRadius: '.25em',
    boxShadow: '0px 8px 10px gray, -10px 8px 10px gray, 10px 8px 10px gray',
    maxWidth: '70%',
    maxHeight: `${heightBlock * 5}px`
  }

  const container = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
	
	let contrib = tasks.map( (task, idx) => (
    <small key={idx} >{task}</small>
  ))
	
	return(
      <div style={{...container}}>
        <img style={{...image}} src = {photo} />
        <div style={{...rightColumn}}>
          <h4>{title}</h4>
          {[...contrib]}
          {link && 
            <div className = 'centerText'>
              <a target='_blank' href = { link }>View Repo</a>
            </div>}
        </div>
      </div>
	)
}

export default ProjectInfo