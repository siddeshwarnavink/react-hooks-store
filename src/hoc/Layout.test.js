import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Layout from './Layout';
import Navigation from '../components/Navigation/Navigation'

configure({ adapter: new Adapter() });

describe('HOC: <Layout />', () => {
    let wrapper;
    const childComponent = <h1>Hello</h1>

    beforeEach(() => {

        wrapper = shallow(
            <Layout>
                {childComponent}
            </Layout>
        );
    })

    it('should render a <Navigation />', () => {
        expect(wrapper.find(Navigation)).toHaveLength(1)
    });

    it('should child component(s)', () => {

        expect(wrapper.find(childComponent));
    });
});