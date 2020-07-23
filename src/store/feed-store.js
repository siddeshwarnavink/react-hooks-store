import { initStore } from './store';

export const actions = {
    SET_FEED_LOADING: (curState, isLoading) => {
        return {
            feed: {
                ...curState.feed,
                isLoading
            }
        }
    },
    SET_FEEDS: (curState, loadedFeeds) => {
        return {
            feed: {
                ...curState.feed,
                feedPosts: loadedFeeds
            }
        }
    },
    TOGGLE_BOOKMARK: (curState, currentPostId) => {
        let updatedFeed = { ...curState.feed };
        const currentPost = curState.feed.feedPosts.find(post => post.id === currentPostId)

        if (curState.feed.bookmarkedPost.find(post => post === currentPost)) {
            updatedFeed.bookmarkedPost = updatedFeed.bookmarkedPost.filter(post => post !== currentPost);
        } else {
            updatedFeed.bookmarkedPost = [...updatedFeed.bookmarkedPost, currentPost];
        }
        return {
            feed: updatedFeed
        }
    },
}

const configreStore = () => {
    initStore(actions, {
        feed: {
            isLoading: false,
            feedPosts: [],
            bookmarkedPost: []
        }
    });
}

export default configreStore;