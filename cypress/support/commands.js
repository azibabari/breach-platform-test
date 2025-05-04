// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Command to generate a unique email address with timestamp
Cypress.Commands.add('generateUniqueEmail', () => {
  const timestamp = Date.now();
  return `breachtest${timestamp}@yopmail.com`;
});

// Command to register a new user
Cypress.Commands.add('registerNewUser', (email, password) => {
  cy.visit('https://breach-fe.qa.mvm-tech.xyz/auth/register');
  cy.get('input[type="email"]').clear().type(email);
  cy.get('input[type="password"]').clear().type(password);

  // Wait for the button to be enabled after entering valid credentials
  cy.contains('button', 'Continue').should('not.be.disabled');
  cy.contains('button', 'Continue').click();

  // Wait for redirection to welcome page
  cy.url().should('include', '/auth/register/welcome', { timeout: 10000 });
  cy.contains('button', "Let's begin!").click();

  // On the interests screen
  cy.url().should('include', '/auth/register/interests', { timeout: 10000 });
  cy.contains('button', 'Crypto').contains('span', '🪙').click();
  cy.contains('button', 'Next').click();

  // Verify arrival at home screen
  cy.url().should('include', '/user/home', { timeout: 10000 });

  // Save the credentials
  cy.writeFile('cypress/fixtures/user-credentials.json', {
    email: email,
    password: password
  });
});

// Command to login with credentials
Cypress.Commands.add('loginUser', (email, password) => {
  cy.visit('https://breach-fe.qa.mvm-tech.xyz/auth');
  cy.get('input[type="email"]').clear().type(email);
  cy.get('input[type="password"]').clear().type(password);
  cy.contains('button', 'Log in').click();

  // Verify successful login
  cy.url().should('include', '/user/home', { timeout: 10000 });
});

// Command to verify UI elements after login
Cypress.Commands.add('verifyUIAfterLogin', () => {
  // Verify the "Top Picks" header is visible
  cy.contains('h1', 'Top Picks').should('be.visible');

  // Verify the message about selecting more interests does not appear
  cy.contains('p', 'Select more interests to get more recommendations!').should('not.exist');

  // Verify the three tabs exist
  cy.contains('button', 'featured').should('be.visible');
  cy.contains('button', 'popular').should('be.visible');
  cy.contains('button', 'recent').should('be.visible');

  // Click through each tab
  cy.contains('button', 'featured').click();
  cy.wait(1000);

  cy.contains('button', 'popular').click();
  cy.wait(1000);

  cy.contains('button', 'recent').click();
  cy.wait(1000);

  // Wait 60 seconds for stream content to load
  cy.log('Waiting 60 seconds for stream content to load...');
  cy.wait(60000);

  // Verify stream content is present
  cy.get('article').should('have.length.at.least', 1);
});