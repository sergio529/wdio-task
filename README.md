# 🧪 SauceDemo Login Automation - WDIO + Cucumber

This project automates the login process of [SauceDemo](https://www.saucedemo.com/) using **WebdriverIO**, **Cucumber**, and the **Page Object Model**.  
It was built as part of a practical task, following best practices in automated testing.

**Repo:** [github.com/sergio529/wdio-task](https://github.com/sergio529/wdio-task)

---

## ✅ Test Cases Implemented

### UC‑1: Empty Credentials  
1. Type any username and password  
2. Clear both fields  
3. Click the login button  
➡️ Expect error: `"Epic sadface: Username is required"`

---

### UC‑2: Missing Password  
1. Type a valid username (`standard_user`)  
2. Type a password  
3. Clear only the password  
4. Click the login button  
➡️ Expect error: `"Epic happyface: Password is required"`

---

### UC‑3: Valid Login (Data-Driven)  
Test login with valid usernames:
- `standard_user`
- `problem_user`
- `performance_glitch_user`
- `error_user`
- `visual_user`

Password: `secret_sauce`  
➡️ Expect redirect to inventory page with page title `"Swag Labs"`

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/sergio529/wdio-task.git
cd wdio-task
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the tests
```bash
npm run wdio
```

✔️ This will run the tests in **Chrome and Edge** in **parallel**.

---

## 📂 Project Structure

```
├── src
│   ├── configs
│   │   └── wdio.conf.js
│   ├── features
│   │   └── login.feature
│   ├── pageobjects
│   │   └── login.page.js
│   ├── step-definitions
│   │   ├── login.steps.js
│   │   └── hook.js
│   └── utils
│       └── logger.js
├── allure-results/
├── package.json
└── README.md
```

---

## 🧩 Features

- ✅ WebdriverIO + Cucumber with BDD syntax
- ✅ Page Object Model for maintainability
- ✅ Data-Driven Testing using Scenario Outlines
- ✅ Runs in Chrome & Edge (parallel execution)
- ✅ Custom Logger utility
- ✅ Allure Reporter integration
- ✅ Uses XPath selectors


---

## 🙌 Author

**Sergio Solarte**  
🔗 [https://github.com/sergio529]

---

## 📄 License

MIT License
