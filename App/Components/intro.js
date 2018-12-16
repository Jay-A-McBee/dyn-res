import React, {useState} from 'react';
import { About } from './about';
import {Modal} from './modal';

export const Intro = ({toggleBio, open}) => {
    return  (
        <div className = 'left centerVert leftText slowrise'>
            <div>
                <i onClick={toggleBio} className="show menu pull-right pointer material-icons">menu</i>
                <h1>jmcbee.info</h1>
                <div className = 'centerVert underline'></div>
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