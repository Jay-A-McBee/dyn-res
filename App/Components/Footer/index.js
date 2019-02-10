import React from 'react';
import styled, {css} from 'styled-components';
import {useWidthHook} from '../Media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Foot = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    width: 100%;
    height: 5em;
    background-color: rgb(61, 45, 45);
`;

const Link = styled.a`
    display: block;
    color: rgb(255, 251, 242);

    ${props => props.marginBottom && css`
        margin-bottom: .15em;
    `}

    :hover {
        color: rgb(237,157,85);
    }
`;

export const Footer = () => {
    let width = useWidthHook();
    
    return(
        <Foot>
            {width <= 500 &&
                <>
                <Link marginBottom href='mailto:jmcbee1@gmail.com'>
                    <FontAwesomeIcon icon={['fab', 'google']} />
                </Link>
                <Link marginBottom target='_blank' href='https://github.com/Jay-A-McBee'>
                  <FontAwesomeIcon icon={['fab','github']} />
                </Link>
                <Link marginBottom target='_blank' href='https://www.linkedin.com/in/jayaustinmcbee/'>
                    <FontAwesomeIcon icon={['fab','linkedin']} />
                </Link>
                </>
            }
            <small>Built by J. McBee 2019</small>
        </Foot> 
    )
}