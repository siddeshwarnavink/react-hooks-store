import { actions } from './feed-store'

describe('Reducer: feed-store', () => {
    const currState = {
        feed: {
            isLoading: false,
            feedPosts: [{ id: '1' }],
            bookmarkedPost: []
        }
    }

    describe('SET_FEED_LOADING', () => {
        it('should set the loading state as passed as payload', () => {
            const newState = actions.SET_FEED_LOADING(currState, true)
            expect(newState).toEqual({
                feed: {
                    isLoading: true,
                    feedPosts: [{ id: '1' }],
                    bookmarkedPost: []
                }
            });
        });
    });

    describe('SET_FEEDS', () => {
        it('should set the feeds to state as passed as payload', () => {
            const newState = actions.SET_FEEDS(currState, ['new feeds!'])
            expect(newState).toEqual({
                feed: {
                    isLoading: false,
                    feedPosts: ['new feeds!'],
                    bookmarkedPost: []
                }
            });
        });
    });

    describe('TOGGLE_BOOKMARK', () => {
        it('should add the post to the bookmark list if it is not already bookmarked', () => {
            const newState = actions.TOGGLE_BOOKMARK(currState, '1')
            expect(newState).toEqual({
                feed: {
                    isLoading: false,
                    feedPosts: [{ id: '1' }],
                    bookmarkedPost: [{ id: '1' }]
                }
            });
        });

        it('should remove the post from bookmark list if it is already bookmarked', () => {
            let newState = actions.TOGGLE_BOOKMARK(currState, '1');
            newState =  actions.TOGGLE_BOOKMARK(newState, '1');
            expect(newState).toEqual(currState);

        })
    });
});