Feature: Add a US 

  As a PO
  I want to add a new US to my PB 
  So that I can see the new US in my PB 
  
  @focus
  Scenario: Add a new US to the PB
    Given I access to the landing page
    And I click on "Add User Story" button
    When I fill in the AS A "student"
    And I fill in the I WANT "to consult my marks"
    And I fill in the SO THAT "can access to my account"
    And I click on the "Save" button 
    Then I can see the new US was added to my PB list 

   Scenario: Add a new US to the PB without As a
    Given I access to the landing page
    And I click on "Add User Story" button
    When fill in the I WANT "to consult my marks"
    And I fill in the SO THAT "can access to my account"
    And I click on the "Save" button 
    Then A warning message is diplayed to fill in the As A   

   Scenario: Add a new US to the PB without I WANT
    Given I access to the landing page
    And I click on "Add User Story" button
    When fill in the AS A "student"
    And I fill in the SO THAT "can access to my account"
    And I click on the "Save" button 
    Then A warning message is diplayed to fill in I WANT  

     Scenario: Add a new US to the PB without SO THAT
    Given I access to the landing page
    And I click on "Add User Story" button
    When I fill in AS A "student"
    And I fill in the I WANT "to consult my marks"
    And I click on the "Save" button 
    Then A warning message is diplayed to fill in the As A
  
   Scenario: AS A and I WANT not filled in
    Given I access to the landing page
    And I click on "Add User Story" button
    When I fill in the SO THAT "can access to my account"
    And I click on the "Save" button 
    Then A warning message is diplayed to fill in AS A and I WANT  

     Scenario: AS A and SO THAT not filled in
    Given I access to the landing page
    And I click on "Add User Story" button
    When I fill in the I WANT "to consult my marks"
    And I click on the "Save" button 
    Then A warning message is diplayed to fill in AS A and SO THAT 

    Scenario: I WANT and SO THAT not filled in
    Given I access to the landing page
    And I click on "Add User Story" button
    When I fill in AS A "student"
    And I click on the "Save" button 
    Then A warning message is diplayed to fill in I WANT and SO THAT
      
      Scenario: AS A and I WANT and SO THAT not filled in
    Given I access to the landing page
    And I click on "Add User Story" button
    When I click on the "Save" button 
    Then A warning message is diplayed to fill in I WANT and SO THAT

Scenario: Quit the Add User Story form
    Given I open the application
    And I access to the landing page
    And I can add a new US to my PB
    And I click on "Add User Story" button
    And I can see the form 
    And I fill in the AS A content
    And I fill in the I want content
    And I fill in the So That content
    When I want to quit and cancel the add of US 
    And I click on the "Quit" button 
    Then I can see that the Add US form was closed
    And I access to the homepage
    And I can see my PB 
    And the US wasn't added to the PB 

