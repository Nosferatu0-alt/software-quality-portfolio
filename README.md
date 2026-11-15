# Software Quality Portfolio

[![Cypress Tests](https://github.com/Nosferatu0-alt/software-quality-portfolio/actions/workflows/cypress.yml/badge.svg)](https://github.com/Nosferatu0-alt/software-quality-portfolio/actions/workflows/cypress.yml)
[![API Tests](https://github.com/Nosferatu0-alt/software-quality-portfolio/actions/workflows/api-tests.yml/badge.svg)](https://github.com/Nosferatu0-alt/software-quality-portfolio/actions/workflows/api-tests.yml)

Portfólio de **Qualidade de Software (QA)** de Lucia Maria Reis Braga, graduanda em Inteligência Artificial. Aqui pratico o raciocínio de teste de ponta a ponta: planejar, priorizar por risco, documentar, automatizar e reportar defeitos.

> Busco estágio em QA / Teste de Software. Sugestões e críticas são bem-vindas: abra uma *issue* ou *pull request*.

## O que este projeto demonstra
| Habilidade | Onde ver |
|---|---|
| Planejamento e priorização por risco | [`docs/test-strategy.md`](docs/test-strategy.md), [`docs/risk-matrix.md`](docs/risk-matrix.md) |
| Casos de teste e rastreabilidade | [`docs/test-cases/`](docs/test-cases/), [`docs/traceability-matrix.md`](docs/traceability-matrix.md) |
| Reporte de defeitos | [`docs/bug-reports/`](docs/bug-reports/) |
| Teste exploratório | [`docs/exploratory/`](docs/exploratory/) |
| Automação de UI (Cypress, data-driven, comandos customizados) | [`cypress-saucedemo/`](cypress-saucedemo/) |
| Testes de API (pytest, JSON Schema, dados em CSV, limpeza de dados) | [`api/pytest-requests/`](api/pytest-requests/) |
| CI/CD com GitHub Actions | [`.github/workflows/`](.github/workflows/) |
| Decisões técnicas justificadas | [`docs/decisions/`](docs/decisions/) |

## Arquitetura
```mermaid
graph LR
  subgraph Alvos
    SD[SauceDemo - UI]
    RB[Restful-Booker - API]
  end
  subgraph Testes
    CY[Cypress]
    PY[pytest + requests]
  end
  subgraph Docs
    D[Estrategia, riscos, casos, bugs, RTM]
  end
  CY --> SD
  PY --> RB
  D -.rastreia.-> CY
  D -.rastreia.-> PY
  GH[GitHub Actions] --> CY
  GH --> PY
```

## Como rodar
```bash
make install-ui && make test-ui     # Cypress (SauceDemo)
make install-api && make test-api   # pytest (Restful-Booker)
```
Sem `make`: veja o README de cada pasta.

**Notas de ambiente:** Node.js 18+ para o Cypress; Python 3.10+ para a API. Os alvos são sites públicos de demonstração de terceiros e podem mudar ou ficar fora do ar, e os testes de API usam credenciais públicas de demonstração.

## Stack
Cypress 15 · Node.js · Python · pytest · requests · jsonschema · GitHub Actions · Mermaid

## Bugs identificados
| ID | Resumo | Severidade |
|---|---|---|
| [BUG-001](docs/bug-reports/BUG-001-problem-user-detalhe-produto-errado.md) | `problem_user` abre detalhe de produto errado | Alta |

## Roadmap
- [x] Cypress E2E (comandos customizados, fixtures, data-driven) + CI
- [x] Estratégia, plano, riscos, rastreabilidade, casos e template de bug
- [x] Estrutura de testes de API (pytest) + CI
- [x] Executar a suíte de API, confirmar comportamentos e registrar bugs reais
- [ ] Coleção Postman + Newman na CI
- [ ] Selenium + pytest com Page Object Model (ADR-002)
- [ ] Relatórios publicados (Allure / GitHub Pages)
- [ ] SQL: integridade e análise de performance
- [ ] BDD com Gherkin
- [ ] Plano de teste mobile (conexão instável em pagamento)
- [ ] Experimento de IA aplicada a testes

## Referências de estudo
Ver [`docs/estudo-portfolios-referencia.md`](docs/estudo-portfolios-referencia.md).
