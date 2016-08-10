import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ProjectInfo, MakeDescObj } from '../Components/projectinfo'
import  descriptions  from '../Assets/shortDescription';
import catsh from '../Assets/pics/catsh.png';
import fairsh from '../Assets/pics/fairsh.png';
import journeysh from '../Assets/pics/journeysh.png';
import sentish from '../Assets/pics/sentish.png';
import elecsh from '../Assets/pics/elecsh.png';
import bleedsh from '../Assets/pics/labsh.png';

export const ProjectDescription = ({ closeDesc, projects }) => {

	let{ fshare, jour, senti, kit, range, lab } = projects;
  const picTitleRef = [[fairsh,'fairshare'],[journeysh,'journeymen'],[sentish,'sentimentalist'],[catsh,'cats'],[elecsh,'range'], [bleedsh,'lab']];
	let{ fairshare, jmen, sentiment, kitkat, electric, sandBox } = descriptions;
	let[ 
	  fairDesc, 
	  jourDesc, 
	  sentDesc, 
	  catDesc,
	  elecDesc,
	  labDesc ] = MakeDescObj(picTitleRef, closeDesc, [fairshare, jmen, sentiment, kitkat, electric, sandBox]);
	return(
		<div>
      {fshare && <ProjectInfo {...fairDesc} />}
      {jour && <ProjectInfo {...jourDesc} />}
      {senti && <ProjectInfo {...sentDesc} />}
      {kit && <ProjectInfo {...catDesc} />}
      {range && <ProjectInfo {...elecDesc} />}
      {lab && <ProjectInfo {...labDesc} />}
    </div>
	)
}


