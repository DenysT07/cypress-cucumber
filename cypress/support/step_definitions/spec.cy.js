const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

// Given('I am on the Telnyx main page and click on Allow Cookie and scroll to bottom', () => {
//   cy.visit("https://telnyx.com/");
//   cy.get('[class*="itIjRb"]').click()
//   cy.scrollTo('bottom')
// });

When("I Click on the “Elastic SIP Trunking” button scroll to the “Competitor Networks” button and click on it", () => {
  cy.visit("https://telnyx.com/");
  cy.get('[class*="itIjRb"]').click()
  cy.scrollTo('bottom')
  cy.get('[class*="kZyHWE"] li>[href="/products/sip-trunks"]').click()
  cy.get('[class*="jEobPv"]>div:nth-child(2)').scrollIntoView().click()
});

Then("I should see the “Other CPaaS providers build their networks on just one cloud provider, increasing their risk of network failure.” text", () => {
  cy.get('[id*="WCw"]>div>div>div>p').should(
    "have.text",
    "Other CPaaS providers build their networks on just one cloud provider, increasing their risk of network failure.",
  );
  
});