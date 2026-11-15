# Software Quality Portfolio

[![Cypress Tests](https://github.com/Nosferatu0-alt/software-quality-portfolio/actions/workflows/cypress.yml/badge.svg)](https://github.com/Nosferatu0-alt/software-quality-portfolio/actions/workflows/cypress.yml)

Portfólio de **Qualidade de Software (QA)** de Lucia Maria Reis Braga. Aqui eu pratico o raciocínio de teste de ponta a ponta: planejar, priorizar por risco, documentar, automatizar e reportar defeitos.

Estou sempre aberta a **sugestões, críticas e novos desafios**. Abra uma *issue* ou *pull request*.

---

## Sistema sob teste
[SauceDemo](https://www.saucedemo.com), um e-commerce de demonstração criado para prática de QA.

## Mapa do repositório
| Pasta | O que mostra |
|---|---|
| [`docs/test-strategy.md`](docs/test-strategy.md) | Escopo, abordagem, critérios de entrada/saída |
| [`docs/test-plan.md`](docs/test-plan.md) | Módulos, cobertura, métricas |
| [`docs/risk-matrix.md`](docs/risk-matrix.md) | Priorização por impacto × probabilidade |
| [`docs/traceability-matrix.md`](docs/traceability-matrix.md) | Requisito ↔ caso de teste ↔ automação |
| [`docs/test-cases/`](docs/test-cases/) | Casos com pré-condição, passos e resultado esperado |
| [`docs/bug-reports/`](docs/bug-reports/) | Defeitos reproduzíveis, com severidade e evidência |
| [`docs/exploratory/`](docs/exploratory/) | Charters e notas de sessões exploratórias |
| [`cypress-saucedemo/`](cypress-saucedemo/) | Automação E2E com Cypress |

## Automação — `cypress-saucedemo/`
- Cypress 15, Node.js/npm
- Padrão **AAA** (Arrange, Act, Assert), comandos customizados (`cy.login()`), *fixtures* e testes *data-driven*
- Integração contínua com GitHub Actions

**Áreas cobertas:** login, produtos, carrinho, checkout e usuários especiais.

### Como rodar
```bash
cd cypress-saucedemo
npm install
npx cypress open   # interativo
npx cypress run    # headless
```

## Bugs identificados
| ID | Resumo | Severidade |
|---|---|---|
| [BUG-001](docs/bug-reports/BUG-001-problem-user-detalhe-produto-errado.md) | `problem_user` abre detalhe de produto errado | Alta |

O teste que comprova o bug **falha de propósito** enquanto o defeito existir no site.

## Roadmap
- [x] Cypress E2E com comandos customizados, fixtures e data-driven
- [x] CI com GitHub Actions
- [x] Estratégia, plano, matriz de riscos e rastreabilidade
- [x] Casos de teste e template de bug report
- [ ] Completar cobertura (checkout e usuários especiais)
- [ ] Testes de API (Postman + pytest/requests)
- [ ] Selenium + Page Object Model
- [ ] SQL: checagens de integridade e análise de performance
- [ ] BDD com Gherkin
- [ ] Plano de teste mobile (conexão instável em pagamento)
- [ ] Experimento de IA aplicada a testes
