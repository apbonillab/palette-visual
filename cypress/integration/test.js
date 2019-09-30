describe('palette', () => {

  context('Generate palette', () => {
    beforeEach(function () {
      cy.visit('https://apbonillab.github.io/palette/palette.html')
    })

    it('generar paleta de colores', () => {
      cy.contains('Paleta de colores')
      cy.contains('Generar nueva paleta').click()
      cy.screenshot('paleta1')
      cy.contains('Generar nueva paleta').click()
      cy.screenshot('paleta2')
    })

  })

})
