import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from './Button'

configure({ adapter: new Adapter() });

describe('Component: <Button />', () => {
    let wrapper;
    const childComponent = <span>Hello</span> 

    beforeEach(() => {
        wrapper = shallow(
            <Button>
                {childComponent}
            </Button>
        );
    })

    it('should render a button', () => {
        expect(wrapper.find('button')).toHaveLength(1);
    });

    it('should render the child components', () => {
        expect(wrapper.find(childComponent));
    });
});