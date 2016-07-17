import React, { Component, PropTypes } from 'react';
import { MakeExperienceBlock } from './experienceBlock'
import ExperienceArray from '../Assets/workExperience';



export default class WorkExperience extends Component{


	render(){
  
    let allExperience = ExperienceArray.map(MakeExperienceBlock);

		return(
      <div style={{marginBottom: '5px'}} className = 'resleft'>
        <h4>Experience</h4>
        {[...allExperience]}
      </div>
		)
	}
}