# 🎯 Saucedemo E2E Automation with Playwright + TypeScript

This project aims to implement a professional-grade **end-to-end (E2E)** test suite for the [SauceDemo](https://www.saucedemo.com) application using modern tools and best practices.
## 🔗 [View Playwright Report (GitHub Pages)](https://carlosvega.github.io/playwright-e2e-reporte/)

<br>
# 🚀 Tech Stack

- ### Playwright for E2E testing
- ### TypeScript as the base language
- ### ESLint for static code analysis
- ### Prettier for code formatting
- ### Page Object Model (POM) design pattern
- ### Git for version control



# 📁 Project Structure

```plaintext
saucedemo-playwright/
│
├── pages/              # Page Object Models (e.g., LoginPage.ts)
├── services/           # Logic for API calls, authentication, sessions
├── tests/              # Test specs (e.g., login.spec.ts)
├── utils/              # Reusable utility functions and custom helpers
├── .prettierrc         # Prettier configuration
├── eslint.config.js    # ESLint v9+ configuration
├── package.json        # Scripts and project dependencies
├── README.md           # Project documentation
├── tsconfig.json       # TypeScript configuration
```

---
# ▶️ How to Run Tests
1. **Clone this repository**
   ```bash
   git clone https://github.com/vegaweb-dev/SAUCEDEMO-AUTOMATION-PLAYWRIGHT.git
   cd saucedemo-playwright
   npm install
   npx playwright test
   npx playwright show-report
   Or open the published report:
   🔗[View on GitHub Pages](https://carlosvega.github.io/playwright-e2e-reporte/)


# View report HTML report
### npx playwright show-report
### click here to see report:
## https://carlosvega.github.io/playwright-e2e-reporte/


# 🧪 Available Scripts

| Command              | Description                             |
|----------------------|-----------------------------------------|
| `npm run lint`       | Run ESLint to detect code issues        |
| `npm run lint:fix`   | Run ESLint and auto-fix fixable issues  |
| `npm run format`     | Format code using Prettier              |

---

# 🛠️ Project Status

> ✅ Initial setup complete with TypeScript, ESLint, and Prettier.  
> 🔧 I integrate logic as I test new features of the AUT using the Page Object Model. Should I add any folder or file or ammend the structure I will update the readme with the new structure. Thanks. 
> ✅ Login test

> ✅ Add to cart test

> ✅ View cart test

... I continue working. Thanks!




---

# 📌 Requirements

- Node.js 18 or higher (tested with v22.16.0)
- npm
- VS Code (recommended)
- Extensions: ESLint, Prettier

---

## ✍️ Author
Carlos Vega – github.com/vegaweb-dev