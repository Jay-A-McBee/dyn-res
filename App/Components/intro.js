import React, {useState, useEffect} from 'react';
import { About } from './about';
import {Modal} from './modal';

export const Intro = ({toggleBio, open}) => {
    const navLinks = ['About', 'Experience', 'Projects'];
    
    let navStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignSelf: 'stretch',
        marginTop: '7.5%',
        paddingRight: '10%',
        transition: 'transform .5s ease-in-out'
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

    let [navStyles, updateNav] = useState(navStyle);

    const toggleNav = (styles) => {
        updateNav({...navStyles, ...styles});
    }

    /*<Modal 
        open={open}
        toggle={toggleBio}
        child={[<About key={'desc'} />]}
        dialogAnimation={'side'}
        id={'about'}
    />*/

    /*<i onClick={toggleBio} style={{fontSize: '3em'}} className="material-icons pointer">menu</i>*/

    const checkScrollPos = (e) => {
       if(document.documentElement.scrollTop > 40){
            toggleNav({transform: `translateY(-${document.documentElement.scrollTop * 10})`, boxShadow: '0 2.5px 1px rgba(10, 10, 10, .2)'})
        } 
    }

    useEffect(
        () => {

            window.addEventListener('scroll', checkScrollPos)

            return () => window.removeEventListener('scroll', checkScrollPos);
        }
    )

    return  (
        <div style={{...container}}>
            <div style={{...navStyles}}>
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