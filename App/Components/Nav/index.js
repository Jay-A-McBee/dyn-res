import React, {useState, useEffect, useRef} from 'react';
import styled, {css, keyframes} from 'styled-components';
import throttle from 'lodash/throttle';
import {MobileNav} from './mobileNav';
import {LightDarkToggle} from '../Toggle';
import {Media, useWidthHook} from '../Media';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const fadeInAndUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(${20/16}em);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const NavButton = styled.div`
    font-weight: 700; 
    font-size: 1.5em; 
    text-align: center;
    align-self: center;
    padding: 2.5% .5% 2.5% 0;
    color: ${props => props.theme.nav.static};
    transition: all .25s ease-in-out;
    background-color: transparent;
    border: none;
    margin-right: .75em;
    cursor: pointer;

    :hover{
        color: ${props => props.theme.nav.hover};
    }
    animation: ${fadeInAndUp} .5s ease-in-out;
    animation-fill-mode: forwards;
    
    ${props => props.withBorder && css`
        border: .5px solid rgba(179, 248, 218)
    `}
`;

const StyledNav = styled.nav`
    padding-right: 10%;
    height: 75px;
    width: 100%;
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    transition: all .5s ease-in-out;

    ${props => props.hide && css`
        transform: translateY(-75px);
    `}

    ${props => props.fix && css`
        background-color: ${props => props.theme.bckg};
        box-shadow: 0 2.5px 5px rgba(10, 10, 10, .4);
    `}
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    width: 100%;
`;

const NavButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    left: -3.5em;
    width: 30%;
    height: 75px;
`;

export const Navigation = ({scroll, cb}) => {
    
    let[navStyles, updateNavStyle] = useState({fix:false, hide:false});
    let[isOpen, toggleOpen] = useState(false);
    let handler = useRef();
    let location = useRef(pageYOffset);
    let width = useWidthHook();

    const toggle = () => {
        const body = document.querySelector('body');

        if(!isOpen){
            body.className = `${body.className} noScroll`;
        }else{
            body.className = body.className.replace(/noScroll/,'');
        }
        
        toggleOpen(!isOpen);
    };

    const scrollToSection = (event) => {
        const name = event.target.getAttribute('name');
        scroll(name, width);
    };

    const respondToScroll = () => {
        const currentPos = window.pageYOffset;
        const movingDown = currentPos > location.current;

        if(!isOpen){
            if(currentPos > 0 && currentPos < 100){
                updateNavStyle({...navStyles, fix:true});
            }else if(movingDown){
                updateNavStyle({...navStyles, hide:true, fix:true});
            }else if(!movingDown && currentPos > 50){
                updateNavStyle({fix: true, hide: false});
            }else{
                location.current = 0;
                updateNavStyle({hide:false, fix:false});
            }
        }
    };

    const subscribe = () => {
        handler.current = throttle(respondToScroll, 250, {leading: true, trailing: true});
        window.addEventListener('scroll', handler.current);
    };

    const unsubscribe = () => {
        window.removeEventListener('scroll', handler.current);
        handler.current = null;
    };

    useEffect(() => {
        if(!handler.current){
            subscribe();
        }
        location.current = pageYOffset >= 0 ? pageYOffset : 0;
    },[navStyles])

    const iconStyles = {
        float: 'right',
        position: 'relative',
        top: '.75em',
        right:'.75em',
        fontWeight: '100'
    };

    const navLinks = ['<About />', '<Work />', '<Projects />'];

    const ButtonComponent = ({onClick}) => (
        <FontAwesomeIcon onClick={onClick} style={{...iconStyles}} size='2x' icon='bars' />
    );

    return width > 800 ? (
        <StyledNav {...navStyles}>
            <Container>
                <LightDarkToggle cb={cb} />
                <NavButtonContainer>
                    {navLinks.map( title => (
                        <NavButton 
                            name={title.match(/\<(\w+) \/\>/)[1].toLowerCase()} 
                            key={title} 
                            onClick={scrollToSection}
                        >{title}
                        </NavButton>
                    ))}
                </NavButtonContainer>
            </Container>
        </StyledNav>
    ) : (
        <MobileNav 
            isOpen={isOpen}
            toggle={toggle}
            scroll={scroll}
            navStyles={navStyles} 
            lightDarkSwitch={() => <LightDarkToggle cb={cb} />}
        />
    )
}