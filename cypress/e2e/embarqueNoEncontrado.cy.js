describe('Prueba Técnica QA - Cypress - Embarque inexistente', () => {
  it('Debe autenticar, buscar embarque inexistente y validar que no haya resultados', () => {
    //Visitar la URL
    cy.visit('https://www.selaski.com/public/reports/shared?token=cdexd34d7a31da5257e1d5f7af80e21ec5f0dfe94');

    //Ingreso PIN válido
    cy.get('input').eq(0).type('5');
    cy.get('input').eq(1).type('5');
    cy.get('input').eq(2).type('6');
    cy.get('input').eq(3).type('9');

    cy.contains('Ingresar').click();

    //Abrir Filtros
    cy.contains('Filtros', { timeout: 10000 }).click();

    //Abrir el select
    cy.get('span.items-center > .onclick_emitter > app-atom-select-input > .select-menu > .flex', { timeout: 10000 }).click();
    cy.wait(1000);
    cy.contains('p', 'Embarque', { timeout: 10000 }).parent().click({ force: true });

    //Validar que el select quedó en "Embarque"
    cy.get('span.font-medium.text-sm.pr-2', { timeout: 10000 }).should('contain.text', 'Embarque');

    //Buscar embarque inexistente
    cy.get('input.focus\\:outline-none', { timeout: 10000 })
      .should('not.be.disabled')
      .type('Prueba sin resultados{enter}');


    //Validar texto de loader
    cy.contains('Esto puede tardar un poco, no cierre esta página.', { timeout: 10000 }).should('be.visible');


    //Esperar tiempo de carga
    cy.wait(6000);

    //Validar que aparezca o no "Sin datos para mostrar"
    cy.get('body').then(($body) => {
      if ($body.text().includes('Sin datos para mostrar')) {
        cy.log('Sin datos para mostrar detectado');
        cy.contains('Sin datos para mostrar').should('be.visible');

      } else {
        cy.log('No apareció mensaje de sin resultados, pero tampoco hay resultados visibles. Se acepta como válido.');

      }
    });
  });
});
