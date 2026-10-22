
describe('login', () => {

  beforeEach(() => {
    // Arrange: comum a todos os testes
    cy.visit('/')
  })

  it('realizar login com sucesso', () => {
    // Act
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    // Assert
    cy.url().should('include', '/inventory.html')
  })

  it('realizar login com a senha errada',() => {
    // Act
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('senha_errada')
    cy.get('[data-test="login-button"]').click()
    //assert
    cy.get('[data-test="error"]').should(
        'contain.text',
        'Epic sadface: Username and password do not match any user in this service'
    )
  })

  it('realizar login com credenciais inválidas', () => {
    // Act
    cy.get('[data-test="username"]').type('user.invalid')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    // Assert
    cy.get('[data-test="error"]').should(
      'contain.text',
      'Epic sadface: Username and password do not match any user in this service'
    )
  })
  it('realizar login sem senha',() =>{
    //act
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]')
    cy.get('[data-test="login-button"]').click()
    // assert
    cy.get('[data-test="error"]').should(
        'contain.text',
        'Epic sadface: Password is required'
    )
  })

  it('realizar login com usuário bloqueado', () => {
    // Act
    cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    // Assert
    cy.get('[data-test="error"]').should(
      'contain.text',
      'Epic sadface: Sorry, this user has been locked out.'
    )
  })
  it('realizar login com o campo usuário vazio', ()=>{
    //act
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    //assert
    cy.get('[data-test="error"]').should(
        'contain.text',
        'Epic sadface: Username is required'
    )
  })
  it('realizar login com campos vazios', () => {
  // Act
  cy.get('[data-test="login-button"]').click()

  // Assert
  cy.get('[data-test="error"]').should(
    'contain.text',
    'Epic sadface: Username is required'
  )
})
})
