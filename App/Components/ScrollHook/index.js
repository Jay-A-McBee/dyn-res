import React, {useState, useRef, useEffect} from 'react';
import io from 'intersection-observer';

export const useVisibility = (ref) => {
    let observer = useRef(null); 
    let [active, setViewState] = useState(false);

    const config = {
        root: null,
        rootMargin: '0px',
        threshold: .10
    };

    const stopObserving = () => observer.current.unobserve(ref.current.container);

    const setActive = (entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) setViewState(true);
        });
    };

    useEffect(() => {
        if(!active && !observer.current && ref.current){
            observer.current = window.IntersectionObserver ?
                new IntersectionObserver(setActive, config) :
                io(setActive, config);

            observer.current.observe(ref.current.container);
        }else if(active){
            stopObserving();
        }
    },[active, ref.current, observer.current]);

    return active;
}