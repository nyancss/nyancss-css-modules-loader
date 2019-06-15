describe('React', () => {
  it('works', () => {
    cy.visit('/react.html')
    cy.get('h1')
      .should('have.css', 'font-size')
      .and('equal', '48px')
    cy.get('p')
      .should('have.css', 'font-style')
      .and('equal', 'italic')
  })
})
