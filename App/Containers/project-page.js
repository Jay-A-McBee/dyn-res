import React from 'react';
import Carousel from '../Components/carousel';
import fair from '../Assets/pics/fairshareThumbnail.jpg';
import fairScreen from '../Assets/pics/fairshareShell.png';
import journey from '../Assets/pics/journeyThumbnail.jpg';
import journeyScreen from '../Assets/pics/journeymenShell.png';
import senti from '../Assets/pics/sentimentThumbnail.jpg';
import sentiScreen from '../Assets/pics/sentimentalistShell.png';
import spltAdmin from '../Assets/pics/adminThumbnail.jpg';
import spltAdminScreen from '../Assets/pics/adminScreen.png';
import bleed from '../Assets/pics/bleeding.png';
import elec from '../Assets/pics/electric.png';
import slideScreen from '../Assets/pics/slideScreen.png';
// import bleed from '../Assets/pics/labsh.png';
import projectDescriptions  from '../Assets/shortDescription';
import ProjectInfo from '../Components/projectinfo';
import {
	MakeImageObj,
	makeDescObj
} from '../helpers';

export const ProjectPage = () => {

	const picTitleRef = [
		[fairScreen, 'fairshare', fair],
		[journeyScreen, 'journeymen', journey],
		[sentiScreen, 'sentimentalist', senti],
		// [cat,'cats'], 
		[elec, 'range'], 
		[bleed, 'lab'],
    [slideScreen, 'slide'],
    [spltAdminScreen, 'admin', spltAdmin]
	];
	

	const { 
    fairshare, 
    jmen, 
    sentiment, 
    // kitkat, 
    electric, 
    sandBox,
    slide,
    admin
  } = projectDescriptions;

  const {
  	images,
  	descriptions
  } = makeDescObj(
    picTitleRef, 
    [fairshare, jmen, sentiment, electric, sandBox, slide, admin]
  );

  const projectDescComponents = Object.keys(descriptions).map( description => <ProjectInfo key={'img'} {...descriptions[description]}/>);
	
	return(
		<Carousel
			slideImages={images}
			children={projectDescComponents}
		/>
	)
}
