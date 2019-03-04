import React from 'react';
import "babel-polyfill";
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library'
import {
    WorkDescription,
    Experience              
} from '../index';

jest.mock('../../../Assets/pics/adminScreen.png', () => '');
jest.mock('../../../Assets/pics/spltscreen.png', () => '');
jest.mock('../../../Assets/pics/fairshareShell.png', () => '');
jest.mock('../../../Assets/pics/journeymenShell.png', () => '');
jest.mock('../../../Assets/pics/sentimentalistShell.png', () => '');
jest.mock('@fortawesome/react-fontawesome', () => ({
    FontAwesomeIcon: () => (<div></div>)
}));

const description = {
    a: 'bar',
    b: 'baz',
    c: 'foo'
};

afterEach(cleanup);

describe('<WorkDescription />', () => {
    test('accepts title, description, dates, href, selected props', () => {
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
        expect(getByTestId('a').textContent).toBe('bar');
        expect(getByTestId('b').textContent).toBe('baz');
        expect(getByTestId('c').textContent).toBe('foo');
    });

    test('will conditionally render a modal when selected has carousel children els', () => {
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

describe('<Experience />', async () => {

    test('renders clickable tabs and associated description', async () => {
        const {
            getByTestId, 
            container, 
            getByText
        } = render(<Experience />);

        const [
            tab1,
            tab2,
            tab3
        ] = [
            getByTestId('tab1'),
            getByTestId('tab2'),
            getByTestId('tab3')
        ];

        const fullDescription = getByTestId('fullDescription');

        fireEvent.click(tab1);
        expect(getByTestId('tabs')).toMatchSnapshot();
        expect(fullDescription).toMatchSnapshot();
        fireEvent.click(tab2);
        expect(getByTestId('tabs')).toMatchSnapshot();
        expect(fullDescription).toMatchSnapshot();
        fireEvent.click(tab3);
        expect(getByTestId('tabs')).toMatchSnapshot();
        expect(fullDescription).toMatchSnapshot();
    });
});
