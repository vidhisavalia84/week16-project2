$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LaptopsAndNotebooks.feature");
formatter.feature({
  "line": 1,
  "name": "Laptops and Notebooks page",
  "description": "",
  "id": "laptops-and-notebooks-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6355036500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Products price arrange in order",
  "description": "",
  "id": "laptops-and-notebooks-page;products-price-arrange-in-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User mousehover and click on Laptops and Notebooks",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click on show all laptops and notebooks",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User select price high to low from dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 241223300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.userMousehoverAndClickOnLaptopsAndNotebooks()"
});
formatter.result({
  "duration": 318326200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.userClickOnShowAllLaptopsAndNotebooks()"
});
formatter.result({
  "duration": 695983900,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.userSelectPriceHighToLowFromDropdown()"
});
formatter.result({
  "duration": 578224700,
  "status": "passed"
});
formatter.after({
  "duration": 752820400,
  "status": "passed"
});
formatter.before({
  "duration": 3384584600,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User place order successfully",
  "description": "",
  "id": "laptops-and-notebooks-page;user-place-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User click on currency tab",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User select currency from dropdown \"£ Pound Sterling\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User mousehover and click on Laptops and Notebooks",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click on show all laptops and notebooks",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on sort by tab",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User click on mac book",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User verify macbook message",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User click on add to cart link",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User verify shopping cart message",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User verify macbook message again",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User  again clear quantity and add quantity \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User click on update button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User verify modified message",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User Verify text",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User Verify checkout text",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User click on check out button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User click on guest radio button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User enter first name \"Reva\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User enter last name \"Patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User enter Email \"RevaPatel@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User enter telephone number\"07856985685\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User enter company name \"Prime\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User enter address \"Prime 123\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User enter city \"Delhi\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User enter postcode \"Ha3 ^PL\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User select country",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User click on continue button again",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User click on terms and condition button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User click on continue button once again",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User verify last message",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 32200,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.userClickOnCurrencyTab()"
});
formatter.result({
  "duration": 115705900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£ Pound Sterling",
      "offset": 36
    }
  ],
  "location": "DesktopSteps.userSelectCurrencyFromDropdown(String)"
});
formatter.result({
  "duration": 790393300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.userMousehoverAndClickOnLaptopsAndNotebooks()"
});
formatter.result({
  "duration": 231573100,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.userClickOnShowAllLaptopsAndNotebooks()"
});
formatter.result({
  "duration": 617432800,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.userClickOnSortByTab()"
});
formatter.result({
  "duration": 642666200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.userClickOnMacBook()"
});
formatter.result({
  "duration": 1846646300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.userVerifyMacbookMessage()"
});
formatter.result({
  "duration": 54324000,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.userClickOnAddToCartButton()"
});
formatter.result({
  "duration": 166234300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.userClickOnAddToCartLink()"
});
formatter.result({
  "duration": 617964500,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.userVerifyShoppingCartMessage()"
});
formatter.result({
  "duration": 67410600,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.userVerifyMacbookMessageAgain()"
});
formatter.result({
  "duration": 52136100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 45
    }
  ],
  "location": "LaptopsAndNotebooksSteps.userAgainClearQuantityAndAddQuantity(String)"
});
formatter.result({
  "duration": 163372600,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.userClickOnUpdateButton()"
});
formatter.result({
  "duration": 608765400,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.userVerifyModifiedMessage()"
});
formatter.result({
  "duration": 89674200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.userVerifyText()"
});
formatter.result({
  "duration": 56648100,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.userVerifyCheckoutText()"
});
formatter.result({
  "duration": 52177800,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.userClickOnCheckOutButton()"
});
formatter.result({
  "duration": 471853800,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.userClickOnGuestRadioButton()"
});
formatter.result({
  "duration": 301178000,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.userClickOnContinueButton()"
});
formatter.result({
  "duration": 106441000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Reva",
      "offset": 23
    }
  ],
  "location": "LaptopsAndNotebooksSteps.userEnterFirstName(String)"
});
formatter.result({
  "duration": 414441300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 22
    }
  ],
  "location": "LaptopsAndNotebooksSteps.userEnterLastName(String)"
});
formatter.result({
  "duration": 210381700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RevaPatel@gmail.com",
      "offset": 18
    }
  ],
  "location": "LaptopsAndNotebooksSteps.userEnterEmail(String)"
});
formatter.result({
  "duration": 164053900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07856985685",
      "offset": 28
    }
  ],
  "location": "LaptopsAndNotebooksSteps.userEnterTelephoneNumber(String)"
});
formatter.result({
  "duration": 136880300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime",
      "offset": 25
    }
  ],
  "location": "LaptopsAndNotebooksSteps.userEnterCompanyName(String)"
});
formatter.result({
  "duration": 152481800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime 123",
      "offset": 20
    }
  ],
  "location": "LaptopsAndNotebooksSteps.userEnterAddress(String)"
});
formatter.result({
  "duration": 137070800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Delhi",
      "offset": 17
    }
  ],
  "location": "LaptopsAndNotebooksSteps.userEnterCity(String)"
});
formatter.result({
  "duration": 124711900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ha3 ^PL",
      "offset": 21
    }
  ],
  "location": "LaptopsAndNotebooksSteps.userEnterPostcode(String)"
});
formatter.result({
  "duration": 133477900,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.userSelectCountry()"
});
formatter.result({
  "duration": 176449100,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.userClickOnContinueButtonAgain()"
});
formatter.result({
  "duration": 102792600,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.userClickOnTermsAndConditionButton()"
});
formatter.result({
  "duration": 40129929000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//body/div[@id\u003d\u0027checkout-checkout\u0027]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[1]/input[1]\"}\n  (Session info: chrome\u003d108.0.5359.125)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [d21c99c1be948b4591d50ec7e18cf143, findElement {using\u003dxpath, value\u003d//body/div[@id\u003d\u0027checkout-checkout\u0027]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[1]/input[1]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\VIDHIP~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:60192}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60192/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: d21c99c1be948b4591d50ec7e18cf143\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.tutorialsninja.utility.Utility.clickOnElement(Utility.java:54)\r\n\tat com.tutorialsninja.pages.LaptopsAndNotebooksPage1.clickOnTermsAndCondition(LaptopsAndNotebooksPage1.java:288)\r\n\tat com.tutorialsninja.cucumber.steps.LaptopsAndNotebooksSteps.userClickOnTermsAndConditionButton(LaptopsAndNotebooksSteps.java:154)\r\n\tat ✽.And User click on terms and condition button(LaptopsAndNotebooks.feature:43)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.userClickOnContinueButtonOnceAgain()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.userVerifyLastMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1944109500,
  "status": "passed"
});
formatter.uri("MyAccount.feature");
formatter.feature({
  "line": 1,
  "name": "My Account Test",
  "description": "",
  "id": "my-account-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6198007800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify that user should navigated to register page",
  "description": "",
  "id": "my-account-test;verify-that-user-should-navigated-to-register-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on my account",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User select my account option \"Register\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should navigated to register page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 27600,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.userClickOnMyAccount()"
});
formatter.result({
  "duration": 102649000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 31
    }
  ],
  "location": "MyAccountSteps.userSelectMyAccountOption(String)"
});
formatter.result({
  "duration": 21160874900,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.userShouldNavigatedToRegisterPageSuccessfully()"
});
formatter.result({
  "duration": 41891200,
  "status": "passed"
});
formatter.after({
  "duration": 783074500,
  "status": "passed"
});
formatter.before({
  "duration": 3572454300,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify that user should navigated to Login page",
  "description": "",
  "id": "my-account-test;verify-that-user-should-navigated-to-login-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User click on my account",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User select my account option \"Login\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should navigated to Login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 25100,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.userClickOnMyAccount()"
});
formatter.result({
  "duration": 98223800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 31
    }
  ],
  "location": "MyAccountSteps.userSelectMyAccountOption(String)"
});
formatter.result({
  "duration": 446855000,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.userShouldNavigatedToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 64368000,
  "status": "passed"
});
formatter.after({
  "duration": 742786000,
  "status": "passed"
});
formatter.before({
  "duration": 3602902300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify that user should  register register account successfully",
  "description": "",
  "id": "my-account-test;verify-that-user-should--register-register-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User click on my account",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User select my account option \"Register\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User enter first name for register \"Vidhi\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User enter last name for register \"Patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User enter Email for register\"Prime@Gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User enter telephone number for register\"07865698956\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User enter password \"abc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User enter conformpassword \"abc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User click on news letter button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User click on privacy policy button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User click on continuefirst button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User verify your account created message",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User click on continuethird button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User click on my account link",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User select my account option \"Logout\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User verify account logout option",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User click on continuefourth button",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 36000,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.userClickOnMyAccount()"
});
formatter.result({
  "duration": 106601900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 31
    }
  ],
  "location": "MyAccountSteps.userSelectMyAccountOption(String)"
});
formatter.result({
  "duration": 21030336200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vidhi",
      "offset": 36
    }
  ],
  "location": "MyAccountSteps.userEnterFirstNameForRegister(String)"
});
formatter.result({
  "duration": 98955100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 35
    }
  ],
  "location": "MyAccountSteps.userEnterLastNameForRegister(String)"
});
formatter.result({
  "duration": 102868500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime@Gmail.com",
      "offset": 30
    }
  ],
  "location": "MyAccountSteps.userEnterEmailForRegister(String)"
});
formatter.result({
  "duration": 123651100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07865698956",
      "offset": 41
    }
  ],
  "location": "MyAccountSteps.userEnterTelephoneNumberForRegister(String)"
});
formatter.result({
  "duration": 96822500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 21
    }
  ],
  "location": "MyAccountSteps.userEnterPassword(String)"
});
formatter.result({
  "duration": 86370000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 28
    }
  ],
  "location": "MyAccountSteps.userEnterConformpassword(String)"
});
formatter.result({
  "duration": 86009200,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.userClickOnNewsLetterButton()"
});
formatter.result({
  "duration": 74801700,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.userClickOnPrivacyPolicyButton()"
});
formatter.result({
  "duration": 64714500,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.userClickOnContinuefirstButton()"
});
formatter.result({
  "duration": 548110000,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.userVerifyYourAccountCreatedMessage()"
});
formatter.result({
  "duration": 40141671200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h1[contains(text(),\u0027Your Account Has Been Created!\u0027)]\"}\n  (Session info: chrome\u003d108.0.5359.125)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [829c6d6ff0d4e58ce836af1efadc19f7, findElement {using\u003dxpath, value\u003d//h1[contains(text(),\u0027Your Account Has Been Created!\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\VIDHIP~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:60489}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60489/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 829c6d6ff0d4e58ce836af1efadc19f7\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.tutorialsninja.utility.Utility.getTextFromElement(Utility.java:65)\r\n\tat com.tutorialsninja.pages.MyAccountPage.verifyMessageYourAccount(MyAccountPage.java:147)\r\n\tat com.tutorialsninja.cucumber.steps.MyAccountSteps.userVerifyYourAccountCreatedMessage(MyAccountSteps.java:58)\r\n\tat ✽.And User verify your account created message(MyAccount.feature:30)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyAccountSteps.userClickOnContinuethirdButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountSteps.userClickOnMyAccountLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 31
    }
  ],
  "location": "MyAccountSteps.userSelectMyAccountOption(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountSteps.userVerifyAccountLogoutOption()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountSteps.userClickOnContinuefourthButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 923086500,
  "status": "passed"
});
formatter.uri("TopMenu.feature");
formatter.feature({
  "line": 1,
  "name": "Top Menu",
  "description": "",
  "id": "top-menu",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3408307600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to Desktop page successfully",
  "description": "",
  "id": "top-menu;user-should-navigate-to-desktop-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User mousehover and click on desktop",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click on all desktops option",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User verify desktop message",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 31300,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.userMousehoverAndClickOnDesktop()"
});
formatter.result({
  "duration": 166446800,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.userClickOnAllDesktopsOption()"
});
formatter.result({
  "duration": 789101500,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.userVerifyDesktopMessage()"
});
formatter.result({
  "duration": 35224200,
  "status": "passed"
});
formatter.after({
  "duration": 761875500,
  "status": "passed"
});
formatter.before({
  "duration": 3763839100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should navigate to Laptops and Notebooks page successfully",
  "description": "",
  "id": "top-menu;user-should-navigate-to-laptops-and-notebooks-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User mousehover and click on Laptops and Notebooks",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User click on all Laptops and Notebooks option",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User verify Laptops and Notebooks message",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 36200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.userMousehoverAndClickOnLaptopsAndNotebooks()"
});
formatter.result({
  "duration": 168815600,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.userClickOnAllLaptopsAndNotebooksOption()"
});
formatter.result({
  "duration": 621598000,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.userVerifyLaptopsAndNotebooksMessage()"
});
formatter.result({
  "duration": 36123600,
  "status": "passed"
});
formatter.after({
  "duration": 755698600,
  "status": "passed"
});
formatter.before({
  "duration": 3576555000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should navigate to Componant page successfully",
  "description": "",
  "id": "top-menu;user-should-navigate-to-componant-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User mousehover and click on Componant",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User click on show all Componant",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User verify Componant message",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 34000,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.userMousehoverAndClickOnComponant()"
});
formatter.result({
  "duration": 88170600,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.userClickOnShowAllComponant()"
});
formatter.result({
  "duration": 506575000,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.userVerifyComponantMessage()"
});
formatter.result({
  "duration": 34809900,
  "status": "passed"
});
formatter.after({
  "duration": 690592200,
  "status": "passed"
});
formatter.uri("desktop.feature");
formatter.feature({
  "line": 1,
  "name": "DesktopPAge",
  "description": "",
  "id": "desktoppage",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3369957500,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Products arrange in alphabetical order",
  "description": "",
  "id": "desktoppage;products-arrange-in-alphabetical-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User mousehover and click on desktop",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User click on all desktops option",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Z to A option",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User can see products are arranged in descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 22900,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.userMousehoverAndClickOnDesktop()"
});
formatter.result({
  "duration": 156991200,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.userClickOnAllDesktopsOption()"
});
formatter.result({
  "duration": 804272600,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.userClickOnZToAOption()"
});
formatter.result({
  "duration": 532040400,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.userCanSeeProductsAreArrangedInDescendingOrder()"
});
formatter.result({
  "duration": 34600,
  "status": "passed"
});
formatter.after({
  "duration": 678994600,
  "status": "passed"
});
formatter.before({
  "duration": 3453343000,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Products added to shoppingcart",
  "description": "",
  "id": "desktoppage;products-added-to-shoppingcart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User click on currency tab",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User select currency from dropdown \"£ Pound Sterling\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User mousehover and click on desktop",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click on all desktops option",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on Z to A option",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User click on hp",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "verify HP message",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User select delevery date",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User clear quantity and add quantity \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User click on add button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 24,
      "value": "#    And  User verify successfull message"
    }
  ],
  "line": 25,
  "name": "User click on shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User click on shopping cart link",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User verify shopping catr message",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User verify product name",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User verify product",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User verify total",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 77500,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.userClickOnCurrencyTab()"
});
formatter.result({
  "duration": 69459200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£ Pound Sterling",
      "offset": 36
    }
  ],
  "location": "DesktopSteps.userSelectCurrencyFromDropdown(String)"
});
formatter.result({
  "duration": 661604600,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.userMousehoverAndClickOnDesktop()"
});
formatter.result({
  "duration": 154755400,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.userClickOnAllDesktopsOption()"
});
formatter.result({
  "duration": 829203900,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.userClickOnZToAOption()"
});
formatter.result({
  "duration": 567014100,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.userClickOnHp()"
});
formatter.result({
  "duration": 1667184300,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.verifyHPMessage()"
});
formatter.result({
  "duration": 35506900,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.userSelectDeleveryDate()"
});
formatter.result({
  "duration": 7951364400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 38
    }
  ],
  "location": "DesktopSteps.userClearQuantityAndAddQuantity(String)"
});
formatter.result({
  "duration": 106485800,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.userClickOnAddButton()"
});
formatter.result({
  "duration": 62171200,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.userClickOnShoppingCart()"
});
formatter.result({
  "duration": 33057100,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.userClickOnShoppingCartLink()"
});
formatter.result({
  "duration": 720805100,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.userVerifyShoppingCatrMessage()"
});
formatter.result({
  "duration": 45922200,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.userVerifyProductName()"
});
formatter.result({
  "duration": 34420300,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.userVerifyProduct()"
});
formatter.result({
  "duration": 42476100,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.userVerifyTotal()"
});
formatter.result({
  "duration": 36159800,
  "status": "passed"
});
formatter.after({
  "duration": 717988100,
  "status": "passed"
});
});