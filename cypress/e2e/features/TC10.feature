Feature: the 'Learn more' button on the 'Data & Privacy' page
  Background: 
     Given I am on the Telnyx main page and click on Allow Cookie and scroll to bottom
     

  Scenario: button functionality #2
    When I Click on the 'Data & Privacy' button
    When I scroll to the 'Learn more' button and click on it
    Then I should see the 'Data Locality Feature Allowing you to Specify Where Your Telnyx Data is Stored is now available to all customers via the Telnyx Mission Control Portal' title
