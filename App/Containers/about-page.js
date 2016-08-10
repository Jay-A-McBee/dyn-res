import React, { Component } from 'react';
import { connect } from 'react-redux';
import { close, open, openDesc, closeDesc, openDescMod, closeDescMod } from '../Actions/genericActions';
import { Intro } from '../Components/intro';
import  ProjectPage  from './project-page';
import ProjectDescription from './projdesc-page';
import '../style.css';

class AboutMe extends Component{
	
	render(){
		let { 
			isOpen, 
			descOpen, 
			close, 
			open, 
			openDesc, 
			closeDesc, 
			openDescMod, 
			closeDescMod, 
			projects} = this.props;
		
		return(
			<div>
			  <Intro 
			    openUp = {isOpen}
			    close = {close}
			    open = {open}
			   />
			  <ProjectPage 
			    openDesc = {openDesc}
			    openDescMod = {openDesc}
			  />
			  <ProjectDescription 
			    projects = {projects}
			    descOpen = {descOpen}
			    closeDesc = {closeDesc}
          closeDescMod = {closeDescMod}
			  />
			</div>
		)
	}
}


function mapStateToProps(state){
  return{
 	  isOpen: state.modals.isOpen,
 	  descOpen: state.modals.descOpen,
 	  projects: {
 		  fshare: state.main.fairshare,
 		  jour: state.main.journeymen,
 		  senti: state.main.sentimentalist,
 		  kit: state.main.cats,
 		  range: state.main.range,
 		  lab: state.main.lab
 	  }
  }
}

export default connect(mapStateToProps,{
	close,
	open,
	openDesc,
	closeDesc,
	openDescMod,
	closeDescMod
})(AboutMe)