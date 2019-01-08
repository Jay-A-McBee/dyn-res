import React from 'react';
import bio from '../Assets/bio'
import Me from '../Assets/pics/me.jpg'

export const About = () => {

  const contactStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
    marginTop: '2em'
  }
  
	return (
    <div className = 'about'>
      <h1>About</h1>
      <img className = 'pull-left right' src = {Me} />
      <p className='top' style={{fontSize:'1.3em'}}>{bio}</p>
      <div style={{...contactStyles}}>
        <a target='_blank' href='mailto:jmcbee1@gmail.com'>
          <i
            className='zmdi zmdi-google zmdi-hc-2x'
          >
          </i>
        </a>
        <a target='_blank' href='https://github.com/Austin-ClickTripz'>
          <i
            className='zmdi zmdi-github-box zmdi-hc-2x'
          >
          </i>
        </a>
        <a target='_blank' href='https://www.linkedin.com/in/jayaustinmcbee/'>
          <i
            className='zmdi zmdi-linkedin-box zmdi-hc-2x'
          >
          </i>
        </a>
      </div>
    </div>
	)
}
