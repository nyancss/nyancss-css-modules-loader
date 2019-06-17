describe('With mini-css-extract-plugin', () => {
  it('works', () => {
    cy.visit('/extract.html')
    cy.get('h1')
      .should('have.css', 'font-size')
      .and('equal', '48px')
    cy.get('p')
      .should('have.css', 'font-style')
      .and('equal', 'italic')
  })
})
