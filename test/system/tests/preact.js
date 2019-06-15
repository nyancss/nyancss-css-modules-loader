describe('Preact', () => {
  it('works', () => {
    cy.visit('/preact.html')
    cy.get('h1')
      .should('have.css', 'font-size')
      .and('equal', '48px')
    cy.get('p')
      .should('have.css', 'font-style')
      .and('equal', 'italic')
  })
})
