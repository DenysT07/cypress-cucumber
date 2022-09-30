Feature: the 'Sign up for $10 FREE Testing Credit' button on the 'Global Numbers' page
  Background: 
     Given I am on the Telnyx main page and click on Allow Cookie and scroll to bottom
     

  Scenario: button functionality #2
    When I Click on the 'Global Numbers' button
    When I scroll to the 'Sign up for $10 FREE Testing Credit' button and click on it
    Then I should see the 'Sign Up | Telnyx' title
