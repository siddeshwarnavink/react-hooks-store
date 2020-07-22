import React from 'react';

import FeedPost from '../../components/FeedPost/FeedPost'

const bookmarks = () => (
    <React.Fragment>
        <h1>Bookmarks</h1>

        <FeedPost title="Another post." description="Sample description." isBookmarked />
    </React.Fragment>
);

export default bookmarks;