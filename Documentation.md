# Breach Application Test Documentation

## 1. Application Overview

- **Name**: Breach
- **Frontend**: React-based UI hosted at https://breach-fe.qa.mvm-tech.xyz/.
- **Backend**: REST APIs documented at https://breach-api.qa.mvm-tech.xyz/swagger/.
- **WebSocket**: Real-time event streaming at wss://breach-api-ws.qa.mvm-tech.xyz.
- **Functionalities**:
  - User registration and login using email and password.
  - Listing and filtering blog posts by categories.
  - Onboarding with user interest selection.
  - Real-time streaming of the 5 most recent events via WebSocket.

- **Design Reference**: Figma design at https://www.figma.com/design/nusyrdnCnqeeT0RKY6ry5M/MVMBreach-Test.

This document summarizes the testing process for the Breach application, including test execution results, observations, and recommendations. Detailed test cases, bugs, and test recordings are linked below for developer review.

## 2. Test Cases

Detailed test cases for functional, API, WebSocket, compatibility, performance, usability, and security testing are documented in a Google Sheet: (see below).

The test cases cover:

- **Functional Testing**: Registration, login, post listing, category filtering, onboarding, and event streaming.
- **API Testing**: Endpoints for user registration, login, posts, categories, and interests.
- **WebSocket Testing**: Connection, event streaming, and reconnection behavior.
- **Compatibility Testing**: UI and functionality across Chrome, Firefox, Safari, and mobile devices.
- **Performance Testing**: Load tests for 100 concurrent users.
- **Usability Testing**: Navigation, error messages, and UI consistency with Figma design.
- **Security Testing**: Basic checks for XSS, SQL injection, and authentication issues.

Each test case includes: Test ID, Type, Scenario, Steps, Expected Result, Actual Result, Status (Passed, Failed, Blocked), and Bug ID (if applicable).

## 3. Test Results

- **Total Tests**: 132
- **Passed**: TBD
- **Failed**: TBD
- **Blocked**: 0
- **Bugs Found**: TBD 
- **Test Coverage**:
  - **Functional**: All major features tested (registration, login, posts, filtering, onboarding, events).
  - **API**: All endpoints tested with valid and invalid inputs.
  - **WebSocket**: Connection, streaming, and reconnection validated.
  - **Compatibility**: Tested on Chrome, Firefox, Safari (mobile and desktop).
  - **Performance**: Load tested up to 100 concurrent users.
  - **Usability**: Navigation and error handling evaluated.
  - **Security**: Basic checks for XSS, SQL injection, and authentication.

## 4. Observations

- **Functional**: [ Most features work]
- **API**: [ Responses correct, but some error messages need more detail.]
- **WebSocket**: [Streams events, but delays observed. Connectwion without authorization]
- **Compatibility**: [ UI responsive on laptops, but not very responsive on mobile]
- **Performance**: [Errors at 100 users.]
- **Usability**: [ Poor profile and logout experience]
- **Security**: [Potential XSS in URL.]

## 5. Recommendations

- Fix security vulnerabilities before release.
- Enhance error messages for better user guidance 
- Websocket should only connect with authorization
- Improve mobile responsiveness on mobile devices.
- Scale backend to handle 100+ concurrent users with minimal errors.

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
