import HomePage from '../pages/HomePage';
import InterestsPage from '../pages/InterestsPage';
import LandingPage from '../pages/LandingPage';
import RegisterPage from '../pages/RegisterPage';
import WelcomePage from '../pages/WelcomePage';

describe('Registration Flow Tests', () => {
    const landingPage = new LandingPage();
    const registerPage = new RegisterPage();
    const welcomePage = new WelcomePage();
    const interestsPage = new InterestsPage();
    const homePage = new HomePage();

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    it('should display join breach button when navigating from landing page', () => {
        landingPage.visit();
        landingPage.clickJoinBreachButton();
        registerPage.verifyRegistrationPage();
    });

    it('should navigate to login page when login link is clicked', () => {
        registerPage.visit();
        registerPage.clickLogin();
        cy.url().should('include', '/auth');
        cy.url().should('not.include', '/register');
    });

    it('should complete the full registration flow with a unique email', () => {
        const timestamp = Date.now();
        const email = `breachtest${timestamp}@yopmail.com`;
        const password = 'Test123@';

        landingPage.visit();
        landingPage.clickJoinBreachButton();
        registerPage.verifyRegistrationPage();

        registerPage.register(email, password);

        // cy.url().should('include', 'https://breach-fe.qa.mvm-tech.xyz/auth/register/welcome', { timeout: 10000 });
        welcomePage.verifyWelcomePage();
        welcomePage.clickLetsBeginButton();

        interestsPage.verifyInterestsPage();
        interestsPage.selectCryptoInterest();
        interestsPage.clickNextButton();

        cy.url().should('include', '/user/home', { timeout: 10000 });
        homePage.verifyHomePage();

        // Store the credentials for later use (e.g., login tests)
        cy.writeFile('cypress/fixtures/user-credentials.json', {
            email: email,
            password: password
        });
    });
});
