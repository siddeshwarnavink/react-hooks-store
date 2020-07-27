import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../../UI/Button/Button';
import { BookmarkButton } from './BookmarkButton'

configure({ adapter: new Adapter() });

describe('Component: <FeedPost />', () => {
    let wrapper;
    const postData = {
        title: 'Title',
        description: 'Description'
    }

    beforeEach(() => {
        wrapper = shallow(<BookmarkButton toggleBookmark={() => { }} />);
        wrapper.setProps({
            title: postData.title,
            description: postData.description
        });
    })

    it('should render a <Button />', () => {
        expect(wrapper.find(Button)).toHaveLength(1);
    });
});