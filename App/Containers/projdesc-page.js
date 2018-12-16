import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ProjectInfo, MakeDescObj } from '../Components/projectinfo'
import {Modal} from '../Components/Modal';
import  descriptions  from '../Assets/shortDescription';
import catsh from '../Assets/pics/catsh.png';
import fairsh from '../Assets/pics/fairsh.png';
import journeysh from '../Assets/pics/journeysh.png';
import sentish from '../Assets/pics/sentish.png';
import elecsh from '../Assets/pics/elecsh.png';
import bleedsh from '../Assets/pics/labsh.png';

export const ProjectDescription = ({closeDesc, active}) => {

    const picTitleRef = [[fairsh,'fairshare'],[journeysh,'journeymen'],[sentish,'sentimentalist'],[catsh,'cats'],[elecsh,'range'], [bleedsh,'lab']];
    
    const { fairshare, jmen, sentiment, kitkat, electric, sandBox } = descriptions;
    
    const allDescriptions = MakeDescObj(picTitleRef, closeDesc, [fairshare, jmen, sentiment, kitkat, electric, sandBox]);

    console.log(allDescriptions)

    const selectProject = () => allDescriptions[active] ? (<ProjectInfo key={'img'} {...allDescriptions[active]} />) : null;        

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


