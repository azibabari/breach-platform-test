class LandingPage {
    // URL
    visit() {
        cy.visit('https://breach-fe.qa.mvm-tech.xyz/');
    }


    getJoinBreachButton() {
        return cy.contains('button', 'Join Breach');
    }

    getLoginButton() {
        return cy.contains('button', 'Log in');
    }

    // Actions
    clickJoinBreachButton() {
        this.getJoinBreachButton().click();
    }

    clickLoginButton() {
        this.getLoginButton().click();
    }
}

export default LandingPage;
