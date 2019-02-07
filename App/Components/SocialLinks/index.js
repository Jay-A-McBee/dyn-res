import React from 'react';
import styled, {css, keyframes} from 'styled-components';
import {
    CollapsableColumn
} from '../styleLayout';
import {
    MediaWrap
} from '../Media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const fadeInAndUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(${20/16}em);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
`;


const VerticalLine = styled.div`
    width: .5em;
    height: ${props => props.height || '10em'};
    color: rgb(255, 251, 242);
    border-right: ${.75/16}em solid rgba(226, 229, 232, 0.64);
    animation: ${fadeInAndUp} .5s ease-in-out;
    animation-fill-mode: forwards;

    ${props => props.offset && css`
        position: relative;
        ${props.offset};
    `}
`;

const Link = styled.a`
    display: block;
    color: rgb(255, 251, 242);
    animation: ${fadeInAndUp} .5s ease-in-out;
    animation-fill-mode: forwards;
    
    ${props => props.marginBottom && css`
        margin-bottom: .15em;
    `}

    :hover {
        color: rgb(237,157,85);
    }
`;

export const SocialLinks = ({width}) => {


    const Links = ({width}) => {
        return width > 500 ? (
            <CollapsableColumn>
                <Link marginBottom href='mailto:jmcbee1@gmail.com'>
                  <FontAwesomeIcon icon={['fab', 'google']} />
                </Link>
                <VerticalLine height={'2.5em'} offset={'right: .25em'}/>
                <Link marginBottom target='_blank' href='https://github.com/Jay-A-McBee'>
                  <FontAwesomeIcon icon={['fab', 'github']} />
                </Link>
                <VerticalLine height={'2.5em'} offset={'left: .25em'} />
                <Link marginBottom target='_blank' href='https://www.linkedin.com/in/jayaustinmcbee/'>
                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </Link>
                <VerticalLine height={'2.5em'} offset= {'right: .25em'}/>
            </CollapsableColumn>
        ) : null;
    };



    return (
        <MediaWrap
            render={({width}) => (
                <Links width={width} />
            )}
        />
    )
}