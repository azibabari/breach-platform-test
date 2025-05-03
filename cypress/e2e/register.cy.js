import RegisterPage from '../pages/RegisterPage';

describe('Register Page Tests', () => {
    const registerPage = new RegisterPage();

    beforeEach(() => {
        registerPage.visit();
    });

    it('should display registration form', () => {
        registerPage.getEmailInput().should('be.visible');
        registerPage.getPasswordInput().should('be.visible');
        registerPage.getConfirmPasswordInput().should('be.visible');
        registerPage.getRegisterButton().should('be.visible');
    });

    it('should navigate to login page when login link is clicked', () => {
        registerPage.clickLogin();
        cy.url().should('include', '/auth');
        cy.url().should('not.include', '/register');
    });

    // Add more tests as needed
    // Note: Actual registration test would require generating unique email
    // it('should register a new user', () => {
    //     const email = `test${Date.now()}@example.com`;
    //     registerPage.register(email, 'password123');
    //     // Add assertions for successful registration
    // });
});
