
describe('Carrinho', () => {

  beforeEach(() => {
    // Arrange: acessar o site e realizar login
    cy.visit('/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.url().should('include', '/inventory.html')
  })

  // 1. Adicionar vários itens e conferir o badge
  it('deve atualizar o badge ao adicionar vários itens', () => {
    // Act
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()

    // Assert
    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('have.text', '3')
  })

  // 2. Remover item pela tela de produtos
  it('deve remover item da tela de produtos e esconder o badge', () => {
    // Act
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    cy.get('.shopping_cart_badge').should('have.text', '1')

    cy.get('[data-test="remove-sauce-labs-backpack"]').click()

    // Assert
    cy.get('.shopping_cart_badge').should('not.exist')
  })

  // 3. Remover item dentro do carrinho
  it('deve remover item dentro do carrinho', () => {
    // Act
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

    cy.get('[data-test="shopping-cart-link"]').click()

    cy.get('[data-test="remove-sauce-labs-backpack"]').click()

    // Assert
    cy.get('.cart_item').should('have.length', 1)
    cy.get('.cart_item').should('contain.text', 'Sauce Labs Bike Light')
    cy.get('.shopping_cart_badge').should('have.text', '1')
  })

  // 4. Carrinho vazio: sem badge e sem itens
  it('deve exibir carrinho vazio sem badge e sem itens', () => {
    // Act
    cy.get('[data-test="shopping-cart-link"]').click()

    // Assert
    cy.get('.cart_item').should('not.exist')
    cy.get('.shopping_cart_badge').should('not.exist')
  })

  // 5. Botão Continue Shopping
  it('deve voltar aos produtos pelo botão Continue Shopping', () => {
    // Arrange
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()

    // Act
    cy.get('[data-test="continue-shopping"]').click()

    // Assert
    cy.url().should('include', '/inventory.html')
    cy.get('.inventory_item').should('have.length', 6)
    cy.get('.shopping_cart_badge').should('have.text', '1')
  })

  // 6. Carrinho persiste ao navegar entre páginas
  it('deve manter os itens no carrinho ao navegar entre páginas', () => {
    // Act: adicionar produto
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    // Navegar para o carrinho
    cy.get('[data-test="shopping-cart-link"]').click()

    cy.get('.cart_item')
      .should('have.length', 1)
      .and('contain.text', 'Sauce Labs Backpack')

    // Voltar para os produtos
    cy.get('[data-test="continue-shopping"]').click()

    // Assert: badge e produto continuam no carrinho
    cy.get('.shopping_cart_badge').should('have.text', '1')

    cy.get('[data-test="shopping-cart-link"]').click()

    cy.get('.cart_item')
      .should('have.length', 1)
      .and('contain.text', 'Sauce Labs Backpack')
  })

})
