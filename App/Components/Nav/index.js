import React, {useState, useEffect, useRef} from 'react';
import styled, {css, keyframes} from 'styled-components';
import debounce from 'lodash.debounce';
import ModalComponent from '../ModalIndex';
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

    ${Media.tablet`
        display: flex;
        background-color: inherit;
        border: .075em solid rgb(237, 157, 85);
        border-radius: .5em;
        height: 2.5em;
        color: rgba(103, 206, 178, .99);
        justify-content: center;
        align-items: center;
        align-self: center;
        width: 70%;
        margin-bottom: 2em;
    `}

    ${Media.phone`
        display: flex;
        background-color: inherit;
        border: .075em solid rgb(237, 157, 85);
        border-radius: .5em;
        height: 2.5em;
        color: rgba(103, 206, 178, .99);
        justify-content: center;
        align-items: center;
        align-self: center;
        width: 70%;
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
    left: 0;
    transition: all .5s cubic-bezier(0.645, 0.045, 0.355, 1);

    ${props => props.hide && css`
        transform: translateY(-75px);
    `}

    ${props => props.fix && css`
        background-color: rgba(114, 98, 99, 1);
        box-shadow: 0 2.5px 5px rgba(10, 10, 10, .4);
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
    ${Media.tablet`
        flex-direction: column;
        align-self: flex-end;
        top: 5em;
    `}
    ${Media.phone`
        flex-direction: column;
        align-self: flex-end;
        top: 5em;
    `}
`;

export const Navigation = ({scroll}) => {
    
    let[scrollTop, updateScrollTop] = useState(0);
    let[navStyles, updateNavStyle] = useState({fix:false, hide:false});
    let handler = useRef();
    let isOpen = useRef();

    const scrollToSection = (event) => {
        const name = event.target.getAttribute('name');
        scroll(name);
    };

    const respondToScroll = () => {
        const currentPos = window.scrollY;
        const movingDown = currentPos > scrollTop;
        
        if(!isOpen.current || isOpen.current !== true){

            if(currentPos > 0 && currentPos < 100){
                updateScrollTop(currentPos);
                updateNavStyle({...navStyles, fix:true});
            }else if(movingDown){
                updateScrollTop(currentPos);
                updateNavStyle({...navStyles, hide:true});
            }else if(!movingDown && currentPos > 50){
                updateScrollTop(currentPos);
                updateNavStyle({fix: true, hide:false});
            }else{
                updateScrollTop(0);
                updateNavStyle({hide:false, fix:false});
            }
        }
    };

    let width = useWidthHook();


    const subscribe = () => {
        handler.current = debounce(respondToScroll, 150, {leading: true});
        window.addEventListener('scroll', handler.current);
    }

    const unsubscribe = () => {
        window.removeEventListener('scroll', handler.current);
        handler.current = null;
    }

    useEffect(() => {

        if(!handler.current){
            subscribe();
        }

        return () => unsubscribe();
    },[scrollTop]);
    
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

    const MobileMenu = ({open}) => {
        useEffect(() => {
            isOpen.current = open;
        })

        return (
           <NavButtonContainer>
                {navLinks.map( title => (
                    <NavButton 
                        name={title.match(/\<(\w+) \/\>/)[1].toLowerCase()} 
                        key={title} 
                        onClick={scrollToSection}
                    >
                    {title}
                    </NavButton>
                ))}
           </NavButtonContainer>
        );
    }

    return width > 750 ? (
        <StyledNav {...navStyles}>
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
        </StyledNav>
    ) : (
        <StyledNav {...navStyles}>
            <ModalComponent
                ButtonComponent={ButtonComponent}
                child={(open) => <MobileMenu open={open} />}
                animation={{horizontal: true, slideIn: true}}
                height={'100vh'}
                width={'65%'}
                childClose
                altBgColor
            />
        </StyledNav>
    )
}