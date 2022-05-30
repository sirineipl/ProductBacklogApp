Feature: Delete a US from list

  As a PO
  I want to delete a US from my PB
  So that the US was deleted from my PB 
  
  @focus
  Scenario: Delete a selected US from the PB
    Given I open the application
    And I access to the landing page
    And I can see the list of USs in my PB
    And I select a US to delete it
    When I click on the delete button 
    Then I can see that the US was removed from the PB