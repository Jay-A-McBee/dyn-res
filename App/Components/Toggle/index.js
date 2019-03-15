import React, {useState, useEffect} from 'react'
import styled, {ThemeProvider} from 'styled-components';
import { projectDescriptions } from '../../Assets/shortDescription';

const ToggleTrack = styled.div`
    position: relative;
    top: 2em;
    left: 2em;
    display: flex;
    z-index: 100;
    flex-direction: row;
    justify-content: space-between;
    height: 1.5em;
    width: 2.75em;
    border-radius: 2.5em;
    background-color: ${props => props.theme.toggle.bckg};
`;

const Slide = styled.div`
    position: absolute;
    left: 0;
    height: 1.5em;
    width: 1.375em;
    background-color: ${props => props.theme.toggle.slide};
    border-radius: 4em; 
    border: .5px solid rgba(114, 98, 99, .99);
    transition: transform .5s cubic-bezier(.075, .085, .095, .85);
    transform: translateX(${props => 1.375 * props.offset}em);
`;

const HiddenCheckbox = styled.input`
    opacity: 0;
    cursor: pointer;
    height: 1.5em;
    width: 1.75em;
    border-radius: 4em; 
`;

export const LightDarkToggle = ({cb}) => {
    const [offset, setOffset] = useState(0);


    const toggle = () => {
        if(offset === 0 ){
            setOffset(1);
        }else{
            setOffset(0);
        }
        cb(offset);
    };

    return (
        <>
            <ToggleTrack>
                <HiddenCheckbox 
                    type='checkbox'
                    onChange={toggle} 
                    checked={offset === 1} 
                />
                <HiddenCheckbox
                    type='checkbox'
                    onChange={toggle} 
                    checked={offset === -1} 
                />
                <Slide offset={offset} />
            </ToggleTrack>
        </>
    )


}