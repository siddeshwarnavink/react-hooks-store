import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Bookmarks } from './Bookmarks';

configure({ adapter: new Adapter() });

describe('Container: <Bookmarks />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Bookmarks bookmarkedPost={[]} />
        );
    })

    it('should not render a paragraph if no bookmarks', () => {
        expect(wrapper.find('p')).toHaveLength(1);
    });
});