/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.wrap(new Map().entries().constructor).should('equal', Object)
  })
})
