import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



export function ProjectDescription({title,role,tasks,func}){
	
	let responsibilities = tasks.map( task => <li>{task}</li>)

  if(!(/You/).test(title)){
		return(
			<ReactCSSTransitionGroup 
        transitionName={'element'} 
        transitionAppear={true}  
        transitionAppearTimeout={500} 
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
				<div className = 'mdl-cell mdl-cell--6-col overlay desc oneMargin'>
				  <div>
		        <i className="material-icons pull-right pointer" onClick = {() => func(title.toLowerCase())}>clear</i>
		      </div>
				 <div className = 'centerText'>
				   <h4>{title} | {role}</h4>
				 </div>
				  <ul className = 'clear' style= {{padding: '20px'}}>
				    {[...responsibilities]}
				  </ul>
				</div>
			</ReactCSSTransitionGroup>
		)
	}else{
		return(
			<ReactCSSTransitionGroup 
        transitionName={'element'} 
        transitionAppear={true}  
        transitionAppearTimeout={500} 
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
				<div className = 'mdl-cell mdl-cell--6-col overlay desc oneMargin'>
				  <div>
		        <i className="material-icons pull-right pointer" onClick = {() => func('cat')}>clear</i>
		      </div>
				 <div className = 'centerText'>
				   <h4>{title} | {role}</h4>
				 </div>
				  <ul className = 'clear' style= {{padding: '20px'}}>
				    {[...responsibilities]}
				  </ul>
				</div>
			</ReactCSSTransitionGroup>
		)
	}
}