import React, {Suspense} from 'react';
import {Modal} from '../Components/Modal';
import {MakeDescObj} from '../helpers';
import descriptions  from '../Assets/shortDescription';
import catsh from '../Assets/pics/catsh.png';
import fairsh from '../Assets/pics/fairsh.png';
import journeysh from '../Assets/pics/journeysh.png';
import sentish from '../Assets/pics/sentish.png';
import elecsh from '../Assets/pics/elecsh.png';
import bleedsh from '../Assets/pics/labsh.png';
const ProjectInfo = React.lazy(() => import('../Components/projectinfo'));

export const ProjectDescription = ({closeDesc, active}) => {

    const picTitleRef = [[fairsh,'fairshare'],[journeysh,'journeymen'],[sentish,'sentimentalist'],[catsh,'cats'],[elecsh,'range'], [bleedsh,'lab']];
    
    const { fairshare, jmen, sentiment, kitkat, electric, sandBox } = descriptions;
    
    const allDescriptions = MakeDescObj(picTitleRef, closeDesc, [fairshare, jmen, sentiment, kitkat, electric, sandBox]);

    const selectProject = () => allDescriptions[active] ? (
        <Suspense fallback={<div>Loading...</div>}>
            <ProjectInfo key={'img'} {...allDescriptions[active]} />
        </Suspense>
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


