import React from 'react';


export function MakeProjectBlock(obj){
	
	let bulletPoints = obj.tasks.map( task => (<li>{task}</li>));
	
	return(
    <div>
      <div className='pull-left inBlock moveDown'>
        <p className = 'big'><span style={{
          textDecoration:'underline'
        }}>{obj.title}</span> | {obj.role} | <small>{obj.desc}</small></p>
      </div>
      <ul style= {{padding: '15px'}}className='clear'>
        {[...bulletPoints]}
      </ul>
    </div>
	)
}