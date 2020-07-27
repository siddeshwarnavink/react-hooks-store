import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Spinner from '../../components/UI/Spinner/Spinner';
import FeedPost from '../../components/FeedPost/FeedPost';
import { Feed } from './Feed';

configure({ adapter: new Adapter() });

describe('Container: <Feed />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Feed
                feedPosts={[{
                    id: 1,
                    title: "sample post.",
                    body: "...",
                }]}
                bookmarkedPost={[]}
            />
        );
    })

    it('should not render a <Spinner /> if isLoading is false', () => {
        wrapper.setProps({ isLoading: false });
        expect(wrapper.find(Spinner)).toHaveLength(0);
    });

    it('should render one <FeedPost /> if isLoading is false', () => {
        wrapper.setProps({ isLoading: false });
        expect(wrapper.find(FeedPost)).toHaveLength(1);
    });
});