import React, {useState} from 'react';
import {Modal} from '../modal';
import {Carousel} from '../carousel';

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
  justifyContent: 'center',
  padding: '10px'
}

const workTitle = {
  display: 'flex',
  justifyContent: 'center',
  padding: '10px',
  transition: 'background-color .25s ease-in-out, border-left .25s ease-in-out'
}


const selectedWorkTitle = {
  backgroundColor: 'rgb(59, 61, 72)',
  borderLeft: '5px solid rgba(179, 248, 218, 0.82)',
  ...workTitle
}

export const Experience = ({workDesc}) => {
  const employers = Object.keys(workDesc);
  
  let[selected, selectWorkExperience] = useState(employers[0]);

  const updateSelected = (e) => {
    e.preventDefault();
    selected = selectWorkExperience(e.nativeEvent.target.getAttribute('name'));
  }

  let[isOpen, toggleState] = useState(false);

  const toggleModal = () => toggleState(!isOpen);

  const WorkTitle = ({title, handleClick, idx}) => title === selected ? (
    <div name={title} onClick={handleClick} style={{...selectedWorkTitle}}>{title}</div>
  ) : (
    <div name={title} onClick={handleClick} style={{...workTitle}}>{title}</div>
  );


  const WorkList = ({titles, handleClick}) => {
    return (
      <div style={{...listContainer}}>
        {titles.map( (title, idx) => <WorkTitle key={idx} handleClick={handleClick} title={title} />)}
      </div>
    )
  };

  const WorkDescription = ({title, description, dates}) => {
    return (
      <div style={{padding: '10px'}}>
        <h5>{title}</h5>
        <h3>{dates}</h3>
        <p>{description}</p>
      </div>
    )
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
      <WorkDescription {...workDesc[selected]}/>
      {selected === 'SPLT' ? (<button onClick={toggleModal}>View Work</button>) : null}
      <Modal
        open={isOpen}
        toggle={toggleModal}
        child={<Carousel />}
        dialogAnimation={'top'}
        id={selected}
      />
    </div>
  )
}