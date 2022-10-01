Feature: the "Competitor Networks” button on the “Elastic SIP Trunking” page
  Background: 
     Given I am on the Telnyx main page and click on Allow Cookie and scroll to bottom
     

  Scenario: button functionality #1
    When I Click on the 'Elastic SIP Trunking' button
    When I scroll to the 'Competitor Networks' button and click on it
    Then I should see the 'Other CPaaS providers build their networks on just one cloud provider, increasing their risk of network failure.' text
    