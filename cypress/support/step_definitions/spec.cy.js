import { Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor";
import abuseRepoPage from "../../e2e/pages/abuseRepoPage";
import allPages from "../../e2e/pages/allPages";
import beforeTestPage from "../../e2e/pages/beforeTestPage";
import confirmTextPage from "../../e2e/pages/confirmTextPage";
import mainPage from "../../e2e/pages/mainPage";
import helper from "../../helper/helper";


Given('I am on the Telnyx main page and click on Allow Cookie and scroll to bottom', () => {
  cy.visit("/");
  beforeTestPage.clickAllowCoockie()
  cy.scrollTo('bottom')
});

// Scenario#1
When("I Click on the {string} button", (buttonTitle) => {
  switch (buttonTitle) {
    case ('Call Control - Voice API'):
      mainPage.clickOnButoon(mainPage.callControlButt)
      break
    case ('Programmable SMS'):
      mainPage.clickOnButoon(mainPage.programmableSMSBut)
      break
    case ('Secure Faxing'):
      mainPage.clickOnButoon(mainPage.secureFaxingButLoc)
      break
    case ('Wireless - Cellular IoT'):
      mainPage.clickOnButoon(mainPage.wirelessCelluralBut, { timeout: 4000 })
      cy.wait(5000)
      break
    case ('Number Lookup'):
      mainPage.clickOnButoon(mainPage.numberLookupBut)
      break
    case ('Global Numbers'):
      mainPage.clickOnButoon(mainPage.globalNumbersBut)
      break
    case ('Verify API'):
      mainPage.clickOnButoon(mainPage.verifyAPIBut)
      break
    case ('Data & Privacy'):
      mainPage.clickOnButoon(mainPage.dataAndPrivacyBut)
      break
    case ('Privacy Policy'):
      mainPage.clickOnButoon(mainPage.privacyPolicyBut)
      break
    case ('Report Abuse'):
      mainPage.clickOnButoon(mainPage.reportAabuseBut)
      break
    case ('Elastic SIP Trunking'):
      mainPage.clickOnButoon(mainPage.elasticSipBut)
      break
    case ('WhatsApp API'):
      mainPage.clickOnButoon(mainPage.whatsAppAPIBut)
      break

  }
});

When("I scroll to the {string} button and click on it", (buttonTitle) => {
  switch (buttonTitle) {
    case ('Tier-1 interconnects'):
      mainPage.scrollAndClick(allPages.tier1Butt);
      break
    case ('Twexit API'):
      mainPage.scrollAndClick(allPages.twexitAPIButt)
      break;
    case ('See Pricing'):
      mainPage.scrollAndClick(allPages.seePricingButt)
      break
    case ('Explore Point of Sale IoT Solutions'):
      mainPage.scrollAndClick(allPages.explorePointOfSaleButt)
      break
    case ('Contact Center'):
      mainPage.scrollAndClick(allPages.contactCenterButt)
      break
    case ('Sign up for $10 FREE Testing Credit'):
      mainPage.scrollAndClick(allPages.signUpFor10Butt)
      break
    case ('number pooling'):
      mainPage.scrollAndClick(allPages.numberPoolingButt)
      break
    case ('Learn more'):
      mainPage.scrollAndClick(allPages.learnMoreButt)
      break
    case ('Cookie Policy'):
      mainPage.scrollAndClick(allPages.cookiePolicyButt)
      break
    case ('Competitor Networks'):
      mainPage.scrollAndClick(allPages.competitorNetworkButt)
      break
    case ('How does WhatsApp Business work'):
      mainPage.scrollAndClick(allPages.howDoesWhatsAppButt)
      break
  }
});

Then("I should see the {string} title", (text) => {
  cy.title().should(
    "eq",
    text,
    { timeout: 10000 }
  );
});

//Scenario#2
Then("I should see the {string} text", (text) => {
  switch (text) {
    case ('Other CPaaS providers build their networks on just one cloud provider, increasing their risk of network failure.'):
      confirmTextPage.confirmTextTC1.should(
        "have.text",
        text,
      );
      break
    case ('To onboard your business with WhatsApp, you must obtain a Facebook Business Manager ID.'):
      confirmTextPage.confirmTextTC4.should(
        "be.visible",
      );
      break
    case ('Thank you for submitting your abuse complaint.'):
      confirmTextPage.confirmTextTC11.should(
        "have.text",
        text,
      );
      break
  }
});

//Scenario#3
When('I fill all fields and click both checkboxes', () => {
  abuseRepoPage.multipliClick(abuseRepoPage.bothCheckBoxes)
  allPages.clickAndFill(abuseRepoPage.subjectField, helper.randomString1)
  allPages.clickAndFill(abuseRepoPage.abusedPhoneNumberField, helper.randomPhone)
  allPages.clickAndFill(abuseRepoPage.abusivePhoneNumberField, helper.randomPhone)
  allPages.clickAndFill(abuseRepoPage.timeAndDateField, '{selectall}08/09/2022 5:40 P')
  allPages.clickAndFill(abuseRepoPage.fullNameField, helper.randomString1)
  allPages.clickAndFill(abuseRepoPage.additionalInfoField, helper.randomString1)
  allPages.clickAndFill(abuseRepoPage.emailField, helper.randomString1 + "@gmail.com")
  cy.wait(5000)
})
When('I click on the submite button', () => {
  abuseRepoPage.submiteButt.click()
})

//Scenario#4
Given('I am on the Telnyx main page and Focuse on the Resources and click Saving calculators', () => {
  cy.visit("/");
  beforeTestPage.clickAllowCoockie()
  mainPage.clickOnButoon(mainPage.resourcesButt)
  mainPage.clickOnButoon(mainPage.calculatorsButt)
});

When('I Click on the Messaging Api and Voice Api button and Continue button', () => {
  mainPage.clickOnButoon(allPages.messagingApiButt)
  mainPage.clickOnButoon(allPages.voiceApiButt)
  mainPage.clickOnButoon(allPages.continueButt)
})
When('I Input {string} in first field', (firstInput) => {
  allPages.localNumber.type("{selectall}" + firstInput)
})
When('I Input {string} in second field and click on the Continue button', (secondInput) => {
  allPages.clickAndFill(allPages.toolFreeNumber, ("{selectall}" + secondInput))
  cy.wait(5000)
  mainPage.clickOnButoon(allPages.continueButt)
})


Then('I should see Your saving {string}', (totalResult) => {
  allPages.totalSavingResult.should('have.text', totalResult)
})
