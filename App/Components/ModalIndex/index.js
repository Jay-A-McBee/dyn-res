import React, {useState} from 'react';
import styled, {css, keyframes} from 'styled-components';
import {Media} from '../Media';


const ModalBody = styled.div`
    position: relative;
    margin: auto;
    overflow: scroll;
    padding: 0;
    background-color: rgba(10, 10, 10, 0.95);
    border: 1px solid #888;
    max-width: 60%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    transform: translateY(-100%);
    opacity: 0;
    transition: all .5s ease-in-out;
    height: 40em;
  
    ${Media.phone`
        max-width: 90%;
        height: 32.5em;
    `}

    ${props => props.open && css`
        transform: translateY(10%);
        opacity: 1;
    `}
`

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(10, 10, 10, 0.6);
    overflow-y: scroll;
    opacity: 0;
    z-index: -1;
    transition: all .5s ease-in-out;

    ${props => props.open && css`
        opacity: 1;
        z-index: 100;
    `}
`;

const ModalButton = styled.button`
    align-self: stretch;
    padding: 1.15em;
    color: rgb(255, 250, 239);
    border: .5px solid rgb(255, 250, 239);
    position: relative;
    top: 2.5em;
    transition: all .25s ease-in-out;
    background-color: transparent;

    :hover {
        color: rgb(237, 157, 85);
        border-color: rgb(237, 157, 85);
    }
`;
const ModalComponent = ({child, id, message}) => {
    
    let[isOpen, toggle] = useState(null);

    const toggleModal = () => {
        toggle(!isOpen);
    }


    const closeModal = ({nativeEvent}) => {
        if(nativeEvent.target.id === 'modal' || /closeIcon/.test(nativeEvent.target.className)){
            toggleModal();
        }
    }


    return (
        <>
        <ModalButton onClick={toggleModal}>{message}</ModalButton>
        <ModalOverlay id='modal' open={isOpen} onClick={closeModal}>
            <ModalBody id={`modal_body_${id}`} open={isOpen}>
                <i 
                    onClick={closeModal}
                    className='pointer material-icons md-48 closeIcon'
                >
                arrow_back
                </i>
                {Array.isArray(child) ? [...child] : child}
            </ModalBody>
        </ModalOverlay>
        </>
    );
}

export default ModalComponent;