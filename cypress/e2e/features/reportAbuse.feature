Feature: Report Abuse 
        
    Scenario: fiil all fields and check the result
        Given I am on the Telnyx main page and click on Allow Cookie and scroll to bottom
        When I Click on the 'Report Abuse' button
        When I fill all fields and click both checkboxes
        When I click on the submite button
        Then I should see the "reCAPTCHA validation required" text