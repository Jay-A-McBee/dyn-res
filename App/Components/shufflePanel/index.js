import React, {useState} from 'react';
import {Modal} from '../modal';
import {Carousel} from '../carousel';
import styled, {css} from 'styled-components';
import adminScreen from '../../Assets/pics/adminScreen.png';
import {admin} from '../../Assets/shortDescription';
import {makeDescObj} from '../../helpers';
import ProjectInfo from '../projectinfo';
import {MediaWrap, Media} from '../Media';
import {
  FluidColumn, 
  Row, 
  Column
} from '../styleLayout';



const workContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '80%',
  margin: 'auto',
}

const WorkContainer = styled(Row)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin: auto;
  ${Media.phone`
    flex-direction: column;
  `}
`

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-left: 1.5px solid rgba(10, 10, 10, 0.3);
  position: relative;

  ${Media.phone`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-self: stretch;
    border-bottom: 1.5px solid rgba(10, 10, 10, 0.3);
    border-left: none;
    position: relative;
  `}
`;

const WorkPlace = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${40/16}em;
  width: ${90/16}em;
  transition: all 0.5s ease-in-out;
  padding: 2.5px;

  :hover{
    background-color: rgba(209, 209, 214, .2);
  }
`

const Vertical = styled.div`
    position: absolute;
    display: block;
    width: .12em;
    height: ${40/16}em;
    background: rgb(252, 219, 148);
    transition: transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s;
    transform: translateY(0);
    top: 0px;
    left: 0px;
    z-index: 10;
    ${props => props.offset && css`
        transform: translateY(${(40/16) * props.offset}em);
    `}
`;

const Horizontal = styled.div`
    position: absolute;
    display: block;
    width: ${90/16}em;
    height: .12em;
    background: rgb(252, 219, 148);
    transition: transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s;
    top: auto;
    bottom: 0px;
    left: 0px;
    transform: translateX(0);

    ${props => props.offset && css`
      transform: translateX(${(120/16) * props.offset}em);
    `}
`;

const Highlight = (props) => (
  <MediaWrap
    render={({width}) => width > 500 ? (
      <Vertical {...props} />
    ) : (
      <Horizontal {...props} />
    )}
  />
)

const picTitleRef = [[adminScreen, 'admin']];

const {
  images,
  descriptions
} = makeDescObj(picTitleRef, [admin]);

const projectDescComponents = Object.keys(descriptions).map( description => <ProjectInfo key={'img'} {...descriptions[description]}/>); 
  
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
    <WorkContainer>
      <ListContainer>
        {employers.map( (title, idx) => (
          <WorkPlace 
            name={title} 
            onClick={updateSelected} 
            selected={selected === title}
          >{title}
          </WorkPlace>
        ))}
        <Highlight offset={offset} />
      </ListContainer>
      <WorkDescription {...workDesc[selected]}/>
        <button onClick={toggleModal}>View Work</button>
        <Modal
          open={isOpen}
          toggle={toggleModal}
          child={
            <MediaWrap
              render={({width}) => (
                <Carousel
                  slideImages={images} 
                  children={projectDescComponents} 
                  width={width}
                />
              )}
            />
          }
          dialogAnimation={'top'}
          id={selected}
        />
    </WorkContainer>
  )
}