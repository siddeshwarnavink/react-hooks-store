import React from 'react';

import classes from './FeedPost.module.css';
import Card from '../UI/Card/Card';
import BookmarkButton from './BookmarkButton/BookmarkButton'

const FeedPost = React.memo(props => (
    <Card className={[classes.FeedPost, 'feed-post-item'].join(' ')}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <BookmarkButton id={props.id} />
    </Card>
));

export default FeedPost;