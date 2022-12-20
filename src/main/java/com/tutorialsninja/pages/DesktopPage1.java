package com.tutorialsninja.pages;

import com.tutorialsninja.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.testng.Reporter;

import java.util.List;

public class DesktopPage1 extends Utility {
    private static final Logger log= LogManager.getLogger(DesktopPage1.class);
    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Currency')]")
    WebElement currency ;

    @CacheLookup
    @FindBy(xpath = "//ul[@class = 'dropdown-menu']/li")
    List<WebElement> listOfCurrency;


    //get from desktoppage
    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'HP LP3065')]")
    WebElement hp ;

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'HP LP3065')]")
    WebElement hPMessage;


    @CacheLookup
    @FindBy(xpath = "//div[@class = 'datepicker']/div[1]//th[@class='picker-switch']")
    WebElement monthYear  ;

    @CacheLookup
    @FindBy(xpath = "//input[@id='input-quantity']")
    WebElement quantity ;

    //clear quantity and add2
    @CacheLookup
    @FindBy(xpath = "//button[@id='button-cart']")
    WebElement  addButton;

    @CacheLookup
    @FindBy(css = "siblbody:nth-child(2) div.container:nth-child(4) > div.alert.alert-success.alert-dismise")
    WebElement successMessage  ;

    @CacheLookup
    @FindBy(xpath = "//button[@id='button-cart']")
    WebElement shoppingCart ;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'shopping cart')]")
    WebElement shoppingCartLink ;

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),' (1.00kg)')]")
    WebElement shoppinCartMessage ;

    @CacheLookup
    @FindBy(css = "div.container:nth-child(4) div.row div.col-sm-12 div.table-responsive table.table.table-bordered tbody:nth-child(2) tr:nth-child(1) td.text-left:nth-child(2) > a:nth-child(1)")
    WebElement productName ;

    @CacheLookup
    @FindBy(css = "div.container:nth-child(4) div.row div.col-sm-12 div.table-responsive table.table.table-bordered tbody:nth-child(2) tr:nth-child(1) > td.text-left:nth-child(3)")
    WebElement model21 ;

    @CacheLookup
    @FindBy(xpath = "//tbody/tr[1]/td[6]")
    WebElement total ;

    public void clickOnCurrencyButton() {
        log.info(" Clicl on currency button"+currency.toString());
        clickOnElement(currency);
    }
    public void selectCurrencyFromDropDown(String currency) {
        log.info("Select currency from drop down "+listOfCurrency.toString());
        //List<WebElement> currencyList = webElementList(listOfCurrency);
        for (WebElement e : listOfCurrency) {
            if (e.getText().equalsIgnoreCase(currency)) {
                e.click();
                break;
            }
        }
    }
    public void clickOnHP() {

        log.info("Click on HP"+hp.toString());
        clickOnElement(hp);
    }
    public String verifyHPMessage() {
        log.info("Verify HP text "+hPMessage.toString());
        return getTextFromElement(hPMessage);
    }

    public void selectDeleveryDate() {
        log.info("Select delivery date ");
        String year = "2023";
        String month = "November";
        String date = "30";
        clickOnElement(By.xpath("//div[@class = 'input-group date']//button"));
        while (true) {

            String monthAndYear = monthYear.getText();
            String[] arr = monthAndYear.split(" ");
            String mon = arr[0];
            String yer = arr[1];
            if (mon.equalsIgnoreCase(month) && yer.equalsIgnoreCase(year)) {
                break;
            } else {
                clickOnElement(By.xpath("//div[@class = 'datepicker']/div[1]//th[@class='next']"));
            }
        }
        List<WebElement> allDates = driver.findElements(By.xpath("//div[@class = 'datepicker']/div[1]//tbody/tr/td[@class = 'day']"));
        for (WebElement e : allDates) {
            if (e.getText().equalsIgnoreCase(date)) {
                e.click();
                log.info("Click on element "+e.toString());
                break;
            }
        }
    }

    public void clearQuantityAndSendQuantity(String num) {
        log.info("Add quantity"+quantity.toString());
        Actions actions = new Actions(driver);
        quantity.clear();
        //clickOnElement(quantity);
        sendTextToElement(quantity, num);
    }
    public void clickOnAddButton() {
        log.info("Click on add button "+addButton.toString());
        clickOnElement(addButton);
    }

    public String verifySuccessfullMessage() {
        log.info("Verify message "+successMessage.toString());
        return getTextFromElement(successMessage);
    }
    public void clickOnShoppingCart() {
        log.info("Click on shopping cart "+shoppingCart.toString());
        clickOnElement(shoppingCart);
    }
    public void clickOnShoppingCartLink() {
        log.info("Click on shopping cart link "+shoppingCartLink.toString());
        clickOnElement(shoppingCartLink);
    }
    public String verifyShoppinCartMessage() {
        log.info("Verify shopping cart message "+shoppinCartMessage.toString());
        return getTextFromElement(shoppinCartMessage);
    }
    //HP LP3065
    public String verifyProductName() {
        log.info("Verify product name "+productName.toString());
        return getTextFromElement(productName);
    }
    //Product 21
    public String verifyProduct21(){
        log.info("Verify product model121"+model21.toString());
        return getTextFromElement(model21);
    }
    //£74.73
    public String verifyTotal(){
        log.info("Verify total "+total.toString());
        return getTextFromElement(total);
    }
}
