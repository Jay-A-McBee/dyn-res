import React, {useState, useEffect, useRef} from 'react'
import styled, {ThemeProvider} from 'styled-components';
import {Media} from '../Media';
import { projectDescriptions } from '../../Assets/shortDescription';

const ToggleTrack = styled.div`
    align-self: center;
    position: relative;
    cursor: pointer;
    left: 2em;
    display: flex;
    z-index: 100;
    flex-direction: row;
    justify-content: space-between;
    height: 1.5em;
    width: 2.75em;
    border-radius: 2.5em;
    transition: background-color .5s cubic-bezier(.075, .085, .095, .85);
    background-color: ${props => props.theme.toggle.bckg};

    ${Media.phone`
        left: 1em;
    `}
`;

const Slide = styled.div`
    position: absolute;
    left: .05em;
    top: .1em;
    height: 1.35em;
    width: 1.37em;
    background-color: ${props => props.theme.toggle.slide};
    box-shadow: ${props => props.active ? `0px 1px 10px white` : `0px 0px transparent`};
    border: .25px solid black;
    border-radius: 4em; 
    transition: all .5s cubic-bezier(.075, .085, .095, .85);
    transform: translateX(${props => 1.24 * props.offset}em);
`;

export const LightDarkToggle = ({cb}) => {
    const [offset, setOffset] = useState(0);
    const [active, setActive] = useState(false);

    const handler = useRef(null);
    const lastPosition = useRef(0);

    useEffect(() => {
        if(active && lastPosition.current !== offset){
            lastPosition.current = offset;
            setActive(!active);
        }
    },[active, lastPosition.current, offset])

    const toggle = () => {
        if(offset === 0 ){
            setOffset(1);
        }else{
            setOffset(0);
        }
        handler.current.unsubscribe();
        cb(offset);
    };

    const subscribe = () => {
        window.addEventListener('mouseup', toggle);
        return {
            unsubscribe: () => window.removeEventListener('mouseup', toggle)
        }
    }

    const pulse = () => {
        handler.current = subscribe();
        setActive(!active);
    };

    return (
        <>
            <ToggleTrack
                onMouseDown={pulse}
            >
                <Slide active={active} offset={offset} />
            </ToggleTrack>
        </>
    )


}