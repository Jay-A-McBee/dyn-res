import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components';
import debounce from 'lodash.debounce';
import ModalComponent from '../ModalIndex';
import {Media, MediaWrap} from '../Media';

const NavButton = styled.div`
    font-weight: 700; 
    font-size: 1.25em; 
    float: right; 
    text-align: center;
    position: relative;
    right: 5%;
    padding: 2.5% .5% 2.5% 0;
    color: rgb(255, 251, 242);
    transition: all .25s ease-in-out;
    background-color: transparent;
    border: none;
    margin-right: .75em

    :hover{
        color: rgb(237,157,85);
    }

    ${props => props.withBorder && css`
        border: .5px solid rgba(179, 248, 218)
    `}

    ${Media.phone`
        display: flex;
        background-color: rgba(37, 40, 39, .75);
        height: 2.5em;
        color: white;
        justify-content: center;
        align-items: center;
        flex: 1;
        margin-bottom: 2em;
    `}
`;

const StyledNav = styled.nav`
    ${props => props.navStyles && css`
        ${props.navStyles}
    `}
`;

const Nav = ({width, select}) => {
    const navLinks = ['<About />', '<Work />', '<Projects />'];

    const sectionOrder = new Map([[1, 'about'], [2,'work'],[3,'projects']]);

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

    let hideNav = width > 500 ? `opacity: 0;` : '';

    let fixNav = `
        background-color: rgba(114, 98, 99, 1);
        box-shadow: 0 2.5px 5px rgba(10, 10, 10, .4);
    `

    let[scrollTop, updateScrollTop] = useState(0);
    let[navStyles, updateNavStyle] = useState(baseNavStyle);
    let[scrollDirection, updateScrollDirection] = useState(null);
    let[next, updateNext] = useState(1);

    const scrollingToSection = (next) => {
        const name = sectionOrder.get(next);

        if(name){
            updateNext(next+1);

            if(!wasActive[name]){
                select(name);
            }
        }
    }

    const  calcScroll = (update) => {
        const currentPos = [
            document.body.scrollTop, 
            document.documentElement.scrollTop
        ].reduce((total,pos) => total += pos, 0);

        if(update){
            updateScrollTop(currentPos);
        }

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

        if(scrollTop === 0){
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

            let checkScroll = debounce(respondToScroll, 150, {leading: true, trailing: false});

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
        <StyledNav navStyles={navStyles}>
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

export const Navigation = ({selectSection}) => (
    <MediaWrap
        render={({width}) => <Nav select={selectSection} width={width}/>}
    />
)