# Betsson Test Task API

## Overview
This project is a **Playwright-based API testing framework** designed to automate end-to-end API validation for a pet store application. It includes test cases for:
- **User Management** 
- **Pet Management**
- **Store Orders**

## Project Structure
```
|-- betsson-test-task-api
    |-- tests/                     # Playwright API test cases
    |-- fixtures/                  # Playwright test fixtures for shared setup
    |-- payloads/                   # JSON payloads for test data
    |-- test-results/               # Stores latest test run results
    |-- playwright-report/          # HTML reports for executed tests
    |-- .github/workflows/          # GitHub Actions CI/CD workflow
    |-- playwright.config.ts        # Playwright configuration file
    |-- package.json                # Project dependencies & scripts
    |-- README.md                   # Project documentation
```

## Installation & Setup
### Prerequisites
Ensure you have **Node.js** and **npm** installed.

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd betsson-test-task-api
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Running Tests
You can execute Playwright API tests using the following commands:

### Run all tests
```sh
  npx playwright test
```

### Run tests for a specific module (e.g., User API)
```sh
  npx playwright test tests/api/user
```

### Run a single test file
```sh
  npx playwright test tests/api/user/createUser.spec.ts
```

### Generate and open an HTML report
```sh
  npx playwright test --reporter=html
 npx playwright show-report
```

## Continuous Integration with GitHub Actions
This project is configured to run tests in **GitHub Actions**. The workflow file is located in `.github/workflows/`.
- Tests are automatically executed in CI when code is pushed to the repository.
- Reports and results can be accessed directly from the **GitHub Actions** tab in the repository.

## Fixtures & Payloads
- **Fixtures:** Common setup methods for creating users, managing test state, and ensuring API test independence.
- **Payloads:** Stores request body templates to keep test data organized and reusable.

## Reporting
- **Test Results:** Located in `test-results/`
- **HTML Reports:** After running tests, reports are stored in `playwright-report/`


## Contribution
Feel free to contribute by adding new test cases or improving the framework.

## License
This project is licensed under MIT.