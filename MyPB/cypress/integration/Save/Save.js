import { Given } from "cypress-cucumber-preprocessor/steps";
import { And } from "cypress-cucumber-preprocessor/steps"; 
import { When } from "cypress-cucumber-preprocessor/steps"; 
import { Then } from "cypress-cucumber-preprocessor/steps"; 
import { Scenario } from "cypress-cucumber-preprocessor/steps"; 
const url = 'http://localhost:4200/'
const newAsa = 'student'
const newIwant = 'to consult my marks'
const newSothat = 'can access to my account'

//first scenario Add a new US to the PB
Scenario('Add a new US to the PB')
Given('I access to the landing page', () => {
  cy.visit(url)
})
And('I click on "Add User Story" button', () => {
  cy.get('.mat-raised-button').click()
})

When('I fill in the AS A "student"', () => {
  cy.get('#mat-dialog-0')
  cy.get('#mat-input-0').type(`${newAsa}`)
  .should('have.value', 'student')
})
And('I fill in the I WANT "to consult my marks"', () => {
  cy.get('#mat-dialog-0')
  cy.get('#mat-input-1').type(`${newIwant}`)
  //.should('have.value', 'to consult my marks')
})
And('I fill in the SO THAT "can access to my account"', () => {
  cy.get('#mat-dialog-0')
  cy.get('#mat-input-2').type(`${newSothat}`)
  //.should('have.value', 'can access to my account')

})
Then ('I click on the Save button', () => {
  cy.get('[mat-dialog-action=""] > .mat-primary').click()
})
And ('I can see the new US was added to my PB list', () => {
  cy.get('.cdk-overlay-backdrop').should('be.visible')
  cy.get('.cdk-overlay-backdrop').should('not.contain', newAsa)
  cy.get('.cdk-overlay-backdrop').should('not.contain', newIwant)
  cy.get('.cdk-overlay-backdrop').should('not.contain', newSothat)
  cy.get('#mat-dialog-0').should('not.be.visible')
})

