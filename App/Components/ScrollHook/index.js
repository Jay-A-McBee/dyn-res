import React, {useState, useRef, useEffect} from 'react';
import throttle from 'lodash/throttle';



export const UseScrollTracking = (id) => {

    let scrollHandler = useRef();
    let position = useRef();

    let [inView, setPosition] = useState();

    function calcLocation(){
        var isVisible = position.current.offset - window.scrollY < 300 || position.current.offset <= window.innerHeight;
        setPosition(isVisible);
    };

    const registerScrollHandler = () => {
        scrollHandler.current = throttle(calcLocation, 150, {leading:true, trailing: true});
        window.addEventListener('scroll', scrollHandler.current);
    };

    const unregisterScrollHandler = () => {
        window.removeEventListener('scroll', scrollHandler.current);
        scrollHandler.current = null;
    };

    useEffect(() => {
        if(!position.current){
            const el = document.getElementById(id);
            const {
                top
            } = el.getBoundingClientRect();
            position.current = {top, offset: el.offsetTop}
        }

        if(!inView && !scrollHandler.current){
            calcLocation();
            registerScrollHandler();
        }

        return () => unregisterScrollHandler();
    });


    return inView;
}