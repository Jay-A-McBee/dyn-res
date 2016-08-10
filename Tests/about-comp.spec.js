import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import { Intro } from '../App/Components/intro.js';

describe('<Intro/>', () => {
  
  it('should render an icon' , () => {
  	const wrapper = shallow(<Intro />);
  	console.log(wrapper.find('i'))
    expect(wrapper.find('i')).to.have.length(1);
  });

  it('should have props for openUp and close', () => {
    const wrapper = shallow(<Intro />);
    console.log(wrapper.prop.close)
    expect(wrapper.prop.close).to.be.defined;
    expect(wrapper.prop.openUp).to.be.defined;
  });
});