import HomePage from '../pages/HomePage';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';

describe('Login Flow Tests', () => {
    const landingPage = new LandingPage();
    const loginPage = new LoginPage();
    const homePage = new HomePage();

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    it('should display login form when navigating from landing page', () => {
        landingPage.visit();
        landingPage.clickLoginButton();
        loginPage.verifyLoginPage();
    });

    it('should navigate to register page when register link is clicked', () => {
        loginPage.visit();
        loginPage.clickRegister();
        cy.url().should('include', '/auth/register');
    });

    it('should login with credentials from registration and verify UI elements', () => {
        cy.fixture('user-credentials.json').then((userCredentials) => {
            const { email, password } = userCredentials;

            loginPage.visit();
            loginPage.verifyLoginPage();
            loginPage.login(email, password);
            cy.url().should('include', '/user/home', { timeout: 10000 });

            homePage.verifyHomePage();
            homePage.verifyAfterLogin();

            homePage.clickFeaturedTab();
            cy.wait(1000);
            cy.screenshot('featured-tab');

            homePage.clickPopularTab();
            cy.wait(1000);
            cy.screenshot('popular-tab');

            homePage.clickRecentTab();
            cy.wait(1000);
            cy.screenshot('recent-tab');

            cy.log('Waiting 60 seconds for stream content to load...');
            cy.wait(60000);

            // Verify stream content is present
            homePage.verifyStreamContent();
            cy.screenshot('stream-content-loaded');
        });
    });
});
