import React from 'react';
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library'
import {
    WorkDescription,
    Experience              
} from '../index';
import {
    mocks
} from '../__mocks__';

const {
    description,
    carouselChildren
} = mocks;

jest.mock('../../../Assets/pics/adminScreen.png', () => '');
jest.mock('../../../Assets/pics/spltscreen.png', () => '');
jest.mock('../../../Assets/pics/fairshareShell.png', () => '');
jest.mock('../../../Assets/pics/journeymenShell.png', () => '');
jest.mock('../../../Assets/pics/sentimentalistShell.png', () => '');

describe('WorkDescription', () => {
    it('accepts title, description, dates, href, selected props', () => {
        const {getByTestId} = render(
            <WorkDescription
                title={'Foo'}
                description={description}
                dates={'March 2000 - Now'}
                selected={'clicktripz'}
                href={'https://foo.bar'}
            />
        );

        expect(getByTestId('title').textContent).toBe('Foo clicktripz');
        expect(getByTestId('dates').textContent).toBe('March 2000 - Now');
        expect(getByTestId('workLink').textContent).toBe('clicktripz');
        expect(getByTestId('a').textContent).toBe(description.a);
        expect(getByTestId('b').textContent).toBe(description.b);
        expect(getByTestId('c').textContent).toBe(description.c);
    });

    it('will conditionally render a modal when selected has carousel children els', () => {
        const {getByTestId} = render(
            <WorkDescription
                title={'Foo'}
                description={description}
                dates={'March 2000 - Now'}
                selected={'HackReactor'}
                href={'https://foo.bar'}
            />
        );
        expect(getByTestId('modalTest')).toBeTruthy();
    });
});