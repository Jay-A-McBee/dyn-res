import React, {useState} from 'react';

const reelStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  height: '200px',
  width: '60%',
}

const reelCard = {
  alignSelf: 'stretch',
  marginLeft: '1px',
  marginRight: '1px',
  backgroundColor: 'white',
  width: '100px',
  transition: 'border 1s ease-in-out'
}

const border = {
  border: '.5px solid black'
}






const carousel = ({children = ['0', '1', '2', '3', '4', '5']}) => {

  let [active, updateActive] = useState(0);

  const selectNext = () => {
    debugger
    updateActive(active+1);
  }
  const selectPrevious = () => updateActive(active-1);
  const selectSpecific = ({nativeEvent}) => {
    debugger
    updateActive(parseInt(nativeEvent.target.getAttribute('data-index'),10));
  }

  return (
    <div className='carousel'>
      <div className='carouselBody'>
        <i className='material-icons' style={{"fontSize": "40px"}} onClick={selectNext}>chevron_left</i>
          
        <i className='material-icons' style={{"fontSize": "40px"}} onClick={selectPrevious}>chevron_right</i>
      </div>
      <div style={{...reelStyles}}>
        {children.map( (child, idx) => idx === active ?  
          (<div key={idx} data-index={idx} style={{...reelCard, ...border}}>{child}</div>) : 
          (<div key={idx} data-index={idx} onClick={selectSpecific} style={{...reelCard}}>{child}</div>)
        )}
      </div>
    </div>
  )
}

export default carousel