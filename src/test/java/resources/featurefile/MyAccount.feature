Feature: My Account Test
  @sanity
  @regression
  Scenario: Verify that user should navigated to register page
    Given User is on homepage
    When User click on my account
    And  User select my account option "Register"
    Then User should navigated to register page successfully
  @smoke
  @regression
    Scenario:  Verify that user should navigated to Login page
      Given User is on homepage
      When  User click on my account
      And   User select my account option "Login"
      Then User should navigated to Login page successfully
  @regression
  Scenario: Verify that user should  register register account successfully
    Given User is on homepage
    When User click on my account
    And  User select my account option "Register"
    And  User enter first name for register "Vidhi"
    And  User enter last name for register "Patel"
    And  User enter Email for register"Prime@Gmail.com"
    And  User enter telephone number for register"07865698956"
    And  User enter password "abc123"
    And  User enter conformpassword "abc123"
    And  User click on news letter button
    And  User click on privacy policy button
    And  User click on continuefirst button
    And  User verify your account created message
    And  User click on continuethird button
    And  User click on my account link
    And  User select my account option "Logout"
    And  User verify account logout option
    Then User click on continuefourth button


