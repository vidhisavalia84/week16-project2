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

public class TopMenuPage extends Utility {
private static final Logger log= LogManager.getLogger(TopMenuPage.class);
    @CacheLookup
    @FindBy(linkText = "Desktops")
    WebElement deskTopTab;
    @CacheLookup
    @FindBy(xpath = "//h2[contains(text(),'Desktops')]")
    WebElement verifyDesktopsText;

    @CacheLookup
    @FindBy(linkText = "Laptops & Notebooks")
    WebElement laptopAndNotebook;
    @CacheLookup
    @FindBy(xpath = "//h2[contains(text(),'Laptops & Notebooks')]")
    WebElement laptopsAndNotebooksMessage;
    @CacheLookup
    @FindBy(linkText = "Components")
    WebElement componant;
    @CacheLookup
    @FindBy(xpath = "//h2[contains(text(),'Components')]")
    WebElement componantMessage;
    public void selectMenu(String menu) {
        List<WebElement> topMenuList = driver.findElements(By.xpath("//nav[@id='menu']//ul/li[contains(@class, 'open')]/div/child::*"));
        try {
            for (WebElement element : topMenuList) {
                if (element.getText().equalsIgnoreCase(menu)) {
                    element.click();
                }
            }
        } catch (StaleElementReferenceException e) {
            topMenuList = driver.findElements(By.xpath("//nav[@id='menu']//ul/li[contains(@class, 'open')]/div/child::*"));
        }
    }

    public void mouseHoverOnDeskTopTabAndClick() {
        mouseHoverToElementAndClick(deskTopTab);
    }
    public void selectALlDesktops() {
        log.info("Select show all desktops");
        // clickOnElement(allDesktops);
        selectMenu("Show All Desktops");
    }

    public String verifyDesktopsTextMessage() {
         log.info("Verify message " + verifyDesktopsText.toString());
        return getTextFromElement(verifyDesktopsText);
    }
    public void mouseHoverOnlaptopAndNotebookAndClick() {
         log.info("Mousehover on laptop and notebook and click" + laptopAndNotebook.toString());
        clickOnElement(laptopAndNotebook);
    }
    public void selectOnShowAllLaptopsAndNotebook() {
          log.info("Select show all option and notebook");
        selectMenu("Show All Laptops & Notebooks");
    }
    public String verifyLaptopsAndNotebooksMessage() {
          log.info("Verify text" + laptopsAndNotebooksMessage.toString());
        return getTextFromElement(laptopsAndNotebooksMessage);
    }
    public void mouseHoverOnComponantAndClick() {
          log.info("Mousehover on componant and click" + componant.toString());
        clickOnElement(componant);
    }
    public void selectShowAllComponant() {
          log.info("Select show all componant");
        selectMenu("Show All Components");

    }
    public String verifycomponantMessage() {
         log.info("Verify message" + componantMessage.toString());
        return getTextFromElement(componantMessage);
    }
}
