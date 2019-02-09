import React, {useState, useEffect, useRef} from 'react';
import styled, {css, keyframes} from 'styled-components';
import debounce from 'lodash.debounce';
import ModalComponent from '../ModalIndex';
import {Media, useWidthHook} from '../Media';
import {UseScrollTracking} from '../ScrollHook';

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
    float: right; 
    text-align: center;
    position: relative;
    right: 5%;
    padding: 2.5% .5% 2.5% 0;
    color: rgb(255, 251, 242);
    transition: all .25s ease-in-out;
    background-color: transparent;
    border: none;
    margin-right: .75em;
    cursor: pointer;

    :hover{
        color: rgb(237,157,85);
    }
    animation: ${fadeInAndUp} .5s ease-in-out;
    animation-fill-mode: forwards;
    
    ${props => props.withBorder && css`
        border: .5px solid rgba(179, 248, 218)
    `}

    ${Media.phone`
        display: flex;
        background-color: rgba(114, 98, 99, .99);
        border: .075em solid rgb(237, 157, 85);
        height: 2.5em;
        color: rgb(237, 157, 85);
        justify-content: center;
        align-items: center;
        align-self: center;
        width: 80%;
        margin-bottom: 2em;
    `}
`;

const StyledNav = styled.nav`
    padding-right: 10%;
    height: 75px;
    width: 100%;
    z-index: 10;
    position: fixed;
    top: 0;
    transition: all .5s cubic-bezier(0.645, 0.045, 0.355, 1);

    ${Media.phone`
        background-color: rgba(114, 98, 99, 1);
        box-shadow: 0 2.5px 5px rgba(10, 10, 10, .4);
    `}

    ${Media.desktop`
        ${props => props.hide && `
            transform: translateY(-75px);
        `}
        ${props => props.fix && `
            background-color: rgba(114, 98, 99, 1);
            box-shadow: 0 2.5px 5px rgba(10, 10, 10, .4);
        `}
    `}
`;

const NavButtonContainer = styled.div`
    display: flex;
    position: relative;

    ${Media.desktop`
        flex-direction: row;
        justify-content: flex-end;
        top: -.4em;
    `}
    ${Media.phone`
        flex-direction: column;
        align-self: flex-end;
        top: 5em;
    `}
`;

export const Navigation = ({select}) => {
    
    let[scrollTop, updateScrollTop] = useState(0);
    let[navStyles, updateNavStyle] = useState({fix:false, hide:false});
    let[next, updateNext] = useState(1);
    let handler = useRef();

    const  calcScroll = () => {
        return (document.body.scrollTop || 0) + (document.documentElement.scrollTop || 0);
    };

    const scroll = (event) => {
        const name = event.nativeEvent.target.getAttribute('name').match(/\<(\w+) \/\>/)[1];

        const el = document.getElementById(name);

        el.scrollIntoView({
            block: 'start', 
            inline: 'nearest', 
            behavior: 'smooth'
        });

        select(name.toLowerCase());
    };

    const respondToScroll = (e) => {
        const currentPos = calcScroll();
        const movingDown = currentPos > scrollTop;

        if(currentPos > 0 && currentPos < 100){
            updateScrollTop(currentPos);
            updateNavStyle({...navStyles, fix:true});
        }else if(movingDown){
            updateScrollTop(currentPos);
            updateNavStyle({...navStyles, hide:true});
        }else if(!movingDown && currentPos > 50){
            updateScrollTop(currentPos);
            updateNavStyle({...navStyles, hide:false});
        }else{
            updateScrollTop(0);
            updateNavStyle({hide:false, fix:false});
        }
    };

    let width = useWidthHook();

    useEffect(
        () => {

            if(width > 700){

                let checkScroll = debounce(respondToScroll, 500, {leading: true});

                handler.current = checkScroll;

                window.addEventListener('scroll', checkScroll);

                return () => {
                    window.removeEventListener('scroll', handler.current);
                    handler.current = null;
                }
            }
        }
    );
    
    const iconStyles = {
        float: 'right',
        position: 'relative',
        top: '.75em',
        right:'.75em',
    };

    const navLinks = ['<About />', '<Work />', '<Projects />'];



    const ButtonComponent = ({onClick}) => (
        <i onClick={onClick} style={{...iconStyles}} className='zmdi zmdi-menu zmdi-hc-2x'>
        </i>
    );

    const MobileMenu = () => (
       <NavButtonContainer>
            {navLinks.map( title => (
                <NavButton 
                    name={title} 
                    key={title} 
                    onClick={scroll}
                >
                {title}
                </NavButton>
            ))}
       </NavButtonContainer>
    );

    return width > 700 ? (
        <StyledNav {...navStyles}>
            <NavButtonContainer>
                {navLinks.map( title => (
                    <NavButton 
                        name={title} 
                        key={title} 
                        onClick={scroll}
                    >{title}
                    </NavButton>
                ))}
            </NavButtonContainer>
        </StyledNav>
    ) : (
        <StyledNav {...navStyles}>
            <ModalComponent
                ButtonComponent={ButtonComponent}
                child={<MobileMenu />}
                animation={{horizontal: true, slideIn: true}}
                height={'100vh'}
                width={'65%'}
                childClose
                altBgColor
            />
        </StyledNav>
    )
}