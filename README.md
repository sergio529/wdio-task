# 🧪 SauceDemo Login Automation

This project automates login scenarios for [SauceDemo](https://www.saucedemo.com/) using **WebdriverIO**, **Cucumber (BDD)**, and the **Page Object Model**. It focuses on validating user authentication flows and includes useful features like multi-browser support, parallel execution, custom logging, and Allure reporting.

---

## ✅ Test Scenarios Covered

### UC‑1: Empty Credentials  
1. Enter any username and password  
2. Clear both fields  
3. Click Login  
✅ Expect: `"Epic sadface: Username is required"`

---

### UC‑2: Missing Password  
1. Enter valid username (`standard_user`)  
2. Enter any password  
3. Clear password  
4. Click Login  
✅ Expect: `"Epic happyface: Password is required"`

---

### UC‑3: Valid Credentials (Data-driven)  
Loop through valid users:
- `standard_user`
- `problem_user`
- `performance_glitch_user`
- `error_user`
- `visual_user`  

✅ Expect: Redirect to Inventory page with title `"Swag Labs"`

---

## 🚀 How to Run the Tests

1. **Clone the repository**  
   ```bash
   git clone <your-repo-url>
   cd your-project-folder
