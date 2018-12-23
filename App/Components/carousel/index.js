import React, {useState} from 'react';


const carousel = ({children = ['0', '1', '2', '3', '4', '5']}) => {
  const centerIdx = Math.floor(children.length/2) - 1;

  let [activeIndexes, update] = useState({ 
    active: centerIdx,
    next: centerIdx+1,
    previous: centerIdx-1 
  });

  const updateActiveIndexes = (activeObj) => {
    update(activeObj);
  }

  const transitionStyles = (width) => ({
    becomecurrent: {
      transform: `translate3d(-${width * .5}px, 0px, 1em)`,
      boxShadow: "0px 8px 10px gray, -10px 8px 10px gray, 10px 8px 10px gray"
    },
    becomePrevious: {
      transform: `translate3d(-${width * .75}px, 0px, -1em)`,
      boxShadow: "none"
    },
    next: {},
    leave: {
      transform: `translate3d(${width * .75}px, 0px, -5em)`,
    }
  })

  const {
    becomecurrent,
    becomePrevious,
    next,
    leave
  } = transitionStyles(200);

  let [
    currentStyle, 
    updateCurrentStyle
  ] = useState({
    "boxShadow": "0px 8px 10px gray, -10px 8px 10px gray, 10px 8px 10px gray",
    "zIndex": "10"
  });

  const calcCurrentStyle = () => {
    updateCurrentStyle(becomePrevious);
  }

  let [
    nextStyle, 
    updateNextStyle
  ] = useState({});

  const calcNextStyle = () => {
    updateNextStyle(becomecurrent);
  }

  let [
    previousStyle, 
    updatePreviousStyle
  ] = useState({});

  const calcPrevStyle = () => {
    updatePreviousStyle({});
  }

  const rotateLeft = () => {
    const {
      active,
      next,
      previous
    } = activeIndexes;
    
    [calcCurrentStyle, calcNextStyle, calcPrevStyle].forEach( (fn, idx) => {
      if(idx === 0) fn();
      else setTimeout( () => fn(), 1000);
    });
    
    setTimeout( () => updateActiveIndexes({
      active: next,
      previous: active,
      next: next + 1
    }), 1000);
  };

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

  const carouselCard = (val, id, className, style) => {
    return id ? (
      <div key={val} id={id} className={`carouselCard ${className}`} style={{...style}}>{val}</div>
    ) : (
      <div key={val} className={`carouselCard`} hidden={true}>{val}</div>
    )
  };

  return(
    <div className='carouselBody'>
      <i className='material-icons' style={{"fontSize": "40px"}} onClick={rotateLeft}>chevron_left</i>
        {children.slice(activeIndexes.previous, activeIndexes.next + 1).map( (el, idx) => {
          if(idx === 0) return carouselCard(el, 'previous', 'previous', previousStyle);
          if(idx === 1) return carouselCard(el, 'current', '', currentStyle);
          if(idx === 2) return carouselCard(el, 'next', 'next show', nextStyle);
        })}
      <i className='material-icons' style={{"fontSize": "40px"}} onClick={rotateRight}>chevron_right</i>
    </div>
  )
}

export default carousel