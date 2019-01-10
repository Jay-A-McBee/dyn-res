import React from 'react';
import { About } from './about';
import {Modal} from './modal';

export const Intro = ({toggleBio, open}) => {
    const navLinks = ['About', 'Experience', 'Projects'];
    
    const navStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: '7.5%',
        marginRight: '10%'
    };

    const container = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }

    const intro = {
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingLeft: '5em',
    }

    /*<Modal 
        open={open}
        toggle={toggleBio}
        child={[<About key={'desc'} />]}
        dialogAnimation={'side'}
        id={'about'}
    />*/

    /*<i onClick={toggleBio} style={{fontSize: '3em'}} className="material-icons pointer">menu</i>*/

    return  (
        <div style={{...container}}>
            <div style={{...navStyle}}>
                {navLinks.map( title => <a href={`#${title}`} style={{fontWeight: '400', fontSize: '1em'}}>{`<${title} />`}</a>)}
            </div>
            <div style={{...intro}}>
                <h1 style={{fontWeight: '700', fontSize: '5em'}}>Hi - I'm Austin McBee.</h1>
                <div style={{maxWidth: '50%', marginLeft: '2em'}}>
                    <p style={{fontSize: '2em'}}>I write code for the web.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    )
}