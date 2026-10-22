
describe('Checkout', () => {
  let usuarios;

  beforeEach(() => {
    cy.fixture('usuarios').then((dados) => {
      usuarios = dados;
    });

    // Login e adição do primeiro produto
    cy.visit('/');

    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="checkout"]').click();

    cy.url().should('include', '/checkout-step-one.html');
  });

  // Preenche os dados do comprador usando a fixture
  const preencherCheckout = () => {
    cy.get('[data-test="firstName"]').type(usuarios.checkout.firstName);
    cy.get('[data-test="lastName"]').type(usuarios.checkout.lastName);
    cy.get('[data-test="postalCode"]').type(usuarios.checkout.postalCode);
  };

  // 1. Fluxo completo de compra
  it('deve concluir uma compra com sucesso', () => {
    preencherCheckout();

    cy.get('[data-test="continue"]').click();

    cy.url().should('include', '/checkout-step-two.html');
    cy.get('.cart_item').should('have.length', 1);
    cy.contains('Sauce Labs Backpack').should('be.visible');

    cy.get('[data-test="finish"]').click();

    cy.url().should('include', '/checkout-complete.html');

    cy.get('.complete-header')
      .should('be.visible')
      .and('have.text', 'Thank you for your order!');
  });

  // 2. Validar formulário sem First Name
  it('deve exibir erro quando o primeiro nome não for preenchido', () => {
    cy.get('[data-test="lastName"]').type(usuarios.checkout.lastName);
    cy.get('[data-test="postalCode"]').type(usuarios.checkout.postalCode);

    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'First Name is required');
  });

  // 3. Validar formulário sem Last Name
  it('deve exibir erro quando o sobrenome não for preenchido', () => {
    cy.get('[data-test="firstName"]').type(usuarios.checkout.firstName);
    cy.get('[data-test="postalCode"]').type(usuarios.checkout.postalCode);

    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Last Name is required');
  });

  // 4. Validar formulário sem CEP
  it('deve exibir erro quando o CEP não for preenchido', () => {
    cy.get('[data-test="firstName"]').type(usuarios.checkout.firstName);
    cy.get('[data-test="lastName"]').type(usuarios.checkout.lastName);

    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Postal Code is required');
  });

  // 5. Cancelar e voltar ao carrinho
  it('deve voltar ao carrinho ao cancelar o checkout', () => {
    cy.get('[data-test="cancel"]').click();

    cy.url().should('include', '/cart.html');

    cy.get('.cart_item')
      .should('have.length', 1)
      .and('contain.text', 'Sauce Labs Backpack');
  });

  // 6. Validar subtotal, imposto e total
  it('deve calcular corretamente o total com imposto', () => {
    // Voltar ao carrinho e à página de produtos
    cy.get('[data-test="cancel"]').click();
    cy.get('[data-test="continue-shopping"]').click();

    // Adicionar o segundo produto
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="shopping-cart-link"]').click();

    cy.get('.cart_item').should('have.length', 2);

    // Ir para o checkout
    cy.get('[data-test="checkout"]').click();
    preencherCheckout();

    cy.get('[data-test="continue"]').click();

    cy.url().should('include', '/checkout-step-two.html');

    // Extrair valores monetários
    const extrairValor = (texto) => {
      const resultado = texto.match(/\$([\d.]+)/);

      expect(resultado, `Valor monetário em: ${texto}`).to.not.be.null;

      return Number(resultado[1]);
    };

    // Somar os preços dos produtos
    cy.get('.cart_item .inventory_item_price').then(($precos) => {
      const somaItens = [...$precos]
        .map((item) => extrairValor(item.innerText))
        .reduce((total, preco) => total + preco, 0);

      // Validar subtotal
      cy.get('[data-test="subtotal-label"]').should(($subtotal) => {
        const valorSubtotal = extrairValor($subtotal.text());

        expect(valorSubtotal).to.be.closeTo(somaItens, 0.01);
      });

      // Validar total = subtotal + imposto
      cy.get('[data-test="tax-label"]').invoke('text').then((textoTaxa) => {
        const taxa = extrairValor(textoTaxa);

        cy.get('[data-test="total-label"]').should(($total) => {
          const valorTotal = extrairValor($total.text());

          expect(valorTotal).to.be.closeTo(somaItens + taxa, 0.01);
        });
      });
    });
  });
});
