import React from 'react';
import{ Route, IndexRedirect } from 'react-router';
import { Intro } from './Components/intro';
import  Home  from './Containers/home-page';
import AboutMe  from './Containers/about-page';
import ProjectPage  from './Containers/project-page'

 
export default (
	  <Route path = '/' component = { Home } >
	    <IndexRedirect to = '/home' />
	    <Route path = '/home' component = { AboutMe } />
	  </Route>

)