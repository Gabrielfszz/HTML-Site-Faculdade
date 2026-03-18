describe('Teste da pagina de cursossite faculdade', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/cursos.html')
    })

    it('Validar Ordenação dos Cursos', () => {
        cy.get('th').contains('Cursos').click()
        cy.get('th').contains('Cursos').click()
        cy.get('th').contains('Cursos').click()
        cy.get('table tbody tr:first-child td:first-child')
            .should('contain', 'Administração')
    })
    
    it('Validar filtro dos Cursos', () => {
        cy.get('input[type=search]').type('Ciencias da Computação')
        cy.get('table tbody tr').should('have.length', 1)
    })

    it('Validar filtro por semestre', () => {
    cy.get('input[type=search]').type('10 semestres')
    cy.get('table tbody tr').should('have.length', 2)
    })
  })