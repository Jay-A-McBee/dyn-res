import React, {useState} from 'react';
import ProjectImage from '../projectDesc';


const carousel = ({children = ['0', '1', '2', '3', '4', '5'], slideImages}) => {

  const reelStyles = {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    width: '60%'
  }

  const reelCard = {
    maxWidth: '20%',
    maxHeight: '3em',
    transition: 'filter 1s'
  }

  const inactive = {
    filter: `brightness(0.25)`,
    opacity: '0.98' 
  }

  const chevronContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'stretch',
    justifyContent: 'center'
  }

  const activeProject = {
    width: '60%'
  }

  let [active, updateActive] = useState(0);

  const selectNext = () => {
    updateActive(active+1);
  }
  const selectPrevious = () => updateActive(active-1);
  const selectSpecific = ({nativeEvent}) => {
    debugger
    updateActive(parseInt(nativeEvent.target.getAttribute('data-index'),10));
  }

  const projectImages = slideImages.map( (imgObj, index) => ({
    index,
    handleClick: selectSpecific,
    styles: reelCard,
    ...imgObj
  }));

  return (
    <div className='carousel'>
      <div className='carouselBody'>
        <div style={{...chevronContainer}}>
          <i className='material-icons' style={{"fontSize": "40px"}} onClick={selectNext}>chevron_left</i>
        </div>
        <div style={{...activeProject}}>{children[active]}</div>
        <div style={{...chevronContainer}}>
          <i className='material-icons' style={{"fontSize": "40px"}} onClick={selectPrevious}>chevron_right</i>
        </div>
      </div>
      <div onClick={selectSpecific} style={{...reelStyles}}>
        {projectImages.map( (props, idx) => {
          if(idx === active){
            return (  
              <ProjectImage {...props}  />
            )
          }else{
            props.styles = {...props.styles, ...inactive};
            return (
              <ProjectImage {...props} />
            )
          }
        })}
      </div>
    </div>
  )
}

export default carousel