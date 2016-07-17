import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { Intro } from '../Components/intro';


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

