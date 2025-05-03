import LoginPage from '../pages/LoginPage';

describe('Login Page Tests', () => {
    const loginPage = new LoginPage();

    beforeEach(() => {
        loginPage.visit();
    });

    it('should display login form', () => {
        loginPage.getEmailInput().should('be.visible');
        loginPage.getPasswordInput().should('be.visible');
        loginPage.getLoginButton().should('be.visible');
    });

    it('should navigate to register page when register link is clicked', () => {
        loginPage.clickRegister();
        cy.url().should('include', '/auth/register');
    });

    // Add more tests as needed
    // Note: Actual login test would require valid credentials
    // it('should login with valid credentials', () => {
    //     loginPage.login('test@example.com', 'password');
    //     // Add assertions for successful login
    // });
});
