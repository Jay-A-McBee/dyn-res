import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import Skills from '../Components/firstComponent';
import Header from '../Components/resume';
import WorkExperience from '../Components/experience'
import Projects from '../Components/projects'
import '../style.css'


export class Resume extends Component{

	render(){
		return(
      <ReactCSSTransitionGroup 
        transitionName={'element'} 
        transitionAppear={true}  
        transitionAppearTimeout={500} 
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
				<div className='paper centerVert'>
				  <Header />
				  <Skills />
				  <Projects />
				  <WorkExperience />
				</div>
		  </ReactCSSTransitionGroup>
		)
	}
}




