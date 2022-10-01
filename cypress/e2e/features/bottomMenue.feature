Feature: Bottom menue pages
  Background:
    Given I am on the Telnyx main page and click on Allow Cookie and scroll to bottom

  Scenario: button functionality TC1
    When I Click on the 'Elastic SIP Trunking' button
    When I scroll to the 'Competitor Networks' button and click on it
    Then I should see the 'Other CPaaS providers build their networks on just one cloud provider, increasing their risk of network failure.' text

  Scenario: button functionality TC2
    When I Click on the 'Call Control - Voice API' button
    When I scroll to the 'Tier-1 interconnects' button and click on it
    Then I should see the 'The CPaaS Network for Real-Time Carrier-Grade Communications' title

  Scenario: button functionality TC3
    When I Click on the 'Programmable SMS' button
    When I scroll to the 'Twexit API' button and click on it
    Then I should see the 'Switch to Telnyx from Twilio in minutes using the Twexit API' title

  Scenario: button functionality TC4
    When I Click on the 'WhatsApp API' button
    When I scroll to the 'How does WhatsApp Business work' button and click on it
    Then I should see the 'To onboard your business with WhatsApp, you must obtain a Facebook Business Manager ID.' text

  Scenario: button functionality TC5
    When I Click on the 'Secure Faxing' button
    When I scroll to the 'See Pricing' button and click on it
    Then I should see the 'Programmable Fax API Pay As You Go Pricing' title

  Scenario: button functionality TC6
    When I Click on the 'Wireless - Cellular IoT' button
    When I scroll to the 'Explore Point of Sale IoT Solutions' button and click on it
    Then I should see the 'Point of Sale IoT SIM Card with Global Connectivity' title

  Scenario: button functionality TC7
    When I Click on the 'Number Lookup' button
    When I scroll to the 'Contact Center' button and click on it
    Then I should see the 'Telnyx has Cloud Voice & SMS APIs for Better CX' title

  Scenario: button functionality TC8
    When I Click on the 'Global Numbers' button
    When I scroll to the 'Sign up for $10 FREE Testing Credit' button and click on it
    Then I should see the 'Sign Up | Telnyx' title

  Scenario: button functionality TC9
    When I Click on the 'Verify API' button
    When I scroll to the 'number pooling' button and click on it
    Then I should see the 'Telnyx Developers' title

  Scenario: button functionality TC10
    When I Click on the 'Data & Privacy' button
    When I scroll to the 'Learn more' button and click on it
    Then I should see the 'Data Locality Feature Allowing you to Specify Where Your Telnyx Data is Stored is now available to all customers via the Telnyx Mission Control Portal' title

  Scenario: button functionality TC12
    When I Click on the 'Privacy Policy' button
    When I scroll to the 'Cookie Policy' button and click on it
    Then I should see the 'Detailed information on the cookie policy at Telnyx' title

