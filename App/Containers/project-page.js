import React from 'react';
import Carousel from '../Components/carousel';
import cat from '../Assets/pics/cat.jpg';
import fair from '../Assets/pics/fair.jpg';
import journey from '../Assets/pics/journey.jpg';
import senti from '../Assets/pics/senti.jpg';
import bleed from '../Assets/pics/bleeding.png';
import elec from '../Assets/pics/electric.png';
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
		[bleed, 'lab']
	];
	

	const { 
    fairshare, 
    jmen, 
    sentiment, 
    kitkat, 
    electric, 
    sandBox 
  } = projectDescriptions;

  const {
  	images,
  	descriptions
  } = MakeDescObj(
    picTitleRef, 
    [fairshare, jmen, sentiment, kitkat, electric, sandBox]
  );


  const projectDescComponents = Object.keys(descriptions).map( description => <ProjectInfo key={'img'} {...descriptions[description]}/>);
	

	return(
		<div>
			<Carousel
				slideImages={images}
				children={projectDescComponents}
			/>
		</div>
	)
}
