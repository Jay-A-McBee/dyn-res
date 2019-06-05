import React, {useState, useEffect} from 'react';
import styled, {css, keyframes} from 'styled-components';
import {Media} from '../Media';
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
    display: flex;
    background-color: inherit;
    border: .075em solid ${props => props.theme.highlight};
    border-radius: .5em;
    height: 2.5em;
    color: ${props => props.theme.link};
    justify-content: center;
    align-items: center;
    align-self: center;
    width: 70%;
    margin-bottom: 2em;
    font-weight: 700; 
    font-size: 1.5em; 
    padding: 2.5% .5% 2.5% 0;
    transition: all .25s ease-in-out;
    cursor: pointer;

    :hover{
        color: ${props => props.theme.highlight};
    }
    animation: ${fadeInAndUp} .5s ease-in-out;
    animation-fill-mode: forwards;
`;

const StyledNav = styled.nav`
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
        background-color: ${props => props.theme.bckg};
        box-shadow: 0 2.5px 5px rgba(10, 10, 10, .4);
    `}
`;

const MenuBody = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    background-color: ${props => props.theme.bckg};
    height: 100vh;
    width: 65%;
    z-index: 110;
`;

const NavButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    width: 100%;
`;

const ModalOverlay = styled.div`
    display: flex;
    justify-content: flex-end;
    position: fixed;
    overflow: hidden;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(10, 10, 10, 0.8);
    transition: all .75s cubic-bezier(.75, -.25, .85, 1);
    z-index: 100;
    transform: ${props => props.animation && props.animation.horizontal ? 
        'translateX(100%)' : 
        'translateY(-100%)'
    };
    
    ${props => props.open && props.animation.slideDown && css`
        transform: translateY(0%);
    `}

    ${props => props.open && props.animation.slideIn && css`
        transform: translateX(0%);
    `}
`;

const Button = styled.button`
    display: flex;
    align-self: flex-start;
    width: 15%;
    justify-content: center;
    background-color: inherit;
    position: relative;
    top: 5em;
    left: .5em;
    border: none;
    color: inherit;
    padding: 1.75em; 
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 75px;
`;
       
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

const CloseButton = ({onClick}) => (
    <Button onClick={onClick}>
        <FontAwesomeIcon onClick={onClick} size='2x' icon='arrow-left' />
    </Button>
);

export const MobileNav = ({
    scroll, 
    isOpen, 
    toggle, 
    navStyles,
    lightDarkSwitch
}) => {
    const scrollToSection = (name) => {
        scroll(name, 400);
    };
    
    const closeAndScroll = (ev) => {
        ev.preventDefault();
        const name = ev.target.getAttribute('name');

        if(name){
            setTimeout(() => scrollToSection(name), 750);
            toggle(!isOpen);
        }
    };

    const toggleMenu = () => {
        toggle(!isOpen);
    };

   

    return (
        <StyledNav {...navStyles}>
            <Container>
                {lightDarkSwitch()}
                <ButtonComponent onClick={toggleMenu} />
            </Container>
            <ModalOverlay
                animation={{horizontal: true, slideIn: true}}
                height={'100vh'}
                width={'65%'}
                open={isOpen}
            >
                <MenuBody>
                    <CloseButton onClick={toggleMenu} />
                    <NavButtonContainer>
                        {navLinks.map( title => (
                            <NavButton 
                                name={title.match(/\<(\w+) \/\>/)[1].toLowerCase()} 
                                key={title} 
                                onClick={closeAndScroll}
                            >
                            {title}
                            </NavButton>
                        ))}
                    </NavButtonContainer>
                </MenuBody>
            </ModalOverlay>
        </StyledNav>
    )
}
