Feature: DesktopPAge
  @sanity
  @regression
  Scenario: Products arrange in alphabetical order
    Given  User is on homepage
    When   User mousehover and click on desktop
    And    User click on all desktops option
    And    User click on Z to A option
    Then   User can see products are arranged in descending order
  @smoke
  @regression
  Scenario: Products added to shoppingcart
    Given User is on homepage
    When User click on currency tab
    And  User select currency from dropdown "£ Pound Sterling"
    And  User mousehover and click on desktop
    And  User click on all desktops option
    And  User click on Z to A option
    And  User click on hp
    And  verify HP message
    And  User select delevery date
    And  User clear quantity and add quantity "1"
    And  User click on add button
#    And  User verify successfull message
    And  User click on shopping cart
    And  User click on shopping cart link
    And  User verify shopping catr message
    And  User verify product name
    And  User verify product
    Then User verify total