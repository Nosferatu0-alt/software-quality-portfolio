# Software Quality Portfolio
![Cypress Tests](https://github.com/Nosferatu0-alt/software-quality-portfolio/actions/workflows/cypress.yml/badge.svg)

Este repositório reúne os meus estudos em **Qualidade de Software (QA)**. Aqui eu desenvolvo minhas habilidades, conheço novas ferramentas e pratico raciocínio de teste e formas de automação.

Estou sempre aberta a **sugestões, críticas e novos desafios**. Se você tem ideias de melhoria, outras ferramentas para eu experimentar ou cenários de teste que eu não cobri, fique à vontade para abrir uma *issue* ou um *pull request*.

---

## Projetos

### `cypress-saucedemo/` — Testes E2E com Cypress

Automação de testes end-to-end sobre o site de demonstração [Sauce Demo](https://www.saucedemo.com/), criado para prática de QA.

**Ferramentas utilizadas até agora**

- [Cypress](https://www.cypress.io/) 15
- Node.js / npm
- Site de estudo: https://www.saucedemo.com/

**Áreas cobertas**

- Login (sucesso, credenciais inválidas e demais cenários de autenticação)
- Produtos
- Carrinho
- Checkout
- Usuários especiais (`problem_user`, entre outros)

Os testes seguem o padrão **AAA** (*Arrange, Act, Assert*), com `describe` / `it` organizando cada área e cada comportamento.

---

## Como rodar

Pré-requisito: Node.js instalado.

```bash
cd cypress-saucedemo
npm install
npx cypress open    # modo interativo
npx cypress run     # modo headless
```

---

## Bugs identificados

Um dos objetivos do projeto é praticar o olhar de QA, ou seja, **encontrar comportamentos incorretos** e registrá-los em testes. Alguns testes falham de propósito enquanto o bug existir no site.

### `problem_user` abre os detalhes do produto errado

Ao clicar em um produto na listagem, a página de detalhes exibe **outro produto**.

- **Exemplo:** ao clicar em "Sauce Labs Backpack", a página mostra "Sauce Labs Fleece Jacket".
- **Resultado esperado:** abrir os detalhes do produto que foi clicado.
- **Resultado atual:** abre os detalhes de um produto diferente.

O teste abaixo documenta o problema e **deve falhar enquanto esse comportamento persistir**:

```js
it('deve permitir abrir os detalhes do produto correto', () => {
  cy.contains('.inventory_item_name', 'Sauce Labs Backpack')
    .click();

  cy.url().should('include', '/inventory-item.html');

  cy.get('.inventory_details_name')
    .should('be.visible')
    .and('have.text', 'Sauce Labs Backpack');
});
```

> A falha desse teste é **esperada**: ela comprova que o bug existe.

---

## Próximos passos

- [ ] Completar a cobertura de testes (produtos, checkout e usuários especiais)
- [x] Comandos customizados (`cy.login()`) e *fixtures*
- [X] Testes *data-driven*
- [X] Integração contínua com GitHub Actions
- [ ] Testes de API
- [ ] Experimentar outras ferramentas de automação (Playwright, Selenium, entre outras)
- [ ] Documentar casos de teste e relatórios de bug

---

## Contribuições

Sugestões são muito bem-vindas! Abra uma *issue* com a sua ideia ou envie um *pull request*. Vou adorar aprender com o seu feedback.
