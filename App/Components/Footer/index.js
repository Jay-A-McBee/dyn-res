import React from 'react';
import styled from 'styled-components';
import {MediaWrap} from '../Media';


const Foot = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
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
    return(
        <MediaWrap
            render={({width}) => {
                return (
                    <Foot>
                        {width <= 500 &&
                            <>
                            <Link href='mailto:jmcbee1@gmail.com'>
                              <i className='zmdi zmdi-google'>
                              </i>
                            </Link>
                            <Link target='_blank' href='https://github.com/Jay-A-McBee'>
                              <i className='zmdi zmdi-github-box'>
                              </i>
                            </Link>
                            <Link target='_blank' href='https://www.linkedin.com/in/jayaustinmcbee/'>
                                <i className='zmdi zmdi-linkedin-box'>
                                </i>
                            </Link>
                            </>
                        }
                        <small>Built by J. McBee 2019</small>
                    </Foot> 
                )
            }}
        />
    )
}