import React, {useState} from 'react';
import ModalComponent from '../ModalIndex';
import {CarouselComponent} from '../CarouselIndex';
import styled, {css} from 'styled-components';
import adminScreen from '../../Assets/pics/adminScreen.png';
import spltScreen from '../../Assets/pics/spltscreen.png';
import fairshareScreen from '../../Assets/pics/fairshareShell.png';
import journeymenScreen from '../../Assets/pics/journeymenShell.png';
import sentimentalistScreen from '../../Assets/pics/sentimentalistShell.png';
import {projectDescriptions, work} from '../../Assets/shortDescription';
import {makeDescObj} from '../../helpers';
import ProjectInfo from '../projectinfo';
import {useWidthHook, Media} from '../Media';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  FluidColumn, 
  Row, 
  Column
} from '../styleLayout';
import {
    inAndUp
} from '../styledText';


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
  top: -.5em;
`;

const WorkPlace = styled.div`
  text-align: center;
  line-height: 1.5;
  flex: 1;
  height: 1.5em;
  transition: all 0.5s ease-in-out;
  padding: .5em 0;
  color: ${props => props.theme.tabs};
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
    width: ${100.06/3}%;
    height: .2em;
    position: absolute;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
    top: auto;
    left: 0;
    bottom: -.1em;
    transform: translateX(0);
    background-color: ${props => props.theme.highlight};

    ${props => props.offset && css`
      transform: translateX(${100 * props.offset}%);
    `}
`;

const Title = styled.p`
  font-size: 2em;
  font-weight: 700;
  margin: .5em 0;
  color: ${props => props.theme.title};

  ${Media.phone`
    font-size: 1.25em;
  `}
`;

const Dates = styled.p`
  color: ${props => props.theme.dates};
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
  color: ${props => props.theme.highlight};
  font-weight: 700

  :hover{
    text-decoration: underline;
  }
`;

const BulletItem = styled(Row)`
  justify-content: flex-start;
  align-items: flex-start;
`;

const ListItem = styled.p`
  margin-bottom: 1em;
  position:relative;
  width: 85%;
  left: 1em;
  top: -.1em;

  ${Media.phone`
    font-size: .95em;
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
  ].reduce( (acc, description, i) => {
  
  const descriptionComponent = <ProjectInfo key={i} {...descriptions[description]}/>;
  
  if(/admin|splt/.test(description)){
    acc.SPLT.push(descriptionComponent);
  }else{
    acc.HackReactor.push(descriptionComponent);
  };

  return acc;

}, {SPLT:[], HackReactor:[]}) 

export const WorkDescription = ({title, description, dates, href, selected}) => {
  return (
    <WorkColumn data-testid='fullDescription' justify={'space-around'}>
      {!href ? 
        <Title className='animate'>{title}</Title> :
        <Title data-testid='title' className='animate'>{title+' '}<WorkLink data-testid='workLink' href={href} target="_blank">{selected}</WorkLink></Title>
      }
      <Dates data-testid='dates' className='animate'>{dates}</Dates>
      <br />
      {Object.keys(description).map((key, i) => 
        <BulletItem className='animate' key={i}>
          <FontAwesomeIcon style={{color: 'rgb(237, 157, 85)'}} icon='chevron-right' size='1x' />
          <ListItem data-testid={key}>{description[key]}</ListItem>
        </BulletItem>
      )}
      {carouselChildren[selected] ?
        <ModalComponent
          child={(open) => (
            <CarouselComponent
              open={open}
              slideImages={null} 
              children={carouselChildren[selected]} 
            />
          )}
          id={selected}
          message={"View Work"}
          animation={{vertical: true, slideDown: true}}
        /> : null}
    </WorkColumn>
  )
}
  
export const Experience = () => {
  const employers = Object.keys(work);
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

  let {
    title,
    description
  } = work[selected];

  return (
    <WorkContainer justify={'space-around'}>
      <ListContainer data-testid='tabs' className='animate'>
        {employers.map( (title, i) => (
          <WorkPlace
            data-testid={`tab${i + 1}`}
            className='animate'
            key={i}
            name={title} 
            onClick={updateSelected} 
            selected={selected === title}
          >{title}
          </WorkPlace>
        ))}
        <Highlight offset={offset} />
      </ListContainer>
      <WorkDescription selected={selected}  {...work[selected]}/>
    </WorkContainer>
  )
}
