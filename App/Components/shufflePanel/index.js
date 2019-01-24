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
  ${Media.phone`
    width: 95%;
    flex-direction: column;
  `}
`

const ListContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  border-left: 1.5px solid rgba(10, 10, 10, 0.3);

  ${Media.phone`
    flex-direction: row;
    justify-content: space-around;
    border-bottom: 1.5px solid rgba(10, 10, 10, 0.3);
    border-left: none;
  `}
`;

const WorkPlace = styled.div`
  text-align: center;
  line-height: 1.5; 
  width: 7.75em;
  transition: all 0.5s ease-in-out;
  padding: .5em;

  :hover{
    background-color: rgba(209, 209, 214, .2);
  }
`

const Highlight = styled.div`
    ${Media.phone`
      width: 7.85em;
      height: .12em;
      transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
      top: auto;
      bottom: -.1em;
      left: 0px;
      transform: translateX(0);

      ${props => props.offset && css`
        transform: translateX(${7.85 * props.offset}em);
      `}
    `}

    position: absolute;
    display: block;
    width: .12em;
    height: ${40/16}em;
    background: rgb(252, 219, 148);
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
      <Column justify={'space-between'}>
        {!href ? 
          <Title>{title}</Title> :
          <Title>{title+' '}<WorkLink href={href} target="_blank">{selected}</WorkLink></Title>
        }
        <Dates>{dates}</Dates>
        <ul>
        {Object.keys(description).map( key => <li>{description[key]}</li>)}
        </ul>
      </Column>
    )
  }

  let {
    title,
    description
  } = workDesc[selected];

  return (
    <WorkContainer justify={'space-around'}>
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
        />}
    </WorkContainer>
  )
}