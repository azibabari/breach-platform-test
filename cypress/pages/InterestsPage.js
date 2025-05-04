class InterestsPage {
    // Elements
    getCryptoInterestButton() {
        return cy.contains('button', 'Crypto').contains('span', '🪙');
    }

    getNextButton() {
        return cy.contains('button', 'Next');
    }

    // Actions
    selectCryptoInterest() {
        this.getCryptoInterestButton().click();
    }

    clickNextButton() {
        this.getNextButton().click();
    }

    // Verification
    verifyInterestsPage() {
        cy.url().should('include', '/auth/register/interests');
        this.getNextButton().should('be.visible');
    }
}

export default InterestsPage;
