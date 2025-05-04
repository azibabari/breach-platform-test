class HomePage {
    // Elements
    getTopPicksHeading() {
        return cy.contains('h1', 'Top Picks');
    }

    getStreamsHeading() {
        return cy.contains('h3', 'Streams');
    }

    getStartWritingButton() {
        return cy.contains('button', 'Start writing');
    }

    getSelectMoreInterestsMessage() {
        return cy.contains('p', 'Select more interests to get more recommendations!');
    }

    getFeaturedTab() {
        return cy.contains('button', 'featured');
    }

    getPopularTab() {
        return cy.contains('button', 'popular');
    }

    getRecentTab() {
        return cy.contains('button', 'recent');
    }

    getArticles() {
        return cy.get('article');
    }

    // Actions
    clickStartWritingButton() {
        this.getStartWritingButton().click();
    }

    clickFeaturedTab() {
        this.getFeaturedTab().click();
    }

    clickPopularTab() {
        this.getPopularTab().click();
    }

    clickRecentTab() {
        this.getRecentTab().click();
    }

    // Verification methods
    verifyHomePage() {
        cy.url().should('include', '/user/home');

        // Check for at least one of these elements to confirm we're on the home page
        cy.get('body').then($body => {
             if ($body.find('h1:contains("Top Picks")').length > 0) {
                this.getTopPicksHeading().should('be.visible');
            } else if ($body.find('h3:contains("Streams")').length > 0) {
                this.getStreamsHeading().should('be.visible');
            } else if ($body.find('button:contains("Start writing")').length > 0) {
                this.getStartWritingButton().should('be.visible');
            } else {
                // If none of the above elements are found, fail the test
                throw new Error('Could not verify home page - none of the expected elements were found');
            }
        });
    }

    verifyTopPicksHeading() {
        this.getTopPicksHeading().should('be.visible');
    }

    verifyNoSelectMoreInterestsMessage() {
        this.getSelectMoreInterestsMessage().should('not.exist');
    }

    verifyTabsExist() {
        this.getFeaturedTab().should('be.visible');
        this.getPopularTab().should('be.visible');
        this.getRecentTab().should('be.visible');
    }

    verifyStreamContent() {
        // Check for at least one article element
        this.getArticles().should('have.length.at.least', 10);
    }

    // Combined verification
    verifyAfterLogin() {
        // Verify Top Picks header is visible
        this.verifyTopPicksHeading();

        // Verify the message about selecting more interests does not appear
        this.verifyNoSelectMoreInterestsMessage();

        // Verify the three tabs exist
        this.verifyTabsExist();
    }
}

export default HomePage;
