import React, {useState, useRef, useEffect} from 'react';
import throttle from 'lodash/throttle';



export const UseScrollTracking = (id) => {

    let scrollHandler = useRef();
    let position = useRef();

    let [inView, setPosition] = useState();

    function calcLocation(){
        const {scrollY} = window;
        var isVisible = (position.current - scrollY) < 250 || position.current < window.innerHeight;

        setPosition(isVisible);
    };

    const registerScrollHandler = () => {
        scrollHandler.current = throttle(calcLocation, 250, {leading:true, trailing: true});
        window.addEventListener('scroll', scrollHandler.current);
    };

    const unregisterScrollHandler = () => {
        window.removeEventListener('scroll', scrollHandler.current);
        scrollHandler.current = null;
    };

    useEffect(() => {
        if(!position.current){
            const el = document.getElementById(id);
            position.current = el.offsetTop;
        }

        if(!inView){
            calcLocation();
            registerScrollHandler();
        }

        return () => unregisterScrollHandler();
    });


    return inView;
}