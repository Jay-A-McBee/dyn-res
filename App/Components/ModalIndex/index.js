import React, { useState, useEffect, useRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Media } from '../Media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ModalBody = styled.div`
    position: relative;
    margin: auto;
    padding: 0;
    background-color: ${props => props.theme.modal.bckg};
    border: 1px solid #888;
    max-width: 70%;
    margin-top: 5%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    transform: ${props =>
      props.animation && props.animation.horizontal
        ? 'translateX(100%)'
        : 'translateY(-100%)'};
    will-change: transform;

    opacity: 0;
    transition: all .5s ease-in-out .1s;
    height: ${props => props.height || '35em'};
    
    ${Media.tablet`
        max-width: ${props => props.width || '80%'};
        height: ${props => props.height || '25.5em'};
    `}

    ${Media.phone`
        max-width: ${props => props.width || '90%'};
        height: ${props => props.height || '32.5em'};
    `}


    ${props =>
      props.open &&
      props.animation.slideDown &&
      css`
        transform: translateY(10%);
        opacity: 1;
        ${Media.tablet`
            transform: translateY(50%);
        `}
        ${Media.phone`
            transform: translateY(10%);
        `}
      `}

    ${props =>
      props.open &&
      props.animation.slideIn &&
      css`
        transform: translateX(40%);
        opacity: 1;
      `}
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(10, 10, 10, 0.8);
  transition: all 0.5s ease-in-out;
  z-index: 100;
  transform: ${props =>
    props.animation && props.animation.horizontal
      ? 'translateX(100%)'
      : 'translateY(-100%)'};

  ${props =>
    props.open &&
    props.animation.slideDown &&
    css`
      transform: translateY(0%);
    `}

  ${props =>
    props.open &&
    props.animation.slideIn &&
    css`
      transform: translateX(0%);
    `}
`;

const ModalButton = styled.button`
  align-self: stretch;
  padding: 1em;
  font-size: 1.25em;
  font-weight: 700;
  color: inherit;
  border: 0.5px solid rgb(237, 157, 85);
  transition: all 0.25s ease-in-out;
  background-color: ${props => props.theme.modal.btnModal};
  border-radius: 0.25em;

  :hover {
    border-color: rgb(255, 250, 239);
  }
`;

const CloseButton = styled.button`
  border: none;
  border-radius: 0.5em;
  background-color: inherit;
  padding: 0.5em;
  color: inherit;
`;

const ModalComponent = ({
  child,
  id,
  message,
  ButtonComponent,
  animation,
  height,
  width
}) => {
  let [isOpen, toggle] = useState(false);
  let handler = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const escapeKey = subscribe();
      return () => escapeKey.unsubscribe();
    }
  }, [isOpen]);

  const toggleModal = () => {
    const body = document.querySelector('body');

    if (!isOpen) {
      body.className = `${body.className} noScroll`;
    } else {
      body.className = body.className.replace(/noScroll/, '');
    }

    toggle(!isOpen);
  };

  const closeModal = ev => {
    if (
      ev.target.id === 'modal' ||
      ev.target.id === 'close' ||
      ev.keyCode === 27
    ) {
      toggleModal();
    }
  };

  function subscribe() {
    handler.current = closeModal;

    window.addEventListener('keyup', handler.current);

    return {
      unsubscribe: () => window.removeEventListener('keyup', handler.current)
    };
  }

  return (
    <>
      {ButtonComponent ? (
        <ButtonComponent data-testid="modalButton" onClick={toggleModal} />
      ) : (
        <ModalButton data-testid="modalButton" onClick={toggleModal}>
          {message}
        </ModalButton>
      )}
      <ModalOverlay
        id="modal"
        open={isOpen}
        animation={animation}
        onClick={closeModal}
      >
        <ModalBody
          id={`modal_body_${id}`}
          open={isOpen}
          animation={animation}
          height={height}
          width={width}
        >
          <CloseButton id="close" onClick={closeModal}>
            <FontAwesomeIcon
              id="close"
              onClick={closeModal}
              icon="times"
              size="lg"
            />
          </CloseButton>
          {child(isOpen)}
        </ModalBody>
      </ModalOverlay>
    </>
  );
};

export default ModalComponent;
