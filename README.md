# Breach Platform Test

This repository contains automated tests for the Breach Platform web application using Cypress and the Page Object Model (POM) pattern.

## Application Under Test

- Landing Page: https://breach-fe.qa.mvm-tech.xyz/
- Login Page: https://breach-fe.qa.mvm-tech.xyz/auth
- Registration Page: https://breach-fe.qa.mvm-tech.xyz/auth/register

## Project Structure

```
├── cypress/
│   ├── e2e/              # Test files
│   │   ├── login.cy.js
│   │   └── register.cy.js
│   ├── fixtures/         # Test data
│   ├── pages/            # Page Object Models
│   │   ├── LoginPage.js
│   │   └── RegisterPage.js
│   └── support/          # Support files and commands
├── Documentation.md      # Project documentation
├── Testplan.md           # Test plan
└── README.md             # This file
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```

### Running Tests

To open Cypress Test Runner:
```
npm run cypress:open
```

To run tests in headless mode:
```
npm test
```

## Documentation

See [Documentation.md](Documentation.md) for detailed project documentation.

## Test Plan

See [Testplan.md](Testplan.md) for the test plan and test strategy.
