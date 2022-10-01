Feature: Calculator

    Scenario Outline: Calculator functional

        Given I am on the Telnyx main page and Focuse on the Resources and click Saving calculators
        When I Click on the Messaging Api and Voice Api button and Continue button
        When I Input '<firstInput>' in first field
        When I Input '<secondInput>' in second field and click on the Continue button
        Then I should see Your saving '<totalResult>' 
        Examples:
            | firstInput | secondInput | totalResult    |
            | 9999       | 9999        | $180,900/ year |
            | 5555       | 5555        | $100,908/ year |
            | 3333       | 3333        | $66,513/ year  |