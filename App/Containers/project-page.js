import React from 'react';
import Carousel from '../Components/carousel';
import cat from '../Assets/pics/cat.jpg';
import fair from '../Assets/pics/fair.jpg';
import journey from '../Assets/pics/journey.jpg';
import senti from '../Assets/pics/senti.jpg';
import bleed from '../Assets/pics/bleeding.png';
import elec from '../Assets/pics/electric.png';
import slideScreen from '../Assets/pics/slideScreen.png';
// import cat from '../Assets/pics/catsh.png';
// import fair from '../Assets/pics/fairsh.png';
// import journey from '../Assets/pics/journeysh.png';
// import senti from '../Assets/pics/sentish.png';
// import elec from '../Assets/pics/elecsh.png';
// import bleed from '../Assets/pics/labsh.png';
import projectDescriptions  from '../Assets/shortDescription';
import ProjectInfo from '../Components/projectinfo';
import {
	MakeImageObj,
	MakeDescObj
} from '../helpers';

export const ProjectPage = () => {

	const picTitleRef = [
		[fair,'fairshare'],
		[journey,'journeymen'],
		[senti,'sentimentalist'],
		[cat,'cats'], 
		[elec, 'range'], 
		[bleed, 'lab'],
        [slideScreen, 'slide']
	];
	

	const { 
    fairshare, 
    jmen, 
    sentiment, 
    kitkat, 
    electric, 
    sandBox,
    slide
  } = projectDescriptions;

  const {
  	images,
  	descriptions
  } = MakeDescObj(
    picTitleRef, 
    [fairshare, jmen, sentiment, kitkat, electric, sandBox, slide]
  );
  debugger


  const projectDescComponents = Object.keys(descriptions).map( description => <ProjectInfo key={'img'} {...descriptions[description]}/>);
	

	return(
		<Carousel
			slideImages={images}
			children={projectDescComponents}
		/>
	)
}
