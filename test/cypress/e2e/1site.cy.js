describe('Teste da pagina inicial site faculdade', () => {
  it ('Acessar a pagina inicial', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
    cy.contains('Faculdade Tech')
  })

  it ('Acessar a pagina cursos', () => {
    cy.visit('http://127.0.0.1:5500/cursos.html')
    cy.get('nav a').contains('Cursos').click()
    cy.url().should('include', 'cursos.html')
  })
})


