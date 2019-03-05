import React from 'react';
import {render, fireEvent} from 'react-testing-library';
import ModalComponent from "../index.js";

jest.mock('@fortawesome/react-fontawesome', () => ({
    FontAwesomeIcon: () => (<div></div>)
}));


describe('<ModalComponent />', () => {
  
    const {getByTestId, getByText} = render(
        <ModalComponent
            child={(open) => (<div>{`modal is ${open ? 'open' : 'closed'}`}</div>)}
            id={'someID'}
            message={'buttonText'}
            animation={{
                vertical: true, 
                slideDown: true
            }}
            height={'5em'}
            width={'10em'}
        />
    );
  
    it('renders passed child component as a modal dialog', 
    () => {
        expect(getByText(/modal is closed/)).toBeTruthy();
    });

    it('opens and closes on button click', 
    () => {
        const button = getByTestId('modalButton');
        expect(button.textContent).toBe('buttonText');
        fireEvent.click(button);
        expect(getByText(/modal is open/)).toBeTruthy();
        fireEvent.click(button);
        expect(getByText(/modal is closed/)).toBeTruthy();
    });
});