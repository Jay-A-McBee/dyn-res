import React, { Component } from 'react';


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

