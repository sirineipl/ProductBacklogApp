const newAsa = 'student'
const newIwant = 'to consult my marks'
const newSothat = 'can access to my account'
describe('MyPB Homepage test', () => {
    it('launch homepage', () => {
        cy.visit('http://localhost:4200/')
        expect(true).to.equal(true)
    })
  })
  describe('Adding US form test', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('http://localhost:4200/')
    })
    it('display User Story Form', () => {
        cy.get('.mat-raised-button > .mat-button-wrapper')
        .should('have.text','Add User Story')
        .click()
    })
    it('fill in the User Story Form', () => {
        cy.get('.mat-raised-button > .mat-button-wrapper').click()
        //verify the existance of h1 text
        cy.get('h1').should('have.text','Add User Story Form')
        //verify that the form contains the text area to add a US length and text
        cy.get('mat-form-field').should('have.length','3')
        cy.get('mat-label').should('have.text','AS A I WANT SO THAT')
        //// verify exixtance of buttons
        cy.get('[mat-dialog-action=""] > .mat-warn').should('exist')
        cy.get('[mat-dialog-action=""] > .mat-primary').should('exist')
            //cy.get('mat-form-field').within(($) => {
            // you have access to the found form via
            // the jQuery object $form if you need it
            //const newAsA = 'Feed the cat'
            // cy.get() will only search for elements within form,
            // not within the entire document
            //cy.get('')
            //cy.get('input[name=AsA]').type(`${newAsA}`)
            //cy.get('input[name="As A"]').type('password')
            //cy.root().submit()
            cy.get('#mat-dialog-0')
            cy.get('#mat-input-0').type(`${newAsa}`)
            .should('have.value', 'student')
            cy.get('#mat-input-1').type(`${newIwant}`)
            .should('have.value', 'to consult my marks')
            cy.get('#mat-input-2').type(`${newSothat}`)
            .should('have.value', 'can access to my account')
          })
          it('save the US form', () => {
            cy.get('.mat-raised-button > .mat-button-wrapper').click()
            cy.get('[mat-dialog-action=""] > .mat-primary')
            .should('include.text','Save')
            .click()
        })
          it('close the US form', () => {
            cy.get('.mat-raised-button > .mat-button-wrapper').click()
            cy.get('#mat-dialog-0')
            cy.get('[mat-dialog-action=""] > .mat-warn')
            .should('include.text','Close')
            .click()
        })
    })

  

  