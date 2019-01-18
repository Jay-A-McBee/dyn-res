import React, {useState} from 'react';
import {Modal} from '../modal';
import {Carousel} from '../carousel';
import styled, {css} from 'styled-components';
import adminScreen from '../../Assets/pics/adminScreen.png';
import {admin} from '../../Assets/shortDescription';
import {makeDescObj} from '../../helpers';
import ProjectInfo from '../projectinfo';
import {MediaWrap} from '../Media';



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
  justifyContent: 'flex-start',
  borderLeft: '1.5px solid rgba(10, 10, 10, 0.3)',
  position: 'relative',
}

const WorkPlace = styled.div`
  display: flex;
  align-items: center;
  border: none;
  background-color: inherit;
  position: relative;
  left: -1.5px;
  height: ${40/16}em;
  transition: all 0.5s ease-in-out;
  padding: 0 1.5em;

  :hover{
    background-color: rgba(209, 209, 214, .2);
  }
`

const VerticalLine = styled.span`
    width: .12em;
    height: ${40/16}em;
    background: rgb(252, 219, 148);
    transition: transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s;
    display: block;
    position: absolute;
    transform: translateY(0);
    top: 0px;
    left: -.1em;
    ${props => props.offset && css`
        transform: translateY(${(40/16) * props.offset}em)
    `}
`;

export const Experience = ({workDesc}) => {
  const employers = Object.keys(workDesc);
  
  let[selected, selectWorkExperience] = useState(employers[0]);
  let[offset, updateOffset] = useState(0);

  const updateSelected = (e) => {
    e.preventDefault();
    const title = e.nativeEvent.target.getAttribute('name');
    const next = employers.indexOf(title);

    offset = updateOffset(next);
    selected = selectWorkExperience(title);
  }

  let[isOpen, toggleState] = useState(false);

  const toggleModal = () => toggleState(!isOpen);

  const picTitleRef = [[adminScreen, 'admin']];

  const {
    images,
    descriptions
  } = makeDescObj(picTitleRef, [admin]);
debugger
  const projectDescComponents = Object.keys(descriptions).map( description => <ProjectInfo key={'img'} {...descriptions[description]}/>); 

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
      <div style={{...listContainer}}>
        {employers.map( (title, idx) => (
          <WorkPlace 
            name={title} 
            onClick={updateSelected} 
            selected={selected === title}
          >{title}
          </WorkPlace>
        ))}
        <VerticalLine offset={offset} />
      </div>
      <WorkDescription {...workDesc[selected]}/>
      {selected === 'SPLT' ? (
        <>
          <button onClick={toggleModal}>View Work</button>
          <Modal
            open={isOpen}
            toggle={toggleModal}
            child={
              <MediaWrap
                component={Carousel}
                slideImages={images} 
                children={projectDescComponents} 
              />
            }
            dialogAnimation={'top'}
            id={selected}
          />
        </>
      ) : (
        <>
          <button style={{visibility: 'hidden'}}>View Work</button>
        </>
      )}
    </div>
  )
}