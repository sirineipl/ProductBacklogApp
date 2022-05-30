Feature: Edit a US 

  As a PO
  I want to edit a US from my PB
  So that I can modify the US
  
  @focus
  Scenario: Edit a US from the PB
    Given I open the application
    And I access to the landing page
    And I can see my list of USs in my PB
    When I slect a US from the list
    And I click on edit button
    Then I can see that the US in the form
    And I modify the US 
    And I click on update button
    And I can see that the US was modified and added to the PB list 