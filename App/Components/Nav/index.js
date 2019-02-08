import React, {useState, useEffect} from 'react';
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
    ${props => props.navStyles && css`
        ${props.navStyles}
    `}
`;

export const Navigation = ({select}) => {
    const navLinks = ['<About />', '<Work />', '<Projects />'];

    const heightBlock = window.innerHeight/10;
    
    let baseNavStyle = `
        opacity: 1;
        padding-right: 10%;
        height: 75px;
        width: 100%;
        z-index: 10;
        position: fixed;
        top: 0;
        transition: all .15s ease-in-out;
    `;

    let hideNav = width > 500 ? `opacity: 0;` : '';

    let fixNav = `
        background-color: rgba(114, 98, 99, 1);
        box-shadow: 0 2.5px 5px rgba(10, 10, 10, .4);
    `

    let[scrollTop, updateScrollTop] = useState(0);
    let[navStyles, updateNavStyle] = useState(baseNavStyle);
    let[next, updateNext] = useState(1);

    const  calcScroll = () => {
        const currentPos = [
            document.body.scrollTop, 
            document.documentElement.scrollTop
        ].reduce((total,pos) => total += pos, 0);


        return currentPos;
    }

    const scroll = (event) => {
        const name = event.nativeEvent.target.getAttribute('name').match(/\<(\w+) \/\>/)[1];

        const el = document.getElementById(name);

        el.scrollIntoView({block: 'start', inline: 'nearest', behavior: 'smooth'});

        select(name.toLowerCase());
    }

    const respondToScroll = (e) => {
        const currentPos = calcScroll();
        const movingDown = currentPos > scrollTop;

        if(currentPos > 0 && currentPos < 75){
            updateScrollTop(currentPos);
            updateNavStyle(navStyles + fixNav);
        }else if(movingDown){
            updateScrollTop(currentPos);
            updateNavStyle(navStyles + hideNav);
        }else if(currentPos !== 0){
            updateScrollTop(currentPos);
            updateNavStyle(baseNavStyle + fixNav);
        }else{
            updateScrollTop(currentPos);
            updateNavStyle(baseNavStyle);
        }
    }

    let width = useWidthHook();

    useEffect(
        () => {

            if(width > 500){

                let checkScroll = debounce(respondToScroll, 500, {leading: true});

                window.addEventListener('scroll', checkScroll);

                return () => window.removeEventListener('scroll', checkScroll);
            }
        }
    )
    
    const iconStyles = {
        float: 'right',
        position: 'relative',
        top: '.75em',
        right:'.75em',

    }

    const mobileNav = {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'flex-end',
        position: 'relative',
        top: '5em'
    }

    const desktopNav = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        position: 'relative',
        top: '-.4em'
    }

    const ButtonComponent = ({onClick}) => (
        <i onClick={onClick} style={{...iconStyles}} className='zmdi zmdi-menu zmdi-hc-2x'>
        </i>
    )

    const MobileMenu = () => (
       <div style={{...mobileNav}}>
            {navLinks.map( title => (
                <NavButton 
                    name={title} 
                    key={title} 
                    onClick={scroll}
                >
                {title}
                </NavButton>
            ))}
       </div>
    )

    return width > 500 ? (
        <StyledNav navStyles={navStyles}>
            <div style={{...desktopNav}}>
                {navLinks.map( title => (
                    <NavButton 
                        name={title} 
                        key={title} 
                        onClick={scroll}
                    >{title}
                    </NavButton>
                ))}
            </div>
        </StyledNav>
    ) : (
        <StyledNav navStyles={navStyles + fixNav}>
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