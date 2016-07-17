import React from 'react';



export function MakeExperienceBlock(obj){

	let bulletPoints = obj.resp.map( responsibility => (<li>{responsibility}</li>));
	
	return(
    <div>
      <div className='pull-left inBlock moveDown'>
        <p className = 'big'><span style={{
          textDecoration:'underline'
        }}>{obj.org}</span> | {obj.pos} | {obj.locale}</p>
      </div>
      <div className='pull-right inBlock right moveDown'>
        <b>{obj.date}</b>
      </div>
        <ul style= {{padding: '15px'}} className='clear'>
          {[...bulletPoints]}
        </ul>
    </div>
	)
}