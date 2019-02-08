import React, {useState, useRef, useEffect} from 'react';
import debounce from 'lodash.debounce';



export const UseScrollTracking = (id) => {

    let scrollHandler = useRef();

    let [inView, setPosition] = useState();

    function calcLocation(){
        const el = document.getElementById(id);

        const {
            top
        } = el.getBoundingClientRect();

        var isVisible = top < window.innerHeight;

        setPosition(isVisible);
    };

    const registerScrollHandler = () => {
        scrollHandler.current = debounce(calcLocation, 150, {leading:true, trailing: true});
        window.addEventListener('scroll', scrollHandler.current);
    };

    const unregisterScrollHandler = () => {
        window.removeEventListener('scroll', scrollHandler.current);
        scrollHandler.current = null;
    };

    useEffect(() => {
        if(!inView){
            calcLocation();
            registerScrollHandler();
        }

        if(!!scrollHandler.current){
            return () => unregisterScrollHandler();
        }

        return;
    });


    return inView;
}