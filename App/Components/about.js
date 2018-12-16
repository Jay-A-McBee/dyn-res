import React from 'react';
import bio from '../Assets/bio'
import Me from '../Assets/pics/me.jpg'


export const About = () => {
  
	return (
        <div className = 'top'>
            <h1>About</h1>
            <img className = 'pull-left right' src = {Me} />
            <p className='top' style={{fontSize:'20px'}}>{bio}</p>
            <div className = 'centerText contact'>
                <a target='_blank' href='mailto:jmcbee1@gmail.com'>jmcbee1@gmail.com</a>
                <a target='_blank' href='https://github.com/Jay-A-McBee'>Github</a>
            </div>
        </div>
	)
}

