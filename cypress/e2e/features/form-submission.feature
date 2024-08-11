Feature: Form Submission

  Scenario: Submit the vehicle quote form
    Given I am on the "Enter Vehicle Data" page
    When I fill in the vehicle data and press next
    Then I should be on the "Enter Insurant Data" page
    When I fill in the insurant data and press next
    Then I should be on the "Enter Product Data" page
    When I fill in the product data and press next
    Then I should be on the "Select Price Option" page
    When I select the price option and press next
    Then I should be on the "Send Quote" page
    When I send the quote
    Then I should see "Sending e-mail success!"