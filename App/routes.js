import React from 'react';
import{ Route } from 'react-router';
import { Resume } from './Containers/resume-page';
import  Home  from './Containers/home-page';
import { AboutMe } from './Containers/about-page';
import ProjectPage  from './Containers/project-page'

 
export default (
	  <Route path = '/' component = { Home } >
	    <Route path = '/about' component = { AboutMe }/>
	    <Route path = '/projects' component = { ProjectPage } />
	    <Route path = '/resume'  component = { Resume } />
	  </Route>

)