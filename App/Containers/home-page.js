import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { Intro } from '../Components/intro';
import { Link } from 'react-router';


export default class Home extends Component{

	
  
  render(){
  	let { children } = this.props;
  	return(
  		<div>
  		  <Intro />
		    <div>{ children }</div>
  		</div>
  	)
  }
}

