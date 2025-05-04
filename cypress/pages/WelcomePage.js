class WelcomePage {
    // Elements
    getLetsBeginButton() {
        return cy.contains('button', "Let's begin!");
    }

    // Actions
    clickLetsBeginButton() {
        this.getLetsBeginButton().click();
    }

    // Verification
    verifyWelcomePage() {
        cy.url().should('include', '/auth/register/welcome');
        this.getLetsBeginButton().should('be.visible');
    }
}

export default WelcomePage;
