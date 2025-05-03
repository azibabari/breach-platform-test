# Breach Application Test Plan

## 1. Introduction

### 1.1 Purpose
The purpose of this test plan is to validate the functionality, usability, performance, compatibility, and security of the Breach application to ensure it meets user expectations and performs reliably. This plan outlines the strategy for testing the frontend, backend APIs, and WebSocket, identifying defects, and providing actionable feedback for developers.

### 1.2 Scope
The test plan covers:

- **Frontend**: React-based UI at https://breach-fe.qa.mvm-tech.xyz/, including registration, login, post listing, category filtering, onboarding, and event streaming.
- **Backend**: REST APIs at https://breach-api.qa.mvm-tech.xyz/swagger/ for user management, posts, categories, and interests.
- **WebSocket**: Real-time event streaming at wss://breach-api-ws.qa.mvm-tech.xyz.
- **Testing types**: Functional, compatibility, API, WebSocket, performance, and basic security.
- **Exclusions**: Deep security audits, backend code review, or third-party integrations not specified in the brief.

### 1.3 Application Overview

- **Name**: Breach
- **Frontend**: Built with React, hosted at https://breach-fe.qa.mvm-tech.xyz/.
- **Backend**: REST APIs documented at https://breach-api.qa.mvm-tech.xyz/swagger/.
- **WebSocket**: Authenticated stream at wss://breach-api-ws.qa.mvm-tech.xyz.
- **Functionalities**:
  - User registration and login using email and password.
  - Writing and filtering blog posts by categories.
  - Onboarding with user interest selection.
  - Real-time streaming of content writeup events via WebSocket.

## 2. Objectives

- Validate that all specified functionalities work as intended per the project brief and Figma design (https://www.figma.com/design/nusyrdnCnqeeT0RKY6ry5M/MVMBreach-Test).
- Ensure the UI is responsive and consistent across browsers and devices.
- Verify API responses are correct, handle errors gracefully, and support expected payloads.
- Confirm the WebSocket streams the events reliably, with proper authentication and reconnection logic.
- Assess performance under load (100, 500, 1000 concurrent users).
- Identify and document all defects, prioritizing critical bugs that impact user experience.
- Automate critical test cases for regression testing.
- Provide clear, actionable bug reports and test recordings for developers.

## 3. Test Environment

### 3.1 Hardware

- Laptop: MacOS.
- Mobile Devices (emulated): Iphone SE, 14 Pro max, Samsung S 20 Ultra, Pixel 7, Tablets.

### 3.2 Software

- **Browsers**: Chrome (135), Safari (17.5), Edge (latest).
- **Tools**:
  - Frontend Testing: Browser DevTools.
  - API Testing: Postman.
  - WebSocket Testing: Postman WebSocket client.
  - Automation: Cypress (for frontend), Postman scripts (for APIs).
  - Performance Testing: JMeter.
  - Test Cases & Bug Tracking: Google Sheets.
  - Documentation: Markdown (VS Code).

- **Network**: Wi-Fi, simulated 4G and offline modes via Chrome DevTools.

### 3.3 Test Data

- **Users**: Valid emails (e.g., test1@example.com), invalid emails (e.g., test@), strong/weak passwords.
- **Posts**: Default posts from backend, filtered by categories (e.g., Featured, Popular, Recent).
- **Interests**: Sample selections (e.g., Sports, News, Technology).
- **WebSocket**: Authenticated tokens from login API.

## 4. Test Types

- **Functional Testing**: Validate all frontend and backend features (registration, login, posts, filtering, onboarding, events).
- **Compatibility Testing**: Ensure UI and functionality work across browsers (Chrome, Firefox, Safari, Edge) and devices (mobile, tablet, desktop).
- **API Testing**: Verify request/response correctness, error handling, and payload validation.
- **WebSocket Testing**: Confirm real-time event streaming, authentication, and reconnection behavior.
- **Performance Testing**: Assess system stability under load (100, 500, 1000 users).
- **Usability Testing**: Check for intuitive navigation, clear error messages, and adherence to Figma design.
- **Security Testing**: Basic checks for input validation (e.g., XSS, SQL injection) and authentication issues.

## 5. Test Scenarios

### 5.1 Functional Testing (Frontend)

**Registration**:
- Register with valid email and password.
- Register with invalid email, weak password, or duplicate email.
- Verify redirection to onboarding or dashboard.

**Login**:
- Login with valid credentials.
- Login with incorrect email/password.
- Verify session persistence and logout functionality.

**Category Filtering**:
- Filter posts by single category.
- Verify filtered results match category.

**Onboarding**:
- Select and save interests during registration.
- Skip interest selection.
- Verify personalized content on dashboard.

**Event Stream**:
- Display recent events on dashboard.
- Verify real-time updates via WebSocket.
- Test behavior on network interruption.

### 5.2 API Testing

**POST /register**:
- Valid payload (email, password).
- Invalid email, weak password, duplicate email.
- Check response codes (201, 400) and error messages.

**POST /login**:
- Valid credentials, verify token generation.
- Invalid credentials, check error response.

**GET /posts**:
- Retrieve all posts, verify response structure.
- Check pagination.

**GET /categories**:
- Retrieve list of categories, verify completeness.

**GET /posts?category=**:
- Filter posts by valid/invalid category.
- Verify filtered results.

**POST /interests**:
- Save valid interest selections.
- Test invalid or empty payloads.

**GET /interests**:
- Get the user's interest selections.
- Test invalid or empty userid.

### 5.3 WebSocket Testing

- Connect to wss://breach-api-ws.qa.mvm-tech.xyz with valid token.
- Verify stream delivers 5 most recent events.
- Check event format.
- Test reconnection after network disconnection.

### 5.4 Compatibility Testing

- Test UI rendering and functionality on:
  - Chrome, Safari.
  - Mobile devices.
  - Tablet devices.

- Verify responsiveness per Figma design.
- Check for browser-specific bugs.

### 5.5 Performance Testing

- Simulate load on:
  - GET /posts: 100, 500, 1000 concurrent users.
  - WebSocket: 100, 500, 1000 concurrent connections.

- Measure response time, throughput, error rate, and system stability.

### 5.6 Usability Testing

- Verify navigation is intuitive.
- Check error messages are clear and actionable.
- Ensure UI matches Figma design for consistency.

### 5.7 Security Testing

- Test input fields for XSS (e.g., <script>alert('xss')</script>).
- Attempt SQL injection (e.g., ' OR 1=1 --).
- Verify authentication tokens prevent unauthorized access.
- Check for sensitive data exposure in API responses.

## 6. Test Execution

### 6.1 Approach

- **Exploratory Testing**: Completed to understand application behavior and inform test cases.
- **Manual Testing**: Execute functional, compatibility, and usability test cases.
- **Automated Testing**:
  - Frontend: Use Cypress for critical flows.
  - APIs: Use Postman scripts for testing.

- **API Testing**: Use Postman for manual and automated tests.
- **WebSocket Testing**: Use Postman WebSocket client.
- **Performance Testing**: Use JMeter for load testing.

### 6.2 Test Case Management

- Test cases are documented in documentation.md with ID, scenario, steps, expected result, actual result, and status.
- Results will be updated post-execution (Passed, Failed, Blocked).

### 6.3 Bug Tracking

- Log bugs in a Google Sheet with:
  - Bug ID, Description, Steps to Reproduce, Severity (Critical, High, Medium, Low), Screenshots/Video, Status.

- Link to Google Sheet in README.

## 7. Deliverables

- **Test Plan**: This document (test_plan.md).
- **Test Documentation**: Test cases and results (documentation.md).
- **Test Report**: Summary of findings (test_report.md).
- **Bug Tracker**: Google Sheet with bug details.
- **Test Recordings**: Google Drive folder with videos:
  - exploratory_testing_[date].mp4
  - functional_compatibility_testing_[date].mp4
  - api_websocket_testing_[date].mp4
  - load_testing_[date].mp4

- **Automation Scripts**:
  - Cypress scripts (cypress/e2e/).
  - Postman collection (postman/breach_collection.json).

- **Performance Tests**: JMeter test plans and results (jmeter/).
- **GitHub Repository**: Public repository with all files and README.

## 8. Schedule

- Exploratory testing (completed), draft test plan, test cases (completed).
- Finalize test plan, execute functional and compatibility testing.
- Execute API and WebSocket testing and automate tests (Cypress, Postman).
- Execute load testing, record video, finalize the bug tracker and test report.

## 9. Risks and Mitigations

- **Risk**: Limited documentation may lead to missed requirements.
  - **Mitigation**: Use exploratory testing findings and Figma design to infer requirements.

- **Risk**: Unstable test environment (e.g., API downtime).
  - **Mitigation**: Document environment issues and test offline scenarios.

- **Risk**: Time constraints may limit test coverage.
  - **Mitigation**: Prioritize critical functionalities (e.g., login, event streaming) and automate regression tests.

- **Risk**: Real device access is limited.
  - **Mitigation**: Use Chrome DevTools for device emulation as a fallback.

## 10. Assumptions

- The application URLs (frontend, backend, and WebSocket) are accessible and stable.
- Test data (e.g., posts, categories) is pre-populated in the backend.
- The Figma design represents the intended UI/UX.
- No additional third-party dependencies require testing.

## 11. Approval

- **Prepared by**: Kana, Azibabari Lagalo
- **Date**: May 3, 2025
- **Note**: This plan is based on exploratory testing and the project brief.
