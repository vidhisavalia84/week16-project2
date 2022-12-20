package com.tutorialsninja.pages;

import com.tutorialsninja.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.testng.Reporter;

import java.util.List;

public class DesktopsPage extends Utility {
    private static final Logger log= LogManager.getLogger(DesktopsPage.class);
    @CacheLookup
    @FindBy(linkText = "Desktops")
    WebElement desktops;

    @CacheLookup
    @FindBy(linkText = "Show All Desktops")
    WebElement alldesktops;

    @CacheLookup
    @FindBy(xpath = "//select[@id='input-sort'and@class='form-control']")
    WebElement sortByZtoA;


    @CacheLookup
    @FindBy(xpath = "//div[@class='product-thumb']")
    List<WebElement> allProduct;


    public void mouseHoverAndClickOnDesktops() {
        log.info("Mousehover and click on laptop" + desktops.toString());
        mouseHoverToElementAndClick(desktops);
    }

    public void clickOnAllDesktops() {
        log.info("Click on all desktop " + alldesktops.toString());
        clickOnElement(alldesktops);
    }

    public void clickOnZtoA() {
        log.info("Select Z to A from dropdown" + sortByZtoA.toString());
        selectByIndexFromDropDown(sortByZtoA, 2);
    }
}
