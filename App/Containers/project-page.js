import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ProjectImage, MakeImageObj } from '../Components/projectDesc';
import {Modal} from '../Components/modal';
import cat from '../Assets/pics/cat.jpg';
import fair from '../Assets/pics/fair.jpg';
import journey from '../Assets/pics/journey.jpg';
import senti from '../Assets/pics/senti.jpg';
import bleed from '../Assets/pics/bleeding.png';
import elec from '../Assets/pics/electric.png'

export const ProjectPage = ( {openProject} ) => {

	const picTitleRef = [[fair,'fairshare'],[journey,'journeymen'],[senti,'sentimentalist'],[cat,'cats'], [elec, 'range'], [bleed, 'lab']];
	let screenShots = MakeImageObj(picTitleRef, openProject);
    console.log('screenshots', JSON.stringify(screenShots));    
	return(
		<div className = 'show center centerText centerVert'>
			<div className="mdl-grid">
			{screenShots.map( imgObj => 
			  <div key = {imgObj.id} className="mdl-cell mdl-cell--4-col" >
			    <ProjectImage {...imgObj} />
			  </div>
			)}
			</div>
		</div>
	)
}


