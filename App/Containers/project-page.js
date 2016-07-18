import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ProjectDescription } from '../Components/description';
import { ProjectImage, MakeImageObj } from '../Components/projectDesc';
import  descriptions  from '../Assets/shortDescription';
import { openDesc, closeDesc } from '../Actions/genericActions';
import cat from '../Assets/pics/cat.jpg';
import fair from '../Assets/pics/fair.jpg';
import journey from '../Assets/pics/journey.jpg';
import senti from '../Assets/pics/senti.jpg';

class ProjectPage extends Component{

	render(){
		const picTitleRef = [[fair,'fairshare'],[journey,'journeymen'],[senti,'sentimentalist'],[cat,'cat']];
		let{ fShare, jour, sent, kit, openDesc, closeDesc} = this.props;
		let{ fairshare, jmen, sentiment, kitkat } = descriptions;
		let[ fairShot, jrn, sentim, catty ] = [fairshare,jmen,sentiment,kitkat].map( obj => Object.assign({},obj,{func: closeDesc}));

		let [fairProj, jourProj, sentProj, catProj] = MakeImageObj(picTitleRef,openDesc);

		return(
			<div>
				<div className="mdl-grid center centerVert">
				  <div className="mdl-cell mdl-cell--6-col oneMargin" >
				    {!fShare ? <ProjectImage {...fairProj} />
				     : <ProjectDescription {...fairShot} />}
				  </div>
				  <div className="mdl-cell mdl-cell--6-col oneMargin">
				    {!jour ? <ProjectImage {...jourProj} />
				     : <ProjectDescription {...jrn}/>}
				  </div>
				  <div className="mdl-cell mdl-cell--6-col oneMargin">
	          {!sent ? <ProjectImage {...sentProj} />
	           : <ProjectDescription {...sentim}/>}
				  </div>
				  <div className="mdl-cell mdl-cell--6-col oneMargin">
				    {!kit ? <ProjectImage {...catProj} />
				     : <ProjectDescription {...catty}/>}
				  </div>
				</div>
			</div>
		)
	}
}

ProjectPage.propTypes = {
  fShare: PropTypes.bool.isRequired,
  jour: PropTypes.bool.isRequired,
  sent: PropTypes.bool.isRequired,
  kit: PropTypes.bool.isRequired,
  openDesc: PropTypes.func.isRequired,
  closeDesc: PropTypes.func.isRequired
}

function mapStateToProps(state){
	return {
	  fShare: state.fairshare,
	  jour: state.journeymen,
	  sent: state.sentimentalist,
	  kit: state.cat
	}
}
export default connect(mapStateToProps,{
	openDesc,
  closeDesc})(ProjectPage);

