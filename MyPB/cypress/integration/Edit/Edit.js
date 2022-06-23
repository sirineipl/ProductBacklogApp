import { Given } from "cypress-cucumber-preprocessor/steps";
import { And } from "cypress-cucumber-preprocessor/steps"; 
import { When } from "cypress-cucumber-preprocessor/steps"; 
import { Then } from "cypress-cucumber-preprocessor/steps";  

const url = 'http://localhost:4200/'
const newAsa = 'student'
const newIwant = 'to see entire class average'
const newSothat = 'I can judge how difficult it was'

  

//first scenario Edit a the 3 elements of US  from the PB
Given('I access to the landing page', () => {
  cy.visit(url)
  })
When('I click on edit button of a US', () => {
  cy.get(':nth-child(1) > .cdk-column-action > .mat-primary > .mat-button-wrapper > .mat-icon').click()
})
Then ('I can see that the US in the form', () => {
  cy.get('#mat-dialog-0').should('be.visible')
  
})
And ('I modify the US  ', () => {
  cy.get('#mat-input-2').type(`${newAsa}`)
  cy.get('#mat-input-2').type(`${newIwant}`)
  cy.get('#mat-input-2').type(`${newSothat}`)
})
And ('I click on update button', () => {
  cy.get('[mat-dialog-action=""] > .mat-primary').click()
})
And ('I can see that the US was modified in the PB table', () => {
  cy.get('tbody > :nth-child(1) > .cdk-column-asA').should('include.text',newAsa)
  cy.get('tbody > :nth-child(1) > .cdk-column-iWant').should('include.text',newIwant)
  cy.get('tbody > :nth-child(1) > .cdk-column-soThat').should('include.text',newSothat)
})

//scenario 2 Edit a the AS A of US  from the PB
Given('I access to the landing page', () => {
  cy.visit(url)
  })
When('I click on edit button of a US', () => {
  cy.get(':nth-child(1) > .cdk-column-action > .mat-primary > .mat-button-wrapper > .mat-icon').click()
})
Then ('I can see that the US in the form', () => {
  cy.get('#mat-dialog-0').should('be.visible')
  
})
And ('I modify the AS A US', () => {
  cy.get('#mat-input-2').type(`${newAsa}`)
  cy.get('#mat-input-2').type(`${newIwant}`)
  cy.get('#mat-input-2').type(`${newSothat}`)
})
And ('I click on update button', () => {
  cy.get('[mat-dialog-action=""] > .mat-primary').click()
})
And ('I can see that the value of as a US was modified in the PB table', () => {
  cy.get('tbody > :nth-child(1) > .cdk-column-asA').should('include.text',newAsa)
})

//scenario 3 Edit a the I WANT of US  from the PB
Given('I access to the landing page', () => {
  cy.visit(url)
  })
When('I click on edit button of a US', () => {
  cy.get(':nth-child(1) > .cdk-column-action > .mat-primary > .mat-button-wrapper > .mat-icon').click()
})
Then ('I can see that the US in the form', () => {
  cy.get('#mat-dialog-0').should('be.visible')
  
})
And ('I modify the I WANT US', () => {
  cy.get('#mat-input-2').type(`${newIwant}`)
})
And ('I click on update button', () => {
  cy.get('[mat-dialog-action=""] > .mat-primary').click()
})
And ('I can see that the value OF I WANT was modified in the PB table', () => {
  cy.get('tbody > :nth-child(1) > .cdk-column-iWant').should('include.text',newIwant)
})

//senario 4 Edit SO THAT of US  from the PB
Given('I access to the landing page', () => {
  cy.visit(url)
  })
When('I click on edit button of a US', () => {
  cy.get(':nth-child(1) > .cdk-column-action > .mat-primary > .mat-button-wrapper > .mat-icon').click()
})
Then ('I can see that the US in the form', () => {
  cy.get('#mat-dialog-0').should('be.visible')
  
})
And ('I modify the SO THAT', () => {
  cy.get('#mat-input-2').type(`${newSothat}`)
})
And ('I click on update button', () => {
  cy.get('[mat-dialog-action=""] > .mat-primary').click()
})
And ('I can see that the value of SO THAT was modified in the PB table', () => {
  cy.get('tbody > :nth-child(1) > .cdk-column-soThat').should('include.text',newSothat)
})


//scenario 5 Edit AS A and I WANT of US from the PB
Given('I access to the landing page', () => {
  cy.visit(url)
  })
When('I click on edit button of a US', () => {
  cy.get(':nth-child(1) > .cdk-column-action > .mat-primary > .mat-button-wrapper > .mat-icon').click()
})
Then ('I can see that the US in the form', () => {
  cy.get('#mat-dialog-0').should('be.visible')
  
})
And ('I modify AS A and I WANT', () => {
  cy.get('#mat-input-2').type(`${newAsa}`)
  cy.get('#mat-input-2').type(`${newIwant}`)
})
And ('I click on update button', () => {
  cy.get('[mat-dialog-action=""] > .mat-primary').click()
})
And ('I can see that AS A and I WANT was modified in the PB table ', () => {
  cy.get('tbody > :nth-child(1) > .cdk-column-asA').should('include.text',newAsa)
  cy.get('tbody > :nth-child(1) > .cdk-column-iWant').should('include.text',newIwant)
})


//scenario 6 Edit AS A and SO THAT of US from the PB
Given('I access to the landing page', () => {
  cy.visit(url)
  })
When('I click on edit button of a US', () => {
  cy.get(':nth-child(1) > .cdk-column-action > .mat-primary > .mat-button-wrapper > .mat-icon').click()
})
Then ('I can see that the US in the form', () => {
  cy.get('#mat-dialog-0').should('be.visible')
  
})
And ('I modify AS A and SO THAT', () => {
  cy.get('#mat-input-2').type(`${newAsa}`)
  cy.get('#mat-input-2').type(`${newSothat}`)
})
And ('I click on update button', () => {
  cy.get('[mat-dialog-action=""] > .mat-primary').click()
})
And ('I can see that AS A and SO THAT was modified in the PB table', () => {
  cy.get('tbody > :nth-child(1) > .cdk-column-asA').should('include.text',newAsa)
  cy.get('tbody > :nth-child(1) > .cdk-column-soThat').should('include.text',newSothat)
})


//scenario 7 Edit I Want and SO THAT of US from the PB
Given('I access to the landing page', () => {
  cy.visit(url)
  })
When('I click on edit button of a US', () => {
  cy.get(':nth-child(1) > .cdk-column-action > .mat-primary > .mat-button-wrapper > .mat-icon').click()
})
Then ('I can see that the US in the form', () => {
  cy.get('#mat-dialog-0').should('be.visible')
  
})
And ('I modify I Want and SO THAT', () => {
  cy.get('#mat-input-2').type(`${newIwant}`)
  cy.get('#mat-input-2').type(`${newSothat}`)
})
And ('I click on update button', () => {
  cy.get('[mat-dialog-action=""] > .mat-primary').click()
})
And ('I can see that I Want and SO THAT was modified in the PB table', () => {
  cy.get('tbody > :nth-child(1) > .cdk-column-iWant').should('include.text',newIwant)
  cy.get('tbody > :nth-child(1) > .cdk-column-soThat').should('include.text',newSothat)
})


//scenario 8 Do not Edit the US from the PB
Given('I access to the landing page', () => {
  cy.visit(url)
  })
When('I click on edit button of a US', () => {
  cy.get(':nth-child(1) > .cdk-column-action > .mat-primary > .mat-button-wrapper > .mat-icon').click()
})
Then ('I can see that the US in the form', () => {
cy.get('#mat-dialog-0').should('be.visible')
  
})
And ('I do not edit the US', () => {
})
And ('I click on update button', () => {
  cy.get('[mat-dialog-action=""] > .mat-primary').click()
})
And ('I can see that the US was not modified in PB table', () => {
  cy.get('tbody > :nth-child(1) > .cdk-column-asA').should('include.text',cy.get('#mat-input-1'))
  cy.get('tbody > :nth-child(1) > .cdk-column-iWant').should('include.text',cy.get('#mat-input-2'))
  cy.get('tbody > :nth-child(1) > .cdk-column-soThat').should('include.text',cy.get('#mat-input-3'))
})