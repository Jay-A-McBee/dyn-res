import React, {useState, useRef, useEffect} from 'react';
import throttle from 'lodash/throttle';



export const UseScrollTracking = (ref) => {

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
        if(!position.current && ref.current){
            const {
                top
            } = ref.current.getBoundingClientRect();

            position.current = {top, offset: ref.current.offsetTop}
        }


        if(!inView && !scrollHandler.current){
            calcLocation();
            subscribe();
        }

        return () => unsubscribe()
    },[inView]);


    return inView;
}