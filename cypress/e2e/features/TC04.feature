Feature: the 'How does WhatsApp Business work?' button on the 'WhatsApp API' page
  Background: 
     Given I am on the Telnyx main page and click on Allow Cookie and scroll to bottom
     

  Scenario: button functionality #2
    When I Click on the 'WhatsApp API' button
    When I scroll to the 'How does WhatsApp Business work' button and click on it
    Then I should see the 'To onboard your business with WhatsApp, you must obtain a Facebook Business Manager ID.' text