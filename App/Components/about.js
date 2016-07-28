import React, { Component } from 'react';
import { Link } from 'react-router';
import bio from '../Assets/bio'
import Me from '../Assets/pics/me.jpg'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



export class About extends Component{

	constructor(){
		super()
		this.closeWithAnim = this.closeWithAnim.bind(this)
	}


	closeWithAnim(){
		var desc = document.getElementById('about_box')
		desc.className = 'about slideout';
    setTimeout(()=>this.props.close(),500);
	}
  
  render(){
  	let { openUp, close } = this.props;
  	let aboutSection  = (<p className='top' style={{fontSize:'20px'}}>{bio}</p>)
		return openUp ? (
		  <div className ='modal-overlay'>
					<div id = 'about_box' className = 'about slidein'>
					    <i onClick = {this.closeWithAnim} className = 'material-icons md-48'>arrow_back</i>
					    <div className = 'top'>
					    <h1>About</h1>
					    <img className = 'pull-left right' src = {Me} />
					    {aboutSection}
					    <div className = 'centerText contact'>
						    <a href='mailto:jmcbee1@gmail.com'>jmcbee1@gmail.com</a>
						    <a href='https://github.com/Jay-A-McBee'>Github</a>
						  </div>
					  </div>
					</div>
			</div>
		):null
	}
}
