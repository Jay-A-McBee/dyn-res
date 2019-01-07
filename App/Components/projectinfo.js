import React from 'react';

const ProjectInfo = ({title, role, desc, tasks, photo, func, prop, link, current}) => {

  const rightColumn = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }

  const heightBlock = window.innerHeight / 10;

  const image = {
    borderRadius: '.25em',
    maxWidth: '100%',
    maxHeight: `${heightBlock * 6.5}px`
  }

  const container = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
	
	let contrib = tasks.map( (task, idx) => (
    <strong key={idx} style={{"fontSize": '1.1em'}} >{task}</strong>
  ))
	
	return(
      <div style={{...container}}>
        <img style={{...image}} src = {photo} />
        <div style={{...rightColumn}}>
          <h2>{title}</h2>
          {[...contrib]}
          {link && 
            <a target='_blank' href = { link }>Repo</a>
          }
        </div>
      </div>
	)
}

export default ProjectInfo