class LoginPage {
    // URL
    visit() {
        cy.visit('https://breach-fe.qa.mvm-tech.xyz/auth');
    }

    // Elements
    getEmailInput() {
        return cy.get('[data-testid="email-input"]');
    }

    getPasswordInput() {
        return cy.get('[data-testid="password-input"]');
    }

    getLoginButton() {
        return cy.get('[data-testid="login-button"]');
    }

    getRegisterLink() {
        return cy.get('[data-testid="register-link"]');
    }

    // Actions
    typeEmail(email) {
        this.getEmailInput().type(email);
    }

    typePassword(password) {
        this.getPasswordInput().type(password);
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
}

export default LoginPage;
