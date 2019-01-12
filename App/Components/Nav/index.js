import React, {useState, useEffect} from 'react';
import debounce from 'lodash.debounce';


export const Navigation = () => {
    const navLinks = ['About', 'Experience', 'Projects'].reverse();

    const heightBlock = window.innerHeight/10;
    
    let baseNavStyle = {
        opacity: '1',
        paddingRight: '10%',
        height: '75px',
        width: '100%',
        transition: 'all .5s ease-in-out'
    };

    let hideNav = {
        opacity: '0',
    }

    let fixNav = {
        position: 'fixed',
        top: '0',
        backgroundColor: 'rgb(41, 61, 90)',
        boxShadow: '0 2.5px 5px rgba(10, 10, 10, .4)',
        zIndex: '10'
    };

    const navLink = {
        fontWeight: '400', 
        fontSize: '1em', 
        float: 'right', 
        textAlign: 'center',
        position: 'relative',
        right: '5%',
        padding: '2.5% .5%'
    }

    let[scrollTop, updateScrollTop] = useState(0);
    let[navStyles, updateNavStyle] = useState(baseNavStyle);

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

    const respondToScroll = (e, navClick) => {
        
        const currentPos = calcScroll();

        const movedEnough = currentPos > 0 && currentPos < 150;
        const movingDown = currentPos > scrollTop;

        if(movedEnough){
            updateScrollTop(currentPos);
            updateNavStyle({...baseNavStyle, ...fixNav});
        }else if(movingDown || navClick){
            updateScrollTop(currentPos);
            updateNavStyle({...navStyles, ...hideNav});
        }else if(currentPos !== 0){
            updateScrollTop(currentPos);
            updateNavStyle({...baseNavStyle, ...fixNav})
        }else{
            updateScrollTop(currentPos);
            updateNavStyle(baseNavStyle);
        }
    }

    useEffect(
        () => {

            let checkScroll = debounce(respondToScroll, 100, {leading: true});

            window.addEventListener('scroll', checkScroll);

            return () => window.removeEventListener('scroll', checkScroll);
        }
    )

    return(
        <nav style={{...navStyles}}>
            {navLinks.map( title => <a key={title} href={`#${title}`} style={{...navLink}}>{`<${title} />`}</a>)}
        </nav>
    )
}