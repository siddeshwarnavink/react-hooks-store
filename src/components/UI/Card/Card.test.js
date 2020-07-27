import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Card from './Card'

configure({ adapter: new Adapter() });

describe('Component: <Card />', () => {
    let wrapper;
    const childComponent = <h1>Hello</h1> 

    beforeEach(() => {
        wrapper = shallow(
            <Card>
                {childComponent}
            </Card>
        );
    })

    it('should render the child components', () => {
        expect(wrapper.find(childComponent));
    });
});