import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FeedPost from './FeedPost';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';

configure({ adapter: new Adapter() });

describe('Component: <FeedPost />', () => {
    let wrapper;
    const postData = {
        title: 'Title',
        description: 'Description'
    }

    beforeEach(() => {
        wrapper = shallow(<FeedPost />);
        wrapper.setProps({
            title: postData.title,
            description: postData.description
        });
    })

    it('should render a <Card />', () => {
        expect(wrapper.find(Card)).toHaveLength(1);
    });

    it('should render a <Button />', () => {
        expect(wrapper.find(Button)).toHaveLength(1);
    });

    it('should render a title', () => {
        expect(wrapper.find('h3')).toHaveLength(1);
    });

    it('should render the correct title', () => {
        expect(wrapper.find('h3').text()).toBe(postData.title);
    });

    it('should render a description', () => {
        expect(wrapper.find('p')).toHaveLength(1);
    });

    it('should render the correct description', () => {
        expect(wrapper.find('p').text()).toBe(postData.description);
    });
});