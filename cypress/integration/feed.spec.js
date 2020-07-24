describe('Feed page', () => {
    it('should able to visit the page and display spinner', () => {
        cy.visit('http://localhost:3000/');
        cy.get('#loading-spinner')
    });

    it('should able to load the post(s)', () => {
        cy.get('.feed-post-item')
    });
})