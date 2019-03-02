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
        renders a <section> element with defaults:
            flex-direction:row;
            justify-content:space-between;
    `, () => {

        let tree = renderer.create(
            <SectionWrapper/>
        ).toJSON();

        expect(tree.type).toBe('section');
        expect(tree).toMatchSnapshot();
    });

    it(`
        accepts props:
            justify
            flexDirection
    `, () => {
        let tree = renderer.create(
            <SectionWrapper 
                justify={'flex-end'}
                flexDirection={'row'}
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })
});

describe('ContentWrapper StyComp', () => {
    it(`
        renders a configurable <section> element
    `, () => {

        let tree = renderer.create(
            <ContentWrapper/>
        ).toJSON();

        expect(tree.type).toBe('section');
        expect(tree).toMatchSnapshot();
    });

    it(`
        accepts props:
            flexDirection
            justify
            alignSelf
            padding
            margin
            offset
    `, () => {

        let tree = renderer.create(
            <ContentWrapper
                flexDirection={'row'}
                justify={'flex-start'}
                alignSelf={'center'}
                padding={'20em'}
                margin={'0 2em'}
                offset={`
                    top:20px;
                `}
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});