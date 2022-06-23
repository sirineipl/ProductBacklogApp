import { Given } from "cypress-cucumber-preprocessor/steps";
import { And } from "cypress-cucumber-preprocessor/steps"; 
import { When } from "cypress-cucumber-preprocessor/steps"; 
import { Then } from "cypress-cucumber-preprocessor/steps";  

const url = 'http://localhost:4200/'
const newAsa = 'student'
const newIwant = 'to consult my marks'
const newSothat = 'can access to my account'

  



// scenario Add a new US to the PB without As a1
Given('I access to the landing page', () => {
  cy.visit(url)
  })
And('I click on "Add User Story" button', () => {
  cy.get('.mat-raised-button').click()
  cy.get('#mat-dialog-0')
  })
And('I fill in the I WANT "to consult my marks"', () => {
  cy.get('#mat-dialog-0')
  //cy.get('.mat-form-field.ng-tns-c52-2 > .mat-form-field-wrapper > .mat-form-field-flex')
  cy.get('#mat-input-2').type(`${newIwant}`)
})
And('I fill in the SO THAT "can access to my account"', () => {
  
  cy.get('#mat-dialog-0')
  //cy.get('.mat-form-field.ng-tns-c52-3 > .mat-form-field-wrapper > .mat-form-field-flex')
  cy.get('#mat-input-3').type(`${newSothat}`)
})
When('I click on the Save button ', () => {
  cy.get('[mat-dialog-action=""] > .mat-primary').click()
})
Then('A warning message is diplayed to fill in the As A', () => {
  cy.get(':nth-child(3) > .cdk-column-asA').should('not.contain', newAsa)
  cy.get(':nth-child(3) > .cdk-column-iWant').should('not.contain', newIwant)
  cy.get(':nth-child(3) > .cdk-column-soThat').should('not.contain', newSothat)
})

// scenario 2 
Given('I access to the landing page', () => {
  cy.visit(url)
  })
And('I click on "Add User Story" button', () => {
  cy.get('.mat-raised-button').click()
  cy.get('#mat-dialog-0')
  })
And('I fill in the AS A "student"', () => {
  cy.get('#mat-dialog-0')
  cy.get('#mat-input-1').type(`${newAsa}`)
})
And('I fill in the SO THAT "can access to my account"', () => {
  //cy.get('.mat-form-field.ng-tns-c52-3 > .mat-form-field-wrapper > .mat-form-field-flex')
  cy.get('#mat-input-3').type(`${newSothat}`)

})
When('I click on the Save button ', () => {
  cy.get('[mat-dialog-action=""] > .mat-primary').click()

})
Then('An error message is diplayed', () => {
  cy.get(':nth-child(3) > .cdk-column-asA').should('not.contain', newAsa)
  cy.get(':nth-child(3) > .cdk-column-soThat').should('not.contain', newSothat)
 
})

//3th scenario 
Given('I access to the landing page', () => {
  cy.visit(url)
  })
And('I click on "Add User Story" button', () => {
  cy.get('.mat-raised-button').click()
  cy.get('#mat-dialog-0')
  })
And ('I fill in the AS A "student"', () => {
  cy.get('#mat-input-1').type(`${newAsa}`)
})
And('I fill in the I WANT "to consult my marks"', () => {
  cy.get('#mat-input-2').type(`${newIwant}`)
})
When ('I click on the Save button', () => {
  cy.get('[mat-dialog-action=""] > .mat-primary').click()
})
Then ('An error message is diplayed', () => {
  cy.get(':nth-child(3) > .cdk-column-asA').should('not.contain', newAsa)
  cy.get(':nth-child(3) > .cdk-column-iWant').should('not.contain', newIwant)
})

//4th scenario 
Given('I access to the landing page', () => {
  cy.visit(url)
  })
And('I click on "Add User Story" button', () => {
  cy.get('.mat-raised-button').click()
  cy.get('#mat-dialog-0')
  })
And('I fill in the SO THAT "can access to my account"', () => {
  
  //cy.get('.mat-form-field.ng-tns-c52-3 > .mat-form-field-wrapper > .mat-form-field-flex')
  cy.get('#mat-input-3').type(`${newSothat}`)

})
When ('I click on the Save button', () => {
  cy.get('[mat-dialog-action=""] > .mat-primary').click()
})
Then ('An error message is diplayed', () => {
  cy.get(':nth-child(3) > .cdk-column-soThat').should('not.contain', newSothat)
})

//5th scenario Add a new US to the PB
Given('I access to the landing page', () => {
  cy.visit(url)
  })
And('I click on "Add User Story" button', () => {
  cy.get('.mat-raised-button').click()
  cy.get('#mat-dialog-0')
  })
And('I fill in the I WANT "to consult my marks"', () => {
  
  //cy.get('.mat-form-field.ng-tns-c52-3 > .mat-form-field-wrapper > .mat-form-field-flex')
  cy.get('#mat-input-2').type(`${newIwant}`)

})
When ('I click on the Save button', () => {
  cy.get('[mat-dialog-action=""] > .mat-primary').click()
})
Then ('An error message is diplayed', () => {
  cy.get(':nth-child(3) > .cdk-column-iWant').should('not.contain', newIwant)
})

//6th scenario Add a new US to the PB
Given('I access to the landing page', () => {
  cy.visit(url)
  })
And('I click on "Add User Story" button', () => {
  cy.get('.mat-raised-button').click()
  cy.get('#mat-dialog-0')
  })
And ('I fill in AS A "student"', () => {
  cy.get('#mat-input-1').type(`${newAsa}`)
})
When ('I click on the Save button', () => {
  cy.get('[mat-dialog-action=""] > .mat-primary').click()
})
Then ('An error message is diplayed', () => {
  cy.get(':nth-child(3) > .cdk-column-asA').should('not.contain', newAsa)
})

//7th scenario Add a new US to the PB
Given('I access to the landing page', () => {
  cy.visit(url)
  })
And('I click on "Add User Story" button', () => {
  cy.get('.mat-raised-button').click()
  })
When('I click on the Save button', () => {
  cy.get('[mat-dialog-action=""] > .mat-primary').click()
})
Then ('An error message is diplayed', () => {
  cy.get(':nth-child(3) > .cdk-column-asA').should('not.contain', newAsa)
  cy.get(':nth-child(3) > .cdk-column-iWant').should('not.contain', newIwant)
  cy.get(':nth-child(3) > .cdk-column-soThat').should('not.contain', newSothat)
  
})

//8th scenario Add a new US to the PB
Given('I access to the landing page', () => {
  cy.visit(url)
  })
And('I click on "Add User Story" button', () => {
  cy.get('.mat-raised-button').click()
  })
And('I fill in the AS A student', () => {
  cy.get('#mat-dialog-0')
  cy.get('#mat-input-1').type(`${newAsa}`)
})
And('I fill in the I WANT to consult my marks', () => {
  cy.get('#mat-dialog-0')
  cy.get('#mat-input-2').type(`${newIwant}`)
})
And('I fill in the SO THAT can access to my account', () => {
  cy.get('#mat-dialog-0')
  cy.get('#mat-input-3').type(`${newSothat}`)
})
When ('I click on the Save button', () => {
  cy.get('[mat-dialog-action=""] > .mat-primary > .mat-button-wrapper').click()
})
Then ('I can see the new US was added to my PB list', () => {
  cy.get(':nth-child(4) > .cdk-column-asA').should('contain', newAsa)
  cy.get(':nth-child(4) > .cdk-column-iWant').should('contain', newIwant)
  cy.get(':nth-child(4) > .cdk-column-soThat').should('contain', newSothat)
})


