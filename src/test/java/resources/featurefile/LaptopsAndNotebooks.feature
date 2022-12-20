Feature: Laptops and Notebooks page

  @sanity
  @regression
  Scenario: Products price arrange in order
    Given User is on homepage
    When User mousehover and click on Laptops and Notebooks
    And  User click on show all laptops and notebooks
    Then User select price high to low from dropdown
  @smoke
  @regression
  Scenario: User place order successfully
    Given User is on homepage
    When User click on currency tab
    And  User select currency from dropdown "£ Pound Sterling"
    And  User mousehover and click on Laptops and Notebooks
    And  User click on show all laptops and notebooks
    And  User click on sort by tab
    And  User click on mac book
    And  User verify macbook message
    And  User click on add to cart button
    And  User click on add to cart link
    And  User verify shopping cart message
    And  User verify macbook message again
    And  User  again clear quantity and add quantity "2"
    And User click on update button
    And User verify modified message
    And User Verify text
    And User Verify checkout text
    And User click on check out button
    And User click on guest radio button
    And User click on continue button
    And User enter first name "Reva"
    And User enter last name "Patel"
    And User enter Email "RevaPatel@gmail.com"
    And User enter telephone number"07856985685"
    And User enter company name "Prime"
    And User enter address "Prime 123"
    And User enter city "Delhi"
    And User enter postcode "Ha3 ^PL"
    And User select country
    And User click on continue button again
    And User click on terms and condition button
    And User click on continue button once again
    Then User verify last message