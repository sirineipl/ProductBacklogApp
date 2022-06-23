Feature: Edit a US 

  As a PO
  I want to edit a US from my PB
  So that I can modify the US
  
  Scenario: Edit a the 3 elements of US  from the PB
    Given I access to the landing page
    When I click on edit button of a US
    Then I can see that the US in the form
    And I modify the US   
    And I click on update button
    And I can see that the US was modified in the PB table

  Scenario: Edit a the AS A of US  from the PB
    Given I access to the landing page
    When I click on edit button of a US
    Then I can see that the US in the form
    And I modify the AS A US   
    And I click on update button
    And I can see that the value of as a US was modified in the PB table  

  Scenario: Edit a the I WANT of US  from the PB
    Given I access to the landing page
    When I click on edit button of a US
    Then I can see that the US in the form
    And I modify the I WANT US   
    And I click on update button
    And I can see that the value OF I WANT was modified in the PB table

  Scenario: Edit SO THAT of US  from the PB
    Given I access to the landing page
    When I click on edit button of a US
    Then I can see that the US in the form
    And I modify the SO THAT   
    And I click on update button
    And I can see that the value of SO THAT was modified in the PB table   

  Scenario: Edit AS A and I WANT of US from the PB
    Given I access to the landing page
    When I click on edit button of a US
    Then I can see that the US in the form
    And I modify AS A and I WANT  
    And I click on update button
    And I can see that AS A and I WANT was modified in the PB table   

  Scenario: Edit AS A and SO THAT of US from the PB
    Given I access to the landing page
    When I click on edit button of a US
    Then I can see that the US in the form
    And I modify AS A and SO THAT  
    And I click on update button
    And I can see that AS A and SO THAT was modified in the PB table

  Scenario: Edit I Want and SO THAT of US from the PB
    Given I access to the landing page
    When I click on edit button of a US
    Then I can see that the US in the form
    And I modify I Want and SO THAT  
    And I click on update button
    And I can see that I Want and SO THAT was modified in the PB table  

  Scenario: Do not Edit the US from the PB
    Given I access to the landing page
    When I click on edit button of a US
    Then I can see that the US in the form
    And I do not edit the US  
    And I click on update button
    And I can see that the US was not modified in PB table   

