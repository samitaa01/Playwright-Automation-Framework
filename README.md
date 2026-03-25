# Playwright Automation Framework

This repository contains a **Playwright automation framework** for web, written in **TypeScript**. It currently covers web test scenarios like login, file upload and datatype creation.

## ⚙️ Prerequisites

- **Node.js** installed.
- The web application under test.
- (Optional) `.env` file for environment variables.

## 🛠 Installation 

1. Clone the repository:

```bash
git clone https://github.com/samitaa01/Playwright-Automation-Framework.git
```
2. Install dependencies:
```bash
npm install
```
3. Add environment variables in .env (if needed):
```bash
EMAIL= Your_email
PASSWORD=Your_password 
TOTP_SECRET=TOTP_secret
```

 ## **🚀 Running Tests**
Run all tests:
```bash
npx playwright test
```
Run a specific test file:
```bash
npx playwright test login.spec.ts
```
Generate HTML report:
```bash
npx playwright show-report
```
