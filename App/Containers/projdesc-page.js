import React from 'react';
import ModalComponent from '../Components/ModalIndex';
import {makeDescObj} from '../helpers';
import descriptions  from '../Assets/shortDescription';
import fairsh from '../Assets/pics/fairshareShell.png';
import journeysh from '../Assets/pics/journeymenShell.png';
import sentish from '../Assets/pics/sentimentalistShell.png';
import ProjectInfo from '../Components/projectinfo';

export const ProjectDescription = ({closeDesc, active}) => {

  const picTitleRef = [
    [fairsh,'fairshare'],
    [journeysh,'journeymen'],
    [sentish,'sentimentalist'],
  ];
    
  const { 
    fairshare, 
    jmen, 
    sentiment, 
    kitkat, 
    electric, 
    sandBox 
  } = descriptions;

  const allDescriptions = makeDescObj(
    picTitleRef, 
    closeDesc, 
    [fairshare, jmen, sentiment, kitkat, electric, sandBox]
  );

  const selectProject = () => allDescriptions[active] ? (
    <ProjectInfo key={'img'} {...allDescriptions[active]} />
  ) : null;        

  return(
    <div>
      <Modal
        open={!!active}
        toggle={closeDesc}
        child={[selectProject()]}
        dialogAnimation={'top'}
        id={active}
      />
    </div>
  )
}
