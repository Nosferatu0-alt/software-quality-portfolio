describe('Checkout', () => {

  beforeEach(() => {
    // Arrange: login e adição de produto ao carrinho
    cy.visit('/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()

    cy.get('[data-test="checkout"]').click()

    cy.url().should('include', '/checkout-step-one.html')
  })

  // 1. Fluxo completo de compra
  it('deve concluir uma compra com sucesso', () => {
    // Act: preencher os dados do comprador
    cy.get('[data-test="firstName"]').type('Lucia')
    cy.get('[data-test="lastName"]').type('Braga')
    cy.get('[data-test="postalCode"]').type('17500000')

    cy.get('[data-test="continue"]').click()

    // Conferir a tela de resumo
    cy.url().should('include', '/checkout-step-two.html')
    cy.get('.cart_item').should('have.length', 1)
    cy.contains('Sauce Labs Backpack').should('be.visible')

    // Finalizar compra
    cy.get('[data-test="finish"]').click()

    // Assert: confirmação do pedido
    cy.url().should('include', '/checkout-complete.html')
    cy.get('.complete-header')
      .should('be.visible')
      .and('have.text', 'Thank you for your order!')
  })

  // 2. Validar formulário sem First Name
  it('deve exibir erro quando o primeiro nome não for preenchido', () => {
    cy.get('[data-test="lastName"]').type('Braga')
    cy.get('[data-test="postalCode"]').type('17500000')

    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'First Name is required')
  })

  // 3. Validar formulário sem Last Name
  it('deve exibir erro quando o sobrenome não for preenchido', () => {
    cy.get('[data-test="firstName"]').type('Lucia')
    cy.get('[data-test="postalCode"]').type('17500000')

    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Last Name is required')
  })

  // 4. Validar formulário sem CEP
  it('deve exibir erro quando o CEP não for preenchido', () => {
    cy.get('[data-test="firstName"]').type('Lucia')
    cy.get('[data-test="lastName"]').type('Braga')

    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Postal Code is required')
  })

  // 5. Cancelar e voltar ao carrinho
  it('deve voltar ao carrinho ao cancelar o checkout', () => {
    cy.get('[data-test="cancel"]').click()

    cy.url().should('include', '/cart.html')
    cy.get('.cart_item')
      .should('have.length', 1)
      .and('contain.text', 'Sauce Labs Backpack')
  })

  // 6. Validar total do resumo da compra
  it('deve calcular corretamente o total com imposto', () => {
    // Voltar ao carrinho e adicionar o segundo produto
    cy.get('[data-test="cancel"]').click()
    cy.get('[data-test="continue-shopping"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('.cart_item').should('have.length', 2)

    // Checkout
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Lucia')
    cy.get('[data-test="lastName"]').type('Braga')
    cy.get('[data-test="postalCode"]').type('17500000')
    cy.get('[data-test="continue"]').click()

    const extrairValor = (texto) => Number(texto.match(/\$([\d.]+)/)[1])

    cy.get('.inventory_item_price').then(($precos) => {
      const somaItens = [...$precos]
        .map((el) => extrairValor(el.innerText))
        .reduce((total, preco) => total + preco, 0)

      cy.get('[data-test="subtotal-label"]').invoke('text').then((txt) => {
        expect(extrairValor(txt)).to.be.closeTo(somaItens, 0.01)
      })

      cy.get('[data-test="tax-label"]').invoke('text').then((txtTaxa) => {
        const taxa = extrairValor(txtTaxa)

        cy.get('[data-test="total-label"]').invoke('text').then((txtTotal) => {
          expect(extrairValor(txtTotal)).to.be.closeTo(somaItens + taxa, 0.01)
        })
      })
    })
  })

})