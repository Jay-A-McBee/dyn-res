import React, {useState, useEffect} from 'react';
import debounce from 'lodash.debounce';


export const Navigation = () => {
    const navLinks = ['About', 'Experience', 'Projects'];
    
    let baseNavStyle = {
        display: 'flex',
        opacity: '1',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignSelf: 'stretch',
        marginTop: '7.5%',
        paddingRight: '10%',
        transition: 'transform .5s ease-in-out, opacity .25s'
    };

    let hideNav = {
        opacity: '0'
    };

    let slideNav = (pos) => ({
        transform: `translateY(${pos}px)`,
        backgroundColor: 'rgb(41, 61, 90)',
        boxShadow: '0 2.5px 5px rgba(10, 10, 10, .4)',
        zIndex: 1005
    });

    let[scrollTop, updateScrollTop] = useState(0);
    let[navStyles, updateNavStyle] = useState(baseNavStyle);

    const respondToScroll = (e) => {
        
        const currentPos = [
            document.body.scrollTop, 
            document.documentElement.scrollTop
        ].reduce( (total,pos) => total += pos, 0);

        const movedEnough = currentPos > 0 && currentPos < 200;
        const movingDown = currentPos > scrollTop;

        if(movedEnough){
            updateScrollTop(currentPos);
            updateNavStyle({...baseNavStyle, ...slideNav(50)});
        }else if(movingDown){
            updateScrollTop(currentPos);
            updateNavStyle({...navStyles, ...hideNav, ...slideNav(currentPos - 250)});
        }else if(currentPos !== 0){
            updateScrollTop(currentPos);
            updateNavStyle({...baseNavStyle, ...slideNav(currentPos - 10)})
        }else{
            updateScrollTop(currentPos);
            updateNavStyle(baseNavStyle);
        }
    }

    useEffect(
        () => {

            // let checkScroll = debounce(respondToScroll, 100);

            window.addEventListener('scroll', respondToScroll);

            return () => window.removeEventListener('scroll', respondToScroll);
        }
    )

    return(
        <nav style={{...navStyles}}>
            {navLinks.map( title => <a href={`#${title}`} style={{fontWeight: '400', fontSize: '1em'}}>{`<${title} />`}</a>)}
        </nav>
    )
}