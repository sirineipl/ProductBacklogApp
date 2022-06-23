import { Given } from "cypress-cucumber-preprocessor/steps";
import { And } from "cypress-cucumber-preprocessor/steps"; 
import { When } from "cypress-cucumber-preprocessor/steps"; 
import { Then } from "cypress-cucumber-preprocessor/steps";  

const url = 'http://localhost:4200/'
const newAsa = 'student'
const newIwant = 'to consult my marks'
const newSothat = 'can access to my account'

  

//first scenario Add a new US to the PB
Given('I access to the landing page', () => {
  cy.visit(url)
  })
And('I can see my list of USs in my PB', () => {
  cy.get('.mat-raised-button').click()
  })
And('I fill in the AS A "student"', () => {
  cy.get('#mat-dialog-0')
  cy.get('#mat-input-0').type(`${newAsa}`)
})
And('I fill in the I WANT "to consult my marks"', () => {
  cy.get('#mat-dialog-0')
  cy.get('#mat-input-1').type(`${newIwant}`)
})
And('I fill in the SO THAT "can access to my account"', () => {
  cy.get('#mat-dialog-0')
  cy.get('#mat-input-2').type(`${newSothat}`)
})
When ('I click on the Save button', () => {
  cy.get('[mat-dialog-action=""] > .mat-primary').click()
})
Then ('I can see the new US was added to my PB list', () => {
  cy.get('.cdk-overlay-backdrop').should('contain',alert)
  //cy.get('.cdk-overlay-backdrop').contains(alert,"US added successfully")
  /*cy.get('.mat-typography').should('contain', newAsa)
  cy.get('.mat-typography').should('contain', newIwant)
  cy.get('.mat-typography').should('contain', newSothat)
  cy.get('#mat-dialog-0').should('not.be.visible')*/
})