package com.tutorialsninja.cucumber.steps;

import com.tutorialsninja.pages.TopMenuPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class TopMenuSteps {
    @Then("^User verify desktop message$")
    public void userVerifyDesktopMessage() {
        Assert.assertEquals("Desktops",new TopMenuPage().verifyDesktopsTextMessage());
    }

    @And("^User click on all Laptops and Notebooks option$")
    public void userClickOnAllLaptopsAndNotebooksOption() {
        new TopMenuPage().selectOnShowAllLaptopsAndNotebook();
    }

    @Then("^User verify Laptops and Notebooks message$")
    public void userVerifyLaptopsAndNotebooksMessage() {
        Assert.assertEquals("Laptops & Notebooks",new TopMenuPage().verifyLaptopsAndNotebooksMessage());
    }

    @Then("^User verify Componant message$")
    public void userVerifyComponantMessage() {
        Assert.assertEquals("Components",new TopMenuPage().verifycomponantMessage());
    }

    @When("^User mousehover and click on Componant$")
    public void userMousehoverAndClickOnComponant() {
        new TopMenuPage().mouseHoverOnComponantAndClick();
    }

    @And("^User click on show all Componant$")
    public void userClickOnShowAllComponant() {
        new TopMenuPage().selectShowAllComponant();
    }
}
