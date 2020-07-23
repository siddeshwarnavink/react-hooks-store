import React, { useEffect } from 'react';

import { useStore } from '../../store/store';
import FeedPost from '../../components/FeedPost/FeedPost';
import Spinner from '../../components/UI/Spinner/Spinner'

export const Feed = props => (
    <React.Fragment>
        <h1>Feed</h1>
        {props.isLoading ? <Spinner /> : (
            props.feedPosts.map(feedData => {
                const isBookmarked = props.bookmarkedPost.find(post => post.id === feedData.id);
                return (
                    <FeedPost
                        key={feedData.id}
                        id={feedData.id}
                        title={feedData.title}
                        description={feedData.body}
                        isBookmarked={isBookmarked}
                    />
                );
            })
        )}
    </React.Fragment>
);

const FeedHook = () => {
    const [state, dispatch] = useStore();

    useEffect(() => {
        if (state.feed.feedPosts.length < 1) {
            dispatch('SET_FEED_LOADING', true);

            fetch('https://jsonplaceholder.typicode.com/posts', {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    dispatch('SET_FEEDS', data);
                    dispatch('SET_FEED_LOADING', false);
                })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Feed
            isLoading={state.feed.isLoading}
            feedPosts={state.feed.feedPosts}
            bookmarkedPost={state.feed.bookmarkedPost}
        />
    );
}

export default FeedHook;