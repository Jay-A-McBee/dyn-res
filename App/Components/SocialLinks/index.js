import React from 'react';
import styled, {css, keyframes} from 'styled-components';
import {
    CollapsableColumn
} from '../styleLayout';
import {
    useWidthHook
} from '../Media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {UseScrollTracking} from '../ScrollHook';


const VerticalLine = styled.div`
    width: .5em;
    height: ${props => props.height || '10em'};
    color: rgb(255, 251, 242);
    border-right: ${.75/16}em solid rgba(226, 229, 232, 0.64);
    transition: all .25s ease-in-out;
    opacity: 0;
    transform: translateY(${20/16}em);

    ${props => props.active && css`
        opacity: 1;
        transform: translateY(0);
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

    ${props => props.active && css`
        opacity: 1;
        transform: translateY(0);
    `}

    :hover {
        color: rgb(237,157,85);
    }
`;

export const SocialLinks = () => {

    let width = useWidthHook();
    let inView

    if(width > 500){
        inView = UseScrollTracking('Links');
    }

    return width > 500 ? (
        <CollapsableColumn id='Links'>
            <Link active={inView} marginBottom href='mailto:jmcbee1@gmail.com'>
              <FontAwesomeIcon icon={['fab', 'google']} />
            </Link>
            <VerticalLine active={inView} height={'2.5em'} offset={'right: .25em'}/>
            <Link active={inView} marginBottom target='_blank' href='https://github.com/Jay-A-McBee'>
              <FontAwesomeIcon icon={['fab', 'github']} />
            </Link>
            <VerticalLine active={inView} height={'2.5em'} offset={'left: .25em'} />
            <Link active={inView}marginBottom target='_blank' href='https://www.linkedin.com/in/jayaustinmcbee/'>
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </Link>
            <VerticalLine active={inView} height={'2.5em'} offset= {'right: .25em'}/>
        </CollapsableColumn>
    ) : null;
};

