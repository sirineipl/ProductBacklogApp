import { Given } from "cypress-cucumber-preprocessor/steps";
import { And } from "cypress-cucumber-preprocessor/steps"; 
import { When } from "cypress-cucumber-preprocessor/steps"; 
import { Then } from "cypress-cucumber-preprocessor/steps"; 
import { Scenario } from "cypress-cucumber-preprocessor/steps"; 

const url = 'http://localhost:4200/'
const newAsa = 'student'
const newIwant = 'to consult my marks'
const newSothat = 'can access to my account'

  

{
  Given('I access to the landing page', () => {
  cy.visit(url)
  })
  And('I click on "Add User Story" button', () => {
  cy.get('.mat-raised-button').click()
  })
}

//first scenario Add a new US to the PB

When('I fill in the AS A "student"', () => {
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
Then ('I click on the Save button', () => {
  cy.get('[mat-dialog-action=""] > .mat-primary').click()
})
And ('I can see the new US was added to my PB list', () => {
  cy.get('.cdk-overlay-backdrop').should('be.visible')
  cy.get('.cdk-overlay-backdrop').should('contain', newAsa)
  cy.get('.cdk-overlay-backdrop').should('contain', newIwant)
  cy.get('.cdk-overlay-backdrop').should('contain', newSothat)
  cy.get('#mat-dialog-0').should('not.be.visible')
})

//second scenario Add a new US to the PB without As a
When('I fill in the I WANT "to consult my marks"', () => {
  cy.get('#mat-dialog-0')
  cy.get('.mat-form-field.ng-tns-c52-2 > .mat-form-field-wrapper > .mat-form-field-flex')
  cy.get('#mat-input-1').type(`${newIwant}`)
})
And('I fill in the SO THAT "can access to my account"', () => {
  cy.get('#mat-dialog-0')
  cy.get('.mat-form-field.ng-tns-c52-3 > .mat-form-field-wrapper > .mat-form-field-flex')
  cy.get('#mat-input-2').type(`${newSothat}`)
  .should('have.value', 'can access to my account')

})
And('I click on the Save button ', () => {
  cy.get('[mat-dialog-action=""] > .mat-primary').click()

})
Then('A warning message is diplayed to fill in the As A', () => {
  cy.get('.cdk-overlay-backdrop').should('not.contain', newAsa)
  cy.get('.cdk-overlay-backdrop').should('not.contain', newIwant)
  cy.get('.cdk-overlay-backdrop').should('not.contain', newSothat)
  cy.get('#mat-dialog-0').should('be.visible')
 
})

//third scenario Add a new US to the PB without As a
When('I fill in the AS A "student"', () => {
  cy.get('#mat-dialog-0')
  cy.get('#mat-input-0').type(`${newAsa}`)
  .should('have.value', 'student')
})
And('I fill in the SO THAT "can access to my account"', () => {
  cy.get('#mat-dialog-0')
  cy.get('.mat-form-field.ng-tns-c52-3 > .mat-form-field-wrapper > .mat-form-field-flex')
  cy.get('#mat-input-2').type(`${newSothat}`)
  .should('have.value', 'can access to my account')

})
And('I click on the Save button ', () => {
  cy.get('[mat-dialog-action=""] > .mat-primary').click()

})
Then('A warning message is diplayed to fill in I WANT', () => {
  cy.get('.cdk-overlay-backdrop').should('be.not.visible')
  cy.get('.cdk-overlay-backdrop').should('not.contain', newAsa)
  cy.get('.cdk-overlay-backdrop').should('not.contain', newIwant)
  cy.get('.cdk-overlay-backdrop').should('not.contain', newSothat)
  cy.get('#mat-dialog-0').should('be.visible')
 
})

//4th scenario Add a new US to the PB
When('I fill in the AS A "student"', () => {
  cy.get('#mat-dialog-0')
  cy.get('#mat-input-0').type(`${newAsa}`)
  .should('have.value', 'student')
})
And('I fill in the I WANT "to consult my marks"', () => {
  cy.get('#mat-dialog-0')
  cy.get('#mat-input-1').type(`${newIwant}`)
})
Then ('I click on the Save button', () => {
  cy.get('[mat-dialog-action=""] > .mat-primary').click()
})
And ('A warning message is diplayed to fill in So That', () => {
  cy.get('.cdk-overlay-backdrop').should('be.not.visible')
  cy.get('.cdk-overlay-backdrop').should('not.contain', newAsa)
  cy.get('.cdk-overlay-backdrop').should('not.contain', newIwant)
  cy.get('.cdk-overlay-backdrop').should('not.contain', newSothat)
  cy.get('#mat-dialog-0').should('be.visible')
})

//5th scenario Add a new US to the PB
When('I fill in the SO THAT "can access to my account"', () => {
  cy.get('#mat-dialog-0')
  cy.get('.mat-form-field.ng-tns-c52-3 > .mat-form-field-wrapper > .mat-form-field-flex')
  cy.get('#mat-input-2').type(`${newSothat}`)
  .should('have.value', 'can access to my account')

})
Then ('I click on the Save button', () => {
  cy.get('[mat-dialog-action=""] > .mat-primary').click()
})
And ('A warning message is diplayed to fill in AS A and I WANT', () => {
  cy.get('.cdk-overlay-backdrop').should('be.not.visible')
  cy.get('.cdk-overlay-backdrop').should('not.contain', newAsa)
  cy.get('.cdk-overlay-backdrop').should('not.contain', newIwant)
  cy.get('.cdk-overlay-backdrop').should('not.contain', newSothat)
  cy.get('#mat-dialog-0').should('be.visible')
})

//6th scenario Add a new US to the PB
When('I fill in the SO THAT "can access to my account"', () => {
  cy.get('#mat-dialog-0')
  cy.get('.mat-form-field.ng-tns-c52-3 > .mat-form-field-wrapper > .mat-form-field-flex')
  cy.get('#mat-input-2').type(`${newSothat}`)
  .should('have.value', 'can access to my account')

})
Then ('I click on the Save button', () => {
  cy.get('[mat-dialog-action=""] > .mat-primary').click()
})
And ('A warning message is diplayed to fill in AS A and SO THAT', () => {
  cy.get('.cdk-overlay-backdrop').should('be.not.visible')
  cy.get('.cdk-overlay-backdrop').should('not.contain', newAsa)
  cy.get('.cdk-overlay-backdrop').should('not.contain', newIwant)
  cy.get('.cdk-overlay-backdrop').should('not.contain', newSothat)
  cy.get('#mat-dialog-0').should('be.visible')
})

//7th scenario Add a new US to the PB
When('I fill in the AS A "student"', () => {
  cy.get('#mat-dialog-0')
  cy.get('#mat-input-0').type(`${newAsa}`)
  .should('have.value', 'student')
})
Then ('I click on the Save button', () => {
  cy.get('[mat-dialog-action=""] > .mat-primary').click()
})
And ('A warning message is diplayed to fill in I WANT and SO THAT', () => {
  cy.get('.cdk-overlay-backdrop').should('be.not.visible')
  cy.get('.cdk-overlay-backdrop').should('not.contain', newAsa)
  cy.get('.cdk-overlay-backdrop').should('not.contain', newIwant)
  cy.get('.cdk-overlay-backdrop').should('not.contain', newSothat)
  cy.get('#mat-dialog-0').should('be.visible')
})

//8th scenario Add a new US to the PB
When('I fill in the AS A "student"', () => {
  cy.get('#mat-dialog-0')
  cy.get('#mat-input-0').type(`${newAsa}`)
  .should('have.value', 'student')
})
Then ('I click on the Save button', () => {
  cy.get('[mat-dialog-action=""] > .mat-primary').click()
})
And ('A warning message is diplayed to fill in AS A and I WANT and SO THAT', () => {
  cy.get('.cdk-overlay-backdrop').should('be.not.visible')
  cy.get('.cdk-overlay-backdrop').should('not.contain', newAsa)
  cy.get('.cdk-overlay-backdrop').should('not.contain', newIwant)
  cy.get('.cdk-overlay-backdrop').should('not.contain', newSothat)
  cy.get('#mat-dialog-0').should('be.visible')
})

