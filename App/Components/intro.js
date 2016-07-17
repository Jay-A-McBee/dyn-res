import React from 'react';
import { Link } from 'react-router';


export function Intro(){
	return(
		<div>
	    <div className = 'center leftText centerVert'>
	      <h1 className = 'farDown'>J. Austin McBee</h1>
	      <h2>Full-Stack Developer</h2>
			  <Link to = '/about'>About</Link>
		    <Link to = '/projects'>Projects</Link>
		    <Link to = '/resume'>Resume</Link>
	    </div>
	  </div>
	)
}