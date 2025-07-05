# src/features/login.feature

Feature: SauceDemo Login
  As a user of SauceDemo
  I want to login to the application
  So that I can access the product catalog

  Background:
    Given I am on the login page

  Scenario: UC-1 Test Login form with empty credentials
    When I enter username "testuser"
    And I enter password "testpass"
    And I clear both fields
    And I click the Login button
    Then I should see error message "Epic sadface: Username is required"

  Scenario: UC-2 Test Login form with credentials by passing Username
    When I enter username "standard_user"
    And I enter password "secret_sauce"
    And I clear the password field
    And I click the Login button
    Then I should see error message "Epic sadface: Password is required"

  Scenario Outline: UC-3 Test Login form with credentials by passing Username & Password
    When I enter username "<username>"
    And I enter password "<password>"
    And I click the Login button
    Then I should be redirected to inventory page
    And I should see the page title "Swag Labs"

    Examples:
      | username                | password     |
      | standard_user          | secret_sauce |
      | problem_user           | secret_sauce |
      | performance_glitch_user| secret_sauce |
      | error_user             | secret_sauce |
      | visual_user            | secret_sauce |