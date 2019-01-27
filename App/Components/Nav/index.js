import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components';
import debounce from 'lodash.debounce';
import ModalComponent from '../ModalIndex';
import {MediaWrap} from '../Media';

const NavButton = styled.a`
    font-weight: 400; 
    font-size: 1.25em; 
    float: right; 
    text-align: center;
    position: relative;
    right: 5%;
    padding: 2.5% .5% 2.5% 0;
    color: rgba(255, 241, 239, 0.99);
    transition: all .25s ease-in-out;

    :hover{
        color: rgb(237,157,85);
    }

    ${props => props.withBorder && css`
        border: .5px solid rgba(179, 248, 218)
    `}
`;

const StyledNav = styled.nav`
    ${props => props.navStyles && css`
        ${props.navStyles}
    `}
`;

const Nav = ({width}) => {
    const navLinks = ['<About/>', '<Work/>', '<Projects/>'];


    const heightBlock = window.innerHeight/10;
    
    let baseNavStyle = `
        opacity: 1;
        padding-right: 10%;
        height: 75px;
        width: 100%;
        z-index: 10;
        position: fixed;
        top: 0;
        transition: all .5s ease-in-out;
    `;

    let hideNav = `
        opacity: 0;
    `;

    let fixNav = `
        background-color: rgba(114, 98, 99, 1);
        box-shadow: 0 2.5px 5px rgba(10, 10, 10, .4);
    `

    let[scrollTop, updateScrollTop] = useState(0);
    let[navStyles, updateNavStyle] = useState(baseNavStyle);
    let[scrollDirection, updateScrollDirection] = useState(null);

    const  calcScroll = (update) => {
        const currentPos = [
            document.body.scrollTop, 
            document.documentElement.scrollTop
        ].reduce( (total,pos) => total += pos, 0);

        if(update){
            updateScrollTop(currentPos);
        }

        return currentPos;
    }

    const respondToScroll = (e) => {
        
        const currentPos = calcScroll();

        const movedEnough = currentPos > 0 && currentPos < 75;
        const movingDown = currentPos > scrollTop;
        
        if(movedEnough){
            updateScrollTop(currentPos);
            updateNavStyle(navStyles + fixNav);
        }else if(movingDown){
            updateScrollTop(currentPos);
            if(scrollDirection !== 'down'){
                updateScrollDirection('down');
                updateNavStyle(navStyles + hideNav);
            }
        }else if(currentPos !== 0){
            updateScrollTop(currentPos);
            if(scrollDirection !== 'up'){
                updateScrollDirection('up');
                updateNavStyle(baseNavStyle + fixNav);
            }
        }else{
            updateScrollDirection(null);
            updateScrollTop(currentPos);
            updateNavStyle(baseNavStyle);
        }
    }

    useEffect(
        () => {

            let checkScroll = debounce(respondToScroll, 150, {leading: true});

            window.addEventListener('scroll', checkScroll);

            return () => window.removeEventListener('scroll', checkScroll);
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
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: '2.5em'
    }

    const ButtonComponent = ({onClick}) => (
        <i onClick={onClick} style={{...iconStyles}} className='zmdi zmdi-menu zmdi-hc-2x'>
        </i>
    )

    const MobileMenu = () => (
       <div style={{...mobileNav}}>
            {navLinks.map( title => <NavButton key={title} href={`#${title}`}>{title}</NavButton>)}
       </div>
    )

    return width > 500 ? (
        <StyledNav navStyles={navStyles}>
            {navLinks.map( title => <NavButton key={title} href={`#${title}`}>{title}</NavButton>)}
        </StyledNav>
    ) : (
        <StyledNav navStyles={navStyles}>
            <ModalComponent
                ButtonComponent={ButtonComponent}
                child={<MobileMenu />}
                animation={{horizontal: true, slideIn: true}}
                height={'100vh'}
                width={'45%'}
                childClose
            />
        </StyledNav>
    )
}

export const Navigation = () => (
    <MediaWrap
        render={({width}) => <Nav width={width}/>}
    />
)