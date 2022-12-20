package com.tutorialsninja.pages;

import com.tutorialsninja.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.testng.Reporter;

import java.util.List;

public class MyAccountPage extends Utility {
    private static final Logger log= LogManager.getLogger(MyAccountPage.class);

    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'My Account')]")
    WebElement myAccount ;
    @CacheLookup
    @FindBy(xpath =  "//h1[contains(text(),'Register Account')]")
    WebElement register ;
    @CacheLookup
    @FindBy(xpath = "//h2[contains(text(),'Returning Customer')]")
    WebElement  returning;
    @CacheLookup
    @FindBy(id = "input-firstname")
    WebElement firstName ;

    @CacheLookup
    @FindBy(id = "input-lastname")
    WebElement lastName ;
    @CacheLookup
    @FindBy(id = "input-email")
    WebElement email  ;
    @CacheLookup
    @FindBy(id = "input-telephone")
    WebElement phone ;
    @CacheLookup
    @FindBy(id = "input-password")
    WebElement password ;
    @CacheLookup
    @FindBy(id = "input-confirm")
    WebElement confirmPass ;
    @CacheLookup
    @FindBy(xpath = "//input[@name='newsletter']")
    WebElement newsLetter ;
    @CacheLookup
    @FindBy(xpath = "//div[@class = 'buttons']//input[@name='agree']")
    WebElement privacyPolicy ;

    @CacheLookup
    @FindBy(xpath = "//div[@class = 'buttons']//input[@value='Continue']")
    WebElement continue1 ;
    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Your Account Has Been Created!')]")
    WebElement accountCreated ;
    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Continue')]")
    WebElement continue3 ;
    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'My Account')]")
    WebElement myAccountLink ;
    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Account Logout')]")
    WebElement logout ;
    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Continue')]")
    WebElement continue4  ;
    @CacheLookup
    @FindBy(xpath = "//form[contains(@action,'login')]//input[@type='submit']")
    WebElement loginButton ;


    public void selectMyAccountOptions(String option) {
        List<WebElement> myAccountList = driver.findElements(By.xpath("//div[@id='top-links']//li[contains(@class,'open')]/ul/li"));
        try {
            for (WebElement options : myAccountList) {
                if (options.getText().equalsIgnoreCase(option)) {
                    options.click();
                }
            }
        } catch (StaleElementReferenceException e) {
            myAccountList = driver.findElements(By.xpath("//div[@id='top-links']//li[contains(@class,'open')]/ul/li"));
        }
    }


    public void clickonMyAccount() {
       log.info("Click on my account"+myAccount.toString());
        clickOnElement(myAccount);
    }

    public String verifyRegisterText() {
       log.info("Verify register text "+register.toString());
        return getTextFromElement(register);

    }
    public String verifyReturningText() {
       log.info("Verify returning text "+returning.toString());
        return getTextFromElement(returning);

    }
    public void enterFirstName(String name) {
       log.info("Enter first name"+firstName.toString());
        sendTextToElement(firstName, name+getRandomString(2));
    }

    public void enterLastName(String lastname) {
       log.info("Enter last name"+lastName.toString());
        sendTextToElement(lastName,lastname+getRandomString(3));
    }

    public void enterEmailAddress(String email1) {
       log.info("Enter email "+email1.toString());
        sendTextToElement(email, email1);
    }
    public void enterPhoneNumber(String num) {
       log.info("Enter telephone "+phone.toString());
        sendTextToElement(phone, num);
    }
    public void enterPassword(String num) {
       log.info("Enter password"+password.toString());
        sendTextToElement(password, num);
    }
    public void enterConfirmPassword(String num) {
       log.info("Enter conform password "+confirmPass.toString());
        sendTextToElement(confirmPass, num);
    }
    public void clickOnNewsLetterButton() {
       log.info("Click on newsletter button "+newsLetter.toString());
        clickOnElement(newsLetter);
    }

    public void clickOnPrivacyPolicy() {
       log.info("Click on privacy policy "+privacyPolicy.toString());
        clickOnElement(privacyPolicy);
    }
    public void clickOnContinue1() {
       log.info("Click on continue "+continue1.toString());
        clickOnElement(continue1);
    }

    public String verifyMessageYourAccount() {
       log.info("Verify message "+accountCreated.toString());
        return getTextFromElement(accountCreated);

    }
    public void clickOnContinue3() {
       log.info("click on continue "+continue3.toString());
        clickOnElement(continue3);
    }
    public void clickOnMyAccountLink() {
       log.info("click on my account link "+myAccountLink.toString());
        clickOnElement(myAccountLink);
    }
    public String verifyLogoutText() {
       log.info("Verify logout text "+logout.toString());
        return getTextFromElement(logout);

    }
    public void clickOnContinue4() {
       log.info("Click on continue");
        clickOnElement(continue4);
    }
    public void clickOnLogin() {
       log.info("Click on login button");
        clickOnElement(loginButton);

    }


}
