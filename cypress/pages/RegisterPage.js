class RegisterPage {
    // URL
    visit() {
        cy.visit('https://breach-fe.qa.mvm-tech.xyz/auth/register');
    }

    // Elements
    getEmailInput() {
        return cy.get('[data-testid="email-input"]');
    }

    getPasswordInput() {
        return cy.get('[data-testid="password-input"]');
    }

    getConfirmPasswordInput() {
        return cy.get('[data-testid="confirm-password-input"]');
    }

    getRegisterButton() {
        return cy.get('[data-testid="register-button"]');
    }

    getLoginLink() {
        return cy.get('[data-testid="login-link"]');
    }

    // Actions
    typeEmail(email) {
        this.getEmailInput().type(email);
    }

    typePassword(password) {
        this.getPasswordInput().type(password);
    }

    typeConfirmPassword(password) {
        this.getConfirmPasswordInput().type(password);
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
        this.typeConfirmPassword(password);
        this.clickRegister();
    }
}

export default RegisterPage;
