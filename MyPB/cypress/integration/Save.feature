Feature: Add a US 

  As a PO
  I want to add a new US to my PB 
  So that I can see the new US in my PB 
  
  Background:
    Given I access to the landing page
    And I click on "Add User Story" button

  Scenario: Add a new US to the PB without As a
    And I fill in the I WANT "to consult my marks"
    And I fill in the SO THAT "can access to my account"
    When I click on the Save button 
    Then An error message is diplayed  

  Scenario: Add a new US to the PB without I WANT
    And I fill in the AS A "student"
    And I fill in the SO THAT "can access to my account"
    When I click on the Save button 
    Then An error message is diplayed  

  Scenario: Add a new US to the PB without SO THAT1
    And I fill in AS A "student"
    And I fill in the I WANT "to consult my marks"
    When I click on the Save button 
    Then An error message is diplayed  
  
  Scenario: AS A and I WANT not filled in2
    And I fill in the SO THAT "can access to my account"
    When I click on the Save button 
    Then An error message is diplayed    

  Scenario: AS A and SO THAT not filled in3
    And I fill in the I WANT "to consult my marks"
    When I click on the Save button 
    Then An error message is diplayed   

  Scenario: I WANT and SO THAT not filled in4
    And I fill in AS A "student"
    When I click on the Save button 
    Then An error message is diplayed  
      
  Scenario: AS A and I WANT and SO THAT not filled in
    When I click on the Save button 
    Then An error message is diplayed  

  Scenario: Add a new US to the PB
    And I fill in the AS A student
    And I fill in the I WANT to consult my marks
    And I fill in the SO THAT can access to my account
    When I click on the Save button 
    Then I can see the new US was added to my PB list   

