import React from 'react';
import {
    SectionWrapper,
    ContentWrapper,
    Column,
    FixedWidthColumn,
    FluidColumn,
    Row
    } from '../index';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('SectionWrapper StyComp', () => {
    it(`
        defaults:
            flex-direction:row;
            justify-content:space-between;
    `, () => {

        let tree = renderer.create(
            <SectionWrapper/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('accepts flexDirection and justify props', () => {
        let tree = renderer.create(
            <SectionWrapper 
                justify={'flex-end'}
                flexDirection={'row'}
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })
});