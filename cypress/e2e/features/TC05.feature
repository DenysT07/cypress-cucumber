Feature: the 'See Pricing' button on the 'Secure Faxing' page
  Background: 
     Given I am on the Telnyx main page and click on Allow Cookie and scroll to bottom
     

  Scenario: button functionality #2
    When I Click on the 'Secure Faxing' button
    When I scroll to the 'See Pricing' button and click on it
    Then I should see the 'Programmable Fax API Pay As You Go Pricing' title