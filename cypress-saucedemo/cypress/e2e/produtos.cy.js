describe('Produtos', () => {

  beforeEach(() => {
    // Arrange: acessar o site e realizar login
    cy.visit('/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    // Confirmar que entrou na página de produtos
    cy.url().should('include', '/inventory.html')
  })

  // 1. Verificar a quantidade de produtos
  it('deve exibir 6 produtos na lista', () => {
    cy.get('.inventory_item').should('have.length', 6)
  })

  // 2. Ordenação A-Z
  it('deve ordenar os produtos de A a Z', () => {
    cy.get('[data-test="product-sort-container"]').select('az')

    cy.get('.inventory_item_name').then(($items) => {
      const nomes = [...$items].map((item) => item.innerText.trim())
      const ordenados = [...nomes].sort((a, b) => a.localeCompare(b))

      expect(nomes).to.deep.equal(ordenados)
    })
  })

  // 3. Ordenação Z-A
  it('deve ordenar os produtos de Z a A', () => {
    cy.get('[data-test="product-sort-container"]').select('za')

    cy.get('.inventory_item_name').then(($items) => {
      const nomes = [...$items].map((item) => item.innerText.trim())
      const ordenados = [...nomes].sort((a, b) => b.localeCompare(a))

      expect(nomes).to.deep.equal(ordenados)
    })
  })

  // 4. Ordenação por preço: menor para maior
  it('deve ordenar os produtos por preço crescente', () => {
    cy.get('[data-test="product-sort-container"]').select('lohi')

    cy.get('.inventory_item_price').then(($items) => {
      const precos = [...$items].map((item) =>
        Number(item.innerText.replace('$', '').trim())
      )
      const ordenados = [...precos].sort((a, b) => a - b)

      expect(precos).to.deep.equal(ordenados)
    })
  })

  // 5. Ordenação por preço: maior para menor
  it('deve ordenar os produtos por preço decrescente', () => {
    cy.get('[data-test="product-sort-container"]').select('hilo')

    cy.get('.inventory_item_price').then(($items) => {
      const precos = [...$items].map((item) =>
        Number(item.innerText.replace('$', '').trim())
      )
      const ordenados = [...precos].sort((a, b) => b - a)

      expect(precos).to.deep.equal(ordenados)
    })
  })

  // 6. Abrir os detalhes de um produto
  it('deve exibir nome, preço e descrição do produto', () => {
    cy.get('.inventory_item').first().within(() => {
      cy.get('.inventory_item_name').invoke('text').then((t) => cy.wrap(t.trim()).as('nome'))
      cy.get('.inventory_item_price').invoke('text').then((t) => cy.wrap(t.trim()).as('preco'))
      cy.get('.inventory_item_desc').invoke('text').then((t) => cy.wrap(t.trim()).as('descricao'))
    })

    cy.get('.inventory_item_name').first().click()

    cy.get('@nome').then((nome) => {
      cy.get('.inventory_details_name').should('have.text', nome)
    })

    cy.get('@preco').then((preco) => {
      cy.get('.inventory_details_price').should('have.text', preco)
    })

    cy.get('@descricao').then((descricao) => {
      cy.get('.inventory_details_desc').should('have.text', descricao)
    })
  })

  // 7. Voltar para a lista de produtos
  it('deve voltar para a lista de produtos', () => {
    cy.get('.inventory_item_name').first().click()

    cy.get('[data-test="back-to-products"]').click()

    cy.url().should('include', '/inventory.html')

    cy.get('.inventory_item').should('have.length', 6)
  })

})