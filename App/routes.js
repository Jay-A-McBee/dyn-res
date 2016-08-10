import React from 'react';
import{ Route, IndexRedirect } from 'react-router';
import  Home  from './Containers/home-page';
import AboutMe  from './Containers/about-page';

 
export default (
	  <Route path = '/' component = { Home } >
	    <IndexRedirect to = '/home' />
	    <Route path = '/home' component = { AboutMe } />
	  </Route>

)