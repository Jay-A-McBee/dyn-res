import React, { Component, PropTypes} from 'react';
import { render } from 'react-dom';



export default class Skills extends Component{

	render(){

		return(
		  <div style={{marginBottom: '5px'}} className='moveDown resleft'>
		    <h4>Skills</h4>
	      <div>
	        <b className= 'big'>Strong</b> | JavaScript(ES5/ES6), React, Redux, Node/Express, Passport OAuth 2.0
	        <br />
	        <b className = 'big'>Experienced</b> | Flux, Webpack, Babel, Angular, PostgresSQL, Cassandra, Mocha, Chai, Enzyme
	      </div>
		  </div>
		)
	}
}

