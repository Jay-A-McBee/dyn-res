import React from 'react';
import styled, {css} from 'styled-components';
import {
    CollapsableColumn
} from '../styleLayout';
import {
    MediaWrap
} from '../Media';


export const SocialLinks = () => {

    const fixedWidthColumn = {
        width: '5em',
        position: 'fixed',
        bottom: '0',
        padding: '0 2.5em',
    }

    const VerticalLine = styled.div`
        width: .5em;
        height: 10em;
        border-right: ${.75/16}em solid rgba(226, 229, 232, 0.64);
    `;

    const marginBottom = {
        marginBottom: '20em'
    }

    const Link = styled.a`
        display: block;
        color: rgba(226, 229, 232, 0.64);
    
        ${props => props.marginBottom && css`
            margin-bottom: 1.15em;
        `}

        :hover {
            color: rgba(179, 248, 218);
        }
    `;

    const SocialLinks = (device) => {
        return device !== 'phone' ? (
            <CollapsableColumn>
                <Link marginBottom href='mailto:jmcbee1@gmail.com'>
                  <i className='zmdi zmdi-google'>
                  </i>
                </Link>
                <Link marginBottom target='_blank' href='https://github.com/Jay-A-McBee'>
                  <i className='zmdi zmdi-github-box'>
                  </i>
                </Link>
                <Link marginBottom target='_blank' href='https://www.linkedin.com/in/jayaustinmcbee/'>
                    <i className='zmdi zmdi-linkedin-box'>
                    </i>
                </Link>
                <VerticalLine />
            </CollapsableColumn>
        ) : null;
    }


    return (
        <MediaWrap children={SocialLinks} />
    )
}