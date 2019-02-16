import React, {useRef, forwardRef} from 'react';
import styled, {css, keyframes} from 'styled-components';
import {
    CollapsableColumn
} from '../styleLayout';
import {
    Media
} from '../Media';
import {scrollImperativeHandle} from '../Handles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const VerticalLine = styled.div`
    width: .5em;
    height: ${props => props.height || '10em'};
    color: rgb(255, 251, 242);
    border-right: ${.75/16}em solid rgba(226, 229, 232, 0.64);
    transition: all .25s ease-in-out;
    opacity: 0;
    transform: translateY(${20/16}em);

    ${Media.desktop`
        ${props => props.active && css`
            opacity: 1;
            transform: translateY(0);
        `}
    `}

    ${props => props.offset && css`
        position: relative;
        ${props.offset};
    `}
`;

const Link = styled.a`
    display: block;
    color: rgb(255, 251, 242);
    transition: all .25s ease-in-out;
    opacity: 0;
    transform: translateY(${20/16}em);

    ${Media.desktop`
        ${props => props.active && css`
            opacity: 1;
            transform: translateY(0);
        `}
    `}

    :hover {
        color: rgb(237,157,85);
    }
`;

export const SocialLinks = forwardRef(({inView}, ref) => {

    const linksContainer = useRef(null);

    scrollImperativeHandle(linksContainer, ref, 'links');

    return (
        <CollapsableColumn ref={linksContainer}>
            <Link active={inView} marginBottom href='mailto:jmcbee1@gmail.com'>
              <FontAwesomeIcon icon={['fab', 'google']} />
            </Link>
            <VerticalLine active={inView} height={'2.5em'} offset={'right: .25em'}/>
            <Link active={inView} marginBottom target='_blank' href='https://github.com/Jay-A-McBee'>
              <FontAwesomeIcon icon={['fab','github']} />
            </Link>
            <VerticalLine active={inView} height={'2.5em'} offset={'left: .25em'} />
            <Link active={inView}marginBottom target='_blank' href='https://www.linkedin.com/in/jayaustinmcbee/'>
                <FontAwesomeIcon icon={['fab','linkedin']} />
            </Link>
            <VerticalLine active={inView} height={'2.5em'} offset= {'right: .25em'}/>
        </CollapsableColumn>
    );
});

