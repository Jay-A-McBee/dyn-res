import React, {useState} from 'react';
import ModalComponent from '../ModalIndex';
import {CarouselComponent} from '../CarouselIndex';
import styled, {css} from 'styled-components';
import adminScreen from '../../Assets/pics/adminScreen.png';
import spltScreen from '../../Assets/pics/spltscreen.png';
import fairshareScreen from '../../Assets/pics/fairshareShell.png';
import journeymenScreen from '../../Assets/pics/journeymenShell.png';
import sentimentalistScreen from '../../Assets/pics/sentimentalistShell.png';
import projectDescriptions from '../../Assets/shortDescription';
import {makeDescObj} from '../../helpers';
import ProjectInfo from '../projectinfo';
import {MediaWrap, Media} from '../Media';
import {
  FluidColumn, 
  Row, 
  Column
} from '../styleLayout';


const WorkContainer = styled(Row)`
  width: 80%;
  margin: auto;
  padding: 2.25em;
  max-height: 32.5em;

  ${Media.phone`
    width: 100%;
    padding: 0;
    flex-direction: column;
    position: relative;
    top: .5em;
  `}
`

const ListContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  border-left: 1.5px solid rgba(10, 10, 10, 0.3);
  margin-right: 1em;
  position: relative;
  top: .5em;

  ${Media.phone`
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1.5px solid rgba(10, 10, 10, 0.3);
    border-left: none;
    margin-right: 0;
  `}
`;

const WorkPlace = styled.div`
  text-align: center;
  line-height: 1.5; 
  width: 9em;
  height: 1.5em;
  transition: all 0.5s ease-in-out;
  padding: .5em 0;
  color: rgb(237, 157, 85);
  font-weight: 700;
  background-color: ${props => props.selected ? 'rgba(209, 209, 214, .2)' : 'inherit'};

  :hover{
    background-color: rgba(209, 209, 214, .2);
  }

  ${Media.phone`
    flex: 1;
    align-self: stretch;
  `}
`

const Highlight = styled.div`
    ${Media.phone`
      width: 33.3%;
      height: .12em;
      transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
      top: auto;
      bottom: -.1em;
      left: 0;
      transform: translateX(0);

      ${props => props.offset && css`
        transform: translateX(${((window.innerWidth - 40)/ 3) * props.offset}px);
      `}
    `}

    font-size: 14px;
    position: absolute;
    display: block;
    width: .12em;
    height: ${40/16}em;
    background: rgb(237, 157, 85);
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s;
    transform: translateY(0);
    top: 0px;
    left: -.1em;
    ${props => props.offset && css`
        transform: translateY(${(40/16) * props.offset}em);
    `}

`;

const Title = styled.p`
  font-size: 2em;
  font-weight: 700;
  margin: .5em 0;
  color:  rgb(255, 251, 242);

  ${Media.phone`
    font-size: 1.25em;
    `}
`;

const Dates = styled.p`
  font-size: 1.5em;
  font-weight: 400;
  margin: 0 0 0.5em 0;

  ${Media.phone`
    font-size: 1.25em;
    `}
`;

const WorkLink = styled.a`
  text-decoration: none;
  transition: all .25s ease-in-out;
  color: rgb(237, 157, 85);
  font-weight: 700

  :hover{
    text-decoration: underline;
  }
`;

const ListItem = styled.li`
  list-style-type: triangle;
  position: relative;
  left: -1.75em;
  margin-bottom: 1em;
  line-height: 1.5em;
`;

const WorkColumn = styled(Column)`
  ${Media.phone`
    position: relative;
    top: 1em;
  `}
`;

const pictureMap = [
  ['admin', adminScreen],
  ['splt', spltScreen],
  ['fairshare', fairshareScreen],
  ['journeymen', journeymenScreen],
  ['sentimentalist', sentimentalistScreen]
].reduce( (acc, [title, picture]) => {
  acc[title] = picture;
  return acc;
},{});

const {
  images,
  descriptions
} = makeDescObj(pictureMap, projectDescriptions);

const carouselChildren = Object.keys(projectDescriptions).reduce( (acc, description) => {
  
  const descriptionComponent = <ProjectInfo key={'img'} {...descriptions[description]}/>;
  
  if(/admin|splt/.test(description)){
    acc.SPLT.push(descriptionComponent);
  }else{
    acc.HackReactor.push(descriptionComponent);
  };

  return acc;
}, {SPLT:[], HackReactor:[]}) 
  
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

  const WorkDescription = ({title, description, dates, href}) => {
    const workplace = title.split(' ').pop();
    return (
      <WorkColumn justify={'space-between'}>
        {!href ? 
          <Title>{title}</Title> :
          <Title>{title+' '}<WorkLink href={href} target="_blank">{selected}</WorkLink></Title>
        }
        <Dates>{dates}</Dates>
        <ul>
          {Object.keys(description).map( key => <ListItem>{description[key]}</ListItem>)}
        </ul>
        {carouselChildren[selected] && 
          <ModalComponent
            child={
              <MediaWrap
                render={({width}) => (
                  <CarouselComponent
                    slideImages={null} 
                    children={carouselChildren[selected]} 
                    width={width}
                  />
                )}
              />
            }
            id={selected}
            message={"View Work"}
            animation={{vertical: true, slideDown: true}}
          />}
      </WorkColumn>
    )
  }

  let {
    title,
    description
  } = workDesc[selected];

  return (
    <WorkContainer justify={'space-between'}>
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
    </WorkContainer>
  )
}