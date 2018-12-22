import React from 'react';
import { About } from './about';
import {Modal} from './modal';

export const Intro = ({toggleBio, open}) => {
    return  (
        <div>
            <div className = 'topBar'>
                <h1>jmcbee.info</h1>
                <i onClick={toggleBio} style={{fontSize: '3em'}} className="material-icons pointer">menu</i>
            </div>
            <Modal 
                open={open}
                toggle={toggleBio}
                child={[<About key={'desc'} />]}
                dialogAnimation={'side'}
                id={'about'}
            />
        </div>
    )
}