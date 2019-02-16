import React, {useState, useRef, useEffect} from 'react';
import debounce from 'lodash.debounce';



export const useScrollPosition = () => {
    let scrollHandler = useRef();   

    let [position, setPosition] = useState(0);

    const set = () => setPosition(window.scrollY);

    const subscribe = () => {
        scrollHandler.current = debounce(() => {
            set();
        }, 150, {leading:true, trailing: true});
        window.addEventListener('scroll', scrollHandler.current);
    };

    const unsubscribe = () => window.removeEventListener('scroll', scrollHandler.current);

    useEffect(() => {
        if(!scrollHandler.current){
            subscribe();
        }
        // return () => unsubscribe()
    });


    return position;
}