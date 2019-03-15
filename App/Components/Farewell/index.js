import React from 'react';
import styled from 'styled-components';
import {
    SectionHeader,
    Headline
} from '../styledText';
import {
    ContentWrapper
} from '../styleLayout'
import {Media, useWidthHook} from '../Media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BizCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: -2em;
    justify-content: space-around;
    align-self: center;
    border: 2.5px solid ${props => props.theme.farewell.border};
    border-radius: .25em;
    margin: .5em auto;
    width: 80%;
    height: 10em;
    ${Media.phone`
        height: 7.5em;
    `}
`;

const Bye = styled.h3`
    color: ${props => props.theme.farewell.border};
    align-self: center;
    ${Media.phone`
        font-size: .85em;
    `}
`

const Link = styled.a`
    padding: 1.15em;
    color: ${props => props.theme.farewell.envelope};
    transition: all .25s ease-in-out;
    ${Media.phone`
      padding: .75em;
      font-size: .85em;
    `}

    :hover {
        color: rgb(237, 157, 85);
        border-color: rgb(237, 157, 85);
    }
`


export const Farewell = () => {
    return (
        <ContentWrapper
            margin={'0'}
            padding={'2.5em 0'}
            justify={'space-between'}
        >
            <BizCard>
                <Bye>Get in touch if you need a hand</Bye>
                <Link 
                    target='_blank' 
                    href='mailto:jmcbee1@gmail.com'
                >
                    <FontAwesomeIcon 
                        icon='envelope' 
                        size='5x' 
                    />
                </Link>
            </BizCard>
        </ContentWrapper>
    )
}