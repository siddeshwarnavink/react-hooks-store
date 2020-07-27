import React from 'react'
import { NavLink } from 'react-router-dom'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Navigation from './Navigation'

configure({ adapter: new Adapter() });

describe('Component: <Navigation />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Navigation />);
    })

    it('should render 2 navigation links', () => {
        expect(wrapper.find(NavLink)).toHaveLength(2)
    });
});