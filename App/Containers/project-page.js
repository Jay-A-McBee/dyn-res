import React, {Suspense} from 'react';
import {Modal} from '../Components/Modal';
import cat from '../Assets/pics/cat.jpg';
import fair from '../Assets/pics/fair.jpg';
import journey from '../Assets/pics/journey.jpg';
import senti from '../Assets/pics/senti.jpg';
import bleed from '../Assets/pics/bleeding.png';
import elec from '../Assets/pics/electric.png'
import {MakeImageObj} from '../helpers';
const ProjectImage = React.lazy(() => import ('../Components/projectDesc'));

export const ProjectPage = ( {openProject} ) => {

	const picTitleRef = [[fair,'fairshare'],[journey,'journeymen'],[senti,'sentimentalist'],[cat,'cats'], [elec, 'range'], [bleed, 'lab']];
	let screenShots = MakeImageObj(picTitleRef, openProject);
	
	return(
		<div className = 'show center centerText centerVert'>
			<div className="mdl-grid">
			{screenShots.map( imgObj => 
			  <div key = {imgObj.id} className="mdl-cell mdl-cell--4-col" >
				  <Suspense fallback={<div>Loading...</div>}>
				    <ProjectImage {...imgObj} />
				  </Suspense>
			  </div>
			)}
			</div>
		</div>
	)
}


