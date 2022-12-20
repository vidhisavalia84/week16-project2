Feature: Top Menu

  @sanity
  @regression
  Scenario: User should navigate to Desktop page successfully
    Given User is on homepage
    When   User mousehover and click on desktop
    And    User click on all desktops option
    Then   User verify desktop message

  @smoke
  @regression
  Scenario: User should navigate to Laptops and Notebooks page successfully
    Given User is on homepage
    When   User mousehover and click on Laptops and Notebooks
    And    User click on all Laptops and Notebooks option
    Then   User verify Laptops and Notebooks message

  @regression
  Scenario: User should navigate to Componant page successfully
    Given User is on homepage
    When   User mousehover and click on Componant
    And    User click on show all Componant
    Then   User verify Componant message