Feature: the 'number pooling' button on the 'Verify API' page
  Background: 
     Given I am on the Telnyx main page and click on Allow Cookie and scroll to bottom
     

  Scenario: button functionality #2
    When I Click on the 'Verify API' button
    When I scroll to the 'number pooling' button and click on it
    Then I should see the 'Telnyx Developers' title
