import React, { Component } from 'react';
import { Link } from 'react-router';
import bio from '../Assets/bio'
import Me from '../Assets/pics/me.jpg'


export const About = ({close}) => {
  
  let aboutSection  = (<p className='top' style={{fontSize:'20px'}}>{bio}</p>)

	const closeWithAnim = () => {
		var desc = document.getElementById('about_box')
		desc.className = 'about slideout';
    setTimeout( () => close(), 500);
	}
  
	return (
	  <div id='shadow' className ='modal-overlay'>
			<div id = 'about_box' className = 'about slidein'>
				<i onClick = {() => closeWithAnim()} 
				  className = 'pointer material-icons md-48'>
				  arrow_back</i>
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
	)
}

