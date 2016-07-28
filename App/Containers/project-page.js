import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ProjectImage, MakeImageObj } from '../Components/projectDesc';
import { openDesc, closeDesc } from '../Actions/genericActions';
import  descriptions  from '../Assets/shortDescription';
import cat from '../Assets/pics/cat.jpg';
import fair from '../Assets/pics/fair.jpg';
import journey from '../Assets/pics/journey.jpg';
import senti from '../Assets/pics/senti.jpg';
import bleed from '../Assets/pics/bleeding.png';
import elec from '../Assets/pics/electric.png'

export default class ProjectPage extends Component{

	render(){
		const picTitleRef = [[fair,'fairshare'],[journey,'journeymen'],[senti,'sentimentalist'],[cat,'cats'], [elec, 'range'], [bleed, 'lab']];
		let{ openDesc } = this.props;
		let{ fairshare, jmen, sentiment, kitkat, electric, sandbox } = descriptions;
		let [fairProj, jourProj, sentProj, catProj, elecProj, labProj] = MakeImageObj(picTitleRef,openDesc);

		return(
			<div className = 'show center centerText centerVert'>
				<div className="mdl-grid">
				  <div className="mdl-cell mdl-cell--4-col" >
				    <ProjectImage {...fairProj} />
				  </div>
				  <div className="mdl-cell mdl-cell--4-col  ">
				    <ProjectImage {...jourProj} />
				  </div>
				  <div className="mdl-cell mdl-cell--4-col ">
	          <ProjectImage {...sentProj} />
				  </div>
				</div>
				<div className="mdl-grid ">
				  <div className="mdl-cell mdl-cell--4-col ">
				    <ProjectImage {...catProj} />
				  </div>
				  <div className="mdl-cell mdl-cell--4-col ">
				    <ProjectImage {...elecProj} />
				  </div>
				  <div className="mdl-cell mdl-cell--4-col ">
				    <ProjectImage {...labProj} />
				  </div>
				</div>
			</div>
		)
	}
}

ProjectPage.propTypes = {
  openDesc: PropTypes.func.isRequired,
}


