import React from 'react';
import bio from '../Assets/bio'
import Me from '../Assets/pics/me.jpg'

export const About = () => {

  const contactStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
  
	return (
    <div className = 'about'>
      <h1 style={{color: 'rgba(122, 203, 168, 0.9)'}}>About</h1>
      <img className = 'pull-left right' src = {Me} />
      <p className='top' style={{fontSize:'20px', color: 'rgba(122, 203, 168, 0.9)'}}>{bio}</p>
      <div style={{...contactStyles}}>
        <a target='_blank' href='mailto:jmcbee1@gmail.com'>
          <i 
            style={{color: 'rgba(122, 203, 168, 0.9)'}}
            className='pointer material-icons md-48'
          >
            google
          </i>
        </a>
        <a target='_blank' href='https://github.com/Jay-A-McBee'>
          <i 
            style={{color: 'rgba(122, 203, 168, 0.9)'}}
            className='pointer material-icons md-48'
          >
            github
          </i>
        </a>
        <a target='_blank' href='https://www.linkedin.com/in/jayaustinmcbee/'>
          <i 
            style={{color: 'rgba(122, 203, 168, 0.9)'}}
            className='pointer material-icons md-48'
          >
            linkedin-box
          </i>
        </a>
      </div>
    </div>
	)
}
