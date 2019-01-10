import React, {useState} from 'react';

const workContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '80%',
  margin: 'auto',
  border: '2px solid black'
}

const listContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  padding: '10px'
}

const WorkTitle = ({title, handleClick, idx}) => (<div name={title} onClick={handleClick}>{title}</div>);

const WorkList = ({titles, handleClick}) => {
  return (
    <div style={{...listContainer}}>
      {titles.map( (title, idx) => <WorkTitle key={idx} handleClick={handleClick} title={title} />)}
    </div>
  )
}

const WorkDescription = ({title, description}) => {
  return (
    <div style={{padding: '10px'}}>
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  )
}


export const Experience = ({workDesc}) => {
  const employers = Object.keys(workDesc);
  
  let[selected, selectWorkExperience] = useState(employers[0]);

  const updateSelected = ({nativeEvent}) => {
    debugger
    selected = selectWorkExperience(nativeEvent.target.getAttribute('name'));
  }


  let {
    title,
    description
  } = workDesc[selected];

  return (
    <div style={{...workContainer}}>
      <WorkList 
        titles={employers}
        handleClick={updateSelected} 
      />
      <WorkDescription 
        title={title}
        description={description}
      />
    </div>
  )
}