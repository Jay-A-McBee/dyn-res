import React, {useState, useRef, useEffect, useLayoutEffect} from 'react';
import throttle from 'lodash/throttle';


export const useVisibility = (ref) => {
    let scrollHandler = useRef(); 
    let [active, setViewState] = useState(false);


    useEffect(() => {
        if(!scrollHandler.current){
            checkVisibility(ref.current.offset);
            subscribe();
        }

        if(active) unsubscribe();
    });

    function checkVisibility(offset){
      if(!offset) return false;
      let show = offset - window.scrollY <= 500 || offset < window.innerHeight;
      if(show){
        setViewState(show);
      }
    }

    function subscribe(){
        scrollHandler.current = throttle(() => {
            checkVisibility(ref.current.offset);
        }, 750, {leading:true, trailing: true});

        window.addEventListener('scroll', scrollHandler.current, {passive: true});
    };

    function unsubscribe(){
        window.removeEventListener('scroll', scrollHandler.current);
        scrollHandler.current = null;
    }


    return active;
}