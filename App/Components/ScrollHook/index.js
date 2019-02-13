import React, {useState, useRef, useEffect} from 'react';
import throttle from 'lodash/throttle';



export const UseScrollTracking = (id) => {

    let scrollHandler = useRef();
    let position = useRef();

    let [inView, setPosition] = useState();

    function calcLocation(){
        var isVisible = position.current.offset - window.scrollY < 300 || position.current.offset <= window.innerHeight;

        if(isVisible){ 
            setPosition(isVisible);
        }

        return;
    };

    const subscribe = () => {
        scrollHandler.current = throttle(calcLocation, 150, {leading:true, trailing: true});
        window.addEventListener('scroll', scrollHandler.current);
    };

    const unsubscribe = () => window.removeEventListener('scroll', scrollHandler.current);

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
            subscribe();
        }

        return () => unsubscribe()
    },[inView]);


    return inView;
}