# Plano de Testes — SauceDemo

| Campo | Valor |
|---|---|
| Responsável | Lucia Maria Reis Braga |
| Versão do plano | 1.0 |
| Ambiente | Chrome (última versão), site em produção do SauceDemo |
| Estratégia | `test-strategy.md` |

## Módulos e cobertura planejada
| Módulo | Casos | Prioridade | Automação |
|---|---|---|---|
| Login | TC-LOG-001 a 007 | Alta | Cypress (data-driven) |
| Produtos | TC-PRD-001 a 005 | Média | Cypress |
| Carrinho | TC-CAR-001 a 004 | Alta | Cypress |
| Checkout | TC-CHK-001 a 007 | Alta | Cypress |
| Usuários especiais | TC-USR-001 a 003 | Média | Cypress |

## Cronograma sugerido
| Semana | Entrega |
|---|---|
| 1 | Casos de teste revisados + execução manual |
| 2 | Automação dos casos de prioridade Alta |
| 3 | Sessões exploratórias + bug reports |
| 4 | Relatório final e métricas |

## Métricas a acompanhar
- Casos planejados vs. executados
- % automatizado
- Defeitos por módulo e severidade
- Taxa de testes instáveis (flaky) na CI

## Entregáveis
Casos de teste, matriz de rastreabilidade, bug reports, relatório de execução.
