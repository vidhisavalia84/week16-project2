package com.tutorialsninja.cucumber.steps;

import com.tutorialsninja.pages.MyAccountPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class MyAccountSteps {
    @When("^User click on my account$")
    public void userClickOnMyAccount() {
        new MyAccountPage().clickonMyAccount();
    }

    @And("^User select my account option \"([^\"]*)\"$")
    public void userSelectMyAccountOption(String name)  {
        new MyAccountPage().selectMyAccountOptions(name);
    }

    @Then("^User should navigated to register page successfully$")
    public void userShouldNavigatedToRegisterPageSuccessfully() {
        Assert.assertEquals("Register Account",new MyAccountPage().verifyRegisterText());
    }

    @Then("^User should navigated to Login page successfully$")
    public void userShouldNavigatedToLoginPageSuccessfully() {
        Assert.assertEquals("Returning Customer",new MyAccountPage().verifyReturningText());
    }

    @And("^User enter password \"([^\"]*)\"$")
    public void userEnterPassword(String password)  {
       new MyAccountPage().enterPassword(password);
    }

    @And("^User enter conformpassword \"([^\"]*)\"$")
    public void userEnterConformpassword(String conformPassword)  {
        new MyAccountPage().enterConfirmPassword(conformPassword);
    }

    @And("^User click on news letter button$")
    public void userClickOnNewsLetterButton() {
        new MyAccountPage().clickOnNewsLetterButton();
    }

    @And("^User click on privacy policy button$")
    public void userClickOnPrivacyPolicyButton() {
        new MyAccountPage().clickOnPrivacyPolicy();
    }

    @And("^User click on continuefirst button$")
    public void userClickOnContinuefirstButton() {
        new MyAccountPage().clickOnContinue1();
    }

    @And("^User verify your account created message$")
    public void userVerifyYourAccountCreatedMessage() {
        Assert.assertEquals("Your Account Has Been Created!",new MyAccountPage().verifyMessageYourAccount());
    }

    @And("^User click on continuethird button$")
    public void userClickOnContinuethirdButton() {
        new MyAccountPage().clickOnContinue3();
    }

    @And("^User click on my account link$")
    public void userClickOnMyAccountLink() {
        new MyAccountPage().clickOnMyAccountLink();
    }

    @And("^User verify account logout option$")
    public void userVerifyAccountLogoutOption() {
        Assert.assertEquals("Account Logout",new MyAccountPage().verifyLogoutText());
    }

    @Then("^User click on continuefourth button$")
    public void userClickOnContinuefourthButton() {
        new MyAccountPage().clickOnContinue4();
    }

    @And("^User enter first name for register \"([^\"]*)\"$")
    public void userEnterFirstNameForRegister(String name)  {
        new MyAccountPage().enterFirstName(name);
    }

    @And("^User enter last name for register \"([^\"]*)\"$")
    public void userEnterLastNameForRegister(String lastName)  {
        new MyAccountPage().enterLastName(lastName);
    }

    @And("^User enter Email for register\"([^\"]*)\"$")
    public void userEnterEmailForRegister(String email)  {
        new MyAccountPage().enterEmailAddress(email);
    }

    @And("^User enter telephone number for register\"([^\"]*)\"$")
    public void userEnterTelephoneNumberForRegister(String num)  {
        new MyAccountPage().enterPhoneNumber(num);
    }
}
