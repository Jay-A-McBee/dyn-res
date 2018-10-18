import React, { Component } from 'react';
import { Link } from 'react-router';
import { About } from './about';
import { ProjectPage } from '../Containers/project-page'


export class Intro extends Component{

	render(){
		let { open, close, openUp } = this.props;
		return(
	    <div className = 'left centerVert leftText slowrise'>
	      <div>
	        <i onClick = {() => open() } className="show menu pull-right pointer material-icons">menu</i>
	        {openUp && 
	        	<About close = {close}/>}
	        <h1>jmcbee.info</h1>
	        <div className = 'centerVert underline'></div>
	      </div>
	    </div>
	  )
	}
}