
describe('Layout responsivo', () => {
  const telas = ['iphone-x', 'ipad-2', 'macbook-15'];

  beforeEach(() => {
    // Simula sucesso na chamada de telemetria
    cy.intercept('POST', 'https://events.backtrace.io/**', {
      statusCode: 200,
      body: {},
    });

    // Login antes de cada teste
    cy.fixture('usuarios').then((usuarios) => {
      cy.viewport(telas[0]);

      cy.visit('/');

      cy.get('[data-test="username"]')
        .type(usuarios.valido.username);

      cy.get('[data-test="password"]')
        .type(usuarios.valido.password);

      cy.get('[data-test="login-button"]').click();

      cy.url().should('include', '/inventory.html');
    });
  });

  it('deve exibir os 6 produtos no iPhone X', () => {
    cy.viewport('iphone-x');

    cy.get('.inventory_item').should('have.length', 6);
  });

  it('deve abrir o menu lateral no iPhone X', () => {
    cy.viewport('iphone-x');

    cy.get('#react-burger-menu-btn').click();

    cy.get('[data-test="logout-sidebar-link"]')
      .should('be.visible');
  });

  telas.forEach((tela) => {
    it(`deve mostrar os 6 produtos em ${tela}`, () => {
      cy.viewport(tela);

      cy.get('.inventory_item').should('have.length', 6);
    });
  });
});
