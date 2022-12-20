package com.tutorialsninja.pages;

import com.tutorialsninja.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.testng.Reporter;

public class LaptopsAndNotebooksPage1 extends Utility {
    private static final Logger log= LogManager.getLogger(LaptopsAndNotebooksPage1.class);
    @CacheLookup
    @FindBy(id = "input-sort")
    WebElement sortBy;

    @CacheLookup
    @FindBy(linkText = "MacBook")
    WebElement macBook;


    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'MacBook')]")
    WebElement macBookMessage;

    @CacheLookup
    @FindBy(xpath = "//button[@id='button-cart']")
    WebElement cartButton;


    @CacheLookup
    @FindBy(css = "body:nth-child(2) div.container:nth-child(4) > div.alert.alert-success.alert-dismissible")
    WebElement successMessage;


    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'shopping cart')]")
    WebElement shoppingCart;


    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),' (0.00kg)')]")
    WebElement shoppingCartMessage;

    @CacheLookup
    @FindBy(xpath = "//div[@class = 'table-responsive']/table/tbody/tr/td[2]/a")
    WebElement macBookText;


    @CacheLookup
    @FindBy(xpath = "//input[contains(@name, 'quantity')]")
    WebElement quantity;


    @CacheLookup
    @FindBy(xpath = "//button[contains(@data-original-title, 'Update')]")
    WebElement update;


    @CacheLookup
    @FindBy(xpath = "//div[@class='alert alert-success alert-dismissible']")
    WebElement modifiedMessage;


    @CacheLookup
    @FindBy(xpath = "//tbody/tr[1]/td[6]")
    WebElement text;


    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Checkout')]")
    WebElement textCheckout;

    @CacheLookup
    @FindBy(xpath = "//h2[contains(text(),'New Customer')]")
    WebElement newCustomer;

    @CacheLookup
    @FindBy(xpath = "//body/div[@id='checkout-checkout']/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/label[1]/input[1]")
    WebElement guestRadioButton;

    @CacheLookup
    @FindBy(xpath = "//input[@id='button-account']")
    WebElement continue1;

    @CacheLookup
    @FindBy(id = "input-payment-firstname")
    WebElement firstName;

    @CacheLookup
    @FindBy(id = "input-payment-lastname")
    WebElement lastName;

    @CacheLookup
    @FindBy(id = "input-payment-email")
    WebElement email;


    @CacheLookup
    @FindBy(id = "input-payment-telephone")
    WebElement telephone;

    @CacheLookup
    @FindBy(id = "input-payment-company")
    WebElement company;


    @CacheLookup
    @FindBy(id = "input-payment-address-1")
    WebElement address;

    @CacheLookup
    @FindBy(id = "input-payment-city")
    WebElement city;


    @CacheLookup
    @FindBy(id = "input-payment-postcode")
    WebElement postcode;


    @CacheLookup
    @FindBy(xpath = "//select[@id='input-payment-country']")
    WebElement country;

    @CacheLookup
    @FindBy(xpath = "//select[@id='input-payment-zone'])")
    WebElement zone;

/* @CacheLookup
    @FindBy(xpath = "//select[@id='input-payment-zone']")
    WebElement zone;*/
    @CacheLookup
    @FindBy(xpath = "//input[@id='button-guest']")
    WebElement continue2;


    @CacheLookup
    @FindBy(xpath = "//body/div[@id='checkout-checkout']/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[1]/input[1]")
    WebElement termsAndCondition;

    @CacheLookup
    @FindBy(xpath = "//input[@id='button-payment-method']")
    WebElement continue3;

    @CacheLookup
    @FindBy(xpath = "//div[@class='alert alert-danger alert-dismissible']")
    WebElement lastMessage;

    public void selectPrice() {
       log.info("Select option from drop down "+sortBy.toString());
        selectByVisibleTextFromDropDown(sortBy, "Price (High > Low)");
    }
    public void clickOnSortBy() {
       log.info("Select option from drop down "+sortBy.toString());
        sendTextToElement(sortBy, "Price (High > Low)");
    }
    public void clickOnMacBook() {
       log.info("select Macbook"+macBook.toString());
        clickOnElement(macBook);
    }
    public String verifyMacBookMessage() {
       log.info("Verify text "+macBookMessage.toString());
        return getTextFromElement(macBookMessage);
    }
    public void clickOnAddToCart() {
       log.info("Click on add to cart "+cartButton.toString());
        clickOnElement(cartButton);
    }
    public String verifySuccessfulMessage() {
       log.info("Verify text "+successMessage.toString());
        return getTextFromElement(successMessage);
    }
    public void clickOnShoppingCartLink() {
       log.info("Click on shopping cart link"+shoppingCart.toString());
        clickOnElement(shoppingCart);
    }

    public String verifyShoppingCartMessage() {
       log.info("Verify shopping cart message"+shoppingCartMessage.toString());
        return getTextFromElement(shoppingCartMessage);
    }

    public String verifyMacBookText() {
       log.info("Verify mackbook text"+macBookText.toString());
        return getTextFromElement(macBookText);
    }

    public void clearQuantityAndSendQuantity(String num) {
       log.info("Clear quantity and add quantity"+quantity.toString());
        Actions actions = new Actions(driver);
        quantity.clear();
        //clickOnElement(quantity);
        sendTextToElement(quantity, num);
    }

    public void clickOnUpadte() {
       log.info("Click on update button "+update.toString());
        clickOnElement(update);
    }
    public String verifyModifiedMessage() {
       log.info("Verify text"+modifiedMessage.toString());
        return getTextFromElement(modifiedMessage);
    }
    //$1,204.00
    public String verifyText() {
       log.info("Verify text "+text.toString());
        return getTextFromElement(text);
    }
    public String verifyCheckOutText() {
       log.info("Verify check out text"+textCheckout.toString());
        return getTextFromElement(textCheckout);
    }


    public void clickCheckout() {
       log.info("Click on checkout"+textCheckout.toString());
        clickOnElement(textCheckout);
    }

    public String verifyTextNewCustomer() {
       log.info("Verify text new customer"+newCustomer.toString());
        return getTextFromElement(newCustomer);
    }
    public void clickGuestRadioButton() {
       log.info("Click on radio button "+guestRadioButton.toString());
        clickOnElement(guestRadioButton);
    }

    public void clickContinue1() {
       log.info("Click on continue button"+continue1.toString());
        clickOnElement(continue1);
    }
    public void enterFirstName(String name) {
       log.info("Enter first name"+firstName.toString());
        sendTextToElement(firstName, name);
    }
    public void enterLastName(String name) {
       log.info("Enter last name"+lastName.toString());
        sendTextToElement(lastName, name);
    }

    public void enterEmail(String email1) {
       log.info("Enter email "+email1.toString());
        sendTextToElement(email, email1);
    }
    public void enterTelephoneNumber(String num) {
       log.info("Enter telephone "+telephone.toString());
        sendTextToElement(telephone, num);
    }
    public void enterCompanyName(String name) {
       log.info("Enter company name "+company.toString());
        sendTextToElement(company, name);
    }

    public void enterAddress(String add) {
       log.info("Enter address "+address.toString());
        sendTextToElement(address, add);
    }
    public void enterCity(String c) {
       log.info("Enter city name "+city.toString());
        sendTextToElement(city, c);
    }
    public void enterPostcode(String num) {
       log.info("Enter postcode "+postcode.toString());
        sendTextToElement(postcode, num);
    }

    public void selectCountry() {
       log.info("Select country "+country.toString());
        selectByVisibleTextFromDropDown(country, "Antarctica");
    }
    /* @CacheLookup
     @FindBy(xpath = "//select[@id='input-payment-zone']")
     WebElement zone;*/
    public void selectZone() {
       log.info("Select zone ");
        selectByVisibleTextFromDropDown(zone, "Berkshire");
    }

    public void clickOnContinue2() {
       log.info("Click on continue");
        clickOnElement(continue2);
    }
    public void clickOnTermsAndCondition() {
       log.info("Tick terms and condition checkbox"+termsAndCondition.toString());
        clickOnElement(termsAndCondition);
    }

    public void clickOnContinue3() {
       log.info("Click on continue"+continue3.toString());
        clickOnElement(continue3);
    }
    public String lastMessage(){
       log.info("Verify message"+lastMessage.toString());
        return getTextFromElement(lastMessage);
    }







}
