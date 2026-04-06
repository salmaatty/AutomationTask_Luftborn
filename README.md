# Luftborn Automation Task

An automated test framework for eBay website testing using Playwright.

## Project Overview

This project is a test automation framework built with Playwright that validates eBay web application functionality. It includes search and filter functionality tests.

## Project Structure

```
├── config.js              # Configuration settings
├── package.json           # Project dependencies
├── pages/
│   └── EbayHomePage.js   # Page Object Model for eBay homepage
├── tests/
│   └── test.spec.js      # Test specifications
├── TestData/
│   └── testdata1.json    # Test data for test cases
└── README.md             # Documentation
```

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/salmaatty/Luftborn_AutomationTask.git
cd Luftborn_AutomationTask
```

2. Install dependencies:
```bash
npm install
```

## Configuration

Update `config.js` with your test environment settings as needed.

## Test Data

Test data is stored in `TestData/testdata1.json` and includes:
- Search parameters
- Filter entries

## Running Tests

Run all tests:
```bash
npm test
```

Or using Playwright directly:
```bash
npx playwright test
```

Run tests in headed mode:
```bash
npx playwright test --headed
```

Run tests with debugging:
```bash
npx playwright test --debug
```

## Test Cases

### Search and Filter Test
- Navigates to eBay
- Performs a search using test data
- Applies filters
- Validates results count before and after filtering

## Page Object Model

### EbayHomePage
Located in `pages/EbayHomePage.js`, includes methods:
- `navigate()` - Navigate to eBay homepage
- `search(query)` - Perform search with given query
- `filter(filterEntry)` - Apply filter to results
- `getResultsCount()` - Get count of search results

## Dependencies

- `@playwright/test` - Testing framework
- Additional dependencies as listed in `package.json`

## Author

salmaatty

## License

MIT

## Repository

[GitHub Repository](https://github.com/salmaatty/Luftborn_AutomationTask)