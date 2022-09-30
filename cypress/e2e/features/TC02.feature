Feature: the "Tier-1 interconnects” button on the “Call Control - Voice API” page
  Background: 
     Given I am on the Telnyx main page and click on Allow Cookie and scroll to bottom
     

  Scenario: button functionality #2
    When I Click on the 'Call Control - Voice API' button
    When I scroll to the 'Tier-1 interconnects' button and click on it
    Then I should see the 'The CPaaS Network for Real-Time Carrier-Grade Communications' title

    