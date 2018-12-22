import React, {useState} from 'react';


const carousel = ({children = ['left', 'current', 'right']}) => {
  let [active, updateActive] = useState(Math.floor(children.length/2));


  
  const rotateLeft = () => {
    const current = document.getElementById('current');
    const previous = document.getElementById('previous');
    const next = document.getElementById('next');
    const {
      right,
      width
    }= getCoords(next);
    
    current.className = `${current.className} transitionLeft`;
    next.style.transform = `translate3d(-${width}px, 0px, 200px)`;
  }

  function getCoords(el){
    const {
      right,
      width
    } = el.getBoundingClientRect();

    return {
      right,
      width
    }
  };
  const rotateRight = () => updateActive(active-=1);


  return(
    <div className='carouselBody'>
      <i className='material-icons' style={{"fontSize": "40px"}} onClick={rotateLeft}>chevron_left</i>
        <div id = 'previous'className="carouselCard previous" style={{"fontSize": "40px"}}>{children[active-1]}</div>
        <div id='current' className="carouselCard current" style={{"fontSize": "40px"}}>{children[active]}</div>
        <div id = 'next' className="carouselCard next" style={{"fontSize": "40px"}}>{children[active+1]}</div>
      <i className='material-icons' style={{"fontSize": "40px"}} onClick={rotateRight}>chevron_right</i>
    </div>
  )
}

export default carousel