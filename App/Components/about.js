import React from 'react';
import Me from '../Assets/pics/me.jpg'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



export function About(){
	return(
		<ReactCSSTransitionGroup 
        transitionName={'element'} 
        transitionAppear={true}  
        transitionAppearTimeout={500} 
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
		  <div className = 'centerVert'>
			  <div className = 'mdl-grid about overlay'>
				    <div className = 'inline'>
				      <img src = {Me}/>
				    </div>
				    <div className = 'inline left bot'>
				      <div className = 'farDown'>
				        <h2>Yo!</h2>
				      </div>
				      <div>
						    <p>
						    Full stack JS developer.<br />
						    React and Redux are my jam.<br />
						    Finished cutting my teeth.<br />
						    Ready for the 'big show'.
						    </p>
				      </div>
					  </div>
				    <div className = 'inBlock left bot farDown'>
				      <div>
					      <h6 className = 'big down'>Get in Touch</h6>
					      <a  href='mailto:jmcbee1@gmail.com'>jmcbee1@gmail.com</a>
					    </div>
					    <div>
					      <h6 className = 'big down'>Code</h6>
					      <a  href = 'https://www.github.com/Jay-A-McBee'>Github</a>
					      <a  href = 'https://bitbucket.org/jay_mcbee/'>Bitbucket</a>
					    </div>
					  </div>
				</div>
		  </div>
	  </ReactCSSTransitionGroup>
	)
}