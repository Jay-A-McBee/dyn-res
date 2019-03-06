import React, {useState, useRef, useEffect, useLayoutEffect} from 'react';
import io from 'intersection-observer';
import throttle from 'lodash/throttle';


export const useVisibility = (ref) => {
    let observer = useRef(); 
    let [active, setViewState] = useState(false);

    const config = {
        root: null,
        rootMargin: '0px',
        threshold: .25
    };

    const setActive = (entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) setViewState(true);
        });
    };

    useEffect(() => {
        if(!observer.current){
            observer.current = window.IntersectionObserver ?
                new IntersectionObserver(setActive, config) :
                io(setActive, config);
        }

        if(ref.current){
            observer.current.observe(ref.current.container);
        }
    });

    return active;
}