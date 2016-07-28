import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { ProjectPage } from './project-page'
import { Link } from 'react-router';


export default class Home extends Component{

	
  
  render(){
  	let { children } = this.props;
  	return(
  		<div>
		    <div>{ children }</div>
  		</div>
  	)
  }
}

