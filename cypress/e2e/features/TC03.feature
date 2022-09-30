Feature: the 'Twexit API' button on the 'Programmable SMS' page
  Background: 
     Given I am on the Telnyx main page and click on Allow Cookie and scroll to bottom
     

  Scenario: button functionality #2
    When I Click on the 'Programmable SMS' button
    When I scroll to the 'Twexit API' button and click on it
    Then I should see the 'Switch to Telnyx from Twilio in minutes using the Twexit API' title