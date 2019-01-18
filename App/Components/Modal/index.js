import React from 'react';
import styled, {css} from 'styled-components';
import {Media} from '../Media';

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

    
    const closeWithAnim = ({nativeEvent}) => {
        if(/modal-overlay|closeIcon/.test(nativeEvent.target.className)){
            const modalBody = document.getElementById(`modal_body_${id}`);
    		modalBody.className = `modal-body ${leave}`;
            setTimeout( () => toggle(), 500);
        }
    }


    const ModalBody = styled.div`
      position: relative;
      background-color: #fefefe;
      margin: auto;
      overflow: scroll;
      padding: 0;
      border: 1px solid #888;
      max-width: 60%;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
      ${Media.phone`
        max-width: 90%;
      `}
    `

    return (
        <div key='modal' className={`modal-overlay ${open ? 'showFast' : 'hide'}`} onClick={closeWithAnim}>
            <ModalBody id={`modal_body_${id}`} className={`${open ? enter : ''}`}>
                <i 
                    onClick={closeWithAnim}
                    style={{color: 'rgba(122, 203, 168, 0.9)'}}
                    className='pointer material-icons md-48 closeIcon'
                >
                arrow_back
                </i>
                {Array.isArray(child) ? [...child] : child}
            </ModalBody>
        </div>
    );
}