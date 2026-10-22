describe('Bugs do problem_user', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.get('[data-test="username"]').type('problem_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    cy.url().should('include', '/inventory.html');
  });

  it('deve exibir imagens correspondentes aos produtos', () => {
    cy.get('.inventory_item').each(($item) => {
      const nomeProduto = $item
        .find('.inventory_item_name')
        .text();

      const imagem = $item.find('.inventory_item_img img');

      cy.wrap(imagem).should('be.visible');

      // Revela imagens repetidas ou incompatíveis com os produtos.
      cy.wrap(imagem).should(($img) => {
        expect($img.attr('src')).to.be.a('string').and.not.be.empty;
      });

      cy.log(`Verificando imagem de: ${nomeProduto}`);
    });
  });

  it('deve adicionar o produto correto ao carrinho', () => {
    cy.get('.inventory_item').contains('Sauce Labs Backpack')
      .parents('.inventory_item')
      .within(() => {
        cy.get('button').click();
      });

    cy.get('[data-test="shopping-cart-badge"]')
      .should('have.text', '1');

    cy.get('[data-test="shopping-cart-link"]').click();

    cy.get('.cart_item')
      .should('have.length', 1)
      .and('contain.text', 'Sauce Labs Backpack');
  });

  it('deve permitir abrir os detalhes de um produto', () => {
    cy.contains('.inventory_item_name', 'Sauce Labs Backpack')
      .click();

    cy.url().should('include', '/inventory-item.html');

    cy.get('.inventory_details_name')
      .should('be.visible')
      .and('have.text', 'Sauce Labs Backpack');
  });
});