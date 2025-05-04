class RegisterPage {
    // URL
    visit() {
        cy.visit('https://breach-fe.qa.mvm-tech.xyz/auth/register');
    }

    // Elements
    getEmailInput() {
        return cy.get('input[type="email"]');
    }

    getPasswordInput() {
        return cy.get('input[type="password"]');
    }

    getRegisterButton() {
        return cy.contains('button', 'Continue');
    }

    getLoginLink() {
        return cy.contains('a', 'Log in');
    }

    // Actions
    typeEmail(email) {
        this.getEmailInput().clear().type(email);
    }

    typePassword(password) {
        this.getPasswordInput().clear().type(password);
    }

    clickRegister() {
        this.getRegisterButton().click();
    }

    clickLogin() {
        this.getLoginLink().click();
    }

    // Combined actions
    register(email, password) {
        this.typeEmail(email);
        this.typePassword(password);

        // Wait for the button to be enabled after entering valid credentials
        cy.contains('button', 'Continue').should('not.be.disabled');
        this.clickRegister();
    }

    // Verification
    verifyRegistrationPage() {
        cy.url().should('include', '/auth/register');
        this.getEmailInput().should('be.visible');
        this.getPasswordInput().should('be.visible');
        this.getRegisterButton().should('be.visible');
    }
}

export default RegisterPage;
