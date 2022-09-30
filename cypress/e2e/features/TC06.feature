Feature: the 'Explore Point of Sale IoT Solutions' button on the 'Wireless - Cellular IoT' page
  Background: 
     Given I am on the Telnyx main page and click on Allow Cookie and scroll to bottom
     

  Scenario: button functionality #2
    When I Click on the 'Wireless - Cellular IoT' button
    When I scroll to the 'Explore Point of Sale IoT Solutions' button and click on it
    Then I should see the 'Point of Sale IoT SIM Card with Global Connectivity' title