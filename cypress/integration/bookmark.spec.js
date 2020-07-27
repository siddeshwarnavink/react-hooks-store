describe('Bookmark page', () => {
    const bookmarkedPosts = [];

    function stripPostData($postItm, index) {
        return {
            title: $postItm.slice(0, 3)[index].children[0].innerText,
            description: $postItm.slice(0, 3)[index].children[1].innerText
        };
    }

    it('should able to bookmark first three feed', () => {
        cy.visit('http://localhost:3000/');
        cy.get('.feed-post-item').then(($postItm) => {
            for (let index = 0; index < 3; index++) {
                const postData = stripPostData($postItm, index);
                bookmarkedPosts.push(postData);

                $postItm.children()[2 + (index * 3)].click();
            }
        })
    });

    it('should able to visit the bookmark page', () => {
        cy.get('#nav-bookmark').click()
    });

    it('should display the same feed which were bookmarked', () => {
        cy.get('.feed-post-item').then(($postItm) => {
            const displayedPosts = [];

            for (let index = 0; index < 3; index++) {
                const postData = stripPostData($postItm, index);
                displayedPosts.push(postData)
            }
            expect(displayedPosts).deep.eq(bookmarkedPosts);
        })
    })

    it('should able to unbookmark feed', () => {
        cy.get('#nav-feed').click();
        cy.get('.feed-post-item').then(($postItm) => {
            for (let index = 0; index < 3; index++) {
                const postData = stripPostData($postItm, index);
                bookmarkedPosts.push(postData);

                $postItm.children()[2 + (index * 3)].click();
            }
        })

        cy.get('#nav-bookmark').click()
        cy.get('#no-bookmark');
    });
})