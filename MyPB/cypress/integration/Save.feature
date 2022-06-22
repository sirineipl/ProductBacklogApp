Feature: Add a US 

  As a PO
  I want to add a new US to my PB 
  So that I can see the new US in my PB 
  
  Background:
    Given I access to the landing page
    And I click on "Add User Story" button

  Scenario: Add a new US to the PB
    When I fill in the AS A "student"
    And I fill in the I WANT "to consult my marks"
    And I fill in the SO THAT "can access to my account"
    And I click on the Save button 
    Then I can see the new US was added to my PB list 

  Scenario: Add a new US to the PB without As a
    Given I access to the homepage
    And I click on "Add User Story" button
    When fill in the I WANT "to consult my marks"
    And I fill in the SO THAT "can access to my account"
    And I click on the Save button 
    Then A warning message is diplayed to fill in the As A   

  Scenario: Add a new US to the PB without I WANT
    When fill in the AS A "student"
    And I fill in the SO THAT "can access to my account"
    And I click on the Save button 
    Then A warning message is diplayed to fill in I WANT  

  Scenario: Add a new US to the PB without SO THAT
    When I fill in AS A "student"
    And I fill in the I WANT "to consult my marks"
    And I click on the Save button 
    Then A warning message is diplayed to fill in So That
  
  Scenario: AS A and I WANT not filled in
    When I fill in the SO THAT "can access to my account"
    And I click on the Save button 
    Then A warning message is diplayed to fill in AS A and I WANT  

  Scenario: AS A and SO THAT not filled in
    When I fill in the I WANT "to consult my marks"
    And I click on the Save button 
    Then A warning message is diplayed to fill in AS A and SO THAT 

  Scenario: I WANT and SO THAT not filled in
    When I fill in AS A "student"
    And I click on the Save button 
    Then A warning message is diplayed to fill in I WANT and SO THAT
      
  Scenario: AS A and I WANT and SO THAT not filled in
    When I click on the Save button 
    Then A warning message is diplayed to fill in AS A and I WANT and SO THAT

