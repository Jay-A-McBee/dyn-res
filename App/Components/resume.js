import React, { Component } from 'react';



export default class Header extends Component{

	render(){

		return(
		  <div className="mdl-grid moveDown">
		    <div className='mdl-cell mdl-cell--4-col leftText'>
		      <a href='mailto:jmcbee1@gmail.com'>jmcbee1@gmail.com</a>
		    </div>
		    <div className='mdl-cell mdl-cell--4-col centerText'>
		      <h4>Jay Austin McBee</h4>
		    </div>
		    <div className='mdl-cell mdl-cell--4-col rightText'>
		      <a href='https://www.github.com/Jay-A-McBee'>github.com/Jay-A-McBee</a>
		      <br />
		      <a href='https://www.linkedin.com/in/jayaustinmcbee'>linkedin.com/in/jayaustinmcbee</a>
		    </div>
		  </div>
		)
	}
}