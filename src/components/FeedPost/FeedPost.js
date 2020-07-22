import React from 'react';

import classes from './FeedPost.module.css';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button'

const feedPost = props => (
    <Card className={classes.FeedPost}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        {props.isBookmarked ? (
            <Button hollow>Remove from Bookmark</Button>
        ) : (
            <Button>Add to Bookmark</Button>
        )}
    </Card>
)

export default feedPost;