import { Given } from "cypress-cucumber-preprocessor/steps";
import { And } from "cypress-cucumber-preprocessor/steps"; 
import { When } from "cypress-cucumber-preprocessor/steps"; 
import { Then } from "cypress-cucumber-preprocessor/steps";  

const url = 'http://localhost:4200/'

Given('I access to the landing page', () => {
  cy.visit(url)
  })
When('I click ont the delete of a US', () => {
  cy.get(':nth-child(1) > .cdk-column-action > .mat-warn').click()
})
Then ('the US was removed from the PB', () => {
  cy.get('tbody > :nth-child(1) > .cdk-column-asA').should('not.contain','college student')
  cy.get('tbody > :nth-child(1) > .cdk-column-iWant').should('not.contain','check my mark exams')
  cy.get('tbody > :nth-child(1) > .cdk-column-soThat').should('not.contain','plan for my vacation')
})