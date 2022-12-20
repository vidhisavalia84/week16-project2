package com.tutorialsninja.pages;

import com.tutorialsninja.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.testng.Reporter;

public class LaptopsAndNotebooksPage extends Utility {
    private static final Logger log= LogManager.getLogger(LaptopsAndNotebooksPage.class);
    @CacheLookup
    @FindBy(linkText = "Laptops & Notebooks")
    WebElement laptopsAndNotebooks;

    @CacheLookup
    @FindBy(linkText = "Show All Laptops & Notebooks")
    WebElement showAllOPtion;

    @CacheLookup
    @FindBy(id = "input-sort")
    WebElement sortBy;


    public void mouseHoverAndClickOnLaptopsAndNotebooks(){
        log.info("Click on Laptops and notebook tab "+laptopsAndNotebooks.toString());
        mouseHoverToElementAndClick(laptopsAndNotebooks);
    }
    public void clickOnShowAllLaptopsAndNotebooks(){
        log.info("Click on show all option "+showAllOPtion.toString());
        clickOnElement(showAllOPtion);
    }

    public void selectPriseHighToLowFromDropdown(){
        log.info("Select price Low to High "+sortBy.toString());
        selectByVisibleTextFromDropDown(sortBy, "Price (Low > High)");
        // selectOptionsByValue(sortBy,"Price (Low > High)");
    }



}
