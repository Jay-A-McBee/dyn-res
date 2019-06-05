import React, {useState, useEffect, useRef} from 'react'
import styled, {ThemeProvider} from 'styled-components';
import {Media} from '../Media';
import { projectDescriptions } from '../../Assets/shortDescription';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ToggleTrack = styled.div`
    align-self: center;
    position: relative;
    cursor: pointer;
    left: 2em;
    height: 21.5px;
    width: 45px;
    border-radius: 2.5em;
    transition: background-color .5s cubic-bezier(.075, .085, .095, .85);
    border: 1.5px solid rgb(232, 237, 244);
    background-color: ${props => props.theme.toggle.bckg};
    ${Media.phone`
        left: 1.5em;
    `}
`;

const Slide = styled.div`
    position: relative;
    left: .04em;
    height: 18.5px;
    width: 18.5px;
    background-color: ${props => props.theme.toggle.slide};
    box-shadow: ${props => props.active ? `0px 1px 10px white` : `0px 0px transparent`};
    border: .75px solid ${props => props.theme.bckg};
    border-radius: 50%; 
    transition: all .5s cubic-bezier(.075, .8, .2, .8);
    transform: translate(${props => 23.5 * props.offset}px, -.9em);
    ${Media.phone`
        transform: translate(${props => 23.5 * props.offset}px, -.95em);
    `}
    
`;

const BckgWrapper = styled.div`
    display: flex; 
    justify-content: space-evenly; 
    position: relative; 
    transform: translateY(2.85px);
`;

export const LightDarkToggle = ({cb, icons:[currIcon, altIcon]}) => {
    const [offset, setOffset] = useState(0);
    const [active, setActive] = useState(false);

    const lastPosition = useRef(0);

    useEffect(() => {
        if(active && lastPosition.current !== offset){
            lastPosition.current = offset;
            setActive(!active);
        }
    },[active, lastPosition.current, offset])

    const toggle = (ev) => {
        ev.preventDefault()
        if(offset === 0 ){
            setOffset(1);
        }else{
            setOffset(0);
        }
        cb(offset);
    };

    const pulse = (ev) => {
        ev.preventDefault()
        setActive(!active);
    };

    return (
        <>
            <ToggleTrack
                onMouseDown={pulse}
                onMouseUp={toggle}
                onTouchStart={pulse}
                onTouchEnd={toggle}
            >
                {currIcon && altIcon && 
                    <BckgWrapper>
                        <FontAwesomeIcon style={{'color': 'rgb(237,157,85)'}} icon={currIcon} />
                        <FontAwesomeIcon style={{'color': 'rgb(103, 206, 178)'}} icon={altIcon} />
                    </BckgWrapper>
                }
                <Slide active={active} offset={offset} />
            </ToggleTrack>
        </>
    )
}