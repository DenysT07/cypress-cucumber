Feature: the 'Contact Center' button on the 'Number Lookup' page
  Background: 
     Given I am on the Telnyx main page and click on Allow Cookie and scroll to bottom
     

  Scenario: button functionality #2
    When I Click on the 'Number Lookup' button
    When I scroll to the 'Contact Center' button and click on it
    Then I should see the 'Telnyx has Cloud Voice & SMS APIs for Better CX' title
