package com.tutorialsninja.cucumber.steps;

import com.tutorialsninja.pages.LaptopsAndNotebooksPage;
import com.tutorialsninja.pages.LaptopsAndNotebooksPage1;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LaptopsAndNotebooksSteps {
    @When("^User mousehover and click on Laptops and Notebooks$")
    public void userMousehoverAndClickOnLaptopsAndNotebooks() {
        new LaptopsAndNotebooksPage().mouseHoverAndClickOnLaptopsAndNotebooks();

    }

    @And("^User click on show all laptops and notebooks$")
    public void userClickOnShowAllLaptopsAndNotebooks() {
        new LaptopsAndNotebooksPage().clickOnShowAllLaptopsAndNotebooks();
    }

    @Then("^User select price high to low from dropdown$")
    public void userSelectPriceHighToLowFromDropdown() {
        new LaptopsAndNotebooksPage().selectPriseHighToLowFromDropdown();
    }

    @And("^User click on sort by tab$")
    public void userClickOnSortByTab() {
        new LaptopsAndNotebooksPage1().clickOnSortBy();
    }

    @And("^User click on mac book$")
    public void userClickOnMacBook() {
        new LaptopsAndNotebooksPage1().clickOnMacBook();
    }

    @And("^User verify macbook message$")
    public void userVerifyMacbookMessage() {
        Assert.assertEquals("MacBook", new LaptopsAndNotebooksPage1().verifyMacBookMessage());
    }

    @And("^User click on add to cart button$")
    public void userClickOnAddToCartButton() {
        new LaptopsAndNotebooksPage1().clickOnAddToCart();
    }

    @And("^User click on add to cart link$")
    public void userClickOnAddToCartLink() {
        new LaptopsAndNotebooksPage1().clickOnShoppingCartLink();
    }

    @And("^User verify shopping cart message$")
    public void userVerifyShoppingCartMessage() {
        Assert.assertEquals("Shopping Cart  (0.00kg)", new LaptopsAndNotebooksPage1().verifyShoppingCartMessage());
    }

    @And("^User verify macbook message again$")
    public void userVerifyMacbookMessageAgain() {
        new LaptopsAndNotebooksPage1().verifyMacBookText();
    }
    @And("^User  again clear quantity and add quantity \"([^\"]*)\"$")
    public void userAgainClearQuantityAndAddQuantity(String quantity)  {
        new LaptopsAndNotebooksPage1().clearQuantityAndSendQuantity(quantity);
    }

    @And("^User click on update button$")
    public void userClickOnUpdateButton() {
        new LaptopsAndNotebooksPage1().clickOnUpadte();
    }

    @And("^User verify modified message$")
    public void userVerifyModifiedMessage() {
        Assert.assertEquals("Success: You have modified your shopping cart!"+"\n×", new LaptopsAndNotebooksPage1().verifyModifiedMessage());
    }

    @And("^User Verify text$")
    public void userVerifyText() {
        Assert.assertEquals("£737.45", new LaptopsAndNotebooksPage1().verifyText());
    }

    @And("^User Verify checkout text$")
    public void userVerifyCheckoutText() {
        Assert.assertEquals("Checkout", new LaptopsAndNotebooksPage1().verifyCheckOutText());
    }

    @And("^User click on check out button$")
    public void userClickOnCheckOutButton() {
        new LaptopsAndNotebooksPage1().clickCheckout();
    }

    @And("^User click on guest radio button$")
    public void userClickOnGuestRadioButton() {
        new LaptopsAndNotebooksPage1().clickGuestRadioButton();
    }

    @And("^User click on continue button$")
    public void userClickOnContinueButton() {
        new LaptopsAndNotebooksPage1().clickContinue1();
    }


    @And("^User enter first name \"([^\"]*)\"$")
    public void userEnterFirstName(String name)  {
        new LaptopsAndNotebooksPage1().enterFirstName(name);
    }

    @And("^User enter last name \"([^\"]*)\"$")
    public void userEnterLastName(String lastName)  {
        new LaptopsAndNotebooksPage1().enterLastName(lastName);
    }

    @And("^User enter Email \"([^\"]*)\"$")
    public void userEnterEmail(String email)  {
        new LaptopsAndNotebooksPage1().enterEmail(email);

    }

    @And("^User enter telephone number\"([^\"]*)\"$")
    public void userEnterTelephoneNumber(String num)  {
        new LaptopsAndNotebooksPage1().enterTelephoneNumber(num);
    }

    @And("^User enter company name \"([^\"]*)\"$")
    public void userEnterCompanyName(String company)  {
        new LaptopsAndNotebooksPage1().enterCompanyName(company);
    }

    @And("^User enter address \"([^\"]*)\"$")
    public void userEnterAddress(String address)  {
        new LaptopsAndNotebooksPage1().enterAddress(address);
    }

    @And("^User enter city \"([^\"]*)\"$")
    public void userEnterCity(String city)  {
        new LaptopsAndNotebooksPage1().enterCity(city);
    }

    @And("^User enter postcode \"([^\"]*)\"$")
    public void userEnterPostcode(String postCode)  {
        new LaptopsAndNotebooksPage1().enterPostcode(postCode);
    }

    @And("^User select country$")
    public void userSelectCountry() {
        new LaptopsAndNotebooksPage1().selectCountry();
    }
    @And("^User click on continue button again$")
    public void userClickOnContinueButtonAgain() {
        new LaptopsAndNotebooksPage1().clickOnContinue2();
    }
    @And("^User click on terms and condition button$")
    public void userClickOnTermsAndConditionButton() {
        new LaptopsAndNotebooksPage1().clickOnTermsAndCondition();
    }

    @Then("^User verify last message$")
    public void userVerifyLastMessage() {
        Assert.assertEquals("Warning: Payment method required!\\n\" + \"×",new LaptopsAndNotebooksPage1().lastMessage());
    }


    @And("^User click on continue button once again$")
    public void userClickOnContinueButtonOnceAgain() {
        new LaptopsAndNotebooksPage1().clickOnContinue3();
    }
}
