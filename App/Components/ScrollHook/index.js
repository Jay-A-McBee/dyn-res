import React, {useState, useRef, useEffect} from 'react';
import throttle from 'lodash/throttle';



export const UseScrollTracking = (id) => {

    let scrollHandler = useRef();
    let position = useRef();

    let [inView, setPosition] = useState();

    function calcLocation(){
        var isVisible = (
            position.current.offset - window.scrollY < 350 ||
            position.current.top < window.innerHeight
        );

        setPosition(isVisible);
    };

    const registerScrollHandler = () => {
        const handler = throttle(calcLocation, 150, {leading:true, trailing: true});
        scrollHandler.current = handler;
        window.addEventListener('scroll', handler);
    };

    const unregisterScrollHandler = () => {
        window.removeEventListener('scroll', scrollHandler.current);
        scrollHandler.current = null;
    };

    useEffect(() => {
        if(!position.current){
            const el = document.getElementById(id);
            const{
                top
            } = el.getBoundingClientRect();
            position.current = {top, offset: el.offsetTop}
        }

        if(!inView){
            calcLocation();
            registerScrollHandler();
        }

        return () => unregisterScrollHandler();
    });


    return inView;
}