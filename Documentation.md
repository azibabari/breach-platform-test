# Breach Application Test Documentation

## 1. Application Overview

- **Name**: Breach
- **Frontend**: React-based UI hosted at https://breach-fe.qa.mvm-tech.xyz/.
- **Backend**: REST APIs documented at https://breach-api.qa.mvm-tech.xyz/swagger/.
- **WebSocket**: Real-time event streaming at wss://breach-api-ws.qa.mvm-tech.xyz.
- **Functionalities**:
  - User registration and login using email and password.
  - Writing and filtering blog posts by categories.
  - Onboarding with user interest selection.
  - Real-time streaming of the 5 most recent events via WebSocket.

- **Design Reference**: Figma design at https://www.figma.com/design/nusyrdnCnqeeT0RKY6ry5M/MVMBreach-Test.

This document summarizes the testing process for the Breach application, including test execution results, observations, and recommendations. Detailed test cases, bugs, and test recordings are linked below for developer review.

## 2. Test Cases

Detailed test cases for functional, API, WebSocket, compatibility, performance, usability, and security testing are documented in a Google Sheet: [Breach Test Cases](https://docs.google.com/spreadsheets/d/\[Insert Test Case Google Sheet ID]/edit?usp=sharing).

The test cases cover:

- **Functional Testing**: Registration, login, post listing, category filtering, onboarding, and event streaming.
- **API Testing**: Endpoints for user registration, login, posts, categories, and interests.
- **WebSocket Testing**: Connection, event streaming, and reconnection behavior.
- **Compatibility Testing**: UI and functionality across Chrome, Firefox, Safari, and mobile devices.
- **Performance Testing**: Load tests for 100, 500, and 1000 concurrent users.
- **Usability Testing**: Navigation, error messages, and UI consistency with Figma design.
- **Security Testing**: Basic checks for XSS, SQL injection, and authentication issues.

Each test case includes: Test ID, Type, Scenario, Steps, Expected Result, Actual Result, Status (Passed, Failed, Blocked), and Bug ID (if applicable).

## 3. Test Results

- **Total Tests**: TBD (to be updated after execution)
- **Passed**: TBD
- **Failed**: TBD
- **Blocked**: TBD
- **Bugs Found**: TBD (see Bug Tracker: [Breach Bug Tracker](https://docs.google.com/spreadsheets/d/\[Insert Bug Tracker Google Sheet ID]/edit?usp=sharing))
- **Test Coverage**:
  - **Functional**: All major features tested (registration, login, posts, filtering, onboarding, events).
  - **API**: All endpoints tested with valid and invalid inputs.
  - **WebSocket**: Connection, streaming, and reconnection validated.
  - **Compatibility**: Tested on Chrome, Firefox, Safari (mobile and desktop).
  - **Performance**: Load tested up to 1000 users.
  - **Usability**: Navigation and error handling evaluated.
  - **Security**: Basic checks for XSS, SQL injection, and authentication.

## 4. Observations

- **Functional**: [TBD: e.g., Most features work, but category filtering may fail on mobile.]
- **API**: [TBD: e.g., Responses correct, but error messages need more detail.]
- **WebSocket**: [TBD: e.g., Streams events, but reconnection delays observed.]
- **Compatibility**: [TBD: e.g., UI responsive, but mobile dropdowns misaligned.]
- **Performance**: [TBD: e.g., Stable at 100 users, errors at 1000 users.]
- **Usability**: [TBD: e.g., Navigation intuitive, but error messages vague.]
- **Security**: [TBD: e.g., Potential XSS in input fields.]

## 5. Recommendations

- Fix critical bugs (e.g., login failures, security vulnerabilities) before release.
- Enhance error messages for better user guidance (e.g., specify "Incorrect password").
- Optimize WebSocket reconnection for reliability.
- Improve mobile responsiveness based on compatibility findings.
- Scale backend to handle 1000+ concurrent users with minimal errors.
- Conduct a professional security audit for comprehensive vulnerability assessment.

## 6. References

- **Test Cases**: [Breach Test Cases]https://docs.google.com/spreadsheets/d/1wea_wAaHXueLbU4daUJkTXB7p5pZb6_ubPLrlx-uuIE/edit?usp=sharing
- **Bug Tracker**: [Breach Bug Tracker]https://docs.google.com/spreadsheets/d/1wea_wAaHXueLbU4daUJkTXB7p5pZb6_ubPLrlx-uuIE/edit?gid=2025353782#gid=2025353782
- **Test Recordings**: [Google Drive Folder]https://drive.google.com/drive/folders/1dgIlEPzb0RukGnH2lP_1PsOkQom4jhgF?usp=sharing
  - Exploratory
  - Functional+Compatibility
  - API+WebSocket
  - Load

- **Automation Scripts**: GitHub Repository
  - Cypress: cypress/e2e/
  - Postman: https://web.postman.co/workspace/0d241c8a-d8bb-479b-a70a-b00736786a2d

- **Performance Tests**: JMeter files in jmeter/
- **Test Plan**: test_plan.md
