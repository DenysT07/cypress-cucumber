Feature: the 'Cookie Policy' button on the 'Privacy Policy' page
  Background: 
     Given I am on the Telnyx main page and click on Allow Cookie and scroll to bottom
     

  Scenario: button functionality #2
    When I Click on the 'Privacy Policy' button
    When I scroll to the 'Cookie Policy' button and click on it
    Then I should see the 'Detailed information on the cookie policy at Telnyx' title
