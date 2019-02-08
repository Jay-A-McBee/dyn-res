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
import {useWidthHook, Media} from '../Media';
import {
  FluidColumn, 
  Row, 
  Column
} from '../styleLayout';


const WorkContainer = styled(Column)`
  width: 80%;
  margin: auto;
  padding: 2.25em;

  ${Media.phone`
    width: 100%;
    padding: 0;
    position: relative;
    top: .5em;
  `}
`

const ListContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1.5px solid rgba(10, 10, 10, 0.3);
  margin-right: 0;
  position: relative;
  top: -.5em;
  opacity: 0;
  transform: translateY(${20/16}em);

  ${props => props.active && css`
      opacity: 1;
      transform: translateY(0);
  `}
`;

const WorkPlace = styled.div`
  text-align: center;
  line-height: 1.5;
  flex: 1;
  width: 9em;
  height: 1.5em;
  transition: all 0.5s ease-in-out;
  padding: .5em 0;
  color: rgb(237, 157, 85);
  font-size: 1.5em;
  font-weight: 700;
  background-color: ${props => props.selected ? 'rgba(209, 209, 214, .2)' : 'inherit'};

  :hover{
    background-color: rgba(209, 209, 214, .2);
  }

  ${Media.phone`
    flex: 1;
    font-size: 1em;
  `}
`

const Highlight = styled.div`
    width: 33.33%;
    height: .17em;
    position: absolute;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
    top: auto;
    bottom: -.1em;
    left: 0;
    transform: translateX(0);
    background-color: rgb(237, 157, 85);

    ${props => props.offset && css`
      transform: translateX(${100 * props.offset}%);
    `}
`;

const Title = styled.p`
  font-size: 2em;
  font-weight: 700;
  margin: .5em 0;
  color:  rgb(255, 251, 242);
  opacity: 0;
  transform: translateY(${20/16}em);

  ${props => props.active && css`
      opacity: 1;
      transform: translateY(0);
  `}

  ${Media.phone`
    font-size: 1.25em;
    `}
`;

const Dates = styled.p`
  font-size: 1.5em;
  font-weight: 400;
  margin: 0 0 0.5em 0;
  opacity: 0;
  transform: translateY(${20/16}em);

  ${props => props.active && css`
      opacity: 1;
      transform: translateY(0);
  `}

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
  opacity: 0;
  transform: translateY(${20/16}em);

  ${props => props.active && css`
      opacity: 1;
      transform: translateY(0);
  `}
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

const carouselChildren = [
  'admin', 
  'splt', 
  'fairshare', 
  'journeymen', 
  'sentimentalist'
  ].reduce( (acc, description) => {
  
  const descriptionComponent = <ProjectInfo key={'img'} {...descriptions[description]}/>;
  
  if(/admin|splt/.test(description)){
    acc.SPLT.push(descriptionComponent);
  }else{
    acc.HackReactor.push(descriptionComponent);
  };

  return acc;

}, {SPLT:[], HackReactor:[]}) 
  
export const Experience = ({workDesc, inView}) => {
  const employers = Object.keys(workDesc);
  
  let[selected, selectWorkExperience] = useState(employers[0]);
  let[offset, updateOffset] = useState(0);
  let width = useWidthHook();

  const updateSelected = (e) => {
    e.preventDefault();
    const title = e.nativeEvent.target.getAttribute('name');
    const next = employers.indexOf(title);

    updateOffset(next);
    selectWorkExperience(title);
  }

  const WorkDescription = ({title, description, dates, href}) => {
    const workplace = title.split(' ').pop();
    return (
      <WorkColumn justify={'space-around'}>
        {!href ? 
          <Title active={inView}>{title}</Title> :
          <Title active={inView}>{title+' '}<WorkLink href={href} target="_blank">{selected}</WorkLink></Title>
        }
        <Dates active={inView}>{dates}</Dates>
        <ul>
          {Object.keys(description).map((key, i) => <ListItem active={inView} key={i}>{description[key]}</ListItem>)}
        </ul>
        {carouselChildren[selected] ?
          <ModalComponent
            child={
              <CarouselComponent
                slideImages={null} 
                children={carouselChildren[selected]} 
              />
            }
            id={selected}
            message={"View Work"}
            animation={{vertical: true, slideDown: true}}
          /> : <div style={{height: '7.5em'}}></div>}
      </WorkColumn>
    )
  }

  let {
    title,
    description
  } = workDesc[selected];

  return (
    <WorkContainer justify={'space-around'}>
      <ListContainer active={inView}>
        {employers.map( (title, i) => (
          <WorkPlace 
            key={i}
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
