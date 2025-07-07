# 🧪 SauceDemo Login Automation – WDIO + Cucumber + Allure

A complete WebdriverIO + Cucumber suite for SauceDemo’s login page, featuring:

- **Page Object Model** for clean selectors & actions  
- **Parallel** execution on Chrome & Edge  
- **Custom logging** (console + `logs/logs.txt`)  
- **Screenshots on failure** automatically attached to Allure  

**Repo:** https://github.com/sergio529/wdio-task

---

## ✅ Test Scenarios

### UC‑1: Empty Credentials  
1. Enter any username & password  
2. Clear both fields  
3. Click **Login**  
➔ Expect: `Epic sadface: Username is required`

### UC‑2: Missing Password  
1. Enter valid username (`standard_user`) & any password  
2. Clear **Password** only  
3. Click **Login**  
➔ Expect: `Epic sadface: Password is required`

### UC‑3: Valid Login (Data‑Driven)  
Run with each accepted username (`standard_user`, `problem_user`, …) + password `secret_sauce`  
➔ Expect redirect to inventory and page title **Swag Labs**

---

## 🚀 Quick Start

```bash
git clone https://github.com/sergio529/wdio-task.git
cd wdio-task
npm install

# clean previous Allure results & run all specs:
npm test   

# run tests (preserving existing results):
npm run wdio

# generate & browse Allure report:
npm run allure:generate
npm run allure:open

---

## 🙌 Author

**Sergio Solarte** – [github.com/sergio529](https://github.com/sergio529)

---

## 📄 License

This project is licensed under the MIT License.