import React, {useState} from 'react';
import {Modal} from '../modal';
import {Carousel} from '../carousel';
import styled, {css} from 'styled-components';

const workContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '80%',
  margin: 'auto',
}

const listContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  borderLeft: '1.5px solid rgba(10, 10, 10, 0.3)',
  padding: '0, 10px, 10px, 10px'
}

const WorkPlace = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  border: none;
  background-color: inherit;
  transition: all 0.5s cubic-bezier(1.000, -0.530, 0.405, 1.425);
  position: relative;
  left: -1.5px;
  ${props => props.selected  && css`
    background-color: rgba(209, 209, 214, .2);
    border-left: 1.5px solid rgba(179, 248, 218);
  `}
`
export const Experience = ({workDesc}) => {
  const employers = Object.keys(workDesc);
  
  let[selected, selectWorkExperience] = useState(employers[0]);

  const updateSelected = (e) => {
    e.preventDefault();
    selected = selectWorkExperience(e.nativeEvent.target.getAttribute('name'));
  }

  let[isOpen, toggleState] = useState(false);

  const toggleModal = () => toggleState(!isOpen);


  const WorkList = ({titles, handleClick}) => {
    return (
      <div style={{...listContainer}}>
        {titles.map( (title, idx) => title === selected ? (
            <WorkPlace name={title} onClick={handleClick} selected>{title}</WorkPlace>
          ) : (
            <WorkPlace name={title} onClick={handleClick}>{title}</WorkPlace>
          )
        )}
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
      {selected === 'SPLT' ? (
        <>
          <button onClick={toggleModal}>View Work</button>
          <Modal
            open={isOpen}
            toggle={toggleModal}
            child={<Carousel />}
            dialogAnimation={'top'}
            id={selected}
          />
        </>
      ) : (
        <>
          <button style={{visibility: 'hidden'}}></button>
        </>
      )}
    </div>
  )
}