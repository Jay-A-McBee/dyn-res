import React from 'react';
import styled, {css} from 'styled-components';
import {
    CollapsableColumn
} from '../styleLayout';
import {
    MediaWrap
} from '../Media';


export const SocialLinks = ({device}) => {

    const fixedWidthColumn = {
        width: '5em',
        position: 'fixed',
        bottom: '0',
        padding: '0 3.5em',
    }

    const VerticalLine = styled.div`
        width: .5em;
        height: ${props => props.height || '10em'};
        border-right: ${.75/16}em solid rgba(226, 229, 232, 0.64);
        ${props => props.offset && css`
            position: relative;
            ${props.offset};
        `}
    `;

    const marginBottom = {
        marginBottom: '20em'
    }

    const Link = styled.a`
        display: block;
        color: rgba(226, 229, 232, 0.64);
    
        ${props => props.marginBottom && css`
            margin-bottom: .15em;
        `}

        :hover {
            color: rgb(125, 224, 112);
        }
    `;

    const Links = ({device}) => {
        debugger
        return device !== "phone" ? (
            <CollapsableColumn>
                <Link marginBottom href='mailto:jmcbee1@gmail.com'>
                  <i className='zmdi zmdi-google'>
                  </i>
                </Link>
                <VerticalLine height={'2.5em'} offset={'right: .25em'}/>
                <Link marginBottom target='_blank' href='https://github.com/Jay-A-McBee'>
                  <i className='zmdi zmdi-github-box'>
                  </i>
                </Link>
                <VerticalLine height={'2.5em'} offset={'left: .25em'} />
                <Link marginBottom target='_blank' href='https://www.linkedin.com/in/jayaustinmcbee/'>
                    <i className='zmdi zmdi-linkedin-box'>
                    </i>
                </Link>
                <VerticalLine height={'2.5em'} offset= {'right: .25em'}/>
            </CollapsableColumn>
        ) : null;
    };



    return (
        <MediaWrap
            render={({device}) => (
                <Links device={device} />
            )}
        />
    )
}