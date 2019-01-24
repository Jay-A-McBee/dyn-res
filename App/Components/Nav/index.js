import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components';
import debounce from 'lodash.debounce';


export const Navigation = () => {
    const navLinks = ['<About/>', '<Work/>', '<Projects/>'].reverse();

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

    const heightBlock = window.innerHeight/10;
    
    let baseNavStyle = {
        opacity: '1',
        paddingRight: '10%',
        height: '75px',
        width: '100%',
        zIndex: '10',
        position: 'fixed',
        top: '0',
        transition: 'all .5s ease-in-out'
    };

    let hideNav = {
        opacity: '0',
    }

    let fixNav = {
        backgroundColor: 'rgba(41, 61, 90, 1)',
        boxShadow: '0 2.5px 5px rgba(10, 10, 10, .4)',
    };

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
            updateNavStyle({...navStyles, ...fixNav});
        }else if(movingDown){
            updateScrollTop(currentPos);
            if(scrollDirection !== 'down'){
                updateScrollDirection('down');
                updateNavStyle({...navStyles, ...hideNav});
            }
        }else if(currentPos !== 0){
            updateScrollTop(currentPos);
            if(scrollDirection !== 'up'){
                updateScrollDirection('up');
                updateNavStyle({...baseNavStyle, ...fixNav});
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

    return(
        <nav style={{...navStyles}}>
            {navLinks.map( title => <NavButton key={title} href={`#${title}`}>{title}</NavButton>)}
        </nav>
    )
}