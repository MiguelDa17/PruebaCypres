describe('Prueba Técnica - PIN inválido', () => {
  it('Debe mostrar error si el PIN es incorrecto', () => {
    //Visitar URL
    cy.visit('https://www.selaski.com/public/reports/shared?token=cdexd34d7a31da5257e1d5f7af80e21ec5f0dfe94');
    cy.screenshot('01-url-abierta');

    //Ingreso del PIN válido
    cy.get('input').eq(0).type('1');
    cy.get('input').eq(1).type('2');
    cy.get('input').eq(2).type('3');
    cy.get('input').eq(3).type('4');

    //Clic en Ingresar
    cy.contains('Ingresar').click();


    //Esperar y validar mensaje de error
    cy.contains('Código incorrecto. Por favor ingresa el código correcto para tener acceso', { timeout: 10000 }).should('be.visible');

  });
});
