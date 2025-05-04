class LoginPage {
    // URL
    visit() {
        cy.visit('https://breach-fe.qa.mvm-tech.xyz/auth');
    }

    // Elements
    getEmailInput() {
        return cy.get('input[type="email"]');
    }

    getPasswordInput() {
        return cy.get('input[type="password"]');
    }

    getLoginButton() {
        return cy.contains('button', 'Continue');
    }

    getRegisterLink() {
        return cy.contains('a', 'Join');
    }

    // Actions
    typeEmail(email) {
        this.getEmailInput().clear().type(email);
    }

    typePassword(password) {
        this.getPasswordInput().clear().type(password);
    }

    clickLogin() {
        this.getLoginButton().click();
    }

    clickRegister() {
        this.getRegisterLink().click();
    }

    // Combined actions
    login(email, password) {
        this.typeEmail(email);
        this.typePassword(password);
        this.clickLogin();
    }

    // Verification
    verifyLoginPage() {
        cy.url().should('include', '/auth');
        this.getEmailInput().should('be.visible');
        this.getPasswordInput().should('be.visible');
        this.getLoginButton().should('be.visible');
    }
}

export default LoginPage;
