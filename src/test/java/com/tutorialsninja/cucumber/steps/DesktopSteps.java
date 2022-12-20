package com.tutorialsninja.cucumber.steps;

import com.tutorialsninja.pages.DesktopPage1;
import com.tutorialsninja.pages.DesktopsPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class DesktopSteps {
    @Given("^User is on homepage$")
    public void userIsOnHomepage() {
    }

    @When("^User mousehover and click on desktop$")
    public void userMousehoverAndClickOnDesktop() {
        new DesktopsPage().mouseHoverAndClickOnDesktops();
    }

    @And("^User click on all desktops option$")
    public void userClickOnAllDesktopsOption() {
        new DesktopsPage().clickOnAllDesktops();
    }

    @And("^User click on Z to A option$")
    public void userClickOnZToAOption() {
        new DesktopsPage().clickOnZtoA();
    }

    @Then("^User can see products are arranged in descending order$")
    public void userCanSeeProductsAreArrangedInDescendingOrder() {

    }

    @When("^User click on currency tab$")
    public void userClickOnCurrencyTab() {
        new DesktopPage1().clickOnCurrencyButton();
    }

    @And("^User select currency from dropdown \"([^\"]*)\"$")
    public void userSelectCurrencyFromDropdown(String currency) {
        new DesktopPage1().selectCurrencyFromDropDown(currency);
    }


    @And("^User click on hp$")
    public void userClickOnHp() {
        new DesktopPage1().clickOnHP();
    }

    @And("^verify HP message$")
    public void verifyHPMessage() {
        Assert.assertEquals("HP LP3065", new DesktopPage1().verifyHPMessage());
    }

    @And("^User select delevery date$")
    public void userSelectDeleveryDate() {
        new DesktopPage1().selectDeleveryDate();
    }

    @And("^User clear quantity and add quantity \"([^\"]*)\"$")
    public void userClearQuantityAndAddQuantity(String num) {
        new DesktopPage1().clearQuantityAndSendQuantity(num);
    }

    @And("^User click on add button$")
    public void userClickOnAddButton() {
        new DesktopPage1().clickOnAddButton();
    }

//    @And("^User verify successfull message$")
//    public void userVerifySuccessfullMessage() {
//        Assert.assertEquals("Success: You have added HP LP3065 to your shopping cart!", new DesktopPage1().verifySuccessfullMessage());
//    }

    @And("^User click on shopping cart$")
    public void userClickOnShoppingCart() {
        new DesktopPage1().clickOnShoppingCart();
    }

    @And("^User click on shopping cart link$")
    public void userClickOnShoppingCartLink() {
        new DesktopPage1().clickOnShoppingCartLink();
    }

    @And("^User verify shopping catr message$")
    public void userVerifyShoppingCatrMessage() {
        Assert.assertEquals("Shopping Cart  (1.00kg)", new DesktopPage1().verifyShoppinCartMessage());
    }

    @And("^User verify product name$")
    public void userVerifyProductName() {
        Assert.assertEquals("HP LP3065", new DesktopPage1().verifyProductName());
    }

    @And("^User verify product$")
    public void userVerifyProduct() {
        Assert.assertEquals("Product 21", new DesktopPage1().verifyProduct21());
    }

    @Then("^User verify total$")
    public void userVerifyTotal() {
        Assert.assertEquals("£74.73", new DesktopPage1().verifyTotal());
    }


}