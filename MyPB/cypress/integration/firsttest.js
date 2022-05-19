describe('My First passing Test', () => {
    it('launch homepage', () => {
        cy.visit('http://localhost:4200/')
        expect(true).to.equal(true)
    })
  })
  describe('My sesond passing test', () => {
    it('display User Story Form', () => {
        cy.visit('http://localhost:4200/')
        cy.get('.mat-raised-button > .mat-button-wrapper').click()
    })
    it('fill in the User Story Form', () => {
        cy.visit('http://localhost:4200/')
        cy.get('.mat-raised-button > .mat-button-wrapper').click()
        cy.get('#mat-dialog-1').within(($) => {
            // you have access to the found form via
            // the jQuery object $form if you need it
          
            // cy.get() will only search for elements within form,
            // not within the entire document
            cy.get('input[name=".mat-form-field.ng-tns-c52-5 > .mat-form-field-wrapper > .mat-form-field-flex"]').type('john.doe@email.com')
            //cy.get('input[name="password"]').type('password')
            //cy.root().submit()
          })
    })

  })
  describe('My third failing test', () => {
    it('save the US form', () => {
        cy.visit('http://localhost:4200/')
        cy.get('.mat-raised-button > .mat-button-wrapper').click()
        cy.get('#mat-dialog-0')
        cy.get('.mat-primary > .mat-button-wrapper').click()
    })
  })
  describe('My fourth passing test', () => {
    it('close the US form', () => {
        cy.visit('http://localhost:4200/')
        cy.get('.mat-raised-button > .mat-button-wrapper').click()
        cy.get('#mat-dialog-0')
        cy.get('[mat-dialog-action=""] > .mat-warn').click()
    })
  })