import React from 'react';

import { useStore } from '../../../store/store'
import Button from '../../UI/Button/Button'

export const BookmarkButton = props => props.isBookmarked ? (
    <Button hollow clicked={props.toggleBookmark}>Remove from Bookmark</Button>
) : (
        <Button clicked={props.toggleBookmark}>Add to Bookmark</Button>
    );

const BookmarkButtonHook = props => {
    const [state, dispatch] = useStore();

    const isBookmarked = state.feed.bookmarkedPost.find(post => post.id === props.id)
    const toggleBookmarkHandler = () => {
        dispatch('TOGGLE_BOOKMARK', props.id)
    }

    return (
        <BookmarkButton
            isBookmarked={isBookmarked}
            toggleBookmark={toggleBookmarkHandler}
        />
    )
}

export default BookmarkButtonHook;