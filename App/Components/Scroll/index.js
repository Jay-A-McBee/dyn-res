import React, {useState, useRef, useEffect} from 'react';
import debounce from 'lodash.debounce';



export const ScrollWrap = ({render, id}) => {

    let scrollHandler = useRef();

    let [inView, setPosition] = useState();

    function calcLocation(){
        const el = document.getElementById(id);

        const {
            top
        } = el.getBoundingClientRect();

        var isVisible = top < 750;
        
        setPosition(isVisible);
    };

    const registerScrollHandler = () => {
        scrollHandler.current = debounce(calcLocation, 150, {leading:false, trailing: true});
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

        if(scrollHandler.current){
            return () => unregisterScrollHandler();
        }
    });


    return render({inView});
}