import { Given } from "cypress-cucumber-preprocessor/steps";
import { And } from "cypress-cucumber-preprocessor/steps"; 
import { When } from "cypress-cucumber-preprocessor/steps"; 
import { Then } from "cypress-cucumber-preprocessor/steps";  

const url = 'http://localhost:4200/'

Given('I access to the landing page', () => {
  cy.visit(url)
  })
When('I click ont the delete of a US', () => {
  cy.get(':nth-child(1) > .cdk-column-action > .mat-primary > .mat-button-wrapper > .mat-icon').click()
})
Then ('the was removed from the PB', () => {
  cy.get('tbody > :nth-child(1) > .cdk-column-asA').should('not.include.text',cy.get('#mat-input-1'))
  cy.get('tbody > :nth-child(1) > .cdk-column-iWant').should('not.include.text',cy.get('#mat-input-2'))
  cy.get('tbody > :nth-child(1) > .cdk-column-soThat').should('not.include.text',cy.get('#mat-input-3'))
})