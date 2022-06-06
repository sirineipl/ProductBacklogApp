import { Given } from "cypress-cucumber-preprocessor/steps";
import { And } from "cypress-cucumber-preprocessor/steps"; 
import { When } from "cypress-cucumber-preprocessor/steps"; 
import { Then } from "cypress-cucumber-preprocessor/steps"; 

const url = 'http://localhost:4200/'
Given('I access to the landing page', () => {
  cy.visit(url)
})

And('I click on "Add User Story" button', () => {
  const newItem = 'Feed the cat'
  cy.visit(url)
  cy.get('mat-input-0').type(newItem)

})

When('I fill in the AS A "student"', () => {
  const newItem = 'student'
  cy.visit(url)
})
And('I fill in the I WANT "to consult my marks"', () => {
  const newItem = 'to consult my marks'
  cy.visit(url)

})
And('I fill in the SO THAT "can access to my account"', () => {
  const newItem = 'can access to my account'
  cy.visit(url)

})
And('I click on the "Save" button ', () => {
  cy.visit(url)
  /**cy.get('.mat-raised-button').click()
  cy.get('[mat-dialog-action=""] > .mat-primary').click()***/

})
Then('I can see the new US was added to my PB list', () => {
  cy.visit(url)
})