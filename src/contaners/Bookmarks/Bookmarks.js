import React from 'react';

import { useStore } from '../../store/store';
import FeedPost from '../../components/FeedPost/FeedPost'

export const Bookmarks = props => (
    <React.Fragment>
        <h1>Bookmarks</h1>
        {props.bookmarkedPost.length < 1 ? (<p id="no-bookmark">No bookmarks found.</p>) : (
            props.bookmarkedPost.map(feedData => (
                <FeedPost
                    key={feedData.id}
                    id={feedData.id}
                    title={feedData.title}
                    description={feedData.body}
                    isBookmarked
                />
            ))
        )}
    </React.Fragment>
)

const BookmarksHook = () => {
    const state = useStore()[0];

    return (
        <Bookmarks bookmarkedPost={state.feed.bookmarkedPost} />
    );
}

export default BookmarksHook;