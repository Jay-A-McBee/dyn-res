import React, { Component, PropTypes } from 'react';
import { MakeProjectBlock } from './projectBlock'
import ProjectsArray from '../Assets/recentProjects';



export default class Projects extends Component{


	render(){
  
    let allProjects = ProjectsArray.map(MakeProjectBlock);
		return(
      <div style={{marginBottom: '5px'}} className = 'resleft'>
        <h4>Recent Projects</h4>
        {[...allProjects]}
      </div>
		)
	}
}