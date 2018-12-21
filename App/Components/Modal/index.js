import React from 'react';

export const Modal = ({child, dialogAnimation, open, toggle, id}) => {
    
    
    const animDirections = {
        top:{
            enter:'in',
            leave:'out'
        },
        left:{
            enter: '',
            leave: ''
        },
        side:{
            enter: 'slidein',
            leave: 'slideout'
        }
    }

    const {
        enter,
        leave
    } = animDirections[dialogAnimation] || animDirections.top;

    
    const closeWithAnim = () => {
        const modalBody = document.getElementById(`modal_body_${id}`);
		modalBody.className = `modal-body ${leave}`;
        setTimeout( () => toggle(), 500);
    }

    return (
        <div key='modal' className={`modal-overlay ${open ? 'showFast' : 'hide'}`} onClick={closeWithAnim}>
            <div id={`modal_body_${id}`} className={`modal-body ${open ? enter : ''}`}>
                <i 
                    onClick={closeWithAnim} 
                    className='pointer material-icons md-48'
                >
                arrow_back
                </i>
                {Array.isArray(child) ? [...child] : child}
            </div>
        </div>
    );
}