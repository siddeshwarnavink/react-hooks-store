import React from 'react';

import FeedPost from '../../components/FeedPost/FeedPost'

const feed = () => (
    <React.Fragment>
        <h1>Feed</h1>
        <FeedPost title="Sample title." description="Sample description." />
        <FeedPost title="Another post." description="Sample description." isBookmarked />
    </React.Fragment>
)

export default feed;